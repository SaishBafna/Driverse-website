/**
 * @jest-environment node
 */

import mongoose from "mongoose";
import { connectToDb } from "./connectToDb.js"; // adjust path if needed

// Mock environment variable
process.env.MONGO_URI = "mongodb://localhost:27017/testdb";

// Mocked connection state holder (same as your file logic)
jest.mock("./connectToDb.js", () => {
  const originalModule = jest.requireActual("./connectToDb.js");
  return {
    ...originalModule,
    __esModule: true,
    connectToDb: originalModule.connectToDb,
  };
});

describe("connectToDb function", () => {
  let consoleLogSpy;
  let consoleErrorSpy;

  beforeEach(() => {
    jest.clearAllMocks();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  test("should connect to MongoDB successfully", async () => {
    const mockConnect = jest
      .spyOn(mongoose, "connect")
      .mockResolvedValue({
        connections: [{ readyState: 1 }]
      });

    await connectToDb();

    expect(mockConnect).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith("Connected to the DataBase");
  });

  test("should skip connection if already connected", async () => {
    // Simulate already-connected state
    const mockConnect = jest.spyOn(mongoose, "connect");

    // Set internal state
    const connection = require("./connectToDb.js").connection;
    connection.isConnected = 1;

    await connectToDb();

    expect(mockConnect).not.toHaveBeenCalled(); // should not retry connection
    expect(consoleLogSpy).toHaveBeenCalledWith("Already connected to the DataBase");

    // Cleanup for other tests
    connection.isConnected = undefined;
  });

  test("should throw error if connection fails", async () => {
    jest.spyOn(mongoose, "connect").mockRejectedValue(new Error("Failed"));

    await expect(connectToDb()).rejects.toThrow("Unable to connect to the database");

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Unable to connect to the DB",
      "Failed"
    );
  });
});

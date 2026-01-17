import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import bcrypt from "bcrypt";
import User from "./User.js"; // adjust path if needed

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), { dbName: "test" });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await User.deleteMany({});
});

describe("User Model", () => {
  test("should save a user successfully", async () => {
    const user = await User.create({
      username: "john",
      email: "john@example.com",
      phone: "1234567890",
      serviceType: "Driver",
      password: "mypassword123",
    });

    expect(user._id).toBeDefined();
    expect(user.email).toBe("john@example.com");
  });

  test("should hash password before save", async () => {
    const rawPassword = "mypassword123";

    const user = await User.create({
      username: "john",
      email: "john@example.com",
      phone: "1234567890",
      serviceType: "Driver",
      password: rawPassword,
    });

    expect(user.password).not.toBe(rawPassword);
    expect(user.password.startsWith("$2b$")).toBe(true);

    const match = await bcrypt.compare(rawPassword, user.password);
    expect(match).toBe(true);
  });

  test("should not double-hash an already hashed password", async () => {
    const rawPassword = "mypassword123";
    const hashedPassword = await bcrypt.hash(rawPassword, 10);

    const user = await User.create({
      username: "john",
      email: "john@example.com",
      phone: "1234567890",
      serviceType: "Driver",
      password: hashedPassword,
    });

    expect(user.password).toBe(hashedPassword);
  });

  test("should enforce unique email and phone", async () => {
    await User.create({
      username: "john",
      email: "john@example.com",
      phone: "1234567890",
      serviceType: "Driver",
      password: "password",
    });

    await expect(
      User.create({
        username: "jane",
        email: "john@example.com",
        phone: "1234567890",
        serviceType: "Driver",
        password: "password",
      })
    ).rejects.toThrow();
  });

  test("should require required fields", async () => {
    const user = new User({});

    let error;
    try {
      await user.save();
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.errors.username).toBeDefined();
    expect(error.errors.email).toBeDefined();
    expect(error.errors.phone).toBeDefined();
    expect(error.errors.serviceType).toBeDefined();
    expect(error.errors.password).toBeDefined();
  });
});

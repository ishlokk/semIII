import fs from "node:fs/promises";

const filePath = "UserData.txt";

// CREATE
async function createFile(content) {
  try {
    await fs.writeFile(filePath, content, "utf-8");
    console.log("File created successfully.");
  } catch (err) {
    console.error("Error creating file:", err);
  }
}

// READ
async function readFile() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log("File content:", data);
    return data;
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("File not found. Please create the file first.");
    } else {
      console.error("Error reading file:", err);
    }
  }
}

// UPDATE
async function updateFile(content) {
  try {
    await fs.appendFile(filePath, "\n" + content, "utf-8");
    console.log("File updated successfully.");
  } catch (err) {
    console.error("Error updating file:", err);
  }
}

// DELETE
async function deleteFile() {
  try {
    await fs.unlink(filePath);
    console.log("File deleted successfully.");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("File not found.");
    } else {
      console.error("Error deleting file:", err);
    }
  }
}

// DEMO
async function runDemo() {
  // CREATE
  await createFile("Hello world! This is the first line");

  // READ
  await readFile();

  // UPDATE
  await updateFile("This line was appended later");

  // READ again
  await readFile();

  // DELETE
  await deleteFile();
}

// Run the program
runDemo();
const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "notes.txt");

async function runFileCrud() {
  try {
    // CREATE (write a new file)
    await fs.writeFile(filePath, "Hello ABES!\n", "utf8");
    console.log("Created file.");

    // READ (read file contents)
    const afterCreate = await fs.readFile(filePath, "utf8");
    console.log("After Create:", afterCreate.trim());

    // UPDATE (append more data to the file)
    await fs.appendFile(filePath, "Appended line.\n", "utf8");
    const afterUpdate = await fs.readFile(filePath, "utf8");
    console.log("After Update:\n" + afterUpdate.trim());

    // DELETE (remove the file)
    await fs.unlink(filePath);
    console.log("Deleted file.");
  } catch (err) {
    console.error("File operation error:", err.message);
  }
}

runFileCrud();
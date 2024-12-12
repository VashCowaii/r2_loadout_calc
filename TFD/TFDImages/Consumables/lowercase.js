const fs = require('fs');
const path = require('path');

// Get the directory of the current script
const currentDir = __dirname;

// Read all files in the current directory
fs.readdir(currentDir, (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }

    files.forEach(file => {
        const filePath = path.join(currentDir, file);

        // Check if the path is a file (not a directory)
        fs.stat(filePath, (err, stats) => {
            if (err) {
                console.error("Error checking file stats:", err);
                return;
            }

            if (stats.isFile()) {
                const lowerCaseFile = file.toLowerCase();

                // Rename the file if the lowercase name is different
                if (file !== lowerCaseFile) {
                    const newFilePath = path.join(currentDir, lowerCaseFile);
                    fs.rename(filePath, newFilePath, err => {
                        if (err) {
                            console.error(`Error renaming file ${file} to ${lowerCaseFile}:`, err);
                        } else {
                            console.log(`Renamed: ${file} -> ${lowerCaseFile}`);
                        }
                    });
                }
            }
        });
    });
});

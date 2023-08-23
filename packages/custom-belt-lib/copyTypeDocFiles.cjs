/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);

async function copyFilesRecursively(sourceDir, destDir) {
  try {
    await mkdir(destDir, { recursive: true });
    const items = await readdir(sourceDir);

    for (const item of items) {
      const sourcePath = path.join(sourceDir, item);
      const destPath = path.join(destDir, item);

      const itemStat = await stat(sourcePath);

      if (itemStat.isFile()) {
        await copyFile(sourcePath, destPath);
        console.log(`Copied file: ${sourcePath} -> ${destPath}`);
      } else if (itemStat.isDirectory()) {
        await copyFilesRecursively(sourcePath, destPath);
      }
    }
  } catch (error) {
    console.error('Error copying files:', error);
  }
}

function deleteFolderRecursive(dirPath) {
  console.log(`Deleting directory contents: ${dirPath}`);
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse if the current path is a directory
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    // remove directory itself after deleting its contents
    fs.rmdirSync(dirPath);
  } else {
    console.error(`Directory does not exist: ${dirPath}`);
  }
}

const sourceDirectory = './docs';
const destinationDirectory = '../../apps/docs/docs/typedoc';

deleteFolderRecursive(destinationDirectory);
copyFilesRecursively(sourceDirectory, destinationDirectory);

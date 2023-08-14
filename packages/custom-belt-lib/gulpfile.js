const gulp = require('gulp');
const rimraf = require('rimraf');
const fs = require('fs');
const path = require('path');

function copyFolderRecursive(source, target) {
  // Check if source directory exists
  if (fs.existsSync(source)) {
    // Create target directory if it doesn't exist
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target, { recursive: true });
    }

    fs.readdirSync(source).forEach((file) => {
      const sourcePath = path.join(source, file);
      const targetPath = path.join(target, file);

      // Check if it's a directory
      if (fs.lstatSync(sourcePath).isDirectory()) {
        // If it's a directory, copy the entire directory
        copyFolderRecursive(sourcePath, targetPath);
      } else {
        // If it's a file, copy the file
        fs.copyFileSync(sourcePath, targetPath);
      }
    });
  } else {
    console.error('Source directory does not exist!');
  }
}

async function copyFiles(cb) {
  const destinationDir = '../../apps/docs/docs/typedoc';
  const sourceDir = './docs';

  console.log('Removing old files..');
  await rimraf(destinationDir, function () {
    copyFolderRecursive(sourceDir, destinationDir);
  });

  cb();
}

exports.copyFiles = gulp.series(copyFiles);

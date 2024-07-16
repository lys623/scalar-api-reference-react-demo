const fs = require('fs-extra');
const path = require('path');

async function moveFiles() {
  const sourceDir = path.join(__dirname, '../build');
  const targetDir = path.join(__dirname, '../build', 'openapistatic');

  try {
    // 确保目标目录存在
    await fs.ensureDir(targetDir);
    // 读取源目录中的所有文件和文件夹
    const items = await fs.readdir(sourceDir);
    // 遍历并移动每个项目
    for (let item of items) {
      const sourcePath = path.join(sourceDir, item);
      const targetPath = path.join(targetDir, item);
      console.log('0-sourcePathsourcePathsourcePath-',sourcePath)
      if(!sourcePath.includes('openapistatic')){
        // 移动文件或目录
        await fs.move(sourcePath, targetPath, { overwrite: true });
        // console.log(`成功移动 ${item} 到 ${targetDir}`);
      };

    }
  } catch (error) {
    console.error('移动文件时发生错误:', error);
  }
}

moveFiles();

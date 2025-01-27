// 获取加载动画和主页内容的元素
const loadingContainer = document.getElementById('loading');
const mainContent = document.getElementById('main-content');
const progressBar = document.querySelector('.progress-bar');

let progress = 0;

// 模拟加载过程
const interval = setInterval(() => {
    progress += 10; // 每次增加 10%
    progressBar.style.width = `${progress}%`;

    // 加载完成后隐藏加载动画，显示主页内容
    if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
            loadingContainer.style.display = 'none'; // 隐藏加载动画
            mainContent.style.display = 'block'; // 显示主页内容
        }, 1000); // 1秒后切换
    }
}, 500); // 每 500ms 更新一次进度
// 如果有交互功能可以在这里添加
// 例如：点击侧边栏菜单跳转到对应内容
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止默认跳转行为
        const targetId = this.getAttribute('href'); // 获取目标 ID
        const targetElement = document.querySelector(targetId); // 获取目标元素
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到目标位置
        }
    });
});
// 添加导航栏激活状态
document.querySelectorAll('.nebula-nav a').forEach(link => {
    if(link.href === window.location.href) {
        link.classList.add('active');
    }
});
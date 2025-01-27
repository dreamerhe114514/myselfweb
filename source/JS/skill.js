document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        const progress = skill.querySelector('.progress');
        const progressValue = skill.getAttribute('data-progress'); // 获取 data-progress 值
        progress.style.width = progressValue + '%'; // 设置宽度
    });
});
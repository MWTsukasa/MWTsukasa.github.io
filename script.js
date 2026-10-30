(() => {
  const root = document.documentElement;
  const button = document.getElementById('language-toggle');
  const titles = {
    home: ['Zhaofeng Si 司兆峰', '司兆峰 Zhaofeng Si'],
    publications: ['Publications — Zhaofeng Si', '论文 — 司兆峰'],
    experiences: ['Experiences — Zhaofeng Si', '经历 — 司兆峰'],
  };
  function setLanguage(language) {
    const chinese = language === 'zh-CN';
    root.lang = chinese ? 'zh-CN' : 'en';
    button.textContent = chinese ? 'EN' : '中文';
    button.setAttribute('aria-label', chinese ? 'Switch to English' : '切换为中文');
    document.querySelector('nav').setAttribute('aria-label', chinese ? '主导航' : 'Main navigation');
    document.title = titles[document.body.dataset.page][chinese ? 1 : 0];
    try { localStorage.setItem('zhaofeng-site-language', root.lang); } catch (_) { /* Optional preference storage. */ }
  }
  let saved;
  try { saved = localStorage.getItem('zhaofeng-site-language'); } catch (_) { /* English by default. */ }
  setLanguage(saved);
  button.addEventListener('click', () => setLanguage(root.lang === 'en' ? 'zh-CN' : 'en'));
})();

(() => {
  const root = document.documentElement;
  const languageButton = document.getElementById('language-toggle');
  const status = document.getElementById('filter-status');
  const papers = [...document.querySelectorAll('.publication')];
  let currentFilter = 'all';
  function announceResults() {
    const count = papers.filter(paper => !paper.hidden).length;
    status.textContent = root.lang === 'zh-CN' ? `显示 ${count} 篇论文与预印本` : `${count} publications and preprints shown`;
  }
  function setLanguage(language) {
    root.lang = language === 'zh-CN' ? 'zh-CN' : 'en';
    languageButton.innerHTML = root.lang === 'en' ? '中文 <span aria-hidden="true">↗</span>' : 'EN <span aria-hidden="true">↗</span>';
    languageButton.setAttribute('aria-label', root.lang === 'en' ? '切换为中文' : 'Switch to English');
    document.title = root.lang === 'en' ? 'Zhaofeng Si · Image Forensics & Machine Learning' : '司兆峰 · 图像取证与机器学习';
    document.querySelector('nav').setAttribute('aria-label', root.lang === 'en' ? 'Main navigation' : '主导航');
    document.querySelector('.filters').setAttribute('aria-label', root.lang === 'en' ? 'Filter publications' : '筛选论文');
    announceResults();
    try { localStorage.setItem('zhaofeng-site-language', root.lang); } catch (_) { /* Storage is optional. */ }
  }
  let savedLanguage;
  try { savedLanguage = localStorage.getItem('zhaofeng-site-language'); } catch (_) { /* Keep English as the default. */ }
  if (savedLanguage === 'zh-CN') setLanguage(savedLanguage);
  languageButton.addEventListener('click', () => setLanguage(root.lang === 'en' ? 'zh-CN' : 'en'));
  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      currentFilter = button.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
      papers.forEach(paper => { paper.hidden = currentFilter !== 'all' && paper.dataset.category !== currentFilter; });
      announceResults();
    });
  });
})();

export const handleAnchorClick = (event: MouseEvent, scrollToId?: string, action?: (ele: HTMLElement) => void) => {
  event.preventDefault();

  const link = event.currentTarget as HTMLAnchorElement;
  const anchorId = new URL(link.href).hash.replace('#', '')
  const anchor = document.getElementById(anchorId);
  const scrollToEle = scrollToId ? document.getElementById(scrollToId) : anchor;

  if (!anchor) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  if (action) {
    action(anchor);
  }

  // anchor.scrollIntoView({ behavior: 'smooth' });
  window.scrollTo({
    top: scrollToEle!.getBoundingClientRect().top + window.scrollY - 100,
    behavior: 'smooth',
  })

  anchor.classList.add('highlight');
  setTimeout(() => {
    anchor.classList.remove('highlight');
  }, 1000);
}


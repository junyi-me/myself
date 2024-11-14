export const handleAnchorClick = (event: MouseEvent, action?: (ele: HTMLElement) => void) => {
  event.preventDefault();

  const link = event.currentTarget as HTMLAnchorElement;
  const anchorId = new URL(link.href).hash.replace('#', '')
  const anchor = document.getElementById(anchorId);

  if (!anchor) {
    return;
  }

  if (action) {
    action(anchor);
  }

  anchor.scrollIntoView({ behavior: 'smooth' });

  anchor.classList.add('highlight');
  setTimeout(() => {
    anchor.classList.remove('highlight');
  }, 1000);
}


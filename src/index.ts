class o10rPPSdk {
  private sid: string;
  private host: string;

  constructor(sid: string, host: string = 'https://pp.o10r.io') {
    this.sid = sid;
    this.host = host;
  }

  open() {
    window.open(`${this.host}/?sid=${this.sid}`, '_blank');
  }

  mount(iframeOrSelector: HTMLIFrameElement | string): void {
    let iframe: HTMLIFrameElement | null;

    if (typeof iframeOrSelector === 'string') {
      iframe = document.querySelector<HTMLIFrameElement>(iframeOrSelector);
    } else {
      iframe = iframeOrSelector;
    }

    if (!iframe) {
      throw new Error('Iframe not found');
    }

    iframe.src = `${this.host}/?sid=${this.sid}`;
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
(window as any).o10rPPSdk = o10rPPSdk;

export { o10rPPSdk };

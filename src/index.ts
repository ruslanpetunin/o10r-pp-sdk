const o10rPPSdk = (sid: string) => ({
  open: () => {
    window.open(`https://pp.o10r.io/?sid=${sid}`, '_blank');
  }
});

export default o10rPPSdk;

const loadClutch = (callback) => {

    const existingScript = document.getElementById('clutchReviews');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://widget.clutch.co/static/js/widget.js';
      script.id = 'clutchReviews';
      document.body.appendChild(script);
      script.onload = () => { 
        if (callback) callback();
      };
    }
    if (existingScript && callback) callback();
  };

export default loadClutch;

{/* <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script>  */}

{/* <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script>  */}
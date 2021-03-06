matrixRain() {
        const c = this.refs.c;
        const ctx = this.refs.c.getContext("2d");

        c.height = window.innerHeight;
        c.width = window.innerWidth;

        let eggtronic = 'EggTronicYangEggTronicXu';
        eggtronic = eggtronic.split("");

        let font_size = 10;
        let columns = c.width / font_size; //number of columns for rain
        let drops = [];

        //x below is the x coordinate
        //1 - y co-cordinate of the drop - same for every drop initially
        for (let x = 0; x < columns; x++)
            drops[x] = 1;

        function draw() {
            //black BG for canvas
            //translucent BG to show trail
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, c.width, c.height);
            ctx.fillStyle = "#0f0";
            ctx.font = font_size / 1.5 + "px arial";

            //looping over drops
            for (let i = 0; i < drops.length; i++) {
                let text = eggtronic[Math.floor(Math.random() * eggtronic.length)];
                ctx.fillText(text, i * font_size, drops[i] * font_size);

                if (drops[i] * font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;

                drops[i]++
            }
        }
        setInterval(draw, 33);
    }

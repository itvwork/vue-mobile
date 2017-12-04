pc.script.createLoadingScreen(function (app) {

    var loadsize = 0;
    var time = null;
    var now = 0;


    var hideSplash = function () {

    };

    var setProgress = function (value) {
        loadsize = parseInt(value * 100);

    };


    var time = setInterval(function () {

        if (now > loadsize && now >= 100) {

            return false;
        }
        if (now >= 100) {
            clearInterval(time);
            return false;
        }

        now++;

        if (now >= 0 && now < 100) {

            vues.persent = now;
        }

        if (now >= 100) {
            setTimeout(function () {
                vues.persent = '';
                vues.complete = true;
                vues.cri = 0;
            }, 3000)

        } else {

            vues.persent = now + '%';
            vues.cri = 298.451 - now / 100 * 298.451;

            // $s.html('.show-number', now + '%');
        }

    }, 50)

    app.on('preload:end', function () {

        app.off('preload:progress');
    });
    app.on('preload:progress', setProgress);
    app.on('start', hideSplash);
});

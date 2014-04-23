require.config({
    paths: {
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min'
    }
});

require(['app'], function(App){
    App.initialize();
});

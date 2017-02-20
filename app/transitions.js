export default function(){  

    /*index page transitions*/
    this.transition(
        this.fromRoute('index'),
        this.toRoute('about'),
        this.use('fade')
    );

    this.transition(
        this.fromRoute('index'),
        this.toRoute('projects'),
        this.use('fade')
    );

    this.transition(
        this.fromRoute('index'),
        this.toRoute('contact'),
        this.use('fade')
    );

}

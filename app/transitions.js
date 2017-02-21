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

    /*about page transitions*/
    this.transition(
        this.fromRoute('about'),
        this.toRoute('index'),
        this.use('fade')
    );

    this.transition(
        this.fromRoute('about'),
        this.toRoute('projects'),
        this.use('fade')
    );

    this.transition(
        this.fromRoute('about'),
        this.toRoute('contact'),
        this.use('fade')
    );

    /*projects page transitions*/
    this.transition(
        this.fromRoute('projects'),
        this.toRoute('index'),
        this.use('fade')
    );

    this.transition(
        this.fromRoute('projects'),
        this.toRoute('about'),
        this.use('fade')
    );

    this.transition(
        this.fromRoute('projects'),
        this.toRoute('contact'),
        this.use('fade')
    );

    /*contact page transitions*/
    this.transition(
        this.fromRoute('contact'),
        this.toRoute('index'),
        this.use('fade')
    );

    this.transition(
        this.fromRoute('contact'),
        this.toRoute('about'),
        this.use('fade')
    );

    this.transition(
        this.fromRoute('contact'),
        this.toRoute('projects'),
        this.use('fade')
    );

}

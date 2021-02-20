import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('navbar', {static: true}) navbar: ElementRef;
  nav = [
    { title: 'Services',  url: 'services' },
    { title: 'Skills',  url: 'skills' },
    { title: 'Portfolio',  url: 'work' },
    { title: 'Experience',  url: 'experience' },
    { title: 'Contact',  url: 'contact' },
  ]
  subNav = {
    back: {title: 'Back to Portfolio', url: '/'},
    resume: { title: 'CV', url: 'cv'},
    portfolio: {title: 'Portfolio', url: '/'}
  }
  @Input() isResume = false;
  constructor() { }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if (this.amountscrolled() >= 250 && !this.isResume) {
      this.navbar.nativeElement.classList.remove('navbar-transparent');
    } else if (!this.isResume) {
      this.navbar.nativeElement.classList.add('navbar-transparent');
    }
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    if (this.isResume) {
      this.navbar.nativeElement.classList.remove('navbar-transparent');
    } else {
      this.navbar.nativeElement.classList.add('navbar-transparent');
    }
  }
  showNav() {
    document.querySelector('body').classList.toggle('nav-open')
    document.querySelector('html').classList.toggle('nav-open')
    document.querySelector('.navbar-toggler').classList.toggle('toggled')
    document.querySelector('.navbar-collapse').classList.toggle('collapsed')
  }

   amountscrolled() {
      const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentElement || document.body).scrollTop;
      return scrollTop
    }
}

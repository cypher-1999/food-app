import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{

    // @HostBinding('class.open')toggle:boolean=false;
    // @HostListener('click')onToggle(){
    //     this.toggle=!this.toggle;
    // }

    // ******** USING ONLY A HOST LISTENER ********
    toggle:boolean=false;
    @HostListener('click')onClick(){
        if(!this.toggle){
            this.renderer.addClass(
            this.elRef.nativeElement,
            'open')
            this.toggle=!this.toggle;
        }else{
            this.renderer.removeClass( 
            this.elRef.nativeElement,
            'open');
             this.toggle=!this.toggle;
        }
        
    } 
    constructor(private elRef:ElementRef,private renderer:Renderer2){}


}
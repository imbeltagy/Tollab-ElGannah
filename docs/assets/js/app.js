document.getElementById("nav-icon").onclick=function(){this.classList.toggle("opened"),document.getElementById("nav-list").classList.toggle("opened")};const navbar=document.querySelector(".navbar"),main=document.querySelector("main .container"),navTop=navbar.offsetTop;window.onscroll=()=>{window.scrollY>=navTop?navbar.classList.add("fixed"):navbar.classList.remove("fixed")},[...document.querySelectorAll("#FQA .row .q")].forEach(t=>{console.log(t.parentElement),t.onclick=()=>t.parentElement.classList.toggle("opened")});class Slider{constructor(t){this.slider=t,this.cardsContainer=t.querySelector(".cards-container"),this.cards=Array.from(this.cardsContainer.children),this.count,this.gap,this.containerWidth,this.cardWidth,this.prevBtn=t.querySelector(".slider-controls .prev"),this.nextBtn=t.querySelector(".slider-controls .next"),this.moves=0}resizeSlides=()=>{this.count=parseInt(getComputedStyle(this.cardsContainer).getPropertyValue("--images-count")),this.gap=parseFloat(getComputedStyle(this.cardsContainer).getPropertyValue("gap")),this.containerWidth=parseFloat(getComputedStyle(this.cardsContainer).getPropertyValue("width")),this.cardWidth=(this.containerWidth-this.gap*(this.count-1))/this.count,this.cards.forEach(t=>{t.style.width=this.cardWidth+"px"}),this.cardsContainer.style.height=null;var t=this.cards.reduce((t,e)=>{e=parseFloat(getComputedStyle(e).getPropertyValue("height"));return(t=isNaN(t)?parseFloat(getComputedStyle(t).getPropertyValue("height")):t)<e?e:t})+"px";this.cardsContainer.style.height=t,this.slide()};moveBack=()=>{this.moves--,this.slide(),this.nextBtn.classList.remove("disabled"),this.moves<=0?this.prevBtn.classList.add("disabled"):this.prevBtn.classList.remove("disabled")};moveForward=()=>{this.moves++,this.slide(),this.prevBtn.classList.remove("disabled"),this.moves>=this.cards.length-this.count?this.nextBtn.classList.add("disabled"):this.nextBtn.classList.remove("disabled")};slide=()=>{this.cards.forEach((t,e)=>{t.style.setProperty("--space",(e-this.moves)*(this.cardWidth+this.gap)+"px"),this.prevBtn.onclick=null,this.nextBtn.onclick=null,setTimeout(()=>{this.prevBtn.onclick=this.moveBack,this.nextBtn.onclick=this.moveForward},333)})};start=()=>{this.resizeSlides(),window.addEventListener("resize",this.resizeSlides),this.prevBtn.onclick=this.moveBack,this.nextBtn.onclick=this.moveForward}}let testimonialsSlider=new Slider(document.querySelector("#testimonials .slider"));window.addEventListener("load",testimonialsSlider.start);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gT3BlbiBOYXYgTGlzdCBJbiBTbWFsbCBTY3JlZW5zXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWljb25cIikub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuZWRcIik7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtbGlzdFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlbmVkXCIpO1xyXG59O1xyXG5cclxuLy8gRml4ZWQgTmF2QmFyXHJcbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpLFxyXG4gIG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpbiAuY29udGFpbmVyXCIpLFxyXG4gIG5hdlRvcCA9IG5hdmJhci5vZmZzZXRUb3A7XHJcblxyXG4vLyB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4vLyAgIGxldCBoZWlnaHQgPSBuYXZiYXIuY2xpZW50SGVpZ2h0ICsgcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKG5hdmJhcikuZ2V0UHJvcGVydHlWYWx1ZShcInRvcFwiKSkgKiAyO1xyXG4vLyAgIG1haW4uc3R5bGUucGFkZGluZ1RvcCA9IGhlaWdodCArIFwicHhcIjtcclxuLy8gfTtcclxuXHJcbndpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcclxuICB3aW5kb3cuc2Nyb2xsWSA+PSBuYXZUb3AgPyBuYXZiYXIuY2xhc3NMaXN0LmFkZChcImZpeGVkXCIpIDogbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJmaXhlZFwiKTtcclxufTtcclxuXHJcbi8vIEZRQSBPcGVuIEZ1bmN0aW9uXHJcblsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI0ZRQSAucm93IC5xXCIpXS5mb3JFYWNoKChxKSA9PiB7XHJcbiAgY29uc29sZS5sb2cocS5wYXJlbnRFbGVtZW50KTtcclxuICBxLm9uY2xpY2sgPSAoKSA9PiBxLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5lZFwiKTtcclxufSk7XHJcblxyXG4vLyBBcHBseSBTbGlkZXIgQ29tcG9uZW50c1xyXG5jbGFzcyBTbGlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKHNsaWRlcikge1xyXG4gICAgdGhpcy5zbGlkZXIgPSBzbGlkZXI7XHJcbiAgICB0aGlzLmNhcmRzQ29udGFpbmVyID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHMtY29udGFpbmVyXCIpO1xyXG4gICAgdGhpcy5jYXJkcyA9IEFycmF5LmZyb20odGhpcy5jYXJkc0NvbnRhaW5lci5jaGlsZHJlbik7XHJcbiAgICB0aGlzLmNvdW50O1xyXG4gICAgdGhpcy5nYXA7XHJcbiAgICB0aGlzLmNvbnRhaW5lcldpZHRoO1xyXG4gICAgdGhpcy5jYXJkV2lkdGg7XHJcbiAgICAodGhpcy5wcmV2QnRuID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyLWNvbnRyb2xzIC5wcmV2XCIpKSxcclxuICAgICAgKHRoaXMubmV4dEJ0biA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci1jb250cm9scyAubmV4dFwiKSk7XHJcbiAgICB0aGlzLm1vdmVzID0gMDtcclxuICB9XHJcblxyXG4gIHJlc2l6ZVNsaWRlcyA9ICgpID0+IHtcclxuICAgIHRoaXMuY291bnQgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FyZHNDb250YWluZXIpLmdldFByb3BlcnR5VmFsdWUoXCItLWltYWdlcy1jb3VudFwiKSk7XHJcbiAgICB0aGlzLmdhcCA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhcmRzQ29udGFpbmVyKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZ2FwXCIpKTtcclxuICAgIHRoaXMuY29udGFpbmVyV2lkdGggPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUodGhpcy5jYXJkc0NvbnRhaW5lcikuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpKTtcclxuXHJcbiAgICB0aGlzLmNhcmRXaWR0aCA9ICh0aGlzLmNvbnRhaW5lcldpZHRoIC0gdGhpcy5nYXAgKiAodGhpcy5jb3VudCAtIDEpKSAvIHRoaXMuY291bnQ7XHJcblxyXG4gICAgLy8gc2V0IHdpZHRoIGZvciBjYXJkc1xyXG4gICAgdGhpcy5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAgIGNhcmQuc3R5bGUud2lkdGggPSB0aGlzLmNhcmRXaWR0aCArIFwicHhcIjtcclxuICAgIH0pO1xyXG4gICAgLy8gcmVzZXQgdmFsdWUgd2hlbiBjaGFuZ2luZyBjb250ZW50XHJcbiAgICB0aGlzLmNhcmRzQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IG51bGw7XHJcbiAgICAvLyBnZXQgdGhlIGhlaWdodCBvZiB0aGUgaGVpZ2hlciBjYXJkXHJcbiAgICBsZXQgaGVpZ2h0ID1cclxuICAgICAgdGhpcy5jYXJkcy5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XHJcbiAgICAgICAgbGV0IGggPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoY3VyKS5nZXRQcm9wZXJ0eVZhbHVlKFwiaGVpZ2h0XCIpKTtcclxuICAgICAgICBpZiAoaXNOYU4oYWNjKSkge1xyXG4gICAgICAgICAgYWNjID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGFjYykuZ2V0UHJvcGVydHlWYWx1ZShcImhlaWdodFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoID4gYWNjID8gaCA6IGFjYztcclxuICAgICAgfSkgKyBcInB4XCI7XHJcbiAgICB0aGlzLmNhcmRzQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcclxuICAgIC8vIE1vdmUgSW1hZ2VzXHJcbiAgICB0aGlzLnNsaWRlKCk7XHJcbiAgfTtcclxuXHJcbiAgbW92ZUJhY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLm1vdmVzLS07XHJcbiAgICB0aGlzLnNsaWRlKCk7XHJcbiAgICB0aGlzLm5leHRCdG4uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xyXG4gICAgaWYgKHRoaXMubW92ZXMgPD0gMCkge1xyXG4gICAgICB0aGlzLnByZXZCdG4uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcmV2QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBtb3ZlRm9yd2FyZCA9ICgpID0+IHtcclxuICAgIHRoaXMubW92ZXMrKztcclxuICAgIHRoaXMuc2xpZGUoKTtcclxuICAgIHRoaXMucHJldkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XHJcbiAgICBpZiAodGhpcy5tb3ZlcyA+PSB0aGlzLmNhcmRzLmxlbmd0aCAtIHRoaXMuY291bnQpIHtcclxuICAgICAgdGhpcy5uZXh0QnRuLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubmV4dEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc2xpZGUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+IHtcclxuICAgICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc3BhY2VcIiwgKGkgLSB0aGlzLm1vdmVzKSAqICh0aGlzLmNhcmRXaWR0aCArIHRoaXMuZ2FwKSArIFwicHhcIik7XHJcbiAgICAgIC8vIHN0b3AgY29udHJvbHMgdGlsbCBhbmltYXRpb24gZW5kc1xyXG4gICAgICB0aGlzLnByZXZCdG4ub25jbGljayA9IG51bGw7XHJcbiAgICAgIHRoaXMubmV4dEJ0bi5vbmNsaWNrID0gbnVsbDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcmV2QnRuLm9uY2xpY2sgPSB0aGlzLm1vdmVCYWNrO1xyXG4gICAgICAgIHRoaXMubmV4dEJ0bi5vbmNsaWNrID0gdGhpcy5tb3ZlRm9yd2FyZDtcclxuICAgICAgfSwgMzMzKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5yZXNpemVTbGlkZXMoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMucmVzaXplU2xpZGVzKTtcclxuXHJcbiAgICB0aGlzLnByZXZCdG4ub25jbGljayA9IHRoaXMubW92ZUJhY2s7XHJcbiAgICB0aGlzLm5leHRCdG4ub25jbGljayA9IHRoaXMubW92ZUZvcndhcmQ7XHJcbiAgfTtcclxufVxyXG5cclxubGV0IHRlc3RpbW9uaWFsc1NsaWRlciA9IG5ldyBTbGlkZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXN0aW1vbmlhbHMgLnNsaWRlclwiKSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB0ZXN0aW1vbmlhbHNTbGlkZXIuc3RhcnQpO1xyXG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9uY2xpY2siLCJ0aGlzIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibmF2YmFyIiwicXVlcnlTZWxlY3RvciIsIm1haW4iLCJuYXZUb3AiLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInNjcm9sbFkiLCJhZGQiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNvbnNvbGUiLCJsb2ciLCJxIiwicGFyZW50RWxlbWVudCIsIlNsaWRlciIsImNvbnN0cnVjdG9yIiwic2xpZGVyIiwiY2FyZHNDb250YWluZXIiLCJjYXJkcyIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwiY291bnQiLCJnYXAiLCJjb250YWluZXJXaWR0aCIsImNhcmRXaWR0aCIsInByZXZCdG4iLCJuZXh0QnRuIiwibW92ZXMiLCJyZXNpemVTbGlkZXMiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicGFyc2VGbG9hdCIsImNhcmQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwibGV0IiwicmVkdWNlIiwiYWNjIiwiY3VyIiwiaCIsImlzTmFOIiwic2xpZGUiLCJtb3ZlQmFjayIsIm1vdmVGb3J3YXJkIiwibGVuZ3RoIiwiaSIsInNldFByb3BlcnR5Iiwic2V0VGltZW91dCIsInN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlc3RpbW9uaWFsc1NsaWRlciJdLCJtYXBwaW5ncyI6IkFBQ0FBLFNBQVNDLGVBQWUsVUFBVSxFQUFFQyxRQUFVLFdBQzVDQyxLQUFLQyxVQUFVQyxPQUFPLFFBQVEsRUFDOUJMLFNBQVNDLGVBQWUsVUFBVSxFQUFFRyxVQUFVQyxPQUFPLFFBQVEsQ0FDL0QsRUFHQSxNQUFNQyxPQUFTTixTQUFTTyxjQUFjLFNBQVMsRUFDN0NDLEtBQU9SLFNBQVNPLGNBQWMsaUJBQWlCLEVBQy9DRSxPQUFTSCxPQUFPSSxVQU9sQkMsT0FBT0MsU0FBVyxLQUNoQkQsT0FBT0UsU0FBV0osT0FBU0gsT0FBT0YsVUFBVVUsSUFBSSxPQUFPLEVBQUlSLE9BQU9GLFVBQVVXLE9BQU8sT0FBTyxDQUM1RixFQUdBLENBQUMsR0FBR2YsU0FBU2dCLGlCQUFpQixjQUFjLEdBQUdDLFFBQVEsSUFDckRDLFFBQVFDLElBQUlDLEVBQUVDLGFBQWEsRUFDM0JELEVBQUVsQixRQUFVLElBQU1rQixFQUFFQyxjQUFjakIsVUFBVUMsT0FBTyxRQUFRLENBQzdELENBQUMsUUFHS2lCLE9BQ0pDLFlBQVlDLEdBQ1ZyQixLQUFLcUIsT0FBU0EsRUFDZHJCLEtBQUtzQixlQUFpQkQsRUFBT2pCLGNBQWMsa0JBQWtCLEVBQzdESixLQUFLdUIsTUFBUUMsTUFBTUMsS0FBS3pCLEtBQUtzQixlQUFlSSxRQUFRLEVBQ3BEMUIsS0FBSzJCLE1BQ0wzQixLQUFLNEIsSUFDTDVCLEtBQUs2Qixl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

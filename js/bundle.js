(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.onload = function () {
  // window.addEventListener('scroll', requestTick, false)

  var nav = document.querySelector('navigation');
  var body = document.querySelector('body');
  nav.addEventListener('mouseenter', function () {
    body.className += ' nav-open';
  });
  nav.addEventListener('mouseleave', function () {
    body.className = body.className.split(' ').filter(function (c) {
      return c != 'nav-open';
    }).join(' ');
  });
};

function windowTop() {
  return (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
}

var ticking = undefined;
function requestTick() {
  if (!ticking) {
    requestAnimationFrame(update);
    ticking = true;
  }
}
function update() {
  var nav = document.querySelector('.nav-list');
  nav.style.top = windowTop() + 'px';
  ticking = false;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0EsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFXOzs7QUFHekIsTUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUM5QyxNQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3pDLEtBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsWUFBVztBQUM1QyxRQUFJLENBQUMsU0FBUyxJQUFJLFdBQVcsQ0FBQTtHQUM5QixDQUFDLENBQUE7QUFDRixLQUFHLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQVc7QUFDNUMsUUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDO2FBQUksQ0FBQyxJQUFJLFVBQVU7S0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0dBQ2xGLENBQUMsQ0FBQTtDQUNILENBQUE7O0FBRUQsU0FBUyxTQUFTLEdBQUc7QUFDbkIsU0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQSxJQUFLLFFBQVEsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFBLEFBQUMsQ0FBQTtDQUM5RTs7QUFFRCxJQUFJLE9BQU8sWUFBQSxDQUFBO0FBQ1gsU0FBUyxXQUFXLEdBQUc7QUFDckIsTUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNaLHlCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzdCLFdBQU8sR0FBRyxJQUFJLENBQUE7R0FDZjtDQUNGO0FBQ0QsU0FBUyxNQUFNLEdBQUc7QUFDaEIsTUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUM3QyxLQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUE7QUFDbEMsU0FBTyxHQUFHLEtBQUssQ0FBQTtDQUNoQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHJlcXVlc3RUaWNrLCBmYWxzZSlcblxuICB2YXIgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2aWdhdGlvbicpXG4gIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gIG5hdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgYm9keS5jbGFzc05hbWUgKz0gJyBuYXYtb3BlbidcbiAgfSlcbiAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICBib2R5LmNsYXNzTmFtZSA9IGJvZHkuY2xhc3NOYW1lLnNwbGl0KCcgJykuZmlsdGVyKGMgPT4gYyAhPSAnbmF2LW9wZW4nKS5qb2luKCcgJylcbiAgfSlcbn1cblxuZnVuY3Rpb24gd2luZG93VG9wKCkge1xuICByZXR1cm4gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5zY3JvbGxUb3ApIC0gKGRvY3VtZW50LmNsaWVudFRvcCB8fCAwKVxufVxuXG5sZXQgdGlja2luZ1xuZnVuY3Rpb24gcmVxdWVzdFRpY2soKSB7XG4gIGlmICghdGlja2luZykge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpXG4gICAgdGlja2luZyA9IHRydWVcbiAgfVxufVxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1saXN0JylcbiAgbmF2LnN0eWxlLnRvcCA9IHdpbmRvd1RvcCgpICsgJ3B4J1xuICB0aWNraW5nID0gZmFsc2Vcbn1cbiJdfQ==

// var maxScrollDepth = 0;

// // listen to the window load event so we can start getting elements from the page
// window.addEventListener("load", function () {
//   // init timeline
//   var timeline = document.getElementById("timeline");
//   var timelineLine = document.getElementById("timeline-line");

//   var timelineScrollTop = 0;
//   var timelineHeight = 0;

//   // set scroll position and height
//   if (timeline) {
//     var rect = timeline.getBoundingClientRect();
//     timelineScrollTop = rect.top - window.innerHeight;
//     timelineHeight = rect.height;
//   }

//   // init timeline intersection observer
//   let options = {
//     rootMargin: "-100px",
//     threshold: 0.5,
//   };
//   let observer = new IntersectionObserver(scrolledIntoView, options);
//   initTimeLine("timeline-dot", observer);
//   initTimeLine("timeline-card", observer);

//   // Listen to scroll
//   if (timeline) {
//     window.addEventListener("scroll", function () {
//       // timeline scroll feature
//       if (maxScrollDepth < window.scrollY) {
//         // Don't animate the timeline up only down
//         maxScrollDepth = window.scrollY; // Don't animate twice
//         if (maxScrollDepth >= timelineScrollTop) {
//           // only start animating when the timeline is visible
//           timelineLine.style.height =
//             Math.min(
//               Math.max(
//                 Math.round(
//                   ((maxScrollDepth - timelineScrollTop - 50) / timelineHeight) *
//                     100
//                 ),
//                 0
//               ),
//               100
//             ) + "%";
//         }
//       }
//     });
//   }
// });

// function initTimeLine(className, observer) {
//   var element = document.getElementsByClassName(className);
//   if (element && element.length > 0) {
//     for (let index = 0; index < element.length; index++) {
//       observer.observe(element[index]);
//     }
//   }
// }

// function scrolledIntoView(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry && entry.isIntersecting) {
//       entry.target.classList.add("active");
//       observer.unobserve(entry.target);
//     }
//   });
// }

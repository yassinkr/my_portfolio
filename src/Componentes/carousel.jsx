
import React, { useState, useEffect, useRef } from 'react';

const carousel = () => {
    const [year, setYear] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
              }
            });
          },
          { threshold: 0.5 } // Adjust the threshold as needed
        );
    
        if (targetRef.current) {
          observer.observe(targetRef.current);
        }
    
        return () => {
          if (targetRef.current) {
            observer.unobserve(targetRef.current);
          }
        };
      }, [targetRef]);
    
      useEffect(() => {
        if (isVisible) {
          const interval = setInterval(() => {
            setYear((prevYear) => {
              const newYear = prevYear + 1;
              return newYear >= targetValue ? targetValue : newYear;
            });
          }, 100); // Adjust the delay in milliseconds as needed
    
          // Cleanup the interval when the component is unmounted or targetValue is reached
          return () => {
            clearInterval(interval);
          };
        }
      }, [isVisible, targetValue]);


  return (
    <div>carousel</div>
  )
}

export default carousel
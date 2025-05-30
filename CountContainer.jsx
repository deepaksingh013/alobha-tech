import React, { useEffect, useState } from 'react';

export default function CountContainer() {
  const countData = [
    { countVal: 850, txt: 'Expert tutors' },
    { countVal: 20000, txt: 'Hours tutored', suffix: '+' },
    { countVal: 298, txt: 'Subjects and courses' },
    { countVal: 72920, txt: 'Active students' }
  ];

  const [counts, setCounts] = useState(countData.map(() => 0));

  useEffect(() => {
    const intervals = countData.map((item, index) => {
      const target = item.countVal;
      const increment = Math.ceil(target / 100);

      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < target) {
            newCounts[index] = Math.min(newCounts[index] + increment, target);
          }
          return newCounts;
        });
      }, 65);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="main-content-counter bg-primary text-white pt-4" style={{ marginTop: "8rem" }}>
      <div className="container">
        <div className="row text-left">
          {countData.map((item, index) => (
            <div
              key={index}
              className={`col-6 col-sm-6 col-md-3 mb-4 ${
                index !== countData.length - 1 ? 'border-end' : ''
              }`}
            >
              <h3 className="fw-bold">
                {counts[index].toLocaleString()}{item.suffix || ''}
              </h3>
              <p className="mb-0">{item.txt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

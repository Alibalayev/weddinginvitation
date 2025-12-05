import './Timeline.css'

function Timeline() {
  const events = [
    {
      id: 1,
      time: '18:00',
      title: 'Mərasim Başlanğıcı',
      description: 'Şən günün başlanğıcı'
    },
    {
      id: 2,
      time: '19:00',
      title: 'Bey və Xanımın Gəlişi',
      description: 'Ən gözəl an'
    },
    {
      id: 3,
      time: '20:00',
      title: 'Şam Yeməyi',
      description: 'Nəfis təamlarla gecənin davamı'
    },
    {
      id: 4,
      time: '21:00',
      title: 'Rəqs və Əyləncə',
      description: 'Musiqi və rəqs dolu anlar'
    },
    {
      id: 5,
      time: '22:00',
      title: 'Keyk Kəsmə',
      description: 'Ənənəvi an'
    }
  ]

  return (
    <section className="timeline-section">
      <h2>Tədbiir Cədvəli</h2>
      <div className="timeline-container">
        {events.map((event, index) => (
          <div key={event.id} className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              {index !== events.length - 1 && <div className="marker-line"></div>}
            </div>
            <div className="timeline-content">
              <h3 className="timeline-time">{event.time}</h3>
              <h4 className="timeline-title">{event.title}</h4>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline

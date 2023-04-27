import ServiceCard from '@/components/cards/ServiceCard'

const Services = () => {
  return (
    <div className='min-h-screen w-screen bg-sky-950 flex '>
      <div className='m-auto py-12 lg:m-auto w-4/5'>
        <p className='text-center mb-3 text-sky-400 font-medium'>Ofrecemos</p>
        <h2 className='text-4xl text-center w-full mb-12 text-white relative bottom-after-select'>
          Nuestros Servicios
        </h2>
        <div className='flex flex-col justify-center items-center gap-6 lg:flex-row'>
          <ServiceCard
            title='Consulta online'
            size={64}
            icon='M17 24h-10v-1.342c1.808-.985 2.005-2.205 2-3.658h-8c-.265 0-.52-.105-.707-.293-.188-.187-.293-.442-.293-.707v-17c0-.265.105-.52.293-.707.187-.188.442-.293.707-.293h22c.265 0 .52.105.707.293.188.187.293.442.293.707v17c0 .265-.105.52-.293.707-.187.188-.442.293-.707.293h-8c.004 1.374.155 2.66 2 3.658v1.342zm-3.984-5h-2.044c-.015.802.004 2.003-.719 3h3.493c-.757-1.02-.716-2.25-.73-3zm8.984-5h-20v3h20v-3zm-10 .537c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-10-12.537v10h20v-10h-20z'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            voluptate, placeat accusamus quam eius eveniet beatae unde sit,
          </ServiceCard>
          <ServiceCard
            title='Agenda tu cita'
            size={64}
            icon='M21.826 9h-2.086c.171-.487.262-.957.262-1.41 0-2.326-1.818-3.776-4.024-3.573-2.681.247-4.518 3.71-4.978 4.484-.527-.863-2.261-4.238-4.981-4.494-2.11-.199-4.019 1.181-4.019 3.582 0 3.109 4.347 7.084 9.001 11.615 1.16-1.127 2.285-2.208 3.324-3.243l.97 1.857c-1.318 1.302-2.769 2.686-4.294 4.181-6.164-6.037-11.001-10.202-11.001-14.403 0-3.294 2.462-5.526 5.674-5.596 2.163-.009 4.125.957 5.327 2.952 1.177-1.956 3.146-2.942 5.253-2.942 3.064 0 5.746 2.115 5.746 5.595 0 .464-.06.928-.174 1.395zm-11.094 4c-.346.598-.992 1-1.732 1-1.104 0-2-.896-2-2s.896-2 2-2c.74 0 1.386.402 1.732 1h1.222l1.88-2.71c.14-.202.376-.315.622-.299.245.016.464.161.576.38l2.27 4.437.813-1.45c.124-.221.357-.358.611-.358h5.274v2h-4.513l-1.759 2.908c-.132.219-.373.348-.629.337-.255-.01-.484-.16-.598-.389l-2.256-4.559-.989 1.406c-.131.186-.345.297-.573.297h-1.951z'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            voluptate, placeat accusamus quam eius eveniet beatae unde sit,
          </ServiceCard>
          <ServiceCard
            title='Servicio a domicilio'
            size={64}
            icon='M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            voluptate, placeat accusamus quam eius eveniet beatae unde sit,
          </ServiceCard>
        </div>
      </div>
    </div>
  )
}

export default Services

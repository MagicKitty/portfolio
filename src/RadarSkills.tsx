import { ResponsiveRadar } from '@nivo/radar';
import './RadarSkills.css';

const data = [
  { language: 'Javascript', maintenant: 32, futur: 40 },
  { language: 'BDD', maintenant: 15, futur: 20 },
  { language: 'DevOps', maintenant: 25, futur: 30 },
  { language: 'Java', maintenant: 30, futur: 40 },
  { language: 'TDD', maintenant: 17, futur: 30 },
];

export default function MyResponsiveRadar() {
  return (
    <ResponsiveRadar
      data={data}
      keys={['maintenant', 'futur']}
      indexBy="language"
      maxValue="auto"
      margin={{ top: 15, right: 40, bottom: 50, left: 40 }}
      curve="linearClosed"
      borderWidth={2}
      borderColor={{ from: 'color' }}
      gridLevels={5}
      gridShape="circular"
      gridLabelOffset={10}
      enableDots={true}
      dotSize={4}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={2}
      dotBorderColor={{ from: 'color' }}
      enableDotLabel={false}
      dotLabel="value"
      dotLabelYOffset={0}
      colors={{ scheme: 'pastel1' }}
      fillOpacity={0.7}
      blendMode="multiply"
      animate={true}
      isInteractive={true}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          translateX: -50,
          translateY: -30,
          itemWidth: 100,
          itemHeight: 10,
          itemTextColor: '#999',
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );
}

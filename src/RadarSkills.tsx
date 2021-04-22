import { ResponsiveRadar } from '@nivo/radar';
import './RadarSkills.css';

const data = [
  { language: 'Javascript', before: 10, now: 32, after: 40 },
  { language: 'BDD', before: 7, now: 15, after: 20 },
  { language: 'DevOps', before: 10, now: 25, after: 30 },
  { language: 'Java', before: 15, now: 30, after: 40 },
  { language: 'TDD', before: 5, now: 17, after: 30 },
];

export default function MyResponsiveRadar() {
  return (
    <ResponsiveRadar
      data={data}
      keys={['before', 'now', 'after']}
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
          itemWidth: 70,
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

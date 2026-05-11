import Breadcrumb from '@/components/Breadcrumb';
import CourseGridView from '@/components/CourseGridView';
import Animation from '@/helper/Animation';

export default function Services() {
  return (
    <main className={'overflow-hidden'}>
      <Animation />

      {/* Breadcrumb */}
      <Breadcrumb title={'Our Services'} />

      {/* CourseGridView */}
      <CourseGridView />
    </main>
  );
}

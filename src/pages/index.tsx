import styles from './index.less';
import { Helmet } from 'umi';
import { GlobalFooter, GlobalHeader } from '@/pages/components';
import { Router, Route, Link } from 'react-router';
import { Button } from 'antd';

export default function IndexPage() {
  return (
    <div>
      <Helmet>
        <title>My Title</title>
        <meta charSet="utf-8" />
        <link rel="canonical" href="public/favicon.ico" />
      </Helmet>
      <GlobalHeader></GlobalHeader>
      <h1 className={styles.title}>Page index</h1>
      <Button type="primary">Primary Button</Button>
      <GlobalFooter></GlobalFooter>
    </div>
  );
}

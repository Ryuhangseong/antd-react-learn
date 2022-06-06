import styles from './404.less'
import { FrownOutlined } from '@ant-design/icons'

const NotFound = () => (
  <div className={styles.notfound}>
    <FrownOutlined />
    <h1>404 Not Found</h1>
  </div>
)

export default NotFound

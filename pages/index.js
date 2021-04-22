import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo} onClick={() => router.push('/')}>
          <Image
            src='https://ik.imagekit.io/yw2w0b4ajqv/text-it/logos/logo_G6W7KZC74.svg'
            layout='responsive'
            width={25}
            height={27}
          />
        </div>
        <Link href='/login'>
          <a className={styles.login}>Login</a>
        </Link>
      </header>
      <section className={styles.hero}>
        <h1>
          Text<span className={styles.hero.h1?.span}>It</span>
        </h1>
        <p>
          Meet people, contact your friends or do business, in an easy and
          simple way.
        </p>
        <button>Create an account</button>
        <Link href='/login'>
          <a
            className={styles.login}
            style={{ fontSize: '16px', marginTop: '5px' }}
          >
            Login
          </a>
        </Link>
      </section>
      <div className={styles.mockup}>
        <Image
          src='https://ik.imagekit.io/yw2w0b4ajqv/text-it/general/mobile-mockup_zo4s5Wtey.svg'
          width={461}
          height={827}
        />
      </div>
      <section className={styles['features-container']}>
        <h1 className={styles['features-title']}>Express yourself!</h1>
        <div className={styles.features}>
          <div className={`${styles['feature-card']} ${styles.orange}`}>
            <h3>Show your emotions</h3>
            <p>Use our emojis or send images</p>
            <div>
              <Image
                src='https://ik.imagekit.io/yw2w0b4ajqv/text-it/general/card-emojis_bHXf-IPHV.svg'
                width={140}
                height={123}
              />
            </div>
          </div>
          <div className={`${styles['feature-card']} ${styles.blue}`}>
            <h3>Your privacy is primordial</h3>
            <p>
              Your messages are encryptedend to end, in addition, TextIt is open
              source, everyone can know how TextIt works!
            </p>
            <div>
              <Image
                src='https://ik.imagekit.io/yw2w0b4ajqv/text-it/general/features-images-2_WQGrx3dQeL.svg'
                width={217}
                height={137}
              />
            </div>
          </div>
          <div className={`${styles['feature-card']} ${styles.orange}`}>
            <h3>Personalize your profile</h3>
            <p>Introduce yourself as you want</p>
            <div>
              <Image
                src='https://ik.imagekit.io/yw2w0b4ajqv/text-it/general/features-images-3_bO4xniDaEt.svg'
                width={156}
                height={156}
              />
            </div>
          </div>
          <div className={`${styles['feature-card']} ${styles.blue}`}>
            <h3>From your browser!</h3>
            <p>
              Text it works on any browser. You don't need to donwload an
              instaler or extension
            </p>
            <div>
              <Image
                src='https://ik.imagekit.io/yw2w0b4ajqv/text-it/general/features-images-4_42fut9VBj.svg'
                width={296}
                height={253}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

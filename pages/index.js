import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <Head>
        <title>TextIt | Home</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.logo} onClick={() => router.push('/')}>
          <div>
            <Image
              src='https://ik.imagekit.io/yw2w0b4ajqv/text-it/logos/logo_G6W7KZC74.svg'
              layout='responsive'
              width={25}
              height={27}
            />
          </div>
          <h5>TextIt</h5>
        </div>
        <Link href='/'>
          <a className={styles.login}>Login</a>
        </Link>
      </header>
      <section className={styles.hero}>
        <div className={styles['hero-intro']}>
          <h1>
            Text<span>It</span>
          </h1>
          <p>
            Meet people, contact your friends or do business, in an easy and
            simple way.
          </p>
          <div className={styles['hero-cta']}>
            <button>Create an account</button>
            <Link href='/'>
              <a>Login</a>
            </Link>
          </div>
        </div>
        <div className={styles.mockup}>
          <div>
            <Image
              src='https://ik.imagekit.io/yw2w0b4ajqv/text-it/general/mobile-mockup_4ty75VcL0.svg'
              priority
              width={355}
              height={637}
            />
          </div>
        </div>
      </section>
      <section className={styles['features-container']}>
        <h1 className={styles['features-title']}>Express yourself!</h1>
        <div className={styles.features}>
          <div className={`${styles['feature-card']} ${styles.orange}`}>
            <h3>Show your emotions</h3>
            <div className={styles['feature-content']}>
              <p>Use our emojis or send images</p>
              <div>
                <Image
                  src='https://ik.imagekit.io/yw2w0b4ajqv/text-it/general/card-emojis_bHXf-IPHV.svg'
                  width={140}
                  height={123}
                />
              </div>
            </div>
          </div>
          <div className={styles['feature-card']}>
            <h3>Your privacy is primordial</h3>
            <p>
              Your messages are encrypted end to end, in addition, TextIt is
              open source, everyone can know how TextIt works!
            </p>
            <div>
              <Image
                src='https://ik.imagekit.io/yw2w0b4ajqv/text-it/general/features-images-2_WQGrx3dQeL.svg'
                width={217}
                height={137}
              />
            </div>
          </div>
          <div className={styles['feature-card']}>
            <h3>Personalize your profile</h3>
            <div className={styles['feature-content']}>
              <p>Introduce yourself as you want</p>
              <div>
                <Image
                  src='https://ik.imagekit.io/yw2w0b4ajqv/text-it/general/features-images-3_bO4xniDaEt.svg'
                  width={156}
                  height={156}
                />
              </div>
            </div>
          </div>
          <div className={styles['feature-card']}>
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
      <section className={styles.special}>
        <div>
          <Image
            src='https://ik.imagekit.io/yw2w0b4ajqv/text-it/general/connect-image_oHZTIXtSfE.svg'
            width={489}
            height={489}
          />
        </div>
        <section>
          <h3>Conect with the people you love</h3>
          <p>
            Have the ones you care about in one place. Text It allows you to add
            and organize your contact list according to your needs.
          </p>
        </section>
      </section>
      <footer className={styles.footer}>
        <h2>Call It, Say It Text It</h2>
        <div>
          <Image
            src='https://ik.imagekit.io/yw2w0b4ajqv/text-it/logos/logo-personal_vCgW_y5to.svg'
            width={288}
            height={69}
          />
        </div>
        <hr />
        <div className={styles['footer-links']}>
          <span>©2021</span>
          <a
            href='https://github.com/Irvinemmanuel16/textIt'
            target='blank'
            rel='no-referer'
          >
            Source code
          </a>
        </div>
      </footer>
    </main>
  );
}

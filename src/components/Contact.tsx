import { Icon } from '@iconify-icon/react'

export function Contact() {
  return (
    <div className="flex justify-end text-white gap-4">
      <a href="https://t.me/desdiogo" title='Telegram Diogo Eleutero' target="_blank" rel="noreferrer">
        <Icon icon="uil:telegram" width={48} height={48} />
      </a>
      <a href="https://github.com/desdiogo" title='Github Diogo Eleutero' target="_blank" rel="noreferrer">
        <Icon icon="mdi:github" width={48} height={48} />
      </a>
      <a href="https://linkedin.com/in/desdiogo" title='Linkedin Diogo Eleutero' target="_blank" rel="noreferrer">
        <Icon icon="mdi:linkedin" width={48} height={48} />
      </a>
      <a href="mailto:diogo@desdiogo.com.br" title='Email Diogo Eleutero' target="_blank" rel="noreferrer">
        <Icon icon="mdi:email" width={48} height={48} />
      </a>
    </div>
  )
}
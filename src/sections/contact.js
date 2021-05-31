import { jsx } from 'theme-ui';
import { Container, Box, Button, Input, Textarea, Text } from 'theme-ui';
import MailIcon from '@material-ui/icons/Mail';
import emailjs from 'emailjs-com';
import SectionHeader from 'components/section-header';

export default function Contact() {
  const submit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ufq6apu',
        'template_bv29l8r',
        e.target,
        'user_Y91RK2CL5KNadDdb5L9Qo'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact" sx={{ variant: 'section.contact' }}>
      <Container sx={styles.container}>
        <SectionHeader sx={styles.header} slogan="Reach me" title="Contact" />
        <Box>
          <Text sx={styles.text}>
            <MailIcon style={{ marginRight: '10px' }} />
            hernackikacper@gmail.com
          </Text>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
            }}
            onSubmit={submit}>
            <Input name="name" defaultValue="name" sx={styles.input} required />
            <Input
              name="email"
              type="email"
              defaultValue="e-mail"
              sx={styles.input}
              required
            />
            <Textarea
              name="message"
              sx={styles.textarea}
              defaultValue="Message"
              rows={8}
            />
            <Button type="submit" sx={styles.button} variant="primary" required>
              Send
            </Button>
          </form>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  container: {
    pt: '150px',
    width: '90%',
  },
  text: {
    mt: '-20px',
    mb: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1167b1',
  },
  input: {
    mt: '10px',
    maxWidth: '500px',
  },

  textarea: {
    maxWidth: '500px',
  },

  button: {
    width: '100%',
    mt: '10px',
    maxWidth: '500px',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
  },
};

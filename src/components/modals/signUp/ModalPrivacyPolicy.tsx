import React from 'react'
import ModalContainer from '../ModalContainer'
import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Typography
} from '@mui/material'
import { FormikProps } from 'formik'
import { ClinicType, SingUpInterface } from '@/interfaces/auth/auth.interface'

interface ModalPrivacyPolicyProps {
  open: boolean
  state: React.Dispatch<React.SetStateAction<boolean>>
  formikProps: FormikProps<SingUpInterface> | FormikProps<ClinicType>
}

const ModalPrivacyPolicy = ({
  open,
  state,
  formikProps
}: ModalPrivacyPolicyProps) => {
  return (
    <ModalContainer
      size='xl'
      open={open}
      state={state}
      title={
        formikProps.values.terminos
          ? 'Politicas de privacidad'
          : 'Términos y condiciones'
      }>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima impedit
        rerum cupiditate velit quas sit assumenda consectetur eveniet molestiae
        unde magnam saepe, at maxime sequi neque laboriosam voluptatem enim
        error. Perferendis tempore asperiores recusandae maiores fugiat at, quia
        odit voluptates cumque aliquid numquam, sint sed soluta libero quisquam
        sit consectetur ab dolore ut velit. Assumenda autem ullam ut consectetur
        quisquam? Numquam fugiat nemo reiciendis blanditiis? Molestias minus
        reiciendis hic non nemo repellendus maiores vero sed ipsam, voluptatum
        corrupti dolore, quas consectetur alias quos voluptatem, vitae repellat
        labore quo quia fuga! Quis quae optio iste hic nam, perferendis, nulla
        tenetur vel alias libero exercitationem illum consequuntur. Iusto
        facilis, ipsam sequi consequatur rem labore facere quam enim impedit
        laborum accusantium tempore nam. Quas asperiores deleniti culpa! Quaerat
        et nam quas temporibus rem magni expedita ut porro eum veniam. Ipsa,
        repellat delectus. Nesciunt reprehenderit non omnis voluptatem rerum rem
        excepturi dolorum dolor iure! Facere, a ut ea nam possimus quibusdam
        eius illo veniam. Eveniet minus suscipit minima et impedit culpa totam
        nisi cumque. Voluptatibus numquam illum nisi reprehenderit unde itaque,
        a quisquam quaerat! Odit expedita maxime exercitationem. Ipsam, dolorum.
        Ad illo quam odio minima, sapiente, quibusdam similique tempore eos
        alias labore quo obcaecati temporibus et dolorum recusandae laudantium
        quos error? Non, illo hic? Facilis dignissimos reprehenderit deleniti
        optio odit beatae illo ipsam molestias explicabo provident labore rerum,
        voluptas quos, at quis adipisci itaque cupiditate, est perferendis ab.
        Temporibus consequatur corporis unde iusto odit! In dolor, consequatur
        cum, laudantium suscipit maiores minus aperiam consectetur ad adipisci
        ducimus velit numquam? Sequi hic unde, consequatur ex quia autem dolores
        maiores nobis culpa exercitationem, enim, iusto assumenda! Autem
        aspernatur aut consequuntur accusamus eius adipisci soluta modi dolorum
        quia voluptatem quisquam deleniti illo molestias at, doloribus sint
        dignissimos nihil tenetur atque dolore odio nam vitae fuga. Laborum,
        autem? Tempora quia ut, et cumque sequi recusandae, omnis maiores
        molestias nobis possimus totam debitis natus, neque laudantium.
        Voluptatibus distinctio hic accusamus nam esse commodi saepe rem,
        excepturi animi ipsa possimus. Libero quae commodi officia consectetur,
        aliquid ullam fugit necessitatibus, harum eum alias iste sed veritatis
        nemo velit voluptates quisquam laboriosam pariatur nihil id eligendi
        explicabo illo quis! Debitis, mollitia deserunt! Officia id quis iusto?
        Delectus corrupti adipisci tenetur nam pariatur harum a facilis repellat
        minus tempora est rerum, eum quia molestias nesciunt temporibus porro
        iure non ducimus error, dolorum possimus. Voluptatem odio veritatis
        eaque natus dolor qui nisi optio molestiae animi? Culpa necessitatibus
        vero eius, ipsum natus vel animi accusantium nihil inventore voluptates
        eos iste ea, facere est. Temporibus, nobis? Perspiciatis dignissimos,
        quas itaque enim doloribus ad, quae mollitia ratione omnis dolore
        recusandae pariatur. Quis inventore hic temporibus vitae, eius, officiis
        rem omnis libero distinctio beatae atque ipsa tenetur eligendi!
        Laudantium, exercitationem? Enim, non vitae. Aut facilis voluptate
        deserunt dicta fugit aliquam eius odio nostrum nihil assumenda vel
        repellendus temporibus quia ipsa, blanditiis aperiam voluptas quasi
        officiis exercitationem iste veniam! Iure doloribus corporis cumque
        deleniti explicabo delectus, temporibus sint assumenda, qui mollitia
        enim nemo sequi commodi suscipit quae aperiam, modi voluptatem
        recusandae doloremque sapiente eveniet. Qui id impedit suscipit
        laudantium! Magnam tempore consequuntur sequi incidunt sit, corporis id
        nesciunt et animi facere vel repellendus distinctio perspiciatis ducimus
        delectus ab sed! Rem harum, ipsa dolores aperiam doloribus facere.
        Eligendi, rerum repellat. Corporis in porro cumque debitis iusto beatae
        suscipit vitae nemo quae laborum deserunt ipsa nobis tempore ad
        assumenda error quasi maxime aut minus nesciunt, autem excepturi? Ut
        dolore ipsum quos. Numquam facilis dicta quia dolores minus maxime aut
        voluptas exercitationem natus ipsum libero necessitatibus autem quo,
        totam eaque soluta esse inventore amet itaque ad eos illum saepe quod
        quidem! Mollitia! Nobis tenetur vel eveniet explicabo delectus. Vitae
        sunt fuga accusantium saepe voluptatem libero quisquam maxime, id
        laboriosam assumenda. Deserunt harum, laudantium est praesentium
        pariatur voluptas necessitatibus error porro tempore nostrum. Sit minus
        laboriosam enim quibusdam eum at eaque error unde voluptatem, assumenda
        ipsum harum placeat, eligendi eos aliquid voluptatibus. Vitae tempora
        corrupti minima atque at! Dolor distinctio quaerat nisi aperiam. Quas
        fugit ipsam possimus, molestiae distinctio facilis perspiciatis voluptas
        cumque dolorum recusandae consequuntur asperiores provident tenetur,
        nihil accusamus error debitis autem incidunt inventore quaerat nam
        doloremque magnam! Atque, vel ea! Magni ipsum dolorem, provident tempore
        nostrum reprehenderit quidem quos asperiores, eos nesciunt nisi.
        Praesentium aperiam voluptatem inventore odit dolores blanditiis ullam
        quidem error quae ad pariatur, fugit voluptas tempore in! Autem ab
        incidunt optio odit itaque obcaecati dolore corrupti ipsum laudantium
        animi a cupiditate perspiciatis, expedita, quas iste pariatur, odio
        atque? Nobis consectetur mollitia cupiditate porro aliquam deleniti
        harum suscipit! Praesentium nemo enim atque! Qui nulla, aliquid nostrum
        sint nisi eum ipsa? Voluptate reprehenderit amet consectetur corporis
        excepturi consequuntur laudantium omnis. Quia adipisci voluptatibus
        dignissimos. Repellendus ipsa iusto officiis inventore? Placeat debitis
        consectetur facilis eveniet neque asperiores minus expedita excepturi
        eum. Obcaecati optio similique vero doloribus error. Officia atque
        doloribus aperiam a dicta numquam quos laboriosam rerum enim! Illo,
        labore. Vel excepturi laborum explicabo at aspernatur unde atque culpa
        aliquid ad, a quidem maxime repellendus odit minima labore perferendis
        ullam modi, repellat ipsum. Nesciunt assumenda officia vel ad, enim
        atque. Laborum repellendus unde delectus voluptatem. Id illo fuga autem
        commodi aut nostrum sequi expedita, labore incidunt? Ducimus nemo
        necessitatibus veniam blanditiis placeat architecto non earum hic
        ratione. Fugit, aut eveniet! Eius placeat aperiam facilis sapiente
        deleniti tenetur. Explicabo expedita blanditiis asperiores error fugiat,
        alias enim voluptatem repellendus iusto autem illo voluptas neque esse
        hic, distinctio eveniet. Voluptates ducimus veniam enim?
      </Typography>
      <Divider
        sx={{
          marginTop: 2
        }}
      />
      <Box textAlign={'end'} mt={2}>
        {formikProps.values.terminos
          ? (
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  id='politicas'
                  name='politicas'
                  checked={formikProps.values.politicas}
                  value={formikProps.values.politicas}
                  onClick={(e) => {
                    formikProps.handleChange(e)
                    state(false)
                  }}
                  onBlur={formikProps.handleBlur}
                  onChange={formikProps.handleChange}
                />
              }
              label={
                <Typography fontSize={11}>
                  Acepto Política de privacidad.
                  {formikProps.errors.politicas && (
                    <span style={{ color: '#d32f2f' }}>
                      <br />
                      {formikProps.errors.politicas}
                    </span>
                  )}
                </Typography>
              }
            />
          </FormControl>
            )
          : (
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  id='terminos'
                  name='terminos'
                  checked={formikProps.values.terminos}
                  value={formikProps.values.terminos}
                  onClick={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  onChange={formikProps.handleChange}
                />
              }
              label={
                <Typography fontSize={11}>
                  Acepto Términos y condiciones.
                  {formikProps.errors.terminos && (
                    <span style={{ color: '#d32f2f' }}>
                      <br />
                      {formikProps.errors.terminos}
                    </span>
                  )}
                </Typography>
              }
            />
          </FormControl>
            )}
      </Box>
    </ModalContainer>
  )
}

export default ModalPrivacyPolicy

import sanityClient from '@sanity/client'
import ImageUrlBuilder  from '@sanity/image-url'
export const client = sanityClient({
    projectId:"gsjnl0jm",
    dataset:'production',
    apiVersion: "2022-10-16",
    useCdn:true,
    token:"skHSQt9UqkAAYpLORVQyCQrz78j4HGivjtHh84gq1w4kuiNfhbND2HX5jspP4ExMcwRQQaNZf9yrgBxOMI5uR2070vl5QrPffDFZjrQia33RnqLF7p3SSOn57A7FBC4kTB40ZwvOy6JGHBjCiedLnl2mLYQVDsUVIC6vHNQvmboOMHy0GZZH"
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source)=>builder.image(source)
import {Optional} from 'typescript-optional'

export class Texture {
	public texture?: WebGLTexture
	private level = 0
	private internalFormat = 0
	private border = 0
	private srcFormat = 0
	private data = null
	private srcType = 0
	private width = 0
	private height = 0
	private targetTextureWidth = 0
	private targetTextureHeight = 0
	private pixel: Uint8Array = new Uint8Array([106, 163, 149, 255])

	public constructor(private readonly gl: WebGL2RenderingContext) {
		this.gl = gl
		this.internalFormat
		this.srcFormat = this.gl.RGBA
		this.srcType = this.gl.UNSIGNED_BYTE
	}

	fromUrl(url: string): Promise<WebGLTexture> {
		return new Promise((resolve) => {
			const gl = this.gl

			this.texture = Optional.ofNullable(gl.createTexture()).orElseThrow(() => 'Failed to create texture')
			gl.bindTexture(gl.TEXTURE_2D, this.texture)
			gl.texImage2D(
				gl.TEXTURE_2D,
				this.level,
				this.internalFormat,
				this.width,
				this.height,
				this.border,
				this.srcFormat,
				this.srcType,
				this.pixel
			)

			const image = new Image()
			image.onload = () => {
				if (!this.texture) {
					throw 'No texture'
				}
				gl.bindTexture(gl.TEXTURE_2D, this.texture)
				gl.texImage2D(gl.TEXTURE_2D, this.level, this.internalFormat, this.srcFormat, this.srcType, image)

				this.width = image.width
				this.height = image.height

				gl.generateMipmap(gl.TEXTURE_2D)

				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR)

				return resolve(this.texture)
			}
			image.src = url
		})
	}

	empty(targetTextureWidth: number, targetTextureHeight: number): WebGLTexture {
		const gl = this.gl

		this.texture = Optional.ofNullable(gl.createTexture()).orElseThrow(() => 'Failed to create texture')
		gl.bindTexture(gl.TEXTURE_2D, this.texture)

		this.data = null

		this.targetTextureWidth = targetTextureWidth
		this.targetTextureHeight = targetTextureHeight

		gl.texImage2D(
			gl.TEXTURE_2D,
			this.level,
			this.internalFormat,
			this.targetTextureWidth,
			this.targetTextureHeight,
			this.border,
			this.srcFormat,
			this.srcType,
			this.data
		)

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

		return this.texture
	}

	destroy(): void {
		if (this.texture) {
			this.gl.deleteTexture(this.texture)
			delete this.texture
		}
	}
}

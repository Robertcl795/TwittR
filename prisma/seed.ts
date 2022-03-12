import PrismaClientPkg from '@prisma/client'

const PrismaClient = PrismaClientPkg.PrismaClient
const prisma = new PrismaClient()

export function randomURL(): string {
    return Math.random().toString(16).slice(2)
}

export function randomDate(): string {
    const offset = 24 * 60 * 60 * 1000 * 1
    const current = new Date().getTime()
    const random = Math.random() * offset
    const difference = new Date(current - random)

    return difference.toISOString()
}

function getUsers() {
    return [
		{
			name: 'matia',
			handle: '@joyofcodedev',
			email: 'matia@example.test',
			avatar: 'https://gravatar.com/avatar/284cc34a5664be15b079e826efec1ba5?s=400&d=robohash&r=x',
			about: 'Likes long walks on the beach. 😘',
			tweets: {
				create: [
					{
						url: randomURL(),
						posted: randomDate(),
						content: `SvelteKit is lit. 🔥`,
						likes: 10
					},
					{
						url: randomURL(),
						posted: randomDate(),
						content: `I love Svelte! ❤️`,
						likes: 24
					},
					{
						url: randomURL(),
						posted: randomDate(),
						content: `Sometimes when I'm writing JavaScript I want to throw up my hands and say "this is crazy!" but I can't remember what "this" refers to. 🤪`,
						likes: 0
					},
					{
						url: randomURL(),
						posted: randomDate(),
						content: `How do you comfort a JavaScript bug? You console it. 🤭`,
						likes: 0
					}
				]
			}
		},
		{
			name: 'bob',
			handle: '@bobross',
			email: 'bob@example.test',
			avatar: 'https://gravatar.com/avatar/91c80b90a42d96ddf6fa86e1651a62f5?s=400&d=robohash&r=x',
			about: 'Likes painting.',
			tweets: {
				create: [
					{
						url: randomURL(),
						posted: randomDate(),
						content: `Use your imagination. Wind it up, blend it together. The joy of painting really is universal.`,
						likes: 1
					},
					{
						url: randomURL(),
						posted: randomDate(),
						content: `The only thing I have control over is taking out the trash. 😂`,
						likes: 4
					},
					{
						url: randomURL(),
						posted: randomDate(),
						content:
							'Painting is as individual as people are. 👩‍🎨',
						likes: 0
					},
					{
						url: randomURL(),
						posted: randomDate(),
						content:
							'All we do is just sorta have an idea in our mind, and we just sorta let it happen. 🌈',
						likes: 10
					}
				]
			}
		}
	]
}

async function seed() {
	await Promise.all(
		getUsers().map((user) => {
			return prisma.user.create({ data: user })
		})
	)
}

seed()
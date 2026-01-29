export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
    },
    clearMocks: true,
    restoreMocks: true,
    resetMocks: false,
    resetModules: false,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}
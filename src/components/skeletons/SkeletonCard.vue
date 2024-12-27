<template>
	<div class="skeleton-card"></div>
</template>

<style scoped>
.skeleton-card {
	display: flex;
	height: 370px;
	width: 245px;
	padding: 1.25rem; /* 20px */
	position: relative;
	overflow: hidden;
	background-color: #dddbdd;
}

.skeleton-card::after {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	transform: translateX(-100%);
	background-image: linear-gradient(
		85deg,
		rgba(#fff, 0) 0,
		rgba(#fff, 0.2) 20%,
		rgba(#fff, 0.5) 60%,
		rgba(#fff, 0)
	);
	animation: shimmer 1.5s infinite;
	content: "";
}

@keyframes shimmer {
	100% {
		transform: translateX(100%);
	}
}
</style>

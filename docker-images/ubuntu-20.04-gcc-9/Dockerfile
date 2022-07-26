FROM ubuntu:20.04

MAINTAINER Maciej Patro maciejpatro@gmail.com
LABEL description="Package which provides the tooling to build with GCC-9."

RUN apt-get update && \
	DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y \
		g++-9 \
		python3 \
		python3-pip \
		curl \
		zip \
		unzip \
		git \
		tar && \
	rm -rf /var/lib/apt/lists/*

RUN python3 -m pip install --upgrade pip

RUN pip3 install --no-cache-dir \
		cmake \
		conan>=1.40.3 \
		ninja

RUN update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-9 100 && \
	update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-9 100

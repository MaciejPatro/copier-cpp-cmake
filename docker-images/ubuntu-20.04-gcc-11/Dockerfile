FROM ubuntu:20.04

MAINTAINER Maciej Patro maciejpatro@gmail.com
LABEL description="Package which provides the tooling to build with GCC-11."

RUN apt-get update && \
	DEBIAN_FRONTEND=noninteractive apt-get -y install software-properties-common && \
	add-apt-repository ppa:ubuntu-toolchain-r/test

RUN apt-get update && \
	DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y \
        build-essential \
		g++-11 \
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
		'cmake>=3.23' \
		'conan>=1.40.3' \
		ninja

RUN update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-11 100 && \
	update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-11 100

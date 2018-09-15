---
title: Install Arch Linux on ThinkPad X1 Carbon
category: Dev
tags: [Linux]
layout: post
---

It's really a hard time installing Arch Linux on my ThinkPad X1 Carbon. Just write this down to remember the correct installation steps. Reference: [Arch Wiki](https://wiki.archlinux.org/index.php/Installation_guide), [viseator's blog](https://www.viseator.com/2017/05/17/arch_install/).

<!-- more -->

1. Make the USB installation disk via `dd`: [Arch Wiki](https://wiki.archlinux.org/index.php/USB_flash_installation_media#Using_dd) and turn secure boot off.

2. Login and connect to the internet (for WPA/WPA2)
    1. Stop dhcpcd service: 
        `systemctl stop dhcpcd@interface` where `interface` is tab-completed.
    2. Get the name of interface: 
        `iw dev` (here the name is wlp4s0)
    3. Scan the wireless connection: 
        `iwlist wlp4s0 scan`
    4. Connect: 
        `wpa_supplicant -B -i wlp4s0 -c <(wpa_passphrase SSID KEY)`
    5. Check status: 
        `iw dev wlp4s0 link`
    6. Start dhcpcd service: 
        `dhcpcd`
    7. Update clock:
        `timedatectl set-ntp true`
4. Partite the disk
    1. Check [here](https://www.viseator.com/2017/05/17/arch_install/#%E5%88%86%E5%8C%BA%E4%B8%8E%E6%A0%BC%E5%BC%8F%E5%8C%96) for making new partition (acturally, no need here)
    2. Format the partition: 
        `mkfs.ext4 /dev/nvme0n1p2`
5. Mount the filesystem
    1. `mount /dev/nvme0n1p2 /mnt`
    2. (For EFI) `mkdir /mnt/boot && mount /dev/nvme0n1p1 /mnt/boot` where `/dev/nvme0n1p1` is the existing EFI partition
6. Select the source mirrors
    1. `vim /etc/pacman.d/mirrors`, use `y`(copy) and `p`(paste) to copy U.S. sources to the beginning
    2. Install base pkgs: 
        `pacstrap /mnt base base-devel`
7. Configure the system
    1. Fstab: 
        `genfstab -L /mnt >> /mnt/etc/fstab` (`-U` for defined by UUID and `-L` for labels); Check by `cat` to see if there's errors
    2. Change root: 
        `arch-chroot /mnt`
    3. Select timezone: 
        ```
        ln -sf /usr/share/zoneinfo/America/Chicago /etc/localtime
        hwclock --systohc
        ```
    4. set root password: 
        `passwd`
    5. Pre-install pkgs: 
        `pacman -S vim dialog wpa_supplicant ntfs-3g networkmanager`
    6. Set locale: 
        `vim /etc/locale.gen`, uncomment `zh_CN, en_US`, then
        ```
        locale-gen
        echo "LANG=en_US.UTF-8" >> /etc/locale.conf
        ```
    7. Set hostname: `echo "chuan" >> /etc/hostname`
    8. Set hosts: 
        `vim /etc/hosts` and add entries
        ```
        127.0.0.1   localhost
        ::1         localhost
        127.0.1.1   chuan.localdomain chuan
        ```
    9. Install bootloader
        ```
        pacman -S intel-ucode
        pacman -S os-prober
        pacman -S grub efibootmgr
        grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=grub
        grub-mkconfig -o /boot/grub/grub.cfg
        ```
        IF WARNING/ERROR: check [viseator's blog](https://www.viseator.com/2017/05/17/arch_install/#%E5%A6%82%E6%9E%9C%E4%B8%BAEFI-GPT%E5%BC%95%E5%AF%BC%E6%96%B9%E5%BC%8F%EF%BC%9A)
    10. Check: see the same link above.
    11. Reboot:
        ```
        exit
        reboot
        ```
8. Configure after installations Ref: [viseator's blog](https://www.viseator.com/2017/05/19/arch_setup/), [Arch Wiki](https://wiki.archlinux.org/index.php/General_recommendations)
    1. If in 7.10 there's no entry for Windows, then run 
        ```
        grub-mkconfig -o /boot/grub/grub.cfg
        ```
    2. Connect to internet:
        ```
        wifi-menu
        ```
    3. Add user: (`-m`: add home folder, `-G wheel`: add to group)
        ```
        useradd -m -G wheel chuan
        ```
    4. Install and configure `sudo`:
        ```
        pacman -S sudo
        visudo
        ```
        uncomment `# %wheel ALL=(ALL)ALL`, `reboot` -> notice to connect to the Internet!
9. Install GUI
    1. Driver for graphics card
        ```
        sudo pacman -S xf86-video-intel
        ```
    2. Xorg
        ```
        sudo pacman -S xorg
        ```
    3. DE
        ```
        sudo pacman -S gnome
        sudo pacman -S sddm
        ```
    4. startups
        ```
        sudo systemctl enable sddm
        sudo systemctl disable netctl
        sudo systemctl enable NetworkManager
        ```

Done.
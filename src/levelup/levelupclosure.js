//minified with google closure compilier, use other file for editing please.
window.xhordes = {levelup:function(player) {
  if (typeof localStorage.levelsenabled === "undefined") {
    localStorage.levelsenabled = "true";
  } else {
    if (localStorage.levelsenabled === "false") {
      return;
    } else {
      if (typeof window.xhordes.levelUpData.initial === "undefined") {
        window.xhordes.levelUpData.initial = player["class"].level;
        window.xhordes.levelUpData.initialPlayer = player;
      } else {
        if (window.xhordes.levelUpData.checkCurrent(player)) {
          document.getElementById("leveluptextxhordes").textContent = "You have leveled up to level " + player["class"].level + "!";
          var items = window.xhordes.levelUpData.unlockedItems(player);
          if (items.length === 0) {
            document.getElementById("itemdetailtextxhordes").textContent = "Unfortunately, you have not unlocked any new items at this level.";
            return $("#xhordeslevel").modal("show");
          } else {
            var itemList = document.getElementById("itemlistxhordes");
            itemList.innerHTML = "";
            for (var i = 0; i < items.length; i++) {
              var newItem = document.createElement("li");
              newItem.innerHTML = items[i] + (' <img src="' + xhordes.levelUpData.getImageURL(items[i]) + '"/>');
              itemList.appendChild(newItem);
            }
            $("#xhordeslevel").modal("show");
          }
        }
      }
      return;
    }
  }
}, levelUpData:{initial:undefined, initialPlayer:undefined, checkCurrent:function(player) {
  if (player.faction === window.xhordes.levelUpData.initialPlayer.faction && player.name === window.xhordes.levelUpData.initialPlayer.name && player["class"].type === window.xhordes.levelUpData.initialPlayer["class"].type && player["class"].level > window.xhordes.levelUpData.initial) {
    window.xhordes.levelUpData.initial = player["class"].level;
    window.xhordes.levelUpData.initialPlayer = player;
    return true;
  } else {
    window.xhordes.levelUpData.initial = player["class"].level;
    window.xhordes.levelUpData.initialPlayer = player;
    return false;
  }
}, unlockedItems:function(player) {
  var propNames = Object.getOwnPropertyNames(window.xhordes.Et);
  var itemList = [];
  for (var i = 0; i < propNames.length; i++) {
    var group = window.xhordes.Et[propNames[i]];
    if (typeof group.name !== "string") {
      if ((typeof group["class"] === "undefined" || group["class"].includes(player["class"].type)) && group.lvl.includes(player["class"].level)) {
        itemList.push(group.name[group.lvl.indexOf(player["class"].level)]);
      }
    }
  }
  return itemList;
}, getImageURL:function(item) {
  var propNames = Object.getOwnPropertyNames(window.xhordes.Et);
  var URL = "https://hordes.io/data/items/";
  for (var i = 0; i < propNames.length; i++) {
    var group = window.xhordes.Et[propNames[i]];
    if (typeof group.name !== "string") {
      if (group.name.includes(item)) {
        URL += window.xhordes.Et[propNames[i]].type.toLowerCase() + group.name.indexOf(item) + ".png";
        i = propNames.length;
      }
    }
  }
  return URL;
}}};
!function(t, n) {
  function r(t, e) {
    for (var i = 0; i < xt.length; i++) {
      if (t >= xt[i].value) {
        return (t / xt[i].value).toFixed(e).replace(bt, "$1") + xt[i].symbol;
      }
    }
    return t.toFixed(e).replace(bt, "$1");
  }
  function o(t, e) {
    "string" == typeof(t = t.substring(0, 150)) && "" != t && wn.emit("c", {m:t, i:e});
  }
  function c(t, e) {
    if (void 0 !== Gt && (Gt.dispose(), delete Gt, Gt = void 0), void 0 !== jt && (it(jt), wi.remove(jt), delete jt, jt = void 0), "0" != zt.get("grass")) {
      (Gt = new THREE.InstancedBufferGeometry).copy(new THREE.PlaneBufferGeometry(2, 2)), _i = t;
      var i = 5e3;
      switch(parseInt(zt.get("grass"))) {
        default:
        case 1:
          i = 7;
          break;
        case 2:
          i = 15;
          break;
        case 3:
          i = 30;
          break;
        case 4:
          i = 60;
          break;
        case 5:
          i = 100;
      }
      for (var n = [], r = [], a = [], s = [], o = 0, c = 0, l = 0; l < t.width; ++l) {
        for (var h = 0; h < t.height; ++h) {
          var u = tt(l, h), d = u.a / 255;
          if (!(u.a <= 5)) {
            for (var p = 0; p < i * d; ++p) {
              var f = (l + Math.random()) / t.width, m = (h + Math.random()) / t.height, g = Math.floor(m * (yi / Di)) * xi + 3 * Math.floor(f * (yi / Di));
              n[c + 0] = f * yi, n[c + 1] = Hi(yi * f, yi * m) + .6, n[c + 2] = m * yi, r[o] = d * (Math.random() + .1) * 2.5 + .4, a[c + 0] = .1 * Math.random() - .05 + u.r / 255, a[c + 1] = .1 * Math.random() - .05 + u.g / 255, a[c + 2] = .1 * Math.random() - .05 + u.b / 255, Math.random() < 1 / (10 * i) && (r[o] += 1.5 * Math.random(), a[c + 0] *= .3 * Math.random() + .7, a[c + 1] *= .3 * Math.random() + .7, a[c + 2] *= .3 * Math.random() + .7), s[c + 0] = e.attributes.normal.array[g], s[c + 1] =
              e.attributes.normal.array[g + 1], s[c + 2] = e.attributes.normal.array[g + 2], o++, c += 3;
            }
          }
        }
      }
      Gt.addAttribute("translate", new THREE.InstancedBufferAttribute(new Float32Array(n), 3, 1)), Gt.addAttribute("color", new THREE.InstancedBufferAttribute(new Float32Array(a), 3, 1)), Gt.addAttribute("scale", new THREE.InstancedBufferAttribute(new Float32Array(r), 1, 1)), Gt.addAttribute("groundNormal", new THREE.InstancedBufferAttribute(new Float32Array(s), 3, 1)), Wi.foliage || (Wi.foliage = new THREE.RawShaderMaterial({uniforms:{map:{value:ft.grass}, shadow:{value:Si.shadow.map}, time:{value:0},
      camXRot:{value:0}, camYRot:{value:0}, ambient:{value:Ti.color}, directional:{value:Si.color}, directionalDir:{value:Si.position}, directionalMVP:{value:new THREE.Matrix4}, maxDrawDistance:{value:150}, fogColor:{value:wi.fog.color}, fogDensity:{value:wi.fog.density}, targetCircle:{value:new THREE.Vector4(0, 0, 0, 2)}, targetCirclePos:{value:new THREE.Vector2(0, 0)}, shadowSize:{value:0}, playerscale:{value:1}}, vertexShader:mt["grass.vert"], fragmentShader:mt["grass.frag"], depthTest:!0, depthWrite:!0})),
      (jt = new THREE.Mesh(Gt, Wi.foliage)).frustumCulled = !1, wi.add(jt);
    }
  }
  function l() {
    if (void 0 !== Gt) {
      var t = 5e-4 * performance.now();
      Wi.foliage.uniforms.time.value = t;
      var e = Ai.getWorldRotation();
      Wi.foliage.uniforms.camXRot.value = e.x, Wi.foliage.uniforms.camYRot.value = e.y, Wi.foliage.uniforms.directionalMVP.value = Si.shadow.matrix, Si.shadow.map && Wi.foliage.uniforms.shadow.value != Si.shadow.map.texture && (Wi.foliage.uniforms.shadow.value = Si.shadow.map.texture), Pi ? (void 0 !== Pi.stats.scale && (Wi.foliage.uniforms.playerscale.value = Pi.stats.scale), Pi.target || $i && $i.drop ? $i && $i.drop ? (Wi.foliage.uniforms.targetCirclePos.value = new THREE.Vector2($i.position.x,
      $i.position.z), Wi.foliage.uniforms.targetCircle.value.w = 2, Wi.foliage.uniforms.targetCircle.value.x = 0, Wi.foliage.uniforms.targetCircle.value.y = 0) : (Wi.foliage.uniforms.targetCirclePos.value = new THREE.Vector2(Pi.target.visualPosition.x, Pi.target.visualPosition.z), Wi.foliage.uniforms.targetCircle.value.w = Pi.target.stats.scale + .5, Wi.foliage.uniforms.targetCircle.value.x = Pi.target.faction == Pi.faction ? 0 : 1, Wi.foliage.uniforms.targetCircle.value.y = Pi.target.faction ==
      Pi.faction ? 1 : 0) : Wi.foliage.uniforms.targetCirclePos.value = new THREE.Vector2(0, 0)) : Wi.foliage.uniforms.playerscale.value = 1;
    }
  }
  function h(t, e) {
    this.position = new THREE.Vector3(0, 0, 0), this.velocity = new THREE.Vector3, this.walkForward = 0, this.walkSideward = 0, this.rotation = 0, this.state = new T, this.name = "", this.id = "", this.faction = t, this.stats = new w(this), this["class"] = new U, this["class"].stats = this.stats, this.target = void 0, this.combat = !1, this.clan = "", this.clanrole = 0, this.ignSteep = !1, this.emote = 0, this.gold = 0, this.fame = 0, this.last = {}, this.last.gold = 0, this.last.faction = -1, this.last.name =
    "", this.last.id = "", this.last.position = new THREE.Vector3, this.last.walkForward = 0, this.last.walkSideward = 0, this.last.rotation = 0, this.last.updateTime = Date.now(), this.last.state = {}, this.last["class"] = {}, this.last["class"].ai = {}, this.last["class"].ai.isresetting = 0, this.last.state.id = 0, this.last.target = {}, this.last.target.id = void 0, this.last.stats = {}, this.last.isAi = !1, this.last.combat = !1, this.last.emote = 0, this.visuals = {h:0}, this.last.visuals =
    {h:0}, this.serverMsgQueue = {}, Wt ? (this.lastDmgTakenTime = 0, this["class"] = e, this["class"].stats = this.stats, this["class"].parent = this, this.respawn = !1, this.pickup = void 0, this.fullrequests = [], this["class"].ai ? (this["class"].ai["class"] = this["class"], this["class"].ai.parent = this, this.isAi = !0) : (this.lastPositionUpdate = new THREE.Vector3, this.inventory = new Inventory), this.ignoreMovement = 0, this["class"].update(), this.stats.spawn(), this["class"].skills[1].setLevel(1),
    this.personalMessages = {}) : (this.globalAnimStepFuss = Math.round(2 * Math.random()), this.dmgShake = 0, this["class"].ai = void 0, this["class"].color = Wi.monster, this.next = {}, this.next.position = new THREE.Vector3, this.animationQueue = []);
  }
  function u(t) {
    for (var e in t) {
      return !1;
    }
    return !0;
  }
  function d(t, e) {
    var i = e.x - t.x, n = e.z - t.z;
    return Math.sqrt(i * i + n * n);
  }
  function p(t, e) {
    this.a = t, this.b = e, this.aggroA = 0, this.aggroB = 0, this.expShareA = 0, this.expShareB = 0;
  }
  function f(t) {
    Wt ? this.serverInit(t) : this.clientInit(t);
  }
  function g() {
    return Ue = void 0, window.removeEventListener("mousemove", v, !0), !1;
  }
  function v(t) {
    Ue && (Ue.style.top = t.clientY - Oe + "px", Ue.style.left = t.clientX - Fe + "px");
  }
  function y(t) {
    return t.charAt(0).toUpperCase() + t.substring(1);
  }
  function b(t) {
    if (this.name = t.name || "", this.target = t.target || void 0, this.source = t.source || void 0, this.ribbon = t.ribbon || void 0, this.effectCallback = t.effect || void 0, this.effectInterval = t.effectInterval || -1, this.effectTimer = this.effectInterval, this.timeout = t.timeout || 30, this.mode = t.mode || "follow", this.movespeed = t.movespeed || 10, this.movedir = t.movedir || void 0, this.position = new THREE.Vector3, t.startposition) {
      this.position.copy(t.startposition);
    } else {
      if (this.source) {
        if (this.position.copy(this.source.position), this.source) {
          var e = P(this.source.rotation);
          e.multiplyScalar(1.2 * this.source.stats.scale);
        }
        if (this.position.x += e.x, this.position.z += e.y, !Wt) {
          var i = this.source.chest ? this.source.chest.getWorldPosition() : this.source.position;
          this.position.y = i.y;
        }
      } else {
        this.deleteMe = !0;
      }
    }
    Wt || (t.tick && (this.visualtick = t.tick), this.geometry = t.geometry || new THREE.Mesh(new THREE.BoxGeometry(.3, .3, .3), new THREE.MeshBasicMaterial({color:255})), this.geometry.position.copy(this.position), wi.add(this.geometry), this.ribbon && (this.ribbonObject = fn(this.ribbon)));
  }
  function _(t, e, i) {
    this.slot = t, this["class"] = e, this.predict = void 0 === i.predict || i.predict, this.ignoreEc = void 0 !== i.ignoreEc && i.ignoreEc, this.simulate = void 0 !== i.simulate && i.simulate, this.allowDeadTarget = void 0 !== i.allowDeadTarget && i.allowDeadTarget, this.description = i.description || "missing description", this.manacost = i.mana || 0, this.levelUpMinLevel = 0, this.level = 0, this.nextLevelCost = 0, this.abilitypower = 0, this.setLevel(i.baselevel || 0), this.name = i.name || "Error: no skill id",
    this.icon = i.icon || "hpbarbg", this.targettype = i.targettype || "enemy", this.unique = i.unique || !1, this.casttype = i.casttype || "instant", this.casttime = i.casttime || 0, this.casttimer = 0, this.casttarget = void 0, this.cooldown = void 0 !== i.cooldown ? i.cooldown : 0, this.cooldowntimer = 0, this.causeGlobalCooldown = void 0 === i.causeGlobalCD || i.causeGlobalCD, this.maxrange = i.maxrange || 1e3, this.spell = i.spell || void 0, this.hasChanneledSpell = i.spellchannel || void 0,
    this.effect = i.effect || function() {
      console.log("error, missing skill effect: " + this.name);
    }, this.effecttype = i.effecttype || "instant", this.channelInterval = i.channelInterval || ("channel" == this.effecttype ? 1 : void 0), this.channelDuration = i.channelDuration || ("channel" == this.effecttype ? 2 : void 0), this.channelMoveInterrupt = void 0 === i.channelMoveInterrupt || i.channelMoveInterrupt, this.channelInstantFirstTick = void 0 !== i.channelInstantFirstTick && i.channelInstantFirstTick, this.channelDuration && (this.channelTimer = -1), this.channelInterval && (this.channelIntervalTimer =
    -1), this.onCastFun = i.onCastFun || void 0;
    var n = this;
    this.effectWrapper = function(t) {
      n.effect && (t.source = t.source || n.parent, t.target = t.target || n.casttarget, n.effect(t));
    }, Wt || (this.getCharacterAnim = i.characterAnim || function() {
      return new X({id:"release_spell", duration:.5});
    }), Wt || ("timed" == this.casttype && (this.castAnimation = i.castAnim || new X({id:"cast", duration:.8, type:"loop"})), "channel" == this.effecttype && (this.channelAnimation = i.channelAnim || new X({id:"channel", duration:.5, type:"loop"})));
  }
  function w(t) {
    this.scale = 1, this.currenthp = 1, this.currentmp = 1, this.maxhp = 1, this.maxmp = 1, this.currentmindmg = 1, this.currentmaxdmg = 1, this.hpregen = 0, this.mpregen = 0, this.movespeed = 1, this.basemana = 100, this.healmod = 1, this.defense = 1, this.crit = 0, this.parent = t, this.incapacitated = !1, this.stunned = !1, this.periodicTickTimerHP = 0, this.periodicTickTimerMP = 0, this.mods = [];
  }
  function M(t, e, i) {
    this.id = i.id || void 0, this.duration = i.duration || 1, this.effectinterval = i.interval || -1, this.effectfunction = i.effect || void 0, this.name = i.name || "Error: no name", this.overwrite = i.overwrite || !1, this.unique = i.unique || !1, this.invincible = i.invincible || !1, this.incapacitate = i.incapacitate || !1, this.stun = i.stun || !1, this.movespeed = i.movespeed || void 0, this.healmod = i.healmod || void 0, this.target = t, this.source = e, this.timer = this.duration, this.effecttimer =
    this.effectinterval, this.deleteMe = !1;
  }
  function E() {
    this.id = 0, this.timer = 0, this.duration = 0, this.tick = function(t, e) {
    };
  }
  function T() {
    this.id = 0, this.duration = 0, this.tick = function(t, e) {
      if (Wt && void 0 !== e.queuedSkill) {
        0 !== e.walkForward || 0 !== e.walkSideward ? e.queuedSkill = void 0 : (e.useSkill(e.queuedSkill, !0), e.queuedSkill = void 0);
      } else {
        if (!Wt && e.animationQueue && e.animationQueue[0]) {
          switch(e.animationQueue[0].id) {
            case "cast":
            case "dead":
              e.animationQueue[0].deleteMe = !0;
          }
        }
      }
    };
  }
  function S(t) {
    this.id = 1, this.skill = t.skill, this.duration = t.casttime || 1, Wt || (this.duration += Tn / 1e3), this.maxduration = this.duration, this.active = t.activeCheck, this.interrupt = t.interrupt, this.tick = function(t, e) {
      !this.active.call(this.skill) || this.skill.channelMoveInterrupt && (e.walkForward || e.walkSideward) ? (this.skill.channelMoveInterrupt && (e.walkForward || e.walkSideward) && this.interrupt.call(this.skill), e.state = new T) : (this.duration -= t, this.duration < 0 && Wt && (e.state = new T));
    };
  }
  function A() {
    this.id = 2, this.duration = 5, this.tick = function(t, e) {
      this.timer += t;
    };
  }
  function C(t) {
    var e = t.angle() + .5 * Math.PI;
    return e > 2 * Math.PI && (e -= 2 * Math.PI), e = 2 * Math.PI - e;
  }
  function L(t, e) {
    for (var i = e - t; i < -Math.PI;) {
      i += 2 * Math.PI;
    }
    for (; i > Math.PI;) {
      i -= 2 * Math.PI;
    }
    return i;
  }
  function P(t) {
    return new THREE.Vector2(-Math.sin(t), -Math.cos(t));
  }
  function R(t, e) {
    return C(new THREE.Vector2(e.x - t.x, e.z - t.z));
  }
  function D(t, e) {
    return C(new THREE.Vector2(e.position.x - t.position.x, e.position.z - t.position.z));
  }
  function I(t, e) {
    return t.position.distanceTo(e);
  }
  function N(t, e) {
    return t.position.distanceTo(e.position);
  }
  function U() {
    this.level = 1, this.nextLevelExp = 1, this.sumexp = 0, this.exp = 0, this.mindmg = 1, this.maxdmg = 1, this.maxhp = 5, this.scale = 1, this.crit = 0;
  }
  function F() {
    var t = new G(100);
    return t.skills[1].setLevel(1), t.skills[2].setLevel(1), t.exp = 0, t.fame = 5e3, t.gold = 1e4, t.type = "king", t.ai = new rt, Wt && (t.ai.protect = !0, t.ai.idleinterval = 20, t.ai.idleradius = 2, t.ai.aggrodistance = 45, t.ai.idlewalkduration = .02, t.ai.hardResetDistanceSqr = 6e3), Wt || (t.color = Wi.warden), t.getMaxHp = function() {
      return 1e5;
    }, t.getMinDmg = function() {
      return 2e3;
    }, t.getMaxDmg = function() {
      return 2500;
    }, t.getMovespeed = function() {
      return 1 == this.ai.isresetting ? 25 : 15;
    }, t.getScale = function() {
      return 6;
    }, t;
  }
  function O() {
    var t = new G(100);
    return t.skills[1].setLevel(1), t.skills[2].setLevel(1), t.skills[3].setLevel(1), t.skills[4].setLevel(1), t.fame = 300, t.gold = 1e3, t.ai = new rt, Wt && (t.ai.protect = !0, t.ai.idleinterval = 20, t.ai.idleradius = 2, t.ai.aggrodistance = 45, t.ai.idlewalkduration = .02, t.ai.hardResetDistanceSqr = 6e3), t.type = "warden", Wt || (t.color = Wi.warden), t.getMaxHp = function() {
      return 5e4;
    }, t.getMinDmg = function() {
      return 1600;
    }, t.getMaxDmg = function() {
      return 1600;
    }, t.getMovespeed = function() {
      return 1 == this.ai.isresetting ? 25 : 15;
    }, t.getScale = function() {
      return 1.8;
    }, t;
  }
  function B() {
    var t = new G(100);
    return t.fame = 300, t.gold = 1e3, t.type = "vendor", t.idleAi = !0, Wt || (t.color = Wi.vendor), t.getMaxHp = function() {
      return 5e4;
    }, t.getHpRegen = function() {
      return 1e3;
    }, t.getScale = function() {
      return 1.5;
    }, Wt || (t.initBodyGeometry = function() {
      this.weapon = new THREE.Mesh(un.generic_vendorlist.geo, Wi.archer_ammo2), this.weapon.scale.set(un.generic_vendorlist.scale[0], un.generic_vendorlist.scale[1], un.generic_vendorlist.scale[2]), this.weapon.position.set(0, 0, 1), this.hands.r.add(this.weapon), this.backpack = new THREE.Mesh(un.generic_backpack.geo, Wi.generic_wood), this.backpack.scale.set(un.generic_backpack.scale[0], un.generic_backpack.scale[1], un.generic_backpack.scale[2]), wi.add(this.backpack), this.backpack.position.set(0,
      .2, .7), this.chest.add(this.backpack);
    }, t.tickClassAnimation = function(t, e) {
      switch(t) {
        default:
        case "idle":
          this.hands.r.position.z -= .5, this.hands.r.rotation.y += 4, this.hands.r.rotation.z += .5, this.hands.r.rotation.x -= .5, this.weapon.rotation.set(0, 0, 0), this.weapon.position.set(0, 0, 1);
      }
    }), t;
  }
  function z(t) {
    this.level = t, this.ai = new rt, this.type = "mob_sword", this.exp = 0, Wt || (this.color = Wi.monster), this.skills = {1:new _(1, this, {name:"Melee Attack", targettype:"enemy", casttype:"instant", baselevel:3, cooldown:1, maxrange:1.5, simulate:!0, effect:function() {
      ce.damage({spread:.2, attacker:this.parent, target:this.casttarget});
    }, characterAnim:function() {
      return new X({id:"swing_melee", duration:.5});
    }})};
  }
  function H(t) {
    this.level = t, this.ai = new rt, this.type = "mob_bow", this.exp = 0, Wt || (this.color = Wi.bone, this.initBodyGeometry = function() {
      this.weapon = new THREE.Mesh(un.archer_bow.geo, Wi.generic_wood), this.weapon.scale.set(2.5, 2.5, 1.9), this.weapon.rotation.z = .32, this.weapon.position.y = -2, this.bowcontainer = new THREE.Object3D, this.bowcontainer.add(this.weapon), this.bowcontainer.rotation.z = 1.5, this.bowcontainer.rotation.x = 1.6, this.bowcontainer.position.x = 1.1, this.bowcontainer.position.z = -.1, this.hands.l.add(this.bowcontainer);
    }, this.tickClassAnimation = q.prototype.tickClassAnimation), this.skills = {1:new _(1, this, {name:"Piercing Shot", targettype:"enemy", casttype:"instant", baselevel:2, maxrange:20, cooldown:1.5, simulate:!0, spell:function(t, e, i) {
      if (!Wt) {
        var n = new THREE.Mesh(un.archer_arrow.geo, Wi.generic_wood);
        n.scale.set(un.archer_arrow.scale[0], un.archer_arrow.scale[1], un.archer_arrow.scale[2]);
      }
      return new b({name:"Pierce Shot", target:t, source:e, effect:i, mode:"follow", movespeed:50, geometry:n || void 0, ribbon:Wt ? void 0 : {deleteWithSpell:!1, parent:n, stepInterval:.08, steps:3, timeout:1, material:Wi.ribbon_arrow, aPos:new THREE.Vector3(.6, 0, 0), bPos:new THREE.Vector3(-.6, -0, 0)}});
    }, effect:function(t) {
      t.target && ce.damage({spread:.2, attacker:this.parent, target:this.casttarget});
    }, characterAnim:function() {
      return new X({id:"release_spell", duration:.3});
    }})};
  }
  function V(t) {
    this.level = t, this.ai = new rt, this.type = "mob_slime", this.exp = 0, Wt || (this.color = t < 12 ? Wi.slime_green : t < 30 ? Wi.slime_blue : Wi.slime_red), this.skills = {1:new _(1, this, {name:"Melee Attack", targettype:"enemy", casttype:"instant", baselevel:3, cooldown:1, maxrange:1.5, simulate:!0, effect:function() {
      ce.damage({spread:.2, attacker:this.parent, target:this.casttarget});
    }, characterAnim:function() {
      return new X({id:"swing_melee", duration:.5});
    }})};
  }
  function G(t) {
    this.level = t, this.type = "warrior", Wt || (this.color = Wi.warrior), this.skills = {1:new _(1, this, {name:"Deep Cut", mana:.08, description:"Slash your enemies arteries, causing them to bleed over a period of time. Heals you for a percentage of your missing health.", icon:"data/skill/warrior_rend.jpg", targettype:"enemy", casttype:"instant", baselevel:1, maxrange:1.5, simulate:!0, effect:function() {
      var t = this.abilitypower;
      this.parent.takeHealing(.1 * (this.parent.stats.maxhp - this.parent.stats.currenthp), this.parent), ce.damage({spread:.2, basedmg:5, scaledmg:.5 + .4 * this.abilitypower, attacker:this.parent, target:this.casttarget, mod:{id:"deepcut", overwrite:!0, duration:5, interval:1, movespeed:function(t) {
        return .65 * t;
      }, effect:function() {
        ce.damage({attacker:this.source, target:this.target, spread:.1, basedmg:10, scaledmg:.2 + .1 * t});
      }}});
    }, characterAnim:function() {
      return fn({parent:this.parent.weapon, aPos:new THREE.Vector3(0, 1.5, 0), bPos:new THREE.Vector3(0, -.3, 0), material:Wi.ribbon_arrow, stepInterval:.01, steps:10, timeout:.45}), new X({id:"swing_melee", duration:.45});
    }}), 2:new _(2, this, {name:"Whirlwind", mana:.2, icon:"data/skill/warrior_spin.jpg", description:"Spin your sword, dealing damage to enemies in a circle around you. Decreases movement speed while active.", targettype:"none", casttype:"instant", cooldown:6, effecttype:"channel", channelInterval:.5, channelDuration:4, channelMoveInterrupt:!1, channelInstantFirstTick:!0, maxrange:8, predict:!1, effect:function() {
      ce.damage({scaledmg:.42 + .4 * this.abilitypower, basedmg:3, spread:.2, attacker:this.parent, mode:"aoe", aoeRange:4}), this.parent.stats.addMod(new M(this.parent, this.parent, {duration:.8, name:"Whirlwind Slow", movespeed:function(t) {
        return 5;
      }}));
    }, channelAnim:Wt ? void 0 : new X({id:"spin", duration:.5, type:"loop"}), onCastFun:Wt ? void 0 : function() {
      fn({parent:this.parent.weapon, aPos:new THREE.Vector3(0, 1.8, 0), bPos:new THREE.Vector3(0, -.3, 0), material:Wi.ribbon_whirlwind, stepInterval:.015, steps:15, timeout:4});
    }}), 3:new _(3, this, {name:"Charge", mana:.2, icon:"data/skill/warrior_charge.jpg", description:"Charge at your enemy, interrupting his current cast and stopping his movements.", casttype:"instant", cooldown:9, effecttype:"channel", channelInterval:.1, channelDuration:5, maxrange:35, channelMoveInterrupt:!1, ignoreEc:!0, predict:!1, effect:function() {
      this.casttarget && re(this.parent, this.casttarget).distance() > 1.5 && !this.casttarget.stats.isDead() ? (this.parent.rotation = D(this.parent, this.casttarget), this.parent.walkForward = 1, this.parent.walkSideward = 0, Wt ? (this.parent.ignoreMovement = .1, this.parent.stats.addMod(new M(this.parent, this.parent, {duration:.15, name:"Charge", unique:!1, movespeed:function(t) {
        return 30;
      }}))) : this.parent.ignoreInput = .15, this.casttarget.stats.addMod(new M(this.casttarget, this.parent, {duration:1, name:"Stun", unique:!0, incapacitate:!0})), this.casttarget.walkForward = 0, this.casttarget.walkSideward = 0, ce.interrupt(this.casttarget, this.parent)) : (this.interruptChannel(), this.parent.walkForward = 0, this.parent.walkSideward = 0);
    }}), 4:new _(4, this, {name:"Taunt", mana:.2, icon:"data/skill/warrior_shout.jpg", description:"Intimidate your enemies with a loud roar, generating high levels of threat and regenerating a portion of your missing health. Removes debuffs.", targettype:"none", casttype:"instant", cooldown:20, maxrange:30, simulate:!0, effect:function() {
      var t = this.abilitypower;
      ce.damage({scaledmg:.2 + .02 * this.abilitypower, basedmg:3 + 2 * this.abilitypower, spread:.1, attacker:this.parent, mode:"aoe", aoeRange:23, aggro:1e3}), this.parent.stats.addMod(new M(this.parent, this.parent, {id:"tauntreg", overwrite:!0, duration:10, interval:1, effect:function() {
        ce.damage({attacker:this.source, target:this.target, spread:.1, basedmg:(this.target.stats.maxhp - this.target.stats.currenthp) * (.04 + .018 * t), scaledmg:0, heal:!0});
      }}));
    }, characterAnim:function() {
      return new X({id:"boost", duration:1});
    }})};
  }
  function j(t) {
    this.level = t, this.type = "mage", Wt || (this.color = Wi.mage), this.skills = {1:new _(1, this, {name:"Ice Bolt", mana:.05, description:"Fire a magic ice bolt at the enemy, dealing damage to all targets in the area and slowing them for a brief moment.", icon:"data/skill/mage_icebolt.jpg", targettype:"enemy", casttype:"instant", baselevel:1, maxrange:30, simulate:!0, spell:function(t, e, i) {
      if (!Wt) {
        var n = new THREE.Mesh(un.icebolt.geo, Wi.generic_ice);
        n.scale.z = 2;
      }
      return new b({name:"Ice Bolt", target:t, source:e, effect:i, mode:"follow", movespeed:20, geometry:n || void 0, ribbon:Wt ? void 0 : {deleteWithSpell:!1, parent:n, stepInterval:.1, steps:5, timeout:2, material:Wi.ribbon_ice, aPos:new THREE.Vector3(.9, 0, 1), bPos:new THREE.Vector3(-.9, 0, 1)}});
    }, effect:function(t) {
      ce.damage({scaledmg:.3 + .3 * this.abilitypower, basedmg:5, attacker:t.source, mode:"aoe", aoeRange:9, aoeCenter:t.target.position, mod:{unique:!0, id:"frostcallfrosted", duration:6, name:"Frosted", movespeed:function(t) {
        return .6 * t;
      }}});
    }}), 2:new _(2, this, {name:"Frostcall", mana:.2, description:"You call down a blizzard on an enemies position, dealing damage over time. Channeled.", icon:"data/skill/mage_blizzard.jpg", targettype:"enemy", casttype:"timed", casttime:1, effecttype:"channel", channelInterval:1, channelDuration:5, spellchannel:!0, baselevel:1, cooldown:7, maxrange:35, channelInstantFirstTick:!0, allowDeadTarget:!0, spell:function(t, e, i) {
      if (t) {
        return new b({name:"Frostcall", startposition:Wt ? t.position : t.geometry ? t.geometry.position : t.position, source:e, effect:i, mode:"static", timeout:5, geometry:Wt ? void 0 : new THREE.Mesh(un.frostcall.geo, Wi.mage_frost)});
      }
    }, effect:function(t) {
      if (ce.damage({scaledmg:.8 + .5 * this.abilitypower, basedmg:8 + 2 * this.abilitypower, spread:.2, attacker:t.source, mode:"aoe", aoeRange:12, aoeCenter:t.spell.position, mod:{unique:!0, id:"frostcallfrosted", duration:2, name:"Frosted", movespeed:function(t) {
        return .4 * t;
      }}}), !Wt && t.target && t.target.geometry) {
        for (var e = 0; e < 15; ++e) {
          var i = Math.random() * Math.PI * 2, n = 12 * Math.random(), r = new b({name:"Flake", mode:"static", movedir:new THREE.Vector3(0, -1, 0), startposition:new THREE.Vector3(t.spell.position.x + Math.cos(i) * n, t.target.geometry.position.y + 15 + 10 * Math.random(), t.spell.position.z + Math.sin(i) * n), timeout:2, movespeed:12, geometry:new THREE.Mesh(un.frostcallblizz.geo, Wi.generic_ice)});
          ze.push(r);
        }
      }
    }}), 3:new _(3, this, {name:"Teleport", mana:.2, description:"Teleports you forward in an instant.", icon:"data/skill/mage_tp.jpg", targettype:"none", casttype:"instant", cooldown:9, effecttype:"instant", maxrange:100, predict:!1, effect:function(t) {
      var e = P(t.source.rotation);
      t.source.position.x += 25 * e.x, t.source.position.z += 25 * e.y, Wt && (this.parent.ignoreMovement = .5), Wt || t.source.animationQueue.push(new X({id:"channel", duration:.5}));
    }}), 4:new _(4, this, {name:"Iceblock", mana:.3, description:"Freezes you in an iceblock, rendering you invincible for a moment and recovering a portion of your health.", icon:"data/skill/mage_iceblock.jpg", targettype:"none", casttype:"instant", cooldown:18, effecttype:"channel", channelDuration:5, channelInterval:8, channelInstantFirstTick:!0, channelMoveInterrupt:!1, spellchannel:!0, maxrange:100, predict:!1, ignoreEc:!0, spell:function(t, e, i) {
      return new b({name:"Iceblock", startposition:Wt ? e.position : e.geometry.position, source:e, mode:"static", effect:i, timeout:5, geometry:Wt ? void 0 : new THREE.Mesh(un.iceblock.geo, Wi.mage_frost)});
    }, effect:function(t) {
      var e = this.abilitypower;
      t.source.stats.addMod(new M(t.source, t.source, {duration:5, name:"Iceblock", invincible:!0, interval:1, id:"iceblock", overwrite:!0, movespeed:function() {
        return 0;
      }, effect:function() {
        ce.damage({attacker:this.source, target:this.target, spread:.1, basedmg:this.target.stats.maxhp * (.035 + .03 * e), scaledmg:0, heal:!0});
      }})), Wt && (t.source.ignoreMovement = 5), t.source.walkForward = 0, t.source.walkSideward = 0;
    }, channelAnim:Wt ? void 0 : new X({id:"channel", duration:60})})};
  }
  function q(t) {
    this.level = t, this.type = "archer", Wt || (this.color = Wi.archer), this.skills = {1:new _(1, this, {name:"Piercing Shot", mana:.05, description:"Fires an arrow at your target. Pierces their armor up to 5 times, increasing your next Piercing Shot damage by 18%", icon:"data/skill/archer_pierce.jpg", targettype:"enemy", casttype:"instant", baselevel:1, maxrange:30, simulate:!0, spell:function(t, e, i) {
      if (!Wt) {
        var n = new THREE.Mesh(un.archer_arrow.geo, Wi.archer_arrow);
        n.scale.set(un.archer_arrow.scale[0], un.archer_arrow.scale[1], un.archer_arrow.scale[2]);
      }
      return new b({name:"Pierce Shot", target:t, source:e, effect:i, mode:"follow", movespeed:80, geometry:n || void 0, ribbon:Wt ? void 0 : {deleteWithSpell:!1, parent:n, stepInterval:.05, steps:5, timeout:1, material:Wi.ribbon_arrow, aPos:new THREE.Vector3(.6, 0, 0), bPos:new THREE.Vector3(-.6, -0, 0)}});
    }, effect:function(t) {
      if (t.target) {
        var e = 1 + .18 * t.target.stats.queryMod({source:t.source, id:"pierceshot"}).length;
        ce.damage({scaledmg:(.5 + .5 * this.abilitypower) * e, basedmg:3 * e, attacker:t.source, target:t.target, mod:{id:"pierceshot", duration:6}});
      }
    }, characterAnim:function() {
      return new X({id:"release_spell", duration:.3});
    }}), 2:new _(2, this, {name:"Volley", mana:.2, icon:"data/skill/archer_volley.jpg", description:"Shoot all targets infront of you over a duration.", targettype:"enemy", casttype:"instant", cooldown:6, effecttype:"channel", channelInterval:Wt ? .3 : .1, channelDuration:3, channelMoveInterrupt:!1, channelInstantFirstTick:!0, maxrange:30, predict:!1, allowDeadTarget:!0, effect:function() {
      ce.damage({scaledmg:.2 + .3 * this.abilitypower, basedmg:3, spread:.2, attacker:this.parent, mode:"aoe", aoeRange:33, aoeArc:.7, aoeFun:Wt ? void 0 : function(t, e) {
        if (!(t.length <= 0)) {
          var i = new THREE.Mesh(un.archer_arrow.geo, Wi.generic_wood);
          i.scale.set(un.archer_arrow.scale[0], un.archer_arrow.scale[1], un.archer_arrow.scale[2]);
          var n = new b({name:"Volley", target:te(t), source:e, mode:"follow", movespeed:50, geometry:i, ribbon:{deleteWithSpell:!1, parent:i, stepInterval:.05, steps:5, timeout:1, material:Wi.ribbon_arrow, aPos:new THREE.Vector3(.6, 0, 0), bPos:new THREE.Vector3(-.6, -0, 0)}});
          ze.push(n);
        }
      }});
    }, channelAnim:Wt ? void 0 : new X({id:"release_spell", duration:.1, type:"loop"})}), 3:new _(3, this, {name:"Leeching Arrow", mana:.2, description:"Fires a condemned arrow at your enemy, reducing their healing and stealing some of their health.", icon:"data/skill/archer_siphon.jpg", targettype:"enemy", casttype:"instant", maxrange:30, cooldown:14, simulate:!0, spell:function(t, e, i) {
      if (!Wt) {
        var n = new THREE.Object3D;
      }
      return new b({name:"Leeching Arrow", target:t, source:e, effect:i, mode:"follow", movespeed:55, geometry:n || void 0, ribbon:Wt ? void 0 : {deleteWithSpell:!1, parent:n, stepInterval:.05, steps:10, timeout:3, tailType:"default", material:Wi.ribbon_leech, aPos:new THREE.Vector3(1.5, 0, 0), bPos:new THREE.Vector3(-1.5, -0, 0)}});
    }, effect:function(t) {
      var e = this.abilitypower, i = .8 + .5 * e;
      ce.damage({scaledmg:i, basedmg:15, attacker:t.source, target:t.target, mod:{id:"leeching", unique:!0, duration:6, name:"Leeching Arrow", healmod:function(t) {
        return t * (.5 / e * .7 + .3);
      }}}), ce.damage({scaledmg:1.2 * i, basedmg:8, attacker:t.source, target:t.source, heal:!0});
    }, characterAnim:function() {
      return new X({id:"release_spell", duration:.3});
    }}), 4:new _(4, this, {name:"Sprint", mana:.1, description:"You sprint at a very high speed for a short moment.", icon:"data/skill/archer_sprint.jpg", targettype:"none", casttype:"instant", cooldown:5, effect:function(t) {
      ce.damage({attacker:t.source, target:t.source, buff:!0, mod:{id:"windrush", unique:!0, duration:.6, name:"Wind rush", movespeed:function(t) {
        return 30;
      }}});
    }, characterAnim:function() {
      return new X({id:"release_buff", duration:1});
    }})};
  }
  function W(t) {
    this.level = t, this.type = "shaman", Wt || (this.color = Wi.shaman), this.skills = {1:new _(1, this, {name:"Healing ritual", mana:.08, description:"Heals your target upon cast and for a short while afterwards.", icon:"data/skill/shaman_heal.jpg", targettype:"friendly", casttype:"timed", casttime:.6, baselevel:1, maxrange:30, effect:function() {
      var t = this.abilitypower;
      ce.damage({scaledmg:.25 + .1 * t, basedmg:4, spread:.2, attacker:this.parent, target:this.casttarget, heal:!0, mod:{id:"healritual", overwrite:!0, duration:10, interval:1, effect:function() {
        ce.damage({attacker:this.source, target:this.target, spread:.1, basedmg:2, scaledmg:.12 + .15 * t, heal:!0});
      }}});
    }, spell:Wt ? void 0 : function(t, e, i) {
      if (t && e) {
        var n = new THREE.Object3D;
        return new b({name:"Healing ritual", mode:"attach", target:t, source:e, timeout:10, geometry:n, tick:function(e) {
          this.geometry.position.copy(this.position);
          var i = .15 + t.stats.scale;
          this.geometry.position.x += Math.sin(8 * this.timeout) * i, this.geometry.position.z += Math.cos(8 * this.timeout) * i, this.geometry.position.y += Math.cos(5 + 6 * this.timeout) * i * .5, i *= .5, this.geometry.scale.set(i, i, i);
        }, ribbon:{deleteWithSpell:!0, parent:n, stepInterval:.1, steps:8, timeout:10, material:Wi.ribbon_heal, aPos:new THREE.Vector3(1.5, 0, 0), bPos:new THREE.Vector3(-1.5, -0, 0)}});
      }
    }, characterAnim:function() {
      return new X({id:"release_buff", duration:.5});
    }}), 2:new _(2, this, {name:"Equilibrate", mana:.2, description:"Summons a spirit upon a friendly target that heals allys and damages enemies", icon:"data/skill/shaman_spirit.jpg", targettype:"friendly", casttype:"instant", maxrange:30, channelInstantFirstTick:!0, unique:!0, simulate:!0, effect:function(t) {
      var e = this.abilitypower;
      ce.damage({scaledmg:.2 + .2 * e, basedmg:3, spread:.2, attacker:t.source, target:t.target, heal:!0}), ce.damage({scaledmg:.3 + .2 * e, basedmg:6, spread:.1, attacker:t.source, mode:"aoe", aoeRange:8, aoeCenter:t.spell.position});
    }, spell:function(t, e, i) {
      var n = void 0;
      e.position;
      return Wt || (n = new THREE.Mesh(un.equilibrate.geo, Wi.generic_wood)).scale.set(un.equilibrate.scale[0], un.equilibrate.scale[1], un.equilibrate.scale[2]), new b({name:"Spirit", mode:"attach", target:t, source:e, effect:i, effectInterval:1, timeout:60, geometry:n, tick:Wt ? void 0 : function(e) {
        this.geometry.position.copy(this.position);
        var i = .35 + t.stats.scale;
        this.geometry.position.x += Math.sin(4 * this.timeout) * i, this.geometry.position.z += Math.cos(4 * this.timeout) * i, this.geometry.rotation.x += 3 * e, this.geometry.rotation.z -= 2 * e, this.geometry.rotation.y = 1.5 * e, i *= .4, this.geometry.scale.set(i, i, i);
      }, ribbon:Wt ? void 0 : {deleteWithSpell:!0, parent:n, stepInterval:.05, steps:5, timeout:60, material:Wi.ribbon_arrow, aPos:new THREE.Vector3(.6, 0, 0), bPos:new THREE.Vector3(-.6, -0, 0)}});
    }}), 3:new _(3, this, {name:"Decay", mana:.1, icon:"data/skill/shaman_decay.jpg", description:"Cast a spell of decay upon your enemy, slowing their movement and dealing damage over time.", targettype:"enemy", casttype:"instant", baselevel:1, maxrange:25, simulate:!0, effect:function(t) {
      var e = this.abilitypower;
      ce.damage({attacker:t.source, target:t.target, debuff:!0, mod:{overwrite:!0, id:"decay", duration:8, name:"Decay", interval:1, effect:function() {
        ce.damage({attacker:this.source, target:this.target, spread:.1, basedmg:6 + 1 * e, scaledmg:.32 + .3 * e});
      }}}), ce.damage({attacker:t.source, target:t.target, debuff:!0, mod:{unique:!0, id:"decayslow", duration:8, name:"Decay", movespeed:function(t) {
        return .7 * t;
      }}});
    }, spell:Wt ? void 0 : function(t, e, i) {
      if (t && e && t != e) {
        var n = new THREE.Object3D;
        return new b({name:"Decay", mode:"attach", target:t, source:e, timeout:10, geometry:n, tick:function(e) {
          this.geometry.position.copy(this.position);
          var i = .15 + t.stats.scale;
          this.geometry.position.x += Math.sin(8 * this.timeout) * i, this.geometry.position.z += Math.cos(8 * this.timeout) * i, this.geometry.position.y += Math.cos(5 + 6 * this.timeout) * i * .5, i *= .5, this.geometry.scale.set(i, i, i);
        }, ribbon:{deleteWithSpell:!0, parent:n, stepInterval:.1, steps:8, timeout:10, material:Wi.ribbon_decay, aPos:new THREE.Vector3(1.5, 0, 0), bPos:new THREE.Vector3(-1.5, -0, 0)}});
      }
    }, characterAnim:function() {
      return new X({id:"release_buff", duration:1});
    }}), 4:new _(4, this, {name:"Wind rush", mana:.3, description:"Temporarily boost the movement speed of you and your allies.", icon:"data/skill/shaman_windrush.jpg", targettype:"none", casttype:"instant", cooldown:20, maxrange:30, simulate:!0, effect:function(t) {
      ce.damage({attacker:t.source, buff:!0, mode:"aoe", aoeRange:30, mod:{id:"windrush", unique:!0, duration:6, name:"Wind rush", movespeed:function(t) {
        return 1.5 * t;
      }}});
    }, characterAnim:function() {
      return new X({id:"release_buff", duration:1});
    }})};
  }
  function X(t) {
    this.id = t.id || "idle", this.type = t.type || "timed", this.duration = t.duration || 1, this.timer = this.duration, this.deleteMe = !1;
  }
  function Y() {
    if (Ke.expbar && Pi) {
      Ke.expbartext.html(Pi["class"].exp + " / " + Pi["class"].nextLevelExp + " ( " + (Pi["class"].exp / Pi["class"].nextLevelExp * 100).toFixed(2) + "% )");
      var t = Math.min(100, Pi["class"].exp / Pi["class"].nextLevelExp * 100);
      Ke.expbar.css("width", t + "%");
    }
  }
  function Z() {
    var t;
    Ke.castbar && Pi && 1 == Pi.state.id ? (t = 100 - Pi.state.duration / Pi.state.maxduration * 100, Ke.castbarcontainer.show()) : (Ke.castbarcontainer.hide(), t = 0), Ke.castbar.css("width", t + "%");
  }
  function Q(t) {
    if (Ke.chatboxWrapper) {
      var e = t.msg || "Message error.", i = "chatmsg";
      if (t.src) {
        switch(t.src) {
          case "server":
          case "whisper":
            i += " chatmsg-w";
            break;
          case "playerkill":
            if (!_t(zt.get("chat-pvp"))) {
              return;
            }
            i += " chatmsg-pk";
            break;
          case "death":
            i += " chatmsg-death";
            break;
          case "system":
            i += " chatmsg-system";
            break;
          case "loot":
            if (!_t(zt.get("chat-loot"))) {
              return;
            }
            i += " chatmsg-loot";
            break;
          case "exp":
            if (!_t(zt.get("chat-exp"))) {
              return;
            }
            i += " chatmsg-exp";
            break;
          case "clan":
            if (!_t(zt.get("chat-chat"))) {
              return;
            }
            if (i += " chatmsg-clan", !t.name) {
              return !1;
            }
            e = "[" + t.name + " (clan)]: " + e;
            break;
          case "global":
            if (!_t(zt.get("chat-chat"))) {
              return;
            }
            if (i += " chatmsg-global", 0 === t.r && (i += " unreg"), !t.name) {
              return !1;
            }
            if (typeof window.xhordes.muted !== "undefined" && !!~window.xhordes.muted.indexOf(t.name)) {
              return;
            }
            if (e.indexOf("@") !== -1) {
              var m = e.toLowerCase().split(" ");
              for (var j = 0; j < m.length; j++) {
                if (m[j].includes("@")) {
                  var u = m[j].slice(1, m[j].length);
                  if (u == Pi.name.toString().toLowerCase()) {
                    i += " chatmsg-mention";
                  }
                }
              }
            }
            e = "[" + t.name + "]: " + e;
            break;
          case "gm":
            if (!_t(zt.get("chat-chat"))) {
              return;
            }
            if (i += " chatmsg-w", !t.name) {
              return !1;
            }
            e = "[" + t.name + " (GM)]: " + e;
        }
      }
      var n = Math.round(Ke.chatboxWrapper[0].scrollHeight - Ke.chatboxWrapper[0].scrollTop) === Math.round(Ke.chatboxWrapper[0].clientHeight), r = $("<p class='" + i + "'></p>");
      r.text(e), void 0 !== t.c && void 0 !== t.f && r.html("<span class='" + (0 == t.f ? "factionA" : "factionB") + "'>" + t.c + " </span>" + r.html()), r.html(r.html().replace("$g", ti.goldCoin)), r.html(r.html().replace("$0", ti.faction1)), r.html(r.html().replace("$1", ti.faction2)), r.appendTo(Ke.chatboxBody);
      var a = $("#chatboxBody > p");
      a.length > 50 && a[0].remove(), n && Ke.chatboxWrapper.scrollTop(Ke.chatboxWrapper[0].scrollHeight);
    }
  }
  function J(t) {
    var e = document.createElement("canvas");
    e.width = t.width, e.height = t.height;
    var i = e.getContext("2d");
    return i.drawImage(t, 0, 0), i.getImageData(0, 0, t.width, t.height);
  }
  function K(t, e, i) {
    return t <= e ? e : t >= i ? i : t;
  }
  function tt(t, e) {
    t = K(t, 0, Wt ? heightmap.shape[0] : _i.width - 1), e = K(e, 0, Wt ? heightmap.shape[0] : _i.width - 1);
    var i = Wt ? 4 * (t + heightmap.shape[0] * e) : 4 * (t + _i.width * e), n = Wt ? heightmap.data : _i.data;
    return {r:n[i], g:n[i + 1], b:n[i + 2], a:n[i + 3]};
  }
  function et(t) {
    if (!t.material) {
      return !1;
    }
    this.steps = t.steps || 10, this.stepInterval = t.stepInterval || .5, this.stepIntervalTimer = this.stepInterval, this.stepsDone = 0, this.headType = t.headType || "glue", this.tailType = t.tailType || "compress", this.geom = new THREE.PlaneGeometry(1, 1, 1, this.steps - 1), this.material = t.material, this.mesh = new THREE.Mesh(this.geom, this.material), this.mesh.frustumCulled = !1, wi.add(this.mesh), this.timeout = t.timeout || void 0, this.timeout && (this.timer = this.timeout), this.a =
    new THREE.Object3D, wi.add(this.a), this.b = new THREE.Object3D, wi.add(this.b), t.parent && (t.parent.add(this.a), t.parent.add(this.b), t.parent.updateMatrixWorld()), t.aPos && this.a.position.copy(t.aPos), t.bPos && this.b.position.copy(t.bPos), this.at = [];
    var e = this.a.getWorldPosition();
    this.bt = [];
    for (var i = this.b.getWorldPosition(), n = 0; n < this.steps; ++n) {
      this.at.push(new THREE.Vector3(e.x, e.y, e.z)), this.bt.push(new THREE.Vector3(i.x, i.y, i.z));
    }
    this.step(e, i), this.uvStepSize = 1 / this.steps, this.uvShift = 0, this.deleteMe = !1;
  }
  function it(t) {
    var e = t.children;
    if (e) {
      for (var i = 0; i < e.length; i += 1) {
        it(e[i]);
      }
    }
  }
  function nt(t, e) {
    var i = new THREE.Vector3;
    return i.copy(t), i.project(e), i.x = Math.round(i.x * Tt.width * .5), i.y = Math.round(i.y * Tt.height * .5), i;
  }
  function rt() {
    this.isresetting = 0, this.goal = new THREE.Vector2(0, 0), this.hasReachedGoal = !1, this.tick = function(t) {
      if (this.parent.target && !Tt.entities.hasOwnProperty(this.parent.target.id) && (this.parent.desiredTarget = this.parent.target.id, this.parent.target = void 0), this.parent.target) {
        var e = re(this.parent.target, this.parent), i = void 0 != e && e.distance() < this.parent["class"].skills[1].maxrange + 1.2;
        this.parent.walkForward = i ? 0 : 1, this.parent.rotation = D(this.parent, this.parent.target);
      } else {
        this.parent.walkForward = 0, 0 == this.goal.x || 0 == this.goal.z || this.hasReachedGoal || (I(this.parent, this.goal) > this.parent.stats.movespeed * t ? (this.parent.walkForward = 1, this.parent.rotation = R(this.parent.position, this.goal)) : (this.parent.walkForward = 0, this.hasReachedGoal = !0));
      }
    };
  }
  function at(t) {
    var e = zn[t];
    if (!e) {
      var i = document.getElementsByTagName("body")[0], n = document.createElement("div"), r = document.createTextNode("M\u00c9q");
      n.appendChild(r), n.setAttribute("style", "font:" + t + ";position:absolute;top:0;left:0"), i.appendChild(n), e = n.offsetHeight, zn[t] = e, i.removeChild(n);
    }
    return e;
  }
  function st() {
    return this.textWidth = null, this.textHeight = null, this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this;
  }
  function ot(t, e) {
    THREE.Object3D.call(this), this._font = e.font || "30px Arial", this._fillStyle = e.fillStyle || "#FFFFFF", this._shadow = void 0 !== e.shadow ? e.shadow : 1, this.canvas = new st, this.align = e.align || Bn.center, this.antialias = (e.antialias, !0), this.setText(t);
  }
  var ct = window.location != window.parent.location ? document.referrer : document.location.href, lt = function(t, e) {
    return -1 !== t.indexOf(e);
  };
  (lt(ct, "hordesio.com") || lt(ct, "hordes-io.com")) && (window.top.location.href = "https://hordes.io"), window.onerror = function(t, e, i, n, r) {
    if (window.onerror = null, r && (r = r.toString()), "undefined" != typeof WebSocket && (null == e || -1 != e.indexOf("hordes"))) {
      var a = new XMLHttpRequest, s = JSON.stringify({message:t, source:e, lineno:i, colno:n, error:r});
      a.open("POST", "/error", !0), a.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), a.send(s), console.log("Error: " + s);
    }
  }, function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
      if (!t.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return e(t);
    } : e(t);
  }("undefined" != typeof window ? window : this, function(t, e) {
    function i(t, e) {
      var i = (e = e || et).createElement("script");
      i.text = t, e.head.appendChild(i).parentNode.removeChild(i);
    }
    function n(t) {
      var e = !!t && "length" in t && t.length, i = ft.type(t);
      return "function" !== i && !ft.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
    }
    function r(t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
    }
    function a(t, e, i) {
      return ft.isFunction(e) ? ft.grep(t, function(t, n) {
        return !!e.call(t, n, t) !== i;
      }) : e.nodeType ? ft.grep(t, function(t) {
        return t === e !== i;
      }) : "string" != typeof e ? ft.grep(t, function(t) {
        return st.call(e, t) > -1 !== i;
      }) : Et.test(e) ? ft.filter(e, t, i) : (e = ft.filter(e, t), ft.grep(t, function(t) {
        return st.call(e, t) > -1 !== i && 1 === t.nodeType;
      }));
    }
    function s(t, e) {
      for (; (t = t[e]) && 1 !== t.nodeType;) {
      }
      return t;
    }
    function o(t) {
      var e = {};
      return ft.each(t.match(Lt) || [], function(t, i) {
        e[i] = !0;
      }), e;
    }
    function c(t) {
      return t;
    }
    function l(t) {
      throw t;
    }
    function h(t, e, i, n) {
      var r;
      try {
        t && ft.isFunction(r = t.promise) ? r.call(t).done(e).fail(i) : t && ft.isFunction(r = t.then) ? r.call(t, e, i) : e.apply(void 0, [t].slice(n));
      } catch (t$0) {
        i.apply(void 0, [t$0]);
      }
    }
    function u() {
      et.removeEventListener("DOMContentLoaded", u), t.removeEventListener("load", u), ft.ready();
    }
    function d() {
      this.expando = ft.expando + d.uid++;
    }
    function p(t) {
      return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Ut.test(t) ? JSON.parse(t) : t);
    }
    function f(t, e, i) {
      var n;
      if (void 0 === i && 1 === t.nodeType) {
        if (n = "data-" + e.replace(Ft, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
          try {
            i = p(i);
          } catch (t$1) {
          }
          Nt.set(t, e, i);
        } else {
          i = void 0;
        }
      }
      return i;
    }
    function m(t, e, i, n) {
      var r, a = 1, s = 20, o = n ? function() {
        return n.cur();
      } : function() {
        return ft.css(t, e, "");
      }, c = o(), l = i && i[3] || (ft.cssNumber[e] ? "" : "px"), h = (ft.cssNumber[e] || "px" !== l && +c) && Bt.exec(ft.css(t, e));
      if (h && h[3] !== l) {
        l = l || h[3], i = i || [], h = +c || 1;
        do {
          a = a || ".5", h /= a, ft.style(t, e, h + l);
        } while (a !== (a = o() / c) && 1 !== a && --s);
      }
      return i && (h = +h || +c || 0, r = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = l, n.start = h, n.end = r)), r;
    }
    function g(t) {
      var e, i = t.ownerDocument, n = t.nodeName, r = Gt[n];
      return r || (e = i.body.appendChild(i.createElement(n)), r = ft.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), Gt[n] = r, r);
    }
    function v(t, e) {
      for (var i, n, r = [], a = 0, s = t.length; a < s; a++) {
        (n = t[a]).style && (i = n.style.display, e ? ("none" === i && (r[a] = It.get(n, "display") || null, r[a] || (n.style.display = "")), "" === n.style.display && Ht(n) && (r[a] = g(n))) : "none" !== i && (r[a] = "none", It.set(n, "display", i)));
      }
      for (a = 0; a < s; a++) {
        null != r[a] && (t[a].style.display = r[a]);
      }
      return t;
    }
    function y(t, e) {
      var i;
      return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && r(t, e) ? ft.merge([t], i) : i;
    }
    function x(t, e) {
      for (var i = 0, n = t.length; i < n; i++) {
        It.set(t[i], "globalEval", !e || It.get(e[i], "globalEval"));
      }
    }
    function b(t, e, i, n, r) {
      for (var a, s, o, c, l, h, u = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++) {
        if ((a = t[p]) || 0 === a) {
          if ("object" === ft.type(a)) {
            ft.merge(d, a.nodeType ? [a] : a);
          } else {
            if ($t.test(a)) {
              for (s = s || u.appendChild(e.createElement("div")), o = (qt.exec(a) || ["", ""])[1].toLowerCase(), c = Xt[o] || Xt._default, s.innerHTML = c[1] + ft.htmlPrefilter(a) + c[2], h = c[0]; h--;) {
                s = s.lastChild;
              }
              ft.merge(d, s.childNodes), (s = u.firstChild).textContent = "";
            } else {
              d.push(e.createTextNode(a));
            }
          }
        }
      }
      for (u.textContent = "", p = 0; a = d[p++];) {
        if (n && ft.inArray(a, n) > -1) {
          r && r.push(a);
        } else {
          if (l = ft.contains(a.ownerDocument, a), s = y(u.appendChild(a), "script"), l && x(s), i) {
            for (h = 0; a = s[h++];) {
              Wt.test(a.type || "") && i.push(a);
            }
          }
        }
      }
      return u;
    }
    function _() {
      return !0;
    }
    function w() {
      return !1;
    }
    function M() {
      try {
        return et.activeElement;
      } catch (t$2) {
      }
    }
    function E(t, e, i, n, r, a) {
      var s, o;
      if ("object" == typeof e) {
        "string" != typeof i && (n = n || i, i = void 0);
        for (o in e) {
          E(t, o, i, n, e[o], a);
        }
        return t;
      }
      if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) {
        r = w;
      } else {
        if (!r) {
          return t;
        }
      }
      return 1 === a && (s = r, r = function(t) {
        return ft().off(t), s.apply(this, arguments);
      }, r.guid = s.guid || (s.guid = ft.guid++)), t.each(function() {
        ft.event.add(this, e, r, n, i);
      });
    }
    function T(t, e) {
      return r(t, "table") && r(11 !== e.nodeType ? e : e.firstChild, "tr") ? ft(">tbody", t)[0] || t : t;
    }
    function S(t) {
      return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
    }
    function A(t) {
      var e = ie.exec(t.type);
      return e ? t.type = e[1] : t.removeAttribute("type"), t;
    }
    function C(t, e) {
      var i, n, r, a, s, o, c, l;
      if (1 === e.nodeType) {
        if (It.hasData(t) && (a = It.access(t), s = It.set(e, a), l = a.events)) {
          delete s.handle, s.events = {};
          for (r in l) {
            for (i = 0, n = l[r].length; i < n; i++) {
              ft.event.add(e, r, l[r][i]);
            }
          }
        }
        Nt.hasData(t) && (o = Nt.access(t), c = ft.extend({}, o), Nt.set(e, c));
      }
    }
    function L(t, e) {
      var i = e.nodeName.toLowerCase();
      "input" === i && jt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue);
    }
    function P(t, e, n, r) {
      e = rt.apply([], e);
      var a, s, o, c, l, h, u = 0, d = t.length, p = d - 1, f = e[0], m = ft.isFunction(f);
      if (m || d > 1 && "string" == typeof f && !dt.checkClone && ee.test(f)) {
        return t.each(function(i) {
          var a = t.eq(i);
          m && (e[0] = f.call(this, i, a.html())), P(a, e, n, r);
        });
      }
      if (d && (a = b(e, t[0].ownerDocument, !1, t, r), s = a.firstChild, 1 === a.childNodes.length && (a = s), s || r)) {
        for (c = (o = ft.map(y(a, "script"), S)).length; u < d; u++) {
          l = a, u !== p && (l = ft.clone(l, !0, !0), c && ft.merge(o, y(l, "script"))), n.call(t[u], l, u);
        }
        if (c) {
          for (h = o[o.length - 1].ownerDocument, ft.map(o, A), u = 0; u < c; u++) {
            l = o[u], Wt.test(l.type || "") && !It.access(l, "globalEval") && ft.contains(h, l) && (l.src ? ft._evalUrl && ft._evalUrl(l.src) : i(l.textContent.replace(ne, ""), h));
          }
        }
      }
      return t;
    }
    function k(t, e, i) {
      for (var n, r = e ? ft.filter(e, t) : t, a = 0; null != (n = r[a]); a++) {
        i || 1 !== n.nodeType || ft.cleanData(y(n)), n.parentNode && (i && ft.contains(n.ownerDocument, n) && x(y(n, "script")), n.parentNode.removeChild(n));
      }
      return t;
    }
    function R(t, e, i) {
      var n, r, a, s, o = t.style;
      return (i = i || se(t)) && ("" !== (s = i.getPropertyValue(e) || i[e]) || ft.contains(t.ownerDocument, t) || (s = ft.style(t, e)), !dt.pixelMarginRight() && ae.test(s) && re.test(e) && (n = o.width, r = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = i.width, o.width = n, o.minWidth = r, o.maxWidth = a)), void 0 !== s ? s + "" : s;
    }
    function D(t, e) {
      return {get:function() {
        return t() ? void delete this.get : (this.get = e).apply(this, arguments);
      }};
    }
    function I(t) {
      if (t in de) {
        return t;
      }
      for (var e = t[0].toUpperCase() + t.slice(1), i = ue.length; i--;) {
        if ((t = ue[i] + e) in de) {
          return t;
        }
      }
    }
    function N(t) {
      var e = ft.cssProps[t];
      return e || (e = ft.cssProps[t] = I(t) || t), e;
    }
    function U(t, e, i) {
      var n = Bt.exec(e);
      return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
    }
    function F(t, e, i, n, r) {
      var a, s = 0;
      for (a = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; a < 4; a += 2) {
        "margin" === i && (s += ft.css(t, i + zt[a], !0, r)), n ? ("content" === i && (s -= ft.css(t, "padding" + zt[a], !0, r)), "margin" !== i && (s -= ft.css(t, "border" + zt[a] + "Width", !0, r))) : (s += ft.css(t, "padding" + zt[a], !0, r), "padding" !== i && (s += ft.css(t, "border" + zt[a] + "Width", !0, r)));
      }
      return s;
    }
    function O(t, e, i) {
      var n, r = se(t), a = R(t, e, r), s = "border-box" === ft.css(t, "boxSizing", !1, r);
      return ae.test(a) ? a : (n = s && (dt.boxSizingReliable() || a === t.style[e]), (a = parseFloat(a) || 0) + F(t, e, i || (s ? "border" : "content"), n, r) + "px");
    }
    function B(t, e, i, n, r) {
      return new B.prototype.init(t, e, i, n, r);
    }
    function z() {
      fe && (!1 === et.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(z) : t.setTimeout(z, ft.fx.interval), ft.fx.tick());
    }
    function H() {
      return t.setTimeout(function() {
        pe = void 0;
      }), pe = ft.now();
    }
    function V(t, e) {
      var i, n = 0, r = {height:t};
      for (e = e ? 1 : 0; n < 4; n += 2 - e) {
        i = zt[n], r["margin" + i] = r["padding" + i] = t;
      }
      return e && (r.opacity = r.width = t), r;
    }
    function G(t, e, i) {
      for (var n, r = (q.tweeners[e] || []).concat(q.tweeners["*"]), a = 0, s = r.length; a < s; a++) {
        if (n = r[a].call(i, e, t)) {
          return n;
        }
      }
    }
    function j(t, e) {
      var i, n, r, a, s;
      for (i in t) {
        if (n = ft.camelCase(i), r = e[n], a = t[i], Array.isArray(a) && (r = a[1], a = t[i] = a[0]), i !== n && (t[n] = a, delete t[i]), (s = ft.cssHooks[n]) && "expand" in s) {
          a = s.expand(a), delete t[n];
          for (i in a) {
            i in t || (t[i] = a[i], e[i] = r);
          }
        } else {
          e[n] = r;
        }
      }
    }
    function q(t, e, i) {
      var n, r, a = 0, s = q.prefilters.length, o = ft.Deferred().always(function() {
        delete c.elem;
      }), c = function() {
        if (r) {
          return !1;
        }
        for (var e = pe || H(), i = Math.max(0, l.startTime + l.duration - e), n = 1 - (i / l.duration || 0), a = 0, s = l.tweens.length; a < s; a++) {
          l.tweens[a].run(n);
        }
        return o.notifyWith(t, [l, n, i]), n < 1 && s ? i : (s || o.notifyWith(t, [l, 1, 0]), o.resolveWith(t, [l]), !1);
      }, l = o.promise({elem:t, props:ft.extend({}, e), opts:ft.extend(!0, {specialEasing:{}, easing:ft.easing._default}, i), originalProperties:e, originalOptions:i, startTime:pe || H(), duration:i.duration, tweens:[], createTween:function(e, i) {
        var n = ft.Tween(t, l.opts, e, i, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      }, stop:function(e) {
        var i = 0, n = e ? l.tweens.length : 0;
        if (r) {
          return this;
        }
        for (r = !0; i < n; i++) {
          l.tweens[i].run(1);
        }
        return e ? (o.notifyWith(t, [l, 1, 0]), o.resolveWith(t, [l, e])) : o.rejectWith(t, [l, e]), this;
      }}), h = l.props;
      for (j(h, l.opts.specialEasing); a < s; a++) {
        if (n = q.prefilters[a].call(l, t, h, l.opts)) {
          return ft.isFunction(n.stop) && (ft._queueHooks(l.elem, l.opts.queue).stop = ft.proxy(n.stop, n)), n;
        }
      }
      return ft.map(h, G, l), ft.isFunction(l.opts.start) && l.opts.start.call(t, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ft.fx.timer(ft.extend(c, {elem:t, anim:l, queue:l.opts.queue})), l;
    }
    function W(t) {
      return (t.match(Lt) || []).join(" ");
    }
    function X(t) {
      return t.getAttribute && t.getAttribute("class") || "";
    }
    function $(t, e, i, n) {
      var r;
      if (Array.isArray(e)) {
        ft.each(e, function(e, r) {
          i || Se.test(t) ? n(t, r) : $(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n);
        });
      } else {
        if (i || "object" !== ft.type(e)) {
          n(t, e);
        } else {
          for (r in e) {
            $(t + "[" + r + "]", e[r], i, n);
          }
        }
      }
    }
    function Y(t) {
      return function(e, i) {
        "string" != typeof e && (i = e, e = "*");
        var n, r = 0, a = e.toLowerCase().match(Lt) || [];
        if (ft.isFunction(i)) {
          for (; n = a[r++];) {
            "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i);
          }
        }
      };
    }
    function Z(t, e, i, n) {
      function r(o) {
        var c;
        return a[o] = !0, ft.each(t[o] || [], function(t, o) {
          var l = o(e, i, n);
          return "string" != typeof l || s || a[l] ? s ? !(c = l) : void 0 : (e.dataTypes.unshift(l), r(l), !1);
        }), c;
      }
      var a = {}, s = t === Oe;
      return r(e.dataTypes[0]) || !a["*"] && r("*");
    }
    function Q(t, e) {
      var i, n, r = ft.ajaxSettings.flatOptions || {};
      for (i in e) {
        void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
      }
      return n && ft.extend(!0, t, n), t;
    }
    function J(t, e, i) {
      for (var n, r, a, s, o = t.contents, c = t.dataTypes; "*" === c[0];) {
        c.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
      }
      if (n) {
        for (r in o) {
          if (o[r] && o[r].test(n)) {
            c.unshift(r);
            break;
          }
        }
      }
      if (c[0] in i) {
        a = c[0];
      } else {
        for (r in i) {
          if (!c[0] || t.converters[r + " " + c[0]]) {
            a = r;
            break;
          }
          s || (s = r);
        }
        a = a || s;
      }
      if (a) {
        return a !== c[0] && c.unshift(a), i[a];
      }
    }
    function K(t, e, i, n) {
      var r, a, s, o, c, l = {}, h = t.dataTypes.slice();
      if (h[1]) {
        for (s in t.converters) {
          l[s.toLowerCase()] = t.converters[s];
        }
      }
      for (a = h.shift(); a;) {
        if (t.responseFields[a] && (i[t.responseFields[a]] = e), !c && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), c = a, a = h.shift()) {
          if ("*" === a) {
            a = c;
          } else {
            if ("*" !== c && c !== a) {
              if (!(s = l[c + " " + a] || l["* " + a])) {
                for (r in l) {
                  if ((o = r.split(" "))[1] === a && (s = l[c + " " + o[0]] || l["* " + o[0]])) {
                    !0 === s ? s = l[r] : !0 !== l[r] && (a = o[0], h.unshift(o[1]));
                    break;
                  }
                }
              }
              if (!0 !== s) {
                if (s && t["throws"]) {
                  e = s(e);
                } else {
                  try {
                    e = s(e);
                  } catch (t$3) {
                    return {state:"parsererror", error:s ? t$3 : "No conversion from " + c + " to " + a};
                  }
                }
              }
            }
          }
        }
      }
      return {state:"success", data:e};
    }
    var tt = [], et = t.document, it = Object.getPrototypeOf, nt = tt.slice, rt = tt.concat, at = tt.push, st = tt.indexOf, ot = {}, ct = ot.toString, lt = ot.hasOwnProperty, ht = lt.toString, ut = ht.call(Object), dt = {}, pt = "3.2.0", ft = function(t, e) {
      return new ft.fn.init(t, e);
    }, mt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, gt = /^-ms-/, vt = /-([a-z])/g, yt = function(t, e) {
      return e.toUpperCase();
    };
    $jscomp.initSymbol();
    $jscomp.initSymbol();
    $jscomp.initSymbolIterator();
    $jscomp.initSymbol();
    $jscomp.initSymbolIterator();
    ft.fn = ft.prototype = {jquery:pt, constructor:ft, length:0, toArray:function() {
      return nt.call(this);
    }, get:function(t) {
      return null == t ? nt.call(this) : t < 0 ? this[t + this.length] : this[t];
    }, pushStack:function(t) {
      var e = ft.merge(this.constructor(), t);
      return e.prevObject = this, e;
    }, each:function(t) {
      return ft.each(this, t);
    }, map:function(t) {
      return this.pushStack(ft.map(this, function(e, i) {
        return t.call(e, i, e);
      }));
    }, slice:function() {
      return this.pushStack(nt.apply(this, arguments));
    }, first:function() {
      return this.eq(0);
    }, last:function() {
      return this.eq(-1);
    }, eq:function(t) {
      var e = this.length, i = +t + (t < 0 ? e : 0);
      return this.pushStack(i >= 0 && i < e ? [this[i]] : []);
    }, end:function() {
      return this.prevObject || this.constructor();
    }, push:at, sort:tt.sort, splice:tt.splice}, ft.extend = ft.fn.extend = function() {
      var t, e, i, n, r, a, s = arguments[0] || {}, o = 1, c = arguments.length, l = !1;
      for ("boolean" == typeof s && (l = s, s = arguments[o] || {}, o++), "object" == typeof s || ft.isFunction(s) || (s = {}), o === c && (s = this, o--); o < c; o++) {
        if (null != (t = arguments[o])) {
          for (e in t) {
            i = s[e], n = t[e], s !== n && (l && n && (ft.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1, a = i && Array.isArray(i) ? i : []) : a = i && ft.isPlainObject(i) ? i : {}, s[e] = ft.extend(l, a, n)) : void 0 !== n && (s[e] = n));
          }
        }
      }
      return s;
    }, ft.extend({expando:"jQuery" + (pt + Math.random()).replace(/\D/g, ""), isReady:!0, error:function(t) {
      throw new Error(t);
    }, noop:function() {
    }, isFunction:function(t) {
      return "function" === ft.type(t);
    }, isWindow:function(t) {
      return null != t && t === t.window;
    }, isNumeric:function(t) {
      var e = ft.type(t);
      return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
    }, isPlainObject:function(t) {
      var e, i;
      return !(!t || "[object Object]" !== ct.call(t) || (e = it(t)) && ("function" != typeof(i = lt.call(e, "constructor") && e.constructor) || ht.call(i) !== ut));
    }, isEmptyObject:function(t) {
      var e;
      for (e in t) {
        return !1;
      }
      return !0;
    }, type:function(t) {
      return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ot[ct.call(t)] || "object" : typeof t;
    }, globalEval:function(t) {
      i(t);
    }, camelCase:function(t) {
      return t.replace(gt, "ms-").replace(vt, yt);
    }, each:function(t, e) {
      var i, r = 0;
      if (n(t)) {
        for (i = t.length; r < i && !1 !== e.call(t[r], r, t[r]); r++) {
        }
      } else {
        for (r in t) {
          if (!1 === e.call(t[r], r, t[r])) {
            break;
          }
        }
      }
      return t;
    }, trim:function(t) {
      return null == t ? "" : (t + "").replace(mt, "");
    }, makeArray:function(t, e) {
      var i = e || [];
      return null != t && (n(Object(t)) ? ft.merge(i, "string" == typeof t ? [t] : t) : at.call(i, t)), i;
    }, inArray:function(t, e, i) {
      return null == e ? -1 : st.call(e, t, i);
    }, merge:function(t, e) {
      for (var i = +e.length, n = 0, r = t.length; n < i; n++) {
        t[r++] = e[n];
      }
      return t.length = r, t;
    }, grep:function(t, e, i) {
      for (var n = [], r = 0, a = t.length, s = !i; r < a; r++) {
        !e(t[r], r) !== s && n.push(t[r]);
      }
      return n;
    }, map:function(t, e, i) {
      var r, a, s = 0, o = [];
      if (n(t)) {
        for (r = t.length; s < r; s++) {
          null != (a = e(t[s], s, i)) && o.push(a);
        }
      } else {
        for (s in t) {
          null != (a = e(t[s], s, i)) && o.push(a);
        }
      }
      return rt.apply([], o);
    }, guid:1, proxy:function(t, e) {
      var i, n, r;
      if ("string" == typeof e && (i = t[e], e = t, t = i), ft.isFunction(t)) {
        return n = nt.call(arguments, 2), r = function() {
          return t.apply(e || this, n.concat(nt.call(arguments)));
        }, r.guid = t.guid = t.guid || ft.guid++, r;
      }
    }, now:Date.now, support:dt}), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = tt[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
      ot["[object " + e + "]"] = e.toLowerCase();
    });
    var xt = function(t) {
      function e(t, e, i, n) {
        var r, a, s, o, c, h, d, p = e && e.ownerDocument, f = e ? e.nodeType : 9;
        if (i = i || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) {
          return i;
        }
        if (!n && ((e ? e.ownerDocument || e : B) !== k && P(e), e = e || k, D)) {
          if (11 !== f && (c = mt.exec(t))) {
            if (r = c[1]) {
              if (9 === f) {
                if (!(s = e.getElementById(r))) {
                  return i;
                }
                if (s.id === r) {
                  return i.push(s), i;
                }
              } else {
                if (p && (s = p.getElementById(r)) && F(e, s) && s.id === r) {
                  return i.push(s), i;
                }
              }
            } else {
              if (c[2]) {
                return Z.apply(i, e.getElementsByTagName(t)), i;
              }
              if ((r = c[3]) && b.getElementsByClassName && e.getElementsByClassName) {
                return Z.apply(i, e.getElementsByClassName(r)), i;
              }
            }
          }
          if (b.qsa && !j[t + " "] && (!I || !I.test(t))) {
            if (1 !== f) {
              p = e, d = t;
            } else {
              if ("object" !== e.nodeName.toLowerCase()) {
                for ((o = e.getAttribute("id")) ? o = o.replace(xt, bt) : e.setAttribute("id", o = O), a = (h = E(t)).length; a--;) {
                  h[a] = "#" + o + " " + u(h[a]);
                }
                d = h.join(","), p = gt.test(t) && l(e.parentNode) || e;
              }
            }
            if (d) {
              try {
                return Z.apply(i, p.querySelectorAll(d)), i;
              } catch (t$4) {
              } finally {
                o === O && e.removeAttribute("id");
              }
            }
          }
        }
        return S(t.replace(at, "$1"), e, i, n);
      }
      function i() {
        function t(i, n) {
          return e.push(i + " ") > _.cacheLength && delete t[e.shift()], t[i + " "] = n;
        }
        var e = [];
        return t;
      }
      function n(t) {
        return t[O] = !0, t;
      }
      function r(t) {
        var e = k.createElement("fieldset");
        try {
          return !!t(e);
        } catch (t$5) {
          return !1;
        } finally {
          e.parentNode && e.parentNode.removeChild(e), e = null;
        }
      }
      function a(t, e) {
        for (var i = t.split("|"), n = i.length; n--;) {
          _.attrHandle[i[n]] = e;
        }
      }
      function s(t, e) {
        var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
        if (n) {
          return n;
        }
        if (i) {
          for (; i = i.nextSibling;) {
            if (i === e) {
              return -1;
            }
          }
        }
        return t ? 1 : -1;
      }
      function o(t) {
        return function(e) {
          return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && wt(e) === t : e.disabled === t : "label" in e && e.disabled === t;
        };
      }
      function c(t) {
        return n(function(e) {
          return e = +e, n(function(i, n) {
            for (var r, a = t([], i.length, e), s = a.length; s--;) {
              i[r = a[s]] && (i[r] = !(n[r] = i[r]));
            }
          });
        });
      }
      function l(t) {
        return t && void 0 !== t.getElementsByTagName && t;
      }
      function h() {
      }
      function u(t) {
        for (var e = 0, i = t.length, n = ""; e < i; e++) {
          n += t[e].value;
        }
        return n;
      }
      function d(t, e, i) {
        var n = e.dir, r = e.next, a = r || n, s = i && "parentNode" === a, o = H++;
        return e.first ? function(e, i, r) {
          for (; e = e[n];) {
            if (1 === e.nodeType || s) {
              return t(e, i, r);
            }
          }
          return !1;
        } : function(e, i, c) {
          var l, h, u, d = [z, o];
          if (c) {
            for (; e = e[n];) {
              if ((1 === e.nodeType || s) && t(e, i, c)) {
                return !0;
              }
            }
          } else {
            for (; e = e[n];) {
              if (1 === e.nodeType || s) {
                if (u = e[O] || (e[O] = {}), h = u[e.uniqueID] || (u[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) {
                  e = e[n] || e;
                } else {
                  if ((l = h[a]) && l[0] === z && l[1] === o) {
                    return d[2] = l[2];
                  }
                  if (h[a] = d, d[2] = t(e, i, c)) {
                    return !0;
                  }
                }
              }
            }
          }
          return !1;
        };
      }
      function p(t) {
        return t.length > 1 ? function(e, i, n) {
          for (var r = t.length; r--;) {
            if (!t[r](e, i, n)) {
              return !1;
            }
          }
          return !0;
        } : t[0];
      }
      function f(t, i, n) {
        for (var r = 0, a = i.length; r < a; r++) {
          e(t, i[r], n);
        }
        return n;
      }
      function m(t, e, i, n, r) {
        for (var a, s = [], o = 0, c = t.length, l = null != e; o < c; o++) {
          (a = t[o]) && (i && !i(a, n, r) || (s.push(a), l && e.push(o)));
        }
        return s;
      }
      function g(t, e, i, r, a, s) {
        return r && !r[O] && (r = g(r)), a && !a[O] && (a = g(a, s)), n(function(n, s, o, c) {
          var l, h, u, d = [], p = [], g = s.length, v = n || f(e || "*", o.nodeType ? [o] : o, []), y = !t || !n && e ? v : m(v, d, t, o, c), x = i ? a || (n ? t : g || r) ? [] : s : y;
          if (i && i(y, x, o, c), r) {
            for (l = m(x, p), r(l, [], o, c), h = l.length; h--;) {
              (u = l[h]) && (x[p[h]] = !(y[p[h]] = u));
            }
          }
          if (n) {
            if (a || t) {
              if (a) {
                for (l = [], h = x.length; h--;) {
                  (u = x[h]) && l.push(y[h] = u);
                }
                a(null, x = [], l, c);
              }
              for (h = x.length; h--;) {
                (u = x[h]) && (l = a ? J(n, u) : d[h]) > -1 && (n[l] = !(s[l] = u));
              }
            }
          } else {
            x = m(x === s ? x.splice(g, x.length) : x), a ? a(null, s, x, c) : Z.apply(s, x);
          }
        });
      }
      function v(t) {
        for (var e, i, n, r = t.length, a = _.relative[t[0].type], s = a || _.relative[" "], o = a ? 1 : 0, c = d(function(t) {
          return t === e;
        }, s, !0), l = d(function(t) {
          return J(e, t) > -1;
        }, s, !0), h = [function(t, i, n) {
          var r = !a && (n || i !== A) || ((e = i).nodeType ? c(t, i, n) : l(t, i, n));
          return e = null, r;
        }]; o < r; o++) {
          if (i = _.relative[t[o].type]) {
            h = [d(p(h), i)];
          } else {
            if ((i = _.filter[t[o].type].apply(null, t[o].matches))[O]) {
              for (n = ++o; n < r && !_.relative[t[n].type]; n++) {
              }
              return g(o > 1 && p(h), o > 1 && u(t.slice(0, o - 1).concat({value:" " === t[o - 2].type ? "*" : ""})).replace(at, "$1"), i, o < n && v(t.slice(o, n)), n < r && v(t = t.slice(n)), n < r && u(t));
            }
            h.push(i);
          }
        }
        return p(h);
      }
      function y(t, i) {
        var r = i.length > 0, a = t.length > 0, s = function(n, s, o, c, l) {
          var h, u, d, p = 0, f = "0", g = n && [], v = [], y = A, x = n || a && _.find.TAG("*", l), b = z += null == y ? 1 : Math.random() || .1, w = x.length;
          for (l && (A = s === k || s || l); f !== w && null != (h = x[f]); f++) {
            if (a && h) {
              for (u = 0, s || h.ownerDocument === k || (P(h), o = !D); d = t[u++];) {
                if (d(h, s || k, o)) {
                  c.push(h);
                  break;
                }
              }
              l && (z = b);
            }
            r && ((h = !d && h) && p--, n && g.push(h));
          }
          if (p += f, r && f !== p) {
            for (u = 0; d = i[u++];) {
              d(g, v, s, o);
            }
            if (n) {
              if (p > 0) {
                for (; f--;) {
                  g[f] || v[f] || (v[f] = $.call(c));
                }
              }
              v = m(v);
            }
            Z.apply(c, v), l && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(c);
          }
          return l && (z = b, A = y), g;
        };
        return r ? n(s) : s;
      }
      var x, b, _, w, M, E, T, S, A, C, L, P, k, R, D, I, N, U, F, O = "sizzle" + 1 * new Date, B = t.document, z = 0, H = 0, V = i(), G = i(), j = i(), q = function(t, e) {
        return t === e && (L = !0), 0;
      }, W = {}.hasOwnProperty, X = [], $ = X.pop, Y = X.push, Z = X.push, Q = X.slice, J = function(t, e) {
        for (var i = 0, n = t.length; i < n; i++) {
          if (t[i] === e) {
            return i;
          }
        }
        return -1;
      }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+", it = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]", nt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)", rt = new RegExp(tt +
      "+", "g"), at = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"), st = new RegExp("^" + tt + "*," + tt + "*"), ot = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"), ct = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"), lt = new RegExp(nt), ht = new RegExp("^" + et + "$"), ut = {ID:new RegExp("^#(" + et + ")"), CLASS:new RegExp("^\\.(" + et + ")"), TAG:new RegExp("^(" + et + "|[*])"), ATTR:new RegExp("^" + it), PSEUDO:new RegExp("^" + nt), CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
      tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"), bool:new RegExp("^(?:" + K + ")$", "i"), needsContext:new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")}, dt = /^(?:input|select|textarea|button)$/i, pt = /^h\d$/i, ft = /^[^{]+\{\s*\[native \w/, mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, gt = /[+~]/, vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)",
      "ig"), yt = function(t, e, i) {
        var n = "0x" + e - 65536;
        return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
      }, xt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, bt = function(t, e) {
        return e ? "\x00" === t ? "\ufffd" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
      }, _t = function() {
        P();
      }, wt = d(function(t) {
        return !0 === t.disabled && ("form" in t || "label" in t);
      }, {dir:"parentNode", next:"legend"});
      try {
        Z.apply(X = Q.call(B.childNodes), B.childNodes), X[B.childNodes.length].nodeType;
      } catch (t$6) {
        Z = {apply:X.length ? function(t, e) {
          Y.apply(t, Q.call(e));
        } : function(t, e) {
          for (var i = t.length, n = 0; t[i++] = e[n++];) {
          }
          t.length = i - 1;
        }};
      }
      b = e.support = {}, M = e.isXML = function(t) {
        var e = t && (t.ownerDocument || t).documentElement;
        return !!e && "HTML" !== e.nodeName;
      }, P = e.setDocument = function(t) {
        var e, i, n = t ? t.ownerDocument || t : B;
        return n !== k && 9 === n.nodeType && n.documentElement ? (k = n, R = k.documentElement, D = !M(k), B !== k && (i = k.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", _t, !1) : i.attachEvent && i.attachEvent("onunload", _t)), b.attributes = r(function(t) {
          return t.className = "i", !t.getAttribute("className");
        }), b.getElementsByTagName = r(function(t) {
          return t.appendChild(k.createComment("")), !t.getElementsByTagName("*").length;
        }), b.getElementsByClassName = ft.test(k.getElementsByClassName), b.getById = r(function(t) {
          return R.appendChild(t).id = O, !k.getElementsByName || !k.getElementsByName(O).length;
        }), b.getById ? (_.filter.ID = function(t) {
          var e = t.replace(vt, yt);
          return function(t) {
            return t.getAttribute("id") === e;
          };
        }, _.find.ID = function(t, e) {
          if (void 0 !== e.getElementById && D) {
            var i = e.getElementById(t);
            return i ? [i] : [];
          }
        }) : (_.filter.ID = function(t) {
          var e = t.replace(vt, yt);
          return function(t) {
            var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
            return i && i.value === e;
          };
        }, _.find.ID = function(t, e) {
          if (void 0 !== e.getElementById && D) {
            var i, n, r, a = e.getElementById(t);
            if (a) {
              if ((i = a.getAttributeNode("id")) && i.value === t) {
                return [a];
              }
              for (r = e.getElementsByName(t), n = 0; a = r[n++];) {
                if ((i = a.getAttributeNode("id")) && i.value === t) {
                  return [a];
                }
              }
            }
            return [];
          }
        }), _.find.TAG = b.getElementsByTagName ? function(t, e) {
          return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0;
        } : function(t, e) {
          var i, n = [], r = 0, a = e.getElementsByTagName(t);
          if ("*" === t) {
            for (; i = a[r++];) {
              1 === i.nodeType && n.push(i);
            }
            return n;
          }
          return a;
        }, _.find.CLASS = b.getElementsByClassName && function(t, e) {
          if (void 0 !== e.getElementsByClassName && D) {
            return e.getElementsByClassName(t);
          }
        }, N = [], I = [], (b.qsa = ft.test(k.querySelectorAll)) && (r(function(t) {
          R.appendChild(t).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + tt + "*(?:value|" + K + ")"), t.querySelectorAll("[id~=" + O + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + O + "+*").length || I.push(".#.+[+~]");
        }), r(function(t) {
          t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var e = k.createElement("input");
          e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && I.push(":enabled", ":disabled"), R.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:");
        })), (b.matchesSelector = ft.test(U = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && r(function(t) {
          b.disconnectedMatch = U.call(t, "*"), U.call(t, "[s!='']:x"), N.push("!=", nt);
        }), I = I.length && new RegExp(I.join("|")), N = N.length && new RegExp(N.join("|")), e = ft.test(R.compareDocumentPosition), F = e || ft.test(R.contains) ? function(t, e) {
          var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
          return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
        } : function(t, e) {
          if (e) {
            for (; e = e.parentNode;) {
              if (e === t) {
                return !0;
              }
            }
          }
          return !1;
        }, q = e ? function(t, e) {
          if (t === e) {
            return L = !0, 0;
          }
          var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
          return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === k || t.ownerDocument === B && F(B, t) ? -1 : e === k || e.ownerDocument === B && F(B, e) ? 1 : C ? J(C, t) - J(C, e) : 0 : 4 & i ? -1 : 1);
        } : function(t, e) {
          if (t === e) {
            return L = !0, 0;
          }
          var i, n = 0, r = t.parentNode, a = e.parentNode, o = [t], c = [e];
          if (!r || !a) {
            return t === k ? -1 : e === k ? 1 : r ? -1 : a ? 1 : C ? J(C, t) - J(C, e) : 0;
          }
          if (r === a) {
            return s(t, e);
          }
          for (i = t; i = i.parentNode;) {
            o.unshift(i);
          }
          for (i = e; i = i.parentNode;) {
            c.unshift(i);
          }
          for (; o[n] === c[n];) {
            n++;
          }
          return n ? s(o[n], c[n]) : o[n] === B ? -1 : c[n] === B ? 1 : 0;
        }, k) : k;
      }, e.matches = function(t, i) {
        return e(t, null, null, i);
      }, e.matchesSelector = function(t, i) {
        if ((t.ownerDocument || t) !== k && P(t), i = i.replace(ct, "='$1']"), b.matchesSelector && D && !j[i + " "] && (!N || !N.test(i)) && (!I || !I.test(i))) {
          try {
            var n = U.call(t, i);
            if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) {
              return n;
            }
          } catch (t$7) {
          }
        }
        return e(i, k, null, [t]).length > 0;
      }, e.contains = function(t, e) {
        return (t.ownerDocument || t) !== k && P(t), F(t, e);
      }, e.attr = function(t, e) {
        (t.ownerDocument || t) !== k && P(t);
        var i = _.attrHandle[e.toLowerCase()], n = i && W.call(_.attrHandle, e.toLowerCase()) ? i(t, e, !D) : void 0;
        return void 0 !== n ? n : b.attributes || !D ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
      }, e.escape = function(t) {
        return (t + "").replace(xt, bt);
      }, e.error = function(t) {
        throw new Error("Syntax error, unrecognized expression: " + t);
      }, e.uniqueSort = function(t) {
        var e, i = [], n = 0, r = 0;
        if (L = !b.detectDuplicates, C = !b.sortStable && t.slice(0), t.sort(q), L) {
          for (; e = t[r++];) {
            e === t[r] && (n = i.push(r));
          }
          for (; n--;) {
            t.splice(i[n], 1);
          }
        }
        return C = null, t;
      }, w = e.getText = function(t) {
        var e, i = "", n = 0, r = t.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof t.textContent) {
              return t.textContent;
            }
            for (t = t.firstChild; t; t = t.nextSibling) {
              i += w(t);
            }
          } else {
            if (3 === r || 4 === r) {
              return t.nodeValue;
            }
          }
        } else {
          for (; e = t[n++];) {
            i += w(e);
          }
        }
        return i;
      }, (_ = e.selectors = {cacheLength:50, createPseudo:n, match:ut, attrHandle:{}, find:{}, relative:{">":{dir:"parentNode", first:!0}, " ":{dir:"parentNode"}, "+":{dir:"previousSibling", first:!0}, "~":{dir:"previousSibling"}}, preFilter:{ATTR:function(t) {
        return t[1] = t[1].replace(vt, yt), t[3] = (t[3] || t[4] || t[5] || "").replace(vt, yt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
      }, CHILD:function(t) {
        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t;
      }, PSEUDO:function(t) {
        var e, i = !t[6] && t[2];
        return ut.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && lt.test(i) && (e = E(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3));
      }}, filter:{TAG:function(t) {
        var e = t.replace(vt, yt).toLowerCase();
        return "*" === t ? function() {
          return !0;
        } : function(t) {
          return t.nodeName && t.nodeName.toLowerCase() === e;
        };
      }, CLASS:function(t) {
        var e = V[t + " "];
        return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && V(t, function(t) {
          return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
        });
      }, ATTR:function(t, i, n) {
        return function(r) {
          var a = e.attr(r, t);
          return null == a ? "!=" === i : !i || (a += "", "=" === i ? a === n : "!=" === i ? a !== n : "^=" === i ? n && 0 === a.indexOf(n) : "*=" === i ? n && a.indexOf(n) > -1 : "$=" === i ? n && a.slice(-n.length) === n : "~=" === i ? (" " + a.replace(rt, " ") + " ").indexOf(n) > -1 : "|=" === i && (a === n || a.slice(0, n.length + 1) === n + "-"));
        };
      }, CHILD:function(t, e, i, n, r) {
        var a = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), o = "of-type" === e;
        return 1 === n && 0 === r ? function(t) {
          return !!t.parentNode;
        } : function(e, i, c) {
          var l, h, u, d, p, f, m = a !== s ? "nextSibling" : "previousSibling", g = e.parentNode, v = o && e.nodeName.toLowerCase(), y = !c && !o, x = !1;
          if (g) {
            if (a) {
              for (; m;) {
                for (d = e; d = d[m];) {
                  if (o ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) {
                    return !1;
                  }
                }
                f = m = "only" === t && !f && "nextSibling";
              }
              return !0;
            }
            if (f = [s ? g.firstChild : g.lastChild], s && y) {
              for (x = (p = (l = (h = (u = (d = g)[O] || (d[O] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === z && l[1]) && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (x = p = 0) || f.pop();) {
                if (1 === d.nodeType && ++x && d === e) {
                  h[t] = [z, p, x];
                  break;
                }
              }
            } else {
              if (y && (d = e, u = d[O] || (d[O] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), l = h[t] || [], p = l[0] === z && l[1], x = p), !1 === x) {
                for (; (d = ++p && d && d[m] || (x = p = 0) || f.pop()) && ((o ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++x || (y && (u = d[O] || (d[O] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), h[t] = [z, x]), d !== e));) {
                }
              }
            }
            return (x -= r) === n || x % n == 0 && x / n >= 0;
          }
        };
      }, PSEUDO:function(t, i) {
        var r, a = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
        return a[O] ? a(i) : a.length > 1 ? (r = [t, t, "", i], _.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
          for (var n, r = a(t, i), s = r.length; s--;) {
            n = J(t, r[s]), t[n] = !(e[n] = r[s]);
          }
        }) : function(t) {
          return a(t, 0, r);
        }) : a;
      }}, pseudos:{not:n(function(t) {
        var e = [], i = [], r = T(t.replace(at, "$1"));
        return r[O] ? n(function(t, e, i, n) {
          for (var a, s = r(t, null, n, []), o = t.length; o--;) {
            (a = s[o]) && (t[o] = !(e[o] = a));
          }
        }) : function(t, n, a) {
          return e[0] = t, r(e, null, a, i), e[0] = null, !i.pop();
        };
      }), has:n(function(t) {
        return function(i) {
          return e(t, i).length > 0;
        };
      }), contains:n(function(t) {
        return t = t.replace(vt, yt), function(e) {
          return (e.textContent || e.innerText || w(e)).indexOf(t) > -1;
        };
      }), lang:n(function(t) {
        return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, yt).toLowerCase(), function(e) {
          var i;
          do {
            if (i = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) {
              return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-");
            }
          } while ((e = e.parentNode) && 1 === e.nodeType);
          return !1;
        };
      }), target:function(e) {
        var i = t.location && t.location.hash;
        return i && i.slice(1) === e.id;
      }, root:function(t) {
        return t === R;
      }, focus:function(t) {
        return t === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
      }, enabled:o(!1), disabled:o(!0), checked:function(t) {
        var e = t.nodeName.toLowerCase();
        return "input" === e && !!t.checked || "option" === e && !!t.selected;
      }, selected:function(t) {
        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
      }, empty:function(t) {
        for (t = t.firstChild; t; t = t.nextSibling) {
          if (t.nodeType < 6) {
            return !1;
          }
        }
        return !0;
      }, parent:function(t) {
        return !_.pseudos.empty(t);
      }, header:function(t) {
        return pt.test(t.nodeName);
      }, input:function(t) {
        return dt.test(t.nodeName);
      }, button:function(t) {
        var e = t.nodeName.toLowerCase();
        return "input" === e && "button" === t.type || "button" === e;
      }, text:function(t) {
        var e;
        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
      }, first:c(function() {
        return [0];
      }), last:c(function(t, e) {
        return [e - 1];
      }), eq:c(function(t, e, i) {
        return [i < 0 ? i + e : i];
      }), even:c(function(t, e) {
        for (var i = 0; i < e; i += 2) {
          t.push(i);
        }
        return t;
      }), odd:c(function(t, e) {
        for (var i = 1; i < e; i += 2) {
          t.push(i);
        }
        return t;
      }), lt:c(function(t, e, i) {
        for (var n = i < 0 ? i + e : i; --n >= 0;) {
          t.push(n);
        }
        return t;
      }), gt:c(function(t, e, i) {
        for (var n = i < 0 ? i + e : i; ++n < e;) {
          t.push(n);
        }
        return t;
      })}}).pseudos.nth = _.pseudos.eq;
      for (x in{radio:!0, checkbox:!0, file:!0, password:!0, image:!0}) {
        _.pseudos[x] = function(t) {
          return function(e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          };
        }(x);
      }
      for (x in{submit:!0, reset:!0}) {
        _.pseudos[x] = function(t) {
          return function(e) {
            var i = e.nodeName.toLowerCase();
            return ("input" === i || "button" === i) && e.type === t;
          };
        }(x);
      }
      return h.prototype = _.filters = _.pseudos, _.setFilters = new h, E = e.tokenize = function(t, i) {
        var n, r, a, s, o, c, l, h = G[t + " "];
        if (h) {
          return i ? 0 : h.slice(0);
        }
        for (o = t, c = [], l = _.preFilter; o;) {
          n && !(r = st.exec(o)) || (r && (o = o.slice(r[0].length) || o), c.push(a = [])), n = !1, (r = ot.exec(o)) && (n = r.shift(), a.push({value:n, type:r[0].replace(at, " ")}), o = o.slice(n.length));
          for (s in _.filter) {
            !(r = ut[s].exec(o)) || l[s] && !(r = l[s](r)) || (n = r.shift(), a.push({value:n, type:s, matches:r}), o = o.slice(n.length));
          }
          if (!n) {
            break;
          }
        }
        return i ? o.length : o ? e.error(t) : G(t, c).slice(0);
      }, T = e.compile = function(t, e) {
        var i, n = [], r = [], a = j[t + " "];
        if (!a) {
          for (e || (e = E(t)), i = e.length; i--;) {
            (a = v(e[i]))[O] ? n.push(a) : r.push(a);
          }
          (a = j(t, y(r, n))).selector = t;
        }
        return a;
      }, S = e.select = function(t, e, i, n) {
        var r, a, s, o, c, h = "function" == typeof t && t, d = !n && E(t = h.selector || t);
        if (i = i || [], 1 === d.length) {
          if ((a = d[0] = d[0].slice(0)).length > 2 && "ID" === (s = a[0]).type && 9 === e.nodeType && D && _.relative[a[1].type]) {
            if (!(e = (_.find.ID(s.matches[0].replace(vt, yt), e) || [])[0])) {
              return i;
            }
            h && (e = e.parentNode), t = t.slice(a.shift().value.length);
          }
          for (r = ut.needsContext.test(t) ? 0 : a.length; r-- && (s = a[r], !_.relative[o = s.type]);) {
            if ((c = _.find[o]) && (n = c(s.matches[0].replace(vt, yt), gt.test(a[0].type) && l(e.parentNode) || e))) {
              if (a.splice(r, 1), !(t = n.length && u(a))) {
                return Z.apply(i, n), i;
              }
              break;
            }
          }
        }
        return (h || T(t, d))(n, e, !D, i, !e || gt.test(t) && l(e.parentNode) || e), i;
      }, b.sortStable = O.split("").sort(q).join("") === O, b.detectDuplicates = !!L, P(), b.sortDetached = r(function(t) {
        return 1 & t.compareDocumentPosition(k.createElement("fieldset"));
      }), r(function(t) {
        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
      }) || a("type|href|height|width", function(t, e, i) {
        if (!i) {
          return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }
      }), b.attributes && r(function(t) {
        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
      }) || a("value", function(t, e, i) {
        if (!i && "input" === t.nodeName.toLowerCase()) {
          return t.defaultValue;
        }
      }), r(function(t) {
        return null == t.getAttribute("disabled");
      }) || a(K, function(t, e, i) {
        var n;
        if (!i) {
          return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
        }
      }), e;
    }(t);
    ft.find = xt, ft.expr = xt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = xt.uniqueSort, ft.text = xt.getText, ft.isXMLDoc = xt.isXML, ft.contains = xt.contains, ft.escapeSelector = xt.escape;
    var bt = function(t, e, i) {
      for (var n = [], r = void 0 !== i; (t = t[e]) && 9 !== t.nodeType;) {
        if (1 === t.nodeType) {
          if (r && ft(t).is(i)) {
            break;
          }
          n.push(t);
        }
      }
      return n;
    }, _t = function(t, e) {
      for (var i = []; t; t = t.nextSibling) {
        1 === t.nodeType && t !== e && i.push(t);
      }
      return i;
    }, wt = ft.expr.match.needsContext, Mt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, Et = /^.[^:#\[\.,]*$/;
    ft.filter = function(t, e, i) {
      var n = e[0];
      return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? ft.find.matchesSelector(n, t) ? [n] : [] : ft.find.matches(t, ft.grep(e, function(t) {
        return 1 === t.nodeType;
      }));
    }, ft.fn.extend({find:function(t) {
      var e, i, n = this.length, r = this;
      if ("string" != typeof t) {
        return this.pushStack(ft(t).filter(function() {
          for (e = 0; e < n; e++) {
            if (ft.contains(r[e], this)) {
              return !0;
            }
          }
        }));
      }
      for (i = this.pushStack([]), e = 0; e < n; e++) {
        ft.find(t, r[e], i);
      }
      return n > 1 ? ft.uniqueSort(i) : i;
    }, filter:function(t) {
      return this.pushStack(a(this, t || [], !1));
    }, not:function(t) {
      return this.pushStack(a(this, t || [], !0));
    }, is:function(t) {
      return !!a(this, "string" == typeof t && wt.test(t) ? ft(t) : t || [], !1).length;
    }});
    var Tt, St = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ft.fn.init = function(t, e, i) {
      var n, r;
      if (!t) {
        return this;
      }
      if (i = i || Tt, "string" == typeof t) {
        if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : St.exec(t)) || !n[1] && e) {
          return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
        }
        if (n[1]) {
          if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : et, !0)), Mt.test(n[1]) && ft.isPlainObject(e)) {
            for (n in e) {
              ft.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
            }
          }
          return this;
        }
        return (r = et.getElementById(n[2])) && (this[0] = r, this.length = 1), this;
      }
      return t.nodeType ? (this[0] = t, this.length = 1, this) : ft.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(ft) : ft.makeArray(t, this);
    }).prototype = ft.fn, Tt = ft(et);
    var At = /^(?:parents|prev(?:Until|All))/, Ct = {children:!0, contents:!0, next:!0, prev:!0};
    ft.fn.extend({has:function(t) {
      var e = ft(t, this), i = e.length;
      return this.filter(function() {
        for (var t = 0; t < i; t++) {
          if (ft.contains(this, e[t])) {
            return !0;
          }
        }
      });
    }, closest:function(t, e) {
      var i, n = 0, r = this.length, a = [], s = "string" != typeof t && ft(t);
      if (!wt.test(t)) {
        for (; n < r; n++) {
          for (i = this[n]; i && i !== e; i = i.parentNode) {
            if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && ft.find.matchesSelector(i, t))) {
              a.push(i);
              break;
            }
          }
        }
      }
      return this.pushStack(a.length > 1 ? ft.uniqueSort(a) : a);
    }, index:function(t) {
      return t ? "string" == typeof t ? st.call(ft(t), this[0]) : st.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add:function(t, e) {
      return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))));
    }, addBack:function(t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }}), ft.each({parent:function(t) {
      var e = t.parentNode;
      return e && 11 !== e.nodeType ? e : null;
    }, parents:function(t) {
      return bt(t, "parentNode");
    }, parentsUntil:function(t, e, i) {
      return bt(t, "parentNode", i);
    }, next:function(t) {
      return s(t, "nextSibling");
    }, prev:function(t) {
      return s(t, "previousSibling");
    }, nextAll:function(t) {
      return bt(t, "nextSibling");
    }, prevAll:function(t) {
      return bt(t, "previousSibling");
    }, nextUntil:function(t, e, i) {
      return bt(t, "nextSibling", i);
    }, prevUntil:function(t, e, i) {
      return bt(t, "previousSibling", i);
    }, siblings:function(t) {
      return _t((t.parentNode || {}).firstChild, t);
    }, children:function(t) {
      return _t(t.firstChild);
    }, contents:function(t) {
      return r(t, "iframe") ? t.contentDocument : (r(t, "template") && (t = t.content || t), ft.merge([], t.childNodes));
    }}, function(t, e) {
      ft.fn[t] = function(i, n) {
        var r = ft.map(this, e, i);
        return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = ft.filter(n, r)), this.length > 1 && (Ct[t] || ft.uniqueSort(r), At.test(t) && r.reverse()), this.pushStack(r);
      };
    });
    var Lt = /[^\x20\t\r\n\f]+/g;
    ft.Callbacks = function(t) {
      t = "string" == typeof t ? o(t) : ft.extend({}, t);
      var e, i, n, r, a = [], s = [], c = -1, l = function() {
        for (r = r || t.once, n = e = !0; s.length; c = -1) {
          for (i = s.shift(); ++c < a.length;) {
            !1 === a[c].apply(i[0], i[1]) && t.stopOnFalse && (c = a.length, i = !1);
          }
        }
        t.memory || (i = !1), e = !1, r && (a = i ? [] : "");
      }, h = {add:function() {
        return a && (i && !e && (c = a.length - 1, s.push(i)), function e(i) {
          ft.each(i, function(i, n) {
            ft.isFunction(n) ? t.unique && h.has(n) || a.push(n) : n && n.length && "string" !== ft.type(n) && e(n);
          });
        }(arguments), i && !e && l()), this;
      }, remove:function() {
        return ft.each(arguments, function(t, e) {
          for (var i; (i = ft.inArray(e, a, i)) > -1;) {
            a.splice(i, 1), i <= c && c--;
          }
        }), this;
      }, has:function(t) {
        return t ? ft.inArray(t, a) > -1 : a.length > 0;
      }, empty:function() {
        return a && (a = []), this;
      }, disable:function() {
        return r = s = [], a = i = "", this;
      }, disabled:function() {
        return !a;
      }, lock:function() {
        return r = s = [], i || e || (a = i = ""), this;
      }, locked:function() {
        return !!r;
      }, fireWith:function(t, i) {
        return r || (i = i || [], i = [t, i.slice ? i.slice() : i], s.push(i), e || l()), this;
      }, fire:function() {
        return h.fireWith(this, arguments), this;
      }, fired:function() {
        return !!n;
      }};
      return h;
    }, ft.extend({Deferred:function(e) {
      var i = [["notify", "progress", ft.Callbacks("memory"), ft.Callbacks("memory"), 2], ["resolve", "done", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 1, "rejected"]], n = "pending", r = {state:function() {
        return n;
      }, always:function() {
        return a.done(arguments).fail(arguments), this;
      }, "catch":function(t) {
        return r.then(null, t);
      }, pipe:function() {
        var t = arguments;
        return ft.Deferred(function(e) {
          ft.each(i, function(i, n) {
            var r = ft.isFunction(t[n[4]]) && t[n[4]];
            a[n[1]](function() {
              var t = r && r.apply(this, arguments);
              t && ft.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, r ? [t] : arguments);
            });
          }), t = null;
        }).promise();
      }, then:function(e, n, r) {
        function a(e, i, n, r) {
          return function() {
            var o = this, h = arguments, u = function() {
              var t, u;
              if (!(e < s)) {
                if ((t = n.apply(o, h)) === i.promise()) {
                  throw new TypeError("Thenable self-resolution");
                }
                u = t && ("object" == typeof t || "function" == typeof t) && t.then, ft.isFunction(u) ? r ? u.call(t, a(s, i, c, r), a(s, i, l, r)) : (s++, u.call(t, a(s, i, c, r), a(s, i, l, r), a(s, i, c, i.notifyWith))) : (n !== c && (o = void 0, h = [t]), (r || i.resolveWith)(o, h));
              }
            }, d = r ? u : function() {
              try {
                u();
              } catch (t$8) {
                ft.Deferred.exceptionHook && ft.Deferred.exceptionHook(t$8, d.stackTrace), e + 1 >= s && (n !== l && (o = void 0, h = [t$8]), i.rejectWith(o, h));
              }
            };
            e ? d() : (ft.Deferred.getStackHook && (d.stackTrace = ft.Deferred.getStackHook()), t.setTimeout(d));
          };
        }
        var s = 0;
        return ft.Deferred(function(t) {
          i[0][3].add(a(0, t, ft.isFunction(r) ? r : c, t.notifyWith)), i[1][3].add(a(0, t, ft.isFunction(e) ? e : c)), i[2][3].add(a(0, t, ft.isFunction(n) ? n : l));
        }).promise();
      }, promise:function(t) {
        return null != t ? ft.extend(t, r) : r;
      }}, a = {};
      return ft.each(i, function(t, e) {
        var s = e[2], o = e[5];
        r[e[1]] = s.add, o && s.add(function() {
          n = o;
        }, i[3 - t][2].disable, i[0][2].lock), s.add(e[3].fire), a[e[0]] = function() {
          return a[e[0] + "With"](this === a ? void 0 : this, arguments), this;
        }, a[e[0] + "With"] = s.fireWith;
      }), r.promise(a), e && e.call(a, a), a;
    }, when:function(t) {
      var e = arguments.length, i = e, n = Array(i), r = nt.call(arguments), a = ft.Deferred(), s = function(t) {
        return function(i) {
          n[t] = this, r[t] = arguments.length > 1 ? nt.call(arguments) : i, --e || a.resolveWith(n, r);
        };
      };
      if (e <= 1 && (h(t, a.done(s(i)).resolve, a.reject, !e), "pending" === a.state() || ft.isFunction(r[i] && r[i].then))) {
        return a.then();
      }
      for (; i--;) {
        h(r[i], s(i), a.reject);
      }
      return a.promise();
    }});
    var Pt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ft.Deferred.exceptionHook = function(e, i) {
      t.console && t.console.warn && e && Pt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i);
    }, ft.readyException = function(e) {
      t.setTimeout(function() {
        throw e;
      });
    };
    var kt = ft.Deferred();
    ft.fn.ready = function(t) {
      return kt.then(t)["catch"](function(t) {
        ft.readyException(t);
      }), this;
    }, ft.extend({isReady:!1, readyWait:1, ready:function(t) {
      (!0 === t ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, !0 !== t && --ft.readyWait > 0 || kt.resolveWith(et, [ft]));
    }}), ft.ready.then = kt.then, "complete" === et.readyState || "loading" !== et.readyState && !et.documentElement.doScroll ? t.setTimeout(ft.ready) : (et.addEventListener("DOMContentLoaded", u), t.addEventListener("load", u));
    var Rt = function(t, e, i, n, r, a, s) {
      var o = 0, c = t.length, l = null == i;
      if ("object" === ft.type(i)) {
        r = !0;
        for (o in i) {
          Rt(t, e, o, i[o], !0, a, s);
        }
      } else {
        if (void 0 !== n && (r = !0, ft.isFunction(n) || (s = !0), l && (s ? (e.call(t, n), e = null) : (l = e, e = function(t, e, i) {
          return l.call(ft(t), i);
        })), e)) {
          for (; o < c; o++) {
            e(t[o], i, s ? n : n.call(t[o], o, e(t[o], i)));
          }
        }
      }
      return r ? t : l ? e.call(t) : c ? e(t[0], i) : a;
    }, Dt = function(t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
    d.uid = 1, d.prototype = {cache:function(t) {
      var e = t[this.expando];
      return e || (e = {}, Dt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {value:e, configurable:!0}))), e;
    }, set:function(t, e, i) {
      var n, r = this.cache(t);
      if ("string" == typeof e) {
        r[ft.camelCase(e)] = i;
      } else {
        for (n in e) {
          r[ft.camelCase(n)] = e[n];
        }
      }
      return r;
    }, get:function(t, e) {
      return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][ft.camelCase(e)];
    }, access:function(t, e, i) {
      return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e);
    }, remove:function(t, e) {
      var i, n = t[this.expando];
      if (void 0 !== n) {
        if (void 0 !== e) {
          Array.isArray(e) ? e = e.map(ft.camelCase) : (e = ft.camelCase(e), e = e in n ? [e] : e.match(Lt) || []), i = e.length;
          for (; i--;) {
            delete n[e[i]];
          }
        }
        (void 0 === e || ft.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
      }
    }, hasData:function(t) {
      var e = t[this.expando];
      return void 0 !== e && !ft.isEmptyObject(e);
    }};
    var It = new d, Nt = new d, Ut = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ft = /[A-Z]/g;
    ft.extend({hasData:function(t) {
      return Nt.hasData(t) || It.hasData(t);
    }, data:function(t, e, i) {
      return Nt.access(t, e, i);
    }, removeData:function(t, e) {
      Nt.remove(t, e);
    }, _data:function(t, e, i) {
      return It.access(t, e, i);
    }, _removeData:function(t, e) {
      It.remove(t, e);
    }}), ft.fn.extend({data:function(t, e) {
      var i, n, r, a = this[0], s = a && a.attributes;
      if (void 0 === t) {
        if (this.length && (r = Nt.get(a), 1 === a.nodeType && !It.get(a, "hasDataAttrs"))) {
          for (i = s.length; i--;) {
            s[i] && 0 === (n = s[i].name).indexOf("data-") && (n = ft.camelCase(n.slice(5)), f(a, n, r[n]));
          }
          It.set(a, "hasDataAttrs", !0);
        }
        return r;
      }
      return "object" == typeof t ? this.each(function() {
        Nt.set(this, t);
      }) : Rt(this, function(e) {
        var i;
        if (a && void 0 === e) {
          if (void 0 !== (i = Nt.get(a, t))) {
            return i;
          }
          if (void 0 !== (i = f(a, t))) {
            return i;
          }
        } else {
          this.each(function() {
            Nt.set(this, t, e);
          });
        }
      }, null, e, arguments.length > 1, null, !0);
    }, removeData:function(t) {
      return this.each(function() {
        Nt.remove(this, t);
      });
    }}), ft.extend({queue:function(t, e, i) {
      var n;
      if (t) {
        return e = (e || "fx") + "queue", n = It.get(t, e), i && (!n || Array.isArray(i) ? n = It.access(t, e, ft.makeArray(i)) : n.push(i)), n || [];
      }
    }, dequeue:function(t, e) {
      e = e || "fx";
      var i = ft.queue(t, e), n = i.length, r = i.shift(), a = ft._queueHooks(t, e);
      "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete a.stop, r.call(t, function() {
        ft.dequeue(t, e);
      }, a)), !n && a && a.empty.fire();
    }, _queueHooks:function(t, e) {
      var i = e + "queueHooks";
      return It.get(t, i) || It.access(t, i, {empty:ft.Callbacks("once memory").add(function() {
        It.remove(t, [e + "queue", i]);
      })});
    }}), ft.fn.extend({queue:function(t, e) {
      var i = 2;
      return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function() {
        var i = ft.queue(this, t, e);
        ft._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && ft.dequeue(this, t);
      });
    }, dequeue:function(t) {
      return this.each(function() {
        ft.dequeue(this, t);
      });
    }, clearQueue:function(t) {
      return this.queue(t || "fx", []);
    }, promise:function(t, e) {
      var i, n = 1, r = ft.Deferred(), a = this, s = this.length, o = function() {
        --n || r.resolveWith(a, [a]);
      };
      for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) {
        (i = It.get(a[s], t + "queueHooks")) && i.empty && (n++, i.empty.add(o));
      }
      return o(), r.promise(e);
    }});
    var Ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Bt = new RegExp("^(?:([+-])=|)(" + Ot + ")([a-z%]*)$", "i"), zt = ["Top", "Right", "Bottom", "Left"], Ht = function(t, e) {
      return "none" === (t = e || t).style.display || "" === t.style.display && ft.contains(t.ownerDocument, t) && "none" === ft.css(t, "display");
    }, Vt = function(t, e, i, n) {
      var r, a, s = {};
      for (a in e) {
        s[a] = t.style[a], t.style[a] = e[a];
      }
      r = i.apply(t, n || []);
      for (a in e) {
        t.style[a] = s[a];
      }
      return r;
    }, Gt = {};
    ft.fn.extend({show:function() {
      return v(this, !0);
    }, hide:function() {
      return v(this);
    }, toggle:function(t) {
      return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
        Ht(this) ? ft(this).show() : ft(this).hide();
      });
    }});
    var jt = /^(?:checkbox|radio)$/i, qt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Wt = /^$|\/(?:java|ecma)script/i, Xt = {option:[1, "<select multiple='multiple'>", "</select>"], thead:[1, "<table>", "</table>"], col:[2, "<table><colgroup>", "</colgroup></table>"], tr:[2, "<table><tbody>", "</tbody></table>"], td:[3, "<table><tbody><tr>", "</tr></tbody></table>"], _default:[0, "", ""]};
    Xt.optgroup = Xt.option, Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead, Xt.th = Xt.td;
    var $t = /<|&#?\w+;/;
    !function() {
      var t = et.createDocumentFragment().appendChild(et.createElement("div")), e = et.createElement("input");
      e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), dt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
    }();
    var Yt = et.documentElement, Zt = /^key/, Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Jt = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {global:{}, add:function(t, e, i, n, r) {
      var a, s, o, c, l, h, u, d, p, f, m, g = It.get(t);
      if (g) {
        for (i.handler && (a = i, i = a.handler, r = a.selector), r && ft.find.matchesSelector(Yt, r), i.guid || (i.guid = ft.guid++), (c = g.events) || (c = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
          return void 0 !== ft && ft.event.triggered !== e.type ? ft.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(Lt) || [""]).length; l--;) {
          o = Jt.exec(e[l]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p && (u = ft.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = ft.event.special[p] || {}, h = ft.extend({type:p, origType:m, data:n, handler:i, guid:i.guid, selector:r, needsContext:r && ft.expr.match.needsContext.test(r), namespace:f.join(".")}, a), (d = c[p]) || (d = c[p] = [], d.delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, f, s) || t.addEventListener && t.addEventListener(p, s)),
          u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), ft.event.global[p] = !0);
        }
      }
    }, remove:function(t, e, i, n, r) {
      var a, s, o, c, l, h, u, d, p, f, m, g = It.hasData(t) && It.get(t);
      if (g && (c = g.events)) {
        for (l = (e = (e || "").match(Lt) || [""]).length; l--;) {
          if (o = Jt.exec(e[l]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p) {
            for (u = ft.event.special[p] || {}, d = c[p = (n ? u.delegateType : u.bindType) || p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = d.length; a--;) {
              h = d[a], !r && m !== h.origType || i && i.guid !== h.guid || o && !o.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (d.splice(a, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(t, h));
            }
            s && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, g.handle) || ft.removeEvent(t, p, g.handle), delete c[p]);
          } else {
            for (p in c) {
              ft.event.remove(t, p + e[l], i, n, !0);
            }
          }
        }
        ft.isEmptyObject(c) && It.remove(t, "handle events");
      }
    }, dispatch:function(t) {
      var e, i, n, r, a, s, o = ft.event.fix(t), c = new Array(arguments.length), l = (It.get(this, "events") || {})[o.type] || [], h = ft.event.special[o.type] || {};
      for (c[0] = o, e = 1; e < arguments.length; e++) {
        c[e] = arguments[e];
      }
      if (o.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, o)) {
        for (s = ft.event.handlers.call(this, o, l), e = 0; (r = s[e++]) && !o.isPropagationStopped();) {
          for (o.currentTarget = r.elem, i = 0; (a = r.handlers[i++]) && !o.isImmediatePropagationStopped();) {
            o.rnamespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, void 0 !== (n = ((ft.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, c)) && !1 === (o.result = n) && (o.preventDefault(), o.stopPropagation()));
          }
        }
        return h.postDispatch && h.postDispatch.call(this, o), o.result;
      }
    }, handlers:function(t, e) {
      var i, n, r, a, s, o = [], c = e.delegateCount, l = t.target;
      if (c && l.nodeType && !("click" === t.type && t.button >= 1)) {
        for (; l !== this; l = l.parentNode || this) {
          if (1 === l.nodeType && ("click" !== t.type || !0 !== l.disabled)) {
            for (a = [], s = {}, i = 0; i < c; i++) {
              n = e[i], r = n.selector + " ", void 0 === s[r] && (s[r] = n.needsContext ? ft(r, this).index(l) > -1 : ft.find(r, this, null, [l]).length), s[r] && a.push(n);
            }
            a.length && o.push({elem:l, handlers:a});
          }
        }
      }
      return l = this, c < e.length && o.push({elem:l, handlers:e.slice(c)}), o;
    }, addProp:function(t, e) {
      Object.defineProperty(ft.Event.prototype, t, {enumerable:!0, configurable:!0, get:ft.isFunction(e) ? function() {
        if (this.originalEvent) {
          return e(this.originalEvent);
        }
      } : function() {
        if (this.originalEvent) {
          return this.originalEvent[t];
        }
      }, set:function(e) {
        Object.defineProperty(this, t, {enumerable:!0, configurable:!0, writable:!0, value:e});
      }});
    }, fix:function(t) {
      return t[ft.expando] ? t : new ft.Event(t);
    }, special:{load:{noBubble:!0}, focus:{trigger:function() {
      if (this !== M() && this.focus) {
        return this.focus(), !1;
      }
    }, delegateType:"focusin"}, blur:{trigger:function() {
      if (this === M() && this.blur) {
        return this.blur(), !1;
      }
    }, delegateType:"focusout"}, click:{trigger:function() {
      if (jt.test(this.type) && this.click && r(this, "input")) {
        return this.click(), !1;
      }
    }, _default:function(t) {
      return r(t.target, "a");
    }}, beforeunload:{postDispatch:function(t) {
      void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
    }}}}, ft.removeEvent = function(t, e, i) {
      t.removeEventListener && t.removeEventListener(e, i);
    }, ft.Event = function(t, e) {
      return this instanceof ft.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? _ : w, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), void(this[ft.expando] = !0)) : new ft.Event(t,
      e);
    }, ft.Event.prototype = {constructor:ft.Event, isDefaultPrevented:w, isPropagationStopped:w, isImmediatePropagationStopped:w, isSimulated:!1, preventDefault:function() {
      var t = this.originalEvent;
      this.isDefaultPrevented = _, t && !this.isSimulated && t.preventDefault();
    }, stopPropagation:function() {
      var t = this.originalEvent;
      this.isPropagationStopped = _, t && !this.isSimulated && t.stopPropagation();
    }, stopImmediatePropagation:function() {
      var t = this.originalEvent;
      this.isImmediatePropagationStopped = _, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
    }}, ft.each({altKey:!0, bubbles:!0, cancelable:!0, changedTouches:!0, ctrlKey:!0, detail:!0, eventPhase:!0, metaKey:!0, pageX:!0, pageY:!0, shiftKey:!0, view:!0, "char":!0, charCode:!0, key:!0, keyCode:!0, button:!0, buttons:!0, clientX:!0, clientY:!0, offsetX:!0, offsetY:!0, pointerId:!0, pointerType:!0, screenX:!0, screenY:!0, targetTouches:!0, toElement:!0, touches:!0, which:function(t) {
      var e = t.button;
      return null == t.which && Zt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Qt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
    }}, ft.event.addProp), ft.each({mouseenter:"mouseover", mouseleave:"mouseout", pointerenter:"pointerover", pointerleave:"pointerout"}, function(t, e) {
      ft.event.special[t] = {delegateType:e, bindType:e, handle:function(t) {
        var i, n = this, r = t.relatedTarget, a = t.handleObj;
        return r && (r === n || ft.contains(n, r)) || (t.type = a.origType, i = a.handler.apply(this, arguments), t.type = e), i;
      }};
    }), ft.fn.extend({on:function(t, e, i, n) {
      return E(this, t, e, i, n);
    }, one:function(t, e, i, n) {
      return E(this, t, e, i, n, 1);
    }, off:function(t, e, i) {
      var n, r;
      if (t && t.preventDefault && t.handleObj) {
        return n = t.handleObj, ft(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
      }
      if ("object" == typeof t) {
        for (r in t) {
          this.off(r, e, t[r]);
        }
        return this;
      }
      return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = w), this.each(function() {
        ft.event.remove(this, t, i, e);
      });
    }});
    var Kt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, te = /<script|<style|<link/i, ee = /checked\s*(?:[^=]|=\s*.checked.)/i, ie = /^true\/(.*)/, ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ft.extend({htmlPrefilter:function(t) {
      return t.replace(Kt, "<$1></$2>");
    }, clone:function(t, e, i) {
      var n, r, a, s, o = t.cloneNode(!0), c = ft.contains(t.ownerDocument, t);
      if (!(dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t))) {
        for (s = y(o), a = y(t), n = 0, r = a.length; n < r; n++) {
          L(a[n], s[n]);
        }
      }
      if (e) {
        if (i) {
          for (a = a || y(t), s = s || y(o), n = 0, r = a.length; n < r; n++) {
            C(a[n], s[n]);
          }
        } else {
          C(t, o);
        }
      }
      return (s = y(o, "script")).length > 0 && x(s, !c && y(t, "script")), o;
    }, cleanData:function(t) {
      for (var e, i, n, r = ft.event.special, a = 0; void 0 !== (i = t[a]); a++) {
        if (Dt(i)) {
          if (e = i[It.expando]) {
            if (e.events) {
              for (n in e.events) {
                r[n] ? ft.event.remove(i, n) : ft.removeEvent(i, n, e.handle);
              }
            }
            i[It.expando] = void 0;
          }
          i[Nt.expando] && (i[Nt.expando] = void 0);
        }
      }
    }}), ft.fn.extend({detach:function(t) {
      return k(this, t, !0);
    }, remove:function(t) {
      return k(this, t);
    }, text:function(t) {
      return Rt(this, function(t) {
        return void 0 === t ? ft.text(this) : this.empty().each(function() {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
        });
      }, null, t, arguments.length);
    }, append:function() {
      return P(this, arguments, function(t) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || T(this, t).appendChild(t);
      });
    }, prepend:function() {
      return P(this, arguments, function(t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = T(this, t);
          e.insertBefore(t, e.firstChild);
        }
      });
    }, before:function() {
      return P(this, arguments, function(t) {
        this.parentNode && this.parentNode.insertBefore(t, this);
      });
    }, after:function() {
      return P(this, arguments, function(t) {
        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
      });
    }, empty:function() {
      for (var t, e = 0; null != (t = this[e]); e++) {
        1 === t.nodeType && (ft.cleanData(y(t, !1)), t.textContent = "");
      }
      return this;
    }, clone:function(t, e) {
      return t = null != t && t, e = null == e ? t : e, this.map(function() {
        return ft.clone(this, t, e);
      });
    }, html:function(t) {
      return Rt(this, function(t) {
        var e = this[0] || {}, i = 0, n = this.length;
        if (void 0 === t && 1 === e.nodeType) {
          return e.innerHTML;
        }
        if ("string" == typeof t && !te.test(t) && !Xt[(qt.exec(t) || ["", ""])[1].toLowerCase()]) {
          t = ft.htmlPrefilter(t);
          try {
            for (; i < n; i++) {
              1 === (e = this[i] || {}).nodeType && (ft.cleanData(y(e, !1)), e.innerHTML = t);
            }
            e = 0;
          } catch (t$9) {
          }
        }
        e && this.empty().append(t);
      }, null, t, arguments.length);
    }, replaceWith:function() {
      var t = [];
      return P(this, arguments, function(e) {
        var i = this.parentNode;
        ft.inArray(this, t) < 0 && (ft.cleanData(y(this)), i && i.replaceChild(e, this));
      }, t);
    }}), ft.each({appendTo:"append", prependTo:"prepend", insertBefore:"before", insertAfter:"after", replaceAll:"replaceWith"}, function(t, e) {
      ft.fn[t] = function(t) {
        for (var i, n = [], r = ft(t), a = r.length - 1, s = 0; s <= a; s++) {
          i = s === a ? this : this.clone(!0), ft(r[s])[e](i), at.apply(n, i.get());
        }
        return this.pushStack(n);
      };
    });
    var re = /^margin/, ae = new RegExp("^(" + Ot + ")(?!px)[a-z%]+$", "i"), se = function(e) {
      var i = e.ownerDocument.defaultView;
      return i && i.opener || (i = t), i.getComputedStyle(e);
    };
    !function() {
      function e() {
        if (o) {
          o.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", o.innerHTML = "", Yt.appendChild(s);
          var e = t.getComputedStyle(o);
          i = "1%" !== e.top, a = "2px" === e.marginLeft, n = "4px" === e.width, o.style.marginRight = "50%", r = "4px" === e.marginRight, Yt.removeChild(s), o = null;
        }
      }
      var i, n, r, a, s = et.createElement("div"), o = et.createElement("div");
      o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", dt.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(o), ft.extend(dt, {pixelPosition:function() {
        return e(), i;
      }, boxSizingReliable:function() {
        return e(), n;
      }, pixelMarginRight:function() {
        return e(), r;
      }, reliableMarginLeft:function() {
        return e(), a;
      }}));
    }();
    var oe = /^(none|table(?!-c[ea]).+)/, ce = /^--/, le = {position:"absolute", visibility:"hidden", display:"block"}, he = {letterSpacing:"0", fontWeight:"400"}, ue = ["Webkit", "Moz", "ms"], de = et.createElement("div").style;
    ft.extend({cssHooks:{opacity:{get:function(t, e) {
      if (e) {
        var i = R(t, "opacity");
        return "" === i ? "1" : i;
      }
    }}}, cssNumber:{animationIterationCount:!0, columnCount:!0, fillOpacity:!0, flexGrow:!0, flexShrink:!0, fontWeight:!0, lineHeight:!0, opacity:!0, order:!0, orphans:!0, widows:!0, zIndex:!0, zoom:!0}, cssProps:{"float":"cssFloat"}, style:function(t, e, i, n) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var r, a, s, o = ft.camelCase(e), c = ce.test(e), l = t.style;
        return c || (e = N(o)), s = ft.cssHooks[e] || ft.cssHooks[o], void 0 === i ? s && "get" in s && void 0 !== (r = s.get(t, !1, n)) ? r : l[e] : ("string" === (a = typeof i) && (r = Bt.exec(i)) && r[1] && (i = m(t, e, r), a = "number"), void(null != i && i === i && ("number" === a && (i += r && r[3] || (ft.cssNumber[o] ? "" : "px")), dt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (c ? l.setProperty(e,
        i) : l[e] = i))));
      }
    }, css:function(t, e, i, n) {
      var r, a, s, o = ft.camelCase(e);
      return ce.test(e) || (e = N(o)), (s = ft.cssHooks[e] || ft.cssHooks[o]) && "get" in s && (r = s.get(t, !0, i)), void 0 === r && (r = R(t, e, n)), "normal" === r && e in he && (r = he[e]), "" === i || i ? (a = parseFloat(r), !0 === i || isFinite(a) ? a || 0 : r) : r;
    }}), ft.each(["height", "width"], function(t, e) {
      ft.cssHooks[e] = {get:function(t, i, n) {
        if (i) {
          return !oe.test(ft.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? O(t, e, n) : Vt(t, le, function() {
            return O(t, e, n);
          });
        }
      }, set:function(t, i, n) {
        var r, a = n && se(t), s = n && F(t, e, n, "border-box" === ft.css(t, "boxSizing", !1, a), a);
        return s && (r = Bt.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i, i = ft.css(t, e)), U(0, i, s);
      }};
    }), ft.cssHooks.marginLeft = D(dt.reliableMarginLeft, function(t, e) {
      if (e) {
        return (parseFloat(R(t, "marginLeft")) || t.getBoundingClientRect().left - Vt(t, {marginLeft:0}, function() {
          return t.getBoundingClientRect().left;
        })) + "px";
      }
    }), ft.each({margin:"", padding:"", border:"Width"}, function(t, e) {
      ft.cssHooks[t + e] = {expand:function(i) {
        for (var n = 0, r = {}, a = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) {
          r[t + zt[n] + e] = a[n] || a[n - 2] || a[0];
        }
        return r;
      }}, re.test(t) || (ft.cssHooks[t + e].set = U);
    }), ft.fn.extend({css:function(t, e) {
      return Rt(this, function(t, e, i) {
        var n, r, a = {}, s = 0;
        if (Array.isArray(e)) {
          for (n = se(t), r = e.length; s < r; s++) {
            a[e[s]] = ft.css(t, e[s], !1, n);
          }
          return a;
        }
        return void 0 !== i ? ft.style(t, e, i) : ft.css(t, e);
      }, t, e, arguments.length > 1);
    }}), ft.Tween = B, B.prototype = {constructor:B, init:function(t, e, i, n, r, a) {
      this.elem = t, this.prop = i, this.easing = r || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = a || (ft.cssNumber[i] ? "" : "px");
    }, cur:function() {
      var t = B.propHooks[this.prop];
      return t && t.get ? t.get(this) : B.propHooks._default.get(this);
    }, run:function(t) {
      var e, i = B.propHooks[this.prop];
      return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : B.propHooks._default.set(this), this;
    }}, B.prototype.init.prototype = B.prototype, B.propHooks = {_default:{get:function(t) {
      var e;
      return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
    }, set:function(t) {
      ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit);
    }}}, B.propHooks.scrollTop = B.propHooks.scrollLeft = {set:function(t) {
      t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
    }}, ft.easing = {linear:function(t) {
      return t;
    }, swing:function(t) {
      return .5 - Math.cos(t * Math.PI) / 2;
    }, _default:"swing"}, ft.fx = B.prototype.init, ft.fx.step = {};
    var pe, fe, me = /^(?:toggle|show|hide)$/, ge = /queueHooks$/;
    ft.Animation = ft.extend(q, {tweeners:{"*":[function(t, e) {
      var i = this.createTween(t, e);
      return m(i.elem, t, Bt.exec(e), i), i;
    }]}, tweener:function(t, e) {
      ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Lt);
      for (var i, n = 0, r = t.length; n < r; n++) {
        i = t[n], q.tweeners[i] = q.tweeners[i] || [], q.tweeners[i].unshift(e);
      }
    }, prefilters:[function(t, e, i) {
      var n, r, a, s, o, c, l, h, u = "width" in e || "height" in e, d = this, p = {}, f = t.style, m = t.nodeType && Ht(t), g = It.get(t, "fxshow");
      i.queue || (null == (s = ft._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function() {
        s.unqueued || o();
      }), s.unqueued++, d.always(function() {
        d.always(function() {
          s.unqueued--, ft.queue(t, "fx").length || s.empty.fire();
        });
      }));
      for (n in e) {
        if (r = e[n], me.test(r)) {
          if (delete e[n], a = a || "toggle" === r, r === (m ? "hide" : "show")) {
            if ("show" !== r || !g || void 0 === g[n]) {
              continue;
            }
            m = !0;
          }
          p[n] = g && g[n] || ft.style(t, n);
        }
      }
      if ((c = !ft.isEmptyObject(e)) || !ft.isEmptyObject(p)) {
        u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (l = g && g.display) && (l = It.get(t, "display")), "none" === (h = ft.css(t, "display")) && (l ? h = l : (v([t], !0), l = t.style.display || l, h = ft.css(t, "display"), v([t]))), ("inline" === h || "inline-block" === h && null != l) && "none" === ft.css(t, "float") && (c || (d.done(function() {
          f.display = l;
        }), null == l && (h = f.display, l = "none" === h ? "" : h)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always(function() {
          f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2];
        })), c = !1;
        for (n in p) {
          c || (g ? "hidden" in g && (m = g.hidden) : g = It.access(t, "fxshow", {display:l}), a && (g.hidden = !m), m && v([t], !0), d.done(function() {
            m || v([t]), It.remove(t, "fxshow");
            for (n in p) {
              ft.style(t, n, p[n]);
            }
          })), c = G(m ? g[n] : 0, n, d), n in g || (g[n] = c.start, m && (c.end = c.start, c.start = 0));
        }
      }
    }], prefilter:function(t, e) {
      e ? q.prefilters.unshift(t) : q.prefilters.push(t);
    }}), ft.speed = function(t, e, i) {
      var n = t && "object" == typeof t ? ft.extend({}, t) : {complete:i || !i && e || ft.isFunction(t) && t, duration:t, easing:i && e || e && !ft.isFunction(e) && e};
      return ft.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in ft.fx.speeds ? n.duration = ft.fx.speeds[n.duration] : n.duration = ft.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
        ft.isFunction(n.old) && n.old.call(this), n.queue && ft.dequeue(this, n.queue);
      }, n;
    }, ft.fn.extend({fadeTo:function(t, e, i, n) {
      return this.filter(Ht).css("opacity", 0).show().end().animate({opacity:e}, t, i, n);
    }, animate:function(t, e, i, n) {
      var r = ft.isEmptyObject(t), a = ft.speed(e, i, n), s = function() {
        var e = q(this, ft.extend({}, t), a);
        (r || It.get(this, "finish")) && e.stop(!0);
      };
      return s.finish = s, r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s);
    }, stop:function(t, e, i) {
      var n = function(t) {
        var e = t.stop;
        delete t.stop, e(i);
      };
      return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
        var e = !0, r = null != t && t + "queueHooks", a = ft.timers, s = It.get(this);
        if (r) {
          s[r] && s[r].stop && n(s[r]);
        } else {
          for (r in s) {
            s[r] && s[r].stop && ge.test(r) && n(s[r]);
          }
        }
        for (r = a.length; r--;) {
          a[r].elem !== this || null != t && a[r].queue !== t || (a[r].anim.stop(i), e = !1, a.splice(r, 1));
        }
        !e && i || ft.dequeue(this, t);
      });
    }, finish:function(t) {
      return !1 !== t && (t = t || "fx"), this.each(function() {
        var e, i = It.get(this), n = i[t + "queue"], r = i[t + "queueHooks"], a = ft.timers, s = n ? n.length : 0;
        for (i.finish = !0, ft.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = a.length; e--;) {
          a[e].elem === this && a[e].queue === t && (a[e].anim.stop(!0), a.splice(e, 1));
        }
        for (e = 0; e < s; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }
        delete i.finish;
      });
    }}), ft.each(["toggle", "show", "hide"], function(t, e) {
      var i = ft.fn[e];
      ft.fn[e] = function(t, n, r) {
        return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(V(e, !0), t, n, r);
      };
    }), ft.each({slideDown:V("show"), slideUp:V("hide"), slideToggle:V("toggle"), fadeIn:{opacity:"show"}, fadeOut:{opacity:"hide"}, fadeToggle:{opacity:"toggle"}}, function(t, e) {
      ft.fn[t] = function(t, i, n) {
        return this.animate(e, t, i, n);
      };
    }), ft.timers = [], ft.fx.tick = function() {
      var t, e = 0, i = ft.timers;
      for (pe = ft.now(); e < i.length; e++) {
        (t = i[e])() || i[e] !== t || i.splice(e--, 1);
      }
      i.length || ft.fx.stop(), pe = void 0;
    }, ft.fx.timer = function(t) {
      ft.timers.push(t), ft.fx.start();
    }, ft.fx.interval = 13, ft.fx.start = function() {
      fe || (fe = !0, z());
    }, ft.fx.stop = function() {
      fe = null;
    }, ft.fx.speeds = {slow:600, fast:200, _default:400}, ft.fn.delay = function(e, i) {
      return e = ft.fx ? ft.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
        var r = t.setTimeout(i, e);
        n.stop = function() {
          t.clearTimeout(r);
        };
      });
    }, function() {
      var t = et.createElement("input"), e = et.createElement("select").appendChild(et.createElement("option"));
      t.type = "checkbox", dt.checkOn = "" !== t.value, dt.optSelected = e.selected, (t = et.createElement("input")).value = "t", t.type = "radio", dt.radioValue = "t" === t.value;
    }();
    var ve, ye = ft.expr.attrHandle;
    ft.fn.extend({attr:function(t, e) {
      return Rt(this, ft.attr, t, e, arguments.length > 1);
    }, removeAttr:function(t) {
      return this.each(function() {
        ft.removeAttr(this, t);
      });
    }}), ft.extend({attr:function(t, e, i) {
      var n, r, a = t.nodeType;
      if (3 !== a && 8 !== a && 2 !== a) {
        return void 0 === t.getAttribute ? ft.prop(t, e, i) : (1 === a && ft.isXMLDoc(t) || (r = ft.attrHooks[e.toLowerCase()] || (ft.expr.match.bool.test(e) ? ve : void 0)), void 0 !== i ? null === i ? void ft.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : null == (n = ft.find.attr(t, e)) ? void 0 : n);
      }
    }, attrHooks:{type:{set:function(t, e) {
      if (!dt.radioValue && "radio" === e && r(t, "input")) {
        var i = t.value;
        return t.setAttribute("type", e), i && (t.value = i), e;
      }
    }}}, removeAttr:function(t, e) {
      var i, n = 0, r = e && e.match(Lt);
      if (r && 1 === t.nodeType) {
        for (; i = r[n++];) {
          t.removeAttribute(i);
        }
      }
    }}), ve = {set:function(t, e, i) {
      return !1 === e ? ft.removeAttr(t, i) : t.setAttribute(i, i), i;
    }}, ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
      var i = ye[e] || ft.find.attr;
      ye[e] = function(t, e, n) {
        var r, a, s = e.toLowerCase();
        return n || (a = ye[s], ye[s] = r, r = null != i(t, e, n) ? s : null, ye[s] = a), r;
      };
    });
    var xe = /^(?:input|select|textarea|button)$/i, be = /^(?:a|area)$/i;
    ft.fn.extend({prop:function(t, e) {
      return Rt(this, ft.prop, t, e, arguments.length > 1);
    }, removeProp:function(t) {
      return this.each(function() {
        delete this[ft.propFix[t] || t];
      });
    }}), ft.extend({prop:function(t, e, i) {
      var n, r, a = t.nodeType;
      if (3 !== a && 8 !== a && 2 !== a) {
        return 1 === a && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, r = ft.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e];
      }
    }, propHooks:{tabIndex:{get:function(t) {
      var e = ft.find.attr(t, "tabindex");
      return e ? parseInt(e, 10) : xe.test(t.nodeName) || be.test(t.nodeName) && t.href ? 0 : -1;
    }}}, propFix:{"for":"htmlFor", "class":"className"}}), dt.optSelected || (ft.propHooks.selected = {get:function(t) {
      var e = t.parentNode;
      return e && e.parentNode && e.parentNode.selectedIndex, null;
    }, set:function(t) {
      var e = t.parentNode;
      e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
    }}), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      ft.propFix[this.toLowerCase()] = this;
    }), ft.fn.extend({addClass:function(t) {
      var e, i, n, r, a, s, o, c = 0;
      if (ft.isFunction(t)) {
        return this.each(function(e) {
          ft(this).addClass(t.call(this, e, X(this)));
        });
      }
      if ("string" == typeof t && t) {
        for (e = t.match(Lt) || []; i = this[c++];) {
          if (r = X(i), n = 1 === i.nodeType && " " + W(r) + " ") {
            for (s = 0; a = e[s++];) {
              n.indexOf(" " + a + " ") < 0 && (n += a + " ");
            }
            r !== (o = W(n)) && i.setAttribute("class", o);
          }
        }
      }
      return this;
    }, removeClass:function(t) {
      var e, i, n, r, a, s, o, c = 0;
      if (ft.isFunction(t)) {
        return this.each(function(e) {
          ft(this).removeClass(t.call(this, e, X(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      if ("string" == typeof t && t) {
        for (e = t.match(Lt) || []; i = this[c++];) {
          if (r = X(i), n = 1 === i.nodeType && " " + W(r) + " ") {
            for (s = 0; a = e[s++];) {
              for (; n.indexOf(" " + a + " ") > -1;) {
                n = n.replace(" " + a + " ", " ");
              }
            }
            r !== (o = W(n)) && i.setAttribute("class", o);
          }
        }
      }
      return this;
    }, toggleClass:function(t, e) {
      var i = typeof t;
      return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function(i) {
        ft(this).toggleClass(t.call(this, i, X(this), e), e);
      }) : this.each(function() {
        var e, n, r, a;
        if ("string" === i) {
          for (n = 0, r = ft(this), a = t.match(Lt) || []; e = a[n++];) {
            r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
          }
        } else {
          void 0 !== t && "boolean" !== i || ((e = X(this)) && It.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : It.get(this, "__className__") || ""));
        }
      });
    }, hasClass:function(t) {
      var e, i, n = 0;
      for (e = " " + t + " "; i = this[n++];) {
        if (1 === i.nodeType && (" " + W(X(i)) + " ").indexOf(e) > -1) {
          return !0;
        }
      }
      return !1;
    }});
    var _e = /\r/g;
    ft.fn.extend({val:function(t) {
      var e, i, n, r = this[0];
      return arguments.length ? (n = ft.isFunction(t), this.each(function(i) {
        var r;
        1 === this.nodeType && (null == (r = n ? t.call(this, i, ft(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = ft.map(r, function(t) {
          return null == t ? "" : t + "";
        })), (e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r));
      })) : r ? (e = ft.valHooks[r.type] || ft.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : "string" == typeof(i = r.value) ? i.replace(_e, "") : null == i ? "" : i : void 0;
    }}), ft.extend({valHooks:{option:{get:function(t) {
      var e = ft.find.attr(t, "value");
      return null != e ? e : W(ft.text(t));
    }}, select:{get:function(t) {
      var e, i, n, a = t.options, s = t.selectedIndex, o = "select-one" === t.type, c = o ? null : [], l = o ? s + 1 : a.length;
      for (n = s < 0 ? l : o ? s : 0; n < l; n++) {
        if (((i = a[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !r(i.parentNode, "optgroup"))) {
          if (e = ft(i).val(), o) {
            return e;
          }
          c.push(e);
        }
      }
      return c;
    }, set:function(t, e) {
      for (var i, n, r = t.options, a = ft.makeArray(e), s = r.length; s--;) {
        n = r[s], (n.selected = ft.inArray(ft.valHooks.option.get(n), a) > -1) && (i = !0);
      }
      return i || (t.selectedIndex = -1), a;
    }}}}), ft.each(["radio", "checkbox"], function() {
      ft.valHooks[this] = {set:function(t, e) {
        if (Array.isArray(e)) {
          return t.checked = ft.inArray(ft(t).val(), e) > -1;
        }
      }}, dt.checkOn || (ft.valHooks[this].get = function(t) {
        return null === t.getAttribute("value") ? "on" : t.value;
      });
    });
    var we = /^(?:focusinfocus|focusoutblur)$/;
    ft.extend(ft.event, {trigger:function(e, i, n, r) {
      var a, s, o, c, l, h, u, d = [n || et], p = lt.call(e, "type") ? e.type : e, f = lt.call(e, "namespace") ? e.namespace.split(".") : [];
      if (s = o = n = n || et, 3 !== n.nodeType && 8 !== n.nodeType && !we.test(p + ft.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), l = p.indexOf(":") < 0 && "on" + p, e = e[ft.expando] ? e : new ft.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : ft.makeArray(i,
      [e]), u = ft.event.special[p] || {}, r || !u.trigger || !1 !== u.trigger.apply(n, i))) {
        if (!r && !u.noBubble && !ft.isWindow(n)) {
          for (c = u.delegateType || p, we.test(c + p) || (s = s.parentNode); s; s = s.parentNode) {
            d.push(s), o = s;
          }
          o === (n.ownerDocument || et) && d.push(o.defaultView || o.parentWindow || t);
        }
        for (a = 0; (s = d[a++]) && !e.isPropagationStopped();) {
          e.type = a > 1 ? c : u.bindType || p, (h = (It.get(s, "events") || {})[e.type] && It.get(s, "handle")) && h.apply(s, i), (h = l && s[l]) && h.apply && Dt(s) && (e.result = h.apply(s, i), !1 === e.result && e.preventDefault());
        }
        return e.type = p, r || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), i) || !Dt(n) || l && ft.isFunction(n[p]) && !ft.isWindow(n) && ((o = n[l]) && (n[l] = null), ft.event.triggered = p, n[p](), ft.event.triggered = void 0, o && (n[l] = o)), e.result;
      }
    }, simulate:function(t, e, i) {
      var n = ft.extend(new ft.Event, i, {type:t, isSimulated:!0});
      ft.event.trigger(n, null, e);
    }}), ft.fn.extend({trigger:function(t, e) {
      return this.each(function() {
        ft.event.trigger(t, e, this);
      });
    }, triggerHandler:function(t, e) {
      var i = this[0];
      if (i) {
        return ft.event.trigger(t, e, i, !0);
      }
    }}), ft.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
      ft.fn[e] = function(t, i) {
        return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e);
      };
    }), ft.fn.extend({hover:function(t, e) {
      return this.mouseenter(t).mouseleave(e || t);
    }}), dt.focusin = "onfocusin" in t, dt.focusin || ft.each({focus:"focusin", blur:"focusout"}, function(t, e) {
      var i = function(t) {
        ft.event.simulate(e, t.target, ft.event.fix(t));
      };
      ft.event.special[e] = {setup:function() {
        var n = this.ownerDocument || this, r = It.access(n, e);
        r || n.addEventListener(t, i, !0), It.access(n, e, (r || 0) + 1);
      }, teardown:function() {
        var n = this.ownerDocument || this, r = It.access(n, e) - 1;
        r ? It.access(n, e, r) : (n.removeEventListener(t, i, !0), It.remove(n, e));
      }};
    });
    var Me = t.location, Ee = ft.now(), Te = /\?/;
    ft.parseXML = function(e) {
      var i;
      if (!e || "string" != typeof e) {
        return null;
      }
      try {
        i = (new t.DOMParser).parseFromString(e, "text/xml");
      } catch (t$10) {
        i = void 0;
      }
      return i && !i.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), i;
    };
    var Se = /\[\]$/, Ae = /\r?\n/g, Ce = /^(?:submit|button|image|reset|file)$/i, Le = /^(?:input|select|textarea|keygen)/i;
    ft.param = function(t, e) {
      var i, n = [], r = function(t, e) {
        var i = ft.isFunction(e) ? e() : e;
        n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i);
      };
      if (Array.isArray(t) || t.jquery && !ft.isPlainObject(t)) {
        ft.each(t, function() {
          r(this.name, this.value);
        });
      } else {
        for (i in t) {
          $(i, t[i], e, r);
        }
      }
      return n.join("&");
    }, ft.fn.extend({serialize:function() {
      return ft.param(this.serializeArray());
    }, serializeArray:function() {
      return this.map(function() {
        var t = ft.prop(this, "elements");
        return t ? ft.makeArray(t) : this;
      }).filter(function() {
        var t = this.type;
        return this.name && !ft(this).is(":disabled") && Le.test(this.nodeName) && !Ce.test(t) && (this.checked || !jt.test(t));
      }).map(function(t, e) {
        var i = ft(this).val();
        return null == i ? null : Array.isArray(i) ? ft.map(i, function(t) {
          return {name:e.name, value:t.replace(Ae, "\r\n")};
        }) : {name:e.name, value:i.replace(Ae, "\r\n")};
      }).get();
    }});
    var Pe = /%20/g, ke = /#.*$/, Re = /([?&])_=[^&]*/, De = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ie = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ne = /^(?:GET|HEAD)$/, Ue = /^\/\//, Fe = {}, Oe = {}, Be = "*/".concat("*"), ze = et.createElement("a");
    ze.href = Me.href, ft.extend({active:0, lastModified:{}, etag:{}, ajaxSettings:{url:Me.href, type:"GET", isLocal:Ie.test(Me.protocol), global:!0, processData:!0, async:!0, contentType:"application/x-www-form-urlencoded; charset=UTF-8", accepts:{"*":Be, text:"text/plain", html:"text/html", xml:"application/xml, text/xml", json:"application/json, text/javascript"}, contents:{xml:/\bxml\b/, html:/\bhtml/, json:/\bjson\b/}, responseFields:{xml:"responseXML", text:"responseText", json:"responseJSON"},
    converters:{"* text":String, "text html":!0, "text json":JSON.parse, "text xml":ft.parseXML}, flatOptions:{url:!0, context:!0}}, ajaxSetup:function(t, e) {
      return e ? Q(Q(t, ft.ajaxSettings), e) : Q(ft.ajaxSettings, t);
    }, ajaxPrefilter:Y(Fe), ajaxTransport:Y(Oe), ajax:function(e, i) {
      function n(e, i, n, o) {
        var l, d, p, b, _, w = i;
        h || (h = !0, c && t.clearTimeout(c), r = void 0, s = o || "", M.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, n && (b = J(f, M, n)), b = K(f, b, M, l), l ? (f.ifModified && ((_ = M.getResponseHeader("Last-Modified")) && (ft.lastModified[a] = _), (_ = M.getResponseHeader("etag")) && (ft.etag[a] = _)), 204 === e || "HEAD" === f.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = b.state, d = b.data, p = b.error, l = !p)) : (p = w, !e && w || (w = "error", e <
        0 && (e = 0))), M.status = e, M.statusText = (i || w) + "", l ? v.resolveWith(m, [d, w, M]) : v.rejectWith(m, [M, w, p]), M.statusCode(x), x = void 0, u && g.trigger(l ? "ajaxSuccess" : "ajaxError", [M, f, l ? d : p]), y.fireWith(m, [M, w]), u && (g.trigger("ajaxComplete", [M, f]), --ft.active || ft.event.trigger("ajaxStop")));
      }
      "object" == typeof e && (i = e, e = void 0), i = i || {};
      var r, a, s, o, c, l, h, u, d, p, f = ft.ajaxSetup({}, i), m = f.context || f, g = f.context && (m.nodeType || m.jquery) ? ft(m) : ft.event, v = ft.Deferred(), y = ft.Callbacks("once memory"), x = f.statusCode || {}, b = {}, _ = {}, w = "canceled", M = {readyState:0, getResponseHeader:function(t) {
        var e;
        if (h) {
          if (!o) {
            for (o = {}; e = De.exec(s);) {
              o[e[1].toLowerCase()] = e[2];
            }
          }
          e = o[t.toLowerCase()];
        }
        return null == e ? null : e;
      }, getAllResponseHeaders:function() {
        return h ? s : null;
      }, setRequestHeader:function(t, e) {
        return null == h && (t = _[t.toLowerCase()] = _[t.toLowerCase()] || t, b[t] = e), this;
      }, overrideMimeType:function(t) {
        return null == h && (f.mimeType = t), this;
      }, statusCode:function(t) {
        var e;
        if (t) {
          if (h) {
            M.always(t[M.status]);
          } else {
            for (e in t) {
              x[e] = [x[e], t[e]];
            }
          }
        }
        return this;
      }, abort:function(t) {
        var e = t || w;
        return r && r.abort(e), n(0, e), this;
      }};
      if (v.promise(M), f.url = ((e || f.url || Me.href) + "").replace(Ue, Me.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Lt) || [""], null == f.crossDomain) {
        l = et.createElement("a");
        try {
          l.href = f.url, l.href = l.href, f.crossDomain = ze.protocol + "//" + ze.host != l.protocol + "//" + l.host;
        } catch (t$11) {
          f.crossDomain = !0;
        }
      }
      if (f.data && f.processData && "string" != typeof f.data && (f.data = ft.param(f.data, f.traditional)), Z(Fe, f, i, M), h) {
        return M;
      }
      (u = ft.event && f.global) && 0 == ft.active++ && ft.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ne.test(f.type), a = f.url.replace(ke, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Pe, "+")) : (p = f.url.slice(a.length), f.data && (a += (Te.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (a = a.replace(Re, "$1"), p = (Te.test(a) ? "&" : "?") +
      "_=" + Ee++ + p), f.url = a + p), f.ifModified && (ft.lastModified[a] && M.setRequestHeader("If-Modified-Since", ft.lastModified[a]), ft.etag[a] && M.setRequestHeader("If-None-Match", ft.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && M.setRequestHeader("Content-Type", f.contentType), M.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Be + "; q=0.01" : "") : f.accepts["*"]);
      for (d in f.headers) {
        M.setRequestHeader(d, f.headers[d]);
      }
      if (f.beforeSend && (!1 === f.beforeSend.call(m, M, f) || h)) {
        return M.abort();
      }
      if (w = "abort", y.add(f.complete), M.done(f.success), M.fail(f.error), r = Z(Oe, f, i, M)) {
        if (M.readyState = 1, u && g.trigger("ajaxSend", [M, f]), h) {
          return M;
        }
        f.async && f.timeout > 0 && (c = t.setTimeout(function() {
          M.abort("timeout");
        }, f.timeout));
        try {
          h = !1, r.send(b, n);
        } catch (t$12) {
          if (h) {
            throw t$12;
          }
          n(-1, t$12);
        }
      } else {
        n(-1, "No Transport");
      }
      return M;
    }, getJSON:function(t, e, i) {
      return ft.get(t, e, i, "json");
    }, getScript:function(t, e) {
      return ft.get(t, void 0, e, "script");
    }}), ft.each(["get", "post"], function(t, e) {
      ft[e] = function(t, i, n, r) {
        return ft.isFunction(i) && (r = r || n, n = i, i = void 0), ft.ajax(ft.extend({url:t, type:e, dataType:r, data:i, success:n}, ft.isPlainObject(t) && t));
      };
    }), ft._evalUrl = function(t) {
      return ft.ajax({url:t, type:"GET", dataType:"script", cache:!0, async:!1, global:!1, "throws":!0});
    }, ft.fn.extend({wrapAll:function(t) {
      var e;
      return this[0] && (ft.isFunction(t) && (t = t.call(this[0])), e = ft(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
        for (var t = this; t.firstElementChild;) {
          t = t.firstElementChild;
        }
        return t;
      }).append(this)), this;
    }, wrapInner:function(t) {
      return ft.isFunction(t) ? this.each(function(e) {
        ft(this).wrapInner(t.call(this, e));
      }) : this.each(function() {
        var e = ft(this), i = e.contents();
        i.length ? i.wrapAll(t) : e.append(t);
      });
    }, wrap:function(t) {
      var e = ft.isFunction(t);
      return this.each(function(i) {
        ft(this).wrapAll(e ? t.call(this, i) : t);
      });
    }, unwrap:function(t) {
      return this.parent(t).not("body").each(function() {
        ft(this).replaceWith(this.childNodes);
      }), this;
    }}), ft.expr.pseudos.hidden = function(t) {
      return !ft.expr.pseudos.visible(t);
    }, ft.expr.pseudos.visible = function(t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }, ft.ajaxSettings.xhr = function() {
      try {
        return new t.XMLHttpRequest;
      } catch (t$13) {
      }
    };
    var He = {0:200, 1223:204}, Ve = ft.ajaxSettings.xhr();
    dt.cors = !!Ve && "withCredentials" in Ve, dt.ajax = Ve = !!Ve, ft.ajaxTransport(function(e) {
      var i, n;
      if (dt.cors || Ve && !e.crossDomain) {
        return {send:function(r, a) {
          var s, o = e.xhr();
          if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) {
            for (s in e.xhrFields) {
              o[s] = e.xhrFields[s];
            }
          }
          e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
          for (s in r) {
            o.setRequestHeader(s, r[s]);
          }
          i = function(t) {
            return function() {
              i && (i = n = o.onload = o.onerror = o.onabort = o.onreadystatechange = null, "abort" === t ? o.abort() : "error" === t ? "number" != typeof o.status ? a(0, "error") : a(o.status, o.statusText) : a(He[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {binary:o.response} : {text:o.responseText}, o.getAllResponseHeaders()));
            };
          }, o.onload = i(), n = o.onerror = i("error"), void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function() {
            4 === o.readyState && t.setTimeout(function() {
              i && n();
            });
          }, i = i("abort");
          try {
            o.send(e.hasContent && e.data || null);
          } catch (t$14) {
            if (i) {
              throw t$14;
            }
          }
        }, abort:function() {
          i && i();
        }};
      }
    }), ft.ajaxPrefilter(function(t) {
      t.crossDomain && (t.contents.script = !1);
    }), ft.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents:{script:/\b(?:java|ecma)script\b/}, converters:{"text script":function(t) {
      return ft.globalEval(t), t;
    }}}), ft.ajaxPrefilter("script", function(t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }), ft.ajaxTransport("script", function(t) {
      if (t.crossDomain) {
        var e, i;
        return {send:function(n, r) {
          e = ft("<script>").prop({charset:t.scriptCharset, src:t.url}).on("load error", i = function(t) {
            e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type);
          }), et.head.appendChild(e[0]);
        }, abort:function() {
          i && i();
        }};
      }
    });
    var Ge = [], je = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({jsonp:"callback", jsonpCallback:function() {
      var t = Ge.pop() || ft.expando + "_" + Ee++;
      return this[t] = !0, t;
    }}), ft.ajaxPrefilter("json jsonp", function(e, i, n) {
      var r, a, s, o = !1 !== e.jsonp && (je.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && je.test(e.data) && "data");
      if (o || "jsonp" === e.dataTypes[0]) {
        return r = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(je, "$1" + r) : !1 !== e.jsonp && (e.url += (Te.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
          return s || ft.error(r + " was not called"), s[0];
        }, e.dataTypes[0] = "json", a = t[r], t[r] = function() {
          s = arguments;
        }, n.always(function() {
          void 0 === a ? ft(t).removeProp(r) : t[r] = a, e[r] && (e.jsonpCallback = i.jsonpCallback, Ge.push(r)), s && ft.isFunction(a) && a(s[0]), s = a = void 0;
        }), "script";
      }
    }), dt.createHTMLDocument = function() {
      var t = et.implementation.createHTMLDocument("").body;
      return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length;
    }(), ft.parseHTML = function(t, e, i) {
      if ("string" != typeof t) {
        return [];
      }
      "boolean" == typeof e && (i = e, e = !1);
      var n, r, a;
      return e || (dt.createHTMLDocument ? (e = et.implementation.createHTMLDocument(""), n = e.createElement("base"), n.href = et.location.href, e.head.appendChild(n)) : e = et), r = Mt.exec(t), a = !i && [], r ? [e.createElement(r[1])] : (r = b([t], e, a), a && a.length && ft(a).remove(), ft.merge([], r.childNodes));
    }, ft.fn.load = function(t, e, i) {
      var n, r, a, s = this, o = t.indexOf(" ");
      return o > -1 && (n = W(t.slice(o)), t = t.slice(0, o)), ft.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && ft.ajax({url:t, type:r || "GET", dataType:"html", data:e}).done(function(t) {
        a = arguments, s.html(n ? ft("<div>").append(ft.parseHTML(t)).find(n) : t);
      }).always(i && function(t, e) {
        s.each(function() {
          i.apply(this, a || [t.responseText, e, t]);
        });
      }), this;
    }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
      ft.fn[e] = function(t) {
        return this.on(e, t);
      };
    }), ft.expr.pseudos.animated = function(t) {
      return ft.grep(ft.timers, function(e) {
        return t === e.elem;
      }).length;
    }, ft.offset = {setOffset:function(t, e, i) {
      var n, r, a, s, o, c, l = ft.css(t, "position"), h = ft(t), u = {};
      "static" === l && (t.style.position = "relative"), o = h.offset(), a = ft.css(t, "top"), c = ft.css(t, "left"), ("absolute" === l || "fixed" === l) && (a + c).indexOf("auto") > -1 ? (n = h.position(), s = n.top, r = n.left) : (s = parseFloat(a) || 0, r = parseFloat(c) || 0), ft.isFunction(e) && (e = e.call(t, i, ft.extend({}, o))), null != e.top && (u.top = e.top - o.top + s), null != e.left && (u.left = e.left - o.left + r), "using" in e ? e.using.call(t, u) : h.css(u);
    }}, ft.fn.extend({offset:function(t) {
      if (arguments.length) {
        return void 0 === t ? this : this.each(function(e) {
          ft.offset.setOffset(this, t, e);
        });
      }
      var e, i, n, r, a = this[0];
      return a ? a.getClientRects().length ? (n = a.getBoundingClientRect(), e = a.ownerDocument, i = e.documentElement, r = e.defaultView, {top:n.top + r.pageYOffset - i.clientTop, left:n.left + r.pageXOffset - i.clientLeft}) : {top:0, left:0} : void 0;
    }, position:function() {
      if (this[0]) {
        var t, e, i = this[0], n = {top:0, left:0};
        return "fixed" === ft.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), r(t[0], "html") || (n = t.offset()), n = {top:n.top + ft.css(t[0], "borderTopWidth", !0), left:n.left + ft.css(t[0], "borderLeftWidth", !0)}), {top:e.top - n.top - ft.css(i, "marginTop", !0), left:e.left - n.left - ft.css(i, "marginLeft", !0)};
      }
    }, offsetParent:function() {
      return this.map(function() {
        for (var t = this.offsetParent; t && "static" === ft.css(t, "position");) {
          t = t.offsetParent;
        }
        return t || Yt;
      });
    }}), ft.each({scrollLeft:"pageXOffset", scrollTop:"pageYOffset"}, function(t, e) {
      var i = "pageYOffset" === e;
      ft.fn[t] = function(n) {
        return Rt(this, function(t, n, r) {
          var a;
          return ft.isWindow(t) ? a = t : 9 === t.nodeType && (a = t.defaultView), void 0 === r ? a ? a[e] : t[n] : void(a ? a.scrollTo(i ? a.pageXOffset : r, i ? r : a.pageYOffset) : t[n] = r);
        }, t, n, arguments.length);
      };
    }), ft.each(["top", "left"], function(t, e) {
      ft.cssHooks[e] = D(dt.pixelPosition, function(t, i) {
        if (i) {
          return i = R(t, e), ae.test(i) ? ft(t).position()[e] + "px" : i;
        }
      });
    }), ft.each({Height:"height", Width:"width"}, function(t, e) {
      ft.each({padding:"inner" + t, content:e, "":"outer" + t}, function(i, n) {
        ft.fn[n] = function(r, a) {
          var s = arguments.length && (i || "boolean" != typeof r), o = i || (!0 === r || !0 === a ? "margin" : "border");
          return Rt(this, function(e, i, r) {
            var a;
            return ft.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (a = e.documentElement, Math.max(e.body["scroll" + t], a["scroll" + t], e.body["offset" + t], a["offset" + t], a["client" + t])) : void 0 === r ? ft.css(e, i, o) : ft.style(e, i, r, o);
          }, e, s ? r : void 0, s);
        };
      });
    }), ft.fn.extend({bind:function(t, e, i) {
      return this.on(t, null, e, i);
    }, unbind:function(t, e) {
      return this.off(t, null, e);
    }, delegate:function(t, e, i, n) {
      return this.on(e, t, i, n);
    }, undelegate:function(t, e, i) {
      return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);
    }, holdReady:function(t) {
      t ? ft.readyWait++ : ft.ready(!0);
    }}), ft.isArray = Array.isArray, ft.parseJSON = JSON.parse, ft.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function() {
      return ft;
    });
    var qe = t.jQuery, We = t.$;
    return ft.noConflict = function(e) {
      return t.$ === ft && (t.$ = We), e && t.jQuery === ft && (t.jQuery = qe), ft;
    }, e || (t.jQuery = t.$ = ft), ft;
  }), function(t) {
    function e() {
    }
    function i(t, e) {
      return function() {
        t.apply(e, arguments);
      };
    }
    function n(t) {
      if ("object" != typeof this) {
        throw new TypeError("Promises must be constructed via new");
      }
      if ("function" != typeof t) {
        throw new TypeError("not a function");
      }
      this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], l(t, this);
    }
    function r(t, e) {
      for (; 3 === t._state;) {
        t = t._value;
      }
      return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0, void n._immediateFn(function() {
        var i = 1 === t._state ? e.onFulfilled : e.onRejected;
        if (null !== i) {
          var n;
          try {
            n = i(t._value);
          } catch (t$15) {
            return void s(e.promise, t$15);
          }
          a(e.promise, n);
        } else {
          (1 === t._state ? a : s)(e.promise, t._value);
        }
      }));
    }
    function a(t, e) {
      try {
        if (e === t) {
          throw new TypeError("A promise cannot be resolved with itself.");
        }
        if (e && ("object" == typeof e || "function" == typeof e)) {
          var r = e.then;
          if (e instanceof n) {
            return t._state = 3, t._value = e, void o(t);
          }
          if ("function" == typeof r) {
            return void l(i(r, e), t);
          }
        }
        t._state = 1, t._value = e, o(t);
      } catch (e$16) {
        s(t, e$16);
      }
    }
    function s(t, e) {
      t._state = 2, t._value = e, o(t);
    }
    function o(t) {
      2 === t._state && 0 === t._deferreds.length && n._immediateFn(function() {
        t._handled || n._unhandledRejectionFn(t._value);
      });
      for (var e = 0, i = t._deferreds.length; e < i; e++) {
        r(t, t._deferreds[e]);
      }
      t._deferreds = null;
    }
    function c(t, e, i) {
      this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = i;
    }
    function l(t, e) {
      var i = !1;
      try {
        t(function(t) {
          i || (i = !0, a(e, t));
        }, function(t) {
          i || (i = !0, s(e, t));
        });
      } catch (t$17) {
        if (i) {
          return;
        }
        i = !0, s(e, t$17);
      }
    }
    var h = setTimeout;
    n.prototype["catch"] = function(t) {
      return this.then(null, t);
    }, n.prototype.then = function(t, i) {
      var n = new this.constructor(e);
      return r(this, new c(t, i, n)), n;
    }, n.all = function(t) {
      var e = Array.prototype.slice.call(t);
      return new n(function(t, i) {
        function n(a, s) {
          try {
            if (s && ("object" == typeof s || "function" == typeof s)) {
              var o = s.then;
              if ("function" == typeof o) {
                return void o.call(s, function(t) {
                  n(a, t);
                }, i);
              }
            }
            e[a] = s, 0 == --r && t(e);
          } catch (t$18) {
            i(t$18);
          }
        }
        if (0 === e.length) {
          return t([]);
        }
        for (var r = e.length, a = 0; a < e.length; a++) {
          n(a, e[a]);
        }
      });
    }, n.resolve = function(t) {
      return t && "object" == typeof t && t.constructor === n ? t : new n(function(e) {
        e(t);
      });
    }, n.reject = function(t) {
      return new n(function(e, i) {
        i(t);
      });
    }, n.race = function(t) {
      return new n(function(e, i) {
        for (var n = 0, r = t.length; n < r; n++) {
          t[n].then(e, i);
        }
      });
    }, n._immediateFn = "function" == typeof setImmediate && function(t) {
      setImmediate(t);
    } || function(t) {
      h(t, 0);
    }, n._unhandledRejectionFn = function(t) {
      "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
    }, n._setImmediateFn = function(t) {
      n._immediateFn = t;
    }, n._setUnhandledRejectionFn = function(t) {
      n._unhandledRejectionFn = t;
    }, "undefined" != typeof module && module.exports ? module.exports = n : t.Promise || (t.Promise = n);
  }(this), function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.THREE = {});
  }(this, function(t) {
    function e() {
    }
    function i(t, e) {
      this.x = t || 0, this.y = e || 0;
    }
    function n() {
      this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    }
    function r(t, e, i, n) {
      this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 !== n ? n : 1;
    }
    function a(t, e, i) {
      this.x = t || 0, this.y = e || 0, this.z = i || 0;
    }
    function s() {
      this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    }
    function o(t, e, n, r, a, c, l, h, u, d) {
      Object.defineProperty(this, "id", {value:Qe++}), this.uuid = Ze.generateUUID(), this.name = "", this.image = void 0 !== t ? t : o.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : o.DEFAULT_MAPPING, this.wrapS = void 0 !== n ? n : 1001, this.wrapT = void 0 !== r ? r : 1001, this.magFilter = void 0 !== a ? a : 1006, this.minFilter = void 0 !== c ? c : 1008, this.anisotropy = void 0 !== u ? u : 1, this.format = void 0 !== l ? l : 1023, this.type = void 0 !== h ? h : 1009, this.offset =
      new i(0, 0), this.repeat = new i(1, 1), this.center = new i(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new s, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== d ? d : 3e3, this.version = 0, this.onUpdate = null;
    }
    function c(t, e, i, n) {
      this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1;
    }
    function l(t, e, i) {
      this.uuid = Ze.generateUUID(), this.width = t, this.height = e, this.scissor = new c(0, 0, t, e), this.scissorTest = !1, this.viewport = new c(0, 0, t, e), void 0 === (i = i || {}).minFilter && (i.minFilter = 1006), this.texture = new o(void 0, void 0, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer, this.depthTexture = void 0 !==
      i.depthTexture ? i.depthTexture : null;
    }
    function h(t, e, i, n, r, a, s, c, l, h, u, d) {
      o.call(this, null, a, s, c, l, h, n, r, u, d), this.image = {data:t, width:e, height:i}, this.magFilter = void 0 !== l ? l : 1003, this.minFilter = void 0 !== h ? h : 1003, this.flipY = this.generateMipmaps = !1, this.unpackAlignment = 1;
    }
    function u(t, e, i, n, r, a, s, c, l, h) {
      t = void 0 !== t ? t : [], o.call(this, t, void 0 !== e ? e : 301, i, n, r, a, s, c, l, h), this.flipY = !1;
    }
    function d(t, e, i) {
      var n = t[0];
      if (0 >= n || 0 < n) {
        return t;
      }
      var r = e * i, a = ti[r];
      if (void 0 === a && (a = new Float32Array(r), ti[r] = a), 0 !== e) {
        for (n.toArray(a, 0), n = 1, r = 0; n !== e; ++n) {
          r += i, t[n].toArray(a, r);
        }
      }
      return a;
    }
    function p(t, e) {
      var i = ei[e];
      void 0 === i && (i = new Int32Array(e), ei[e] = i);
      for (var n = 0; n !== e; ++n) {
        i[n] = t.allocTextureUnit();
      }
      return i;
    }
    function f(t, e) {
      t.uniform1f(this.addr, e);
    }
    function m(t, e) {
      t.uniform1i(this.addr, e);
    }
    function g(t, e) {
      void 0 === e.x ? t.uniform2fv(this.addr, e) : t.uniform2f(this.addr, e.x, e.y);
    }
    function v(t, e) {
      void 0 !== e.x ? t.uniform3f(this.addr, e.x, e.y, e.z) : void 0 !== e.r ? t.uniform3f(this.addr, e.r, e.g, e.b) : t.uniform3fv(this.addr, e);
    }
    function y(t, e) {
      void 0 === e.x ? t.uniform4fv(this.addr, e) : t.uniform4f(this.addr, e.x, e.y, e.z, e.w);
    }
    function x(t, e) {
      t.uniformMatrix2fv(this.addr, !1, e.elements || e);
    }
    function b(t, e) {
      void 0 === e.elements ? t.uniformMatrix3fv(this.addr, !1, e) : (ni.set(e.elements), t.uniformMatrix3fv(this.addr, !1, ni));
    }
    function _(t, e) {
      void 0 === e.elements ? t.uniformMatrix4fv(this.addr, !1, e) : (ii.set(e.elements), t.uniformMatrix4fv(this.addr, !1, ii));
    }
    function w(t, e, i) {
      var n = i.allocTextureUnit();
      t.uniform1i(this.addr, n), i.setTexture2D(e || Je, n);
    }
    function M(t, e, i) {
      var n = i.allocTextureUnit();
      t.uniform1i(this.addr, n), i.setTextureCube(e || Ke, n);
    }
    function E(t, e) {
      t.uniform2iv(this.addr, e);
    }
    function T(t, e) {
      t.uniform3iv(this.addr, e);
    }
    function S(t, e) {
      t.uniform4iv(this.addr, e);
    }
    function A(t) {
      switch(t) {
        case 5126:
          return f;
        case 35664:
          return g;
        case 35665:
          return v;
        case 35666:
          return y;
        case 35674:
          return x;
        case 35675:
          return b;
        case 35676:
          return _;
        case 35678:
        case 36198:
          return w;
        case 35680:
          return M;
        case 5124:
        case 35670:
          return m;
        case 35667:
        case 35671:
          return E;
        case 35668:
        case 35672:
          return T;
        case 35669:
        case 35673:
          return S;
      }
    }
    function C(t, e) {
      t.uniform1fv(this.addr, e);
    }
    function L(t, e) {
      t.uniform1iv(this.addr, e);
    }
    function P(t, e) {
      t.uniform2fv(this.addr, d(e, this.size, 2));
    }
    function k(t, e) {
      t.uniform3fv(this.addr, d(e, this.size, 3));
    }
    function R(t, e) {
      t.uniform4fv(this.addr, d(e, this.size, 4));
    }
    function D(t, e) {
      t.uniformMatrix2fv(this.addr, !1, d(e, this.size, 4));
    }
    function I(t, e) {
      t.uniformMatrix3fv(this.addr, !1, d(e, this.size, 9));
    }
    function N(t, e) {
      t.uniformMatrix4fv(this.addr, !1, d(e, this.size, 16));
    }
    function U(t, e, i) {
      var n = e.length, r = p(i, n);
      for (t.uniform1iv(this.addr, r), t = 0; t !== n; ++t) {
        i.setTexture2D(e[t] || Je, r[t]);
      }
    }
    function F(t, e, i) {
      var n = e.length, r = p(i, n);
      for (t.uniform1iv(this.addr, r), t = 0; t !== n; ++t) {
        i.setTextureCube(e[t] || Ke, r[t]);
      }
    }
    function O(t) {
      switch(t) {
        case 5126:
          return C;
        case 35664:
          return P;
        case 35665:
          return k;
        case 35666:
          return R;
        case 35674:
          return D;
        case 35675:
          return I;
        case 35676:
          return N;
        case 35678:
          return U;
        case 35680:
          return F;
        case 5124:
        case 35670:
          return L;
        case 35667:
        case 35671:
          return E;
        case 35668:
        case 35672:
          return T;
        case 35669:
        case 35673:
          return S;
      }
    }
    function B(t, e, i) {
      this.id = t, this.addr = i, this.setValue = A(e.type);
    }
    function z(t, e, i) {
      this.id = t, this.addr = i, this.size = e.size, this.setValue = O(e.type);
    }
    function H(t) {
      this.id = t, this.seq = [], this.map = {};
    }
    function V(t, e, i) {
      this.seq = [], this.map = {}, this.renderer = i, i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
      for (var n = 0; n < i; ++n) {
        var r = t.getActiveUniform(e, n), a = t.getUniformLocation(e, r.name), s = this, o = r.name, c = o.length;
        for (ri.lastIndex = 0;;) {
          var l = ri.exec(o), h = ri.lastIndex, u = l[1], d = l[3];
          if ("]" === l[2] && (u |= 0), void 0 === d || "[" === d && h + 2 === c) {
            o = s, r = void 0 === d ? new B(u, r, a) : new z(u, r, a), o.seq.push(r), o.map[r.id] = r;
            break;
          }
          void 0 === (d = s.map[u]) && (d = new H(u), u = s, s = d, u.seq.push(s), u.map[s.id] = s), s = d;
        }
      }
    }
    function G(t, e, i) {
      return void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i);
    }
    function j(t, e) {
      this.min = void 0 !== t ? t : new i(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new i(-1 / 0, -1 / 0);
    }
    function q(t, e, n, r, s) {
      var o, c, l, h, u, d, p, f, m, g, v, y, x, b, _, w;
      this.render = function(t, M, E, T) {
        if (0 !== t.length) {
          M = new a;
          var S = T.w / T.z, A = .5 * T.z, C = .5 * T.w, L = new i((D = 16 / T.w) * S, D), P = new a(1, 1, 0), k = new i(1, 1), R = new j;
          if (R.min.set(T.x, T.y), R.max.set(T.x + (T.z - 16), T.y + (T.w - 16)), void 0 === b) {
            var D = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]), I = new Uint16Array([0, 1, 2, 0, 2, 3]);
            v = e.createBuffer(), y = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, v), e.bufferData(e.ARRAY_BUFFER, D, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, y), e.bufferData(e.ELEMENT_ARRAY_BUFFER, I, e.STATIC_DRAW), _ = e.createTexture(), w = e.createTexture(), n.bindTexture(e.TEXTURE_2D, _), e.texImage2D(e.TEXTURE_2D, 0, e.RGB, 16, 16, 0, e.RGB, e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T,
            e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), n.bindTexture(e.TEXTURE_2D, w), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 16, 16, 0, e.RGBA, e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER,
            e.NEAREST);
            var D = x = {vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\n\tvUV = uv;\n\tvec2 pos = position;\n\tif ( renderType == 2 ) {\n\t\tvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\n\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\n\t\tvVisibility =        visibility.r / 9.0;\n\t\tvVisibility *= 1.0 - visibility.g / 9.0;\n\t\tvVisibility *=       visibility.b / 9.0;\n\t\tvVisibility *= 1.0 - visibility.a / 9.0;\n\t\tpos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\n\t\tpos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n\t}\n\tgl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
            fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\n\tif ( renderType == 0 ) {\n\t\tgl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n\t} else if ( renderType == 1 ) {\n\t\tgl_FragColor = texture2D( map, vUV );\n\t} else {\n\t\tvec4 texture = texture2D( map, vUV );\n\t\ttexture.a *= opacity * vVisibility;\n\t\tgl_FragColor = texture;\n\t\tgl_FragColor.rgb *= color;\n\t}\n}"},
            I = e.createProgram(), N = e.createShader(e.FRAGMENT_SHADER), U = e.createShader(e.VERTEX_SHADER), F = "precision " + s.precision + " float;\n";
            e.shaderSource(N, F + D.fragmentShader), e.shaderSource(U, F + D.vertexShader), e.compileShader(N), e.compileShader(U), e.attachShader(I, N), e.attachShader(I, U), e.linkProgram(I), b = I, m = e.getAttribLocation(b, "position"), g = e.getAttribLocation(b, "uv"), o = e.getUniformLocation(b, "renderType"), c = e.getUniformLocation(b, "map"), l = e.getUniformLocation(b, "occlusionMap"), h = e.getUniformLocation(b, "opacity"), u = e.getUniformLocation(b, "color"), d = e.getUniformLocation(b,
            "scale"), p = e.getUniformLocation(b, "rotation"), f = e.getUniformLocation(b, "screenPosition");
          }
          for (n.useProgram(b), n.initAttributes(), n.enableAttribute(m), n.enableAttribute(g), n.disableUnusedAttributes(), e.uniform1i(l, 0), e.uniform1i(c, 1), e.bindBuffer(e.ARRAY_BUFFER, v), e.vertexAttribPointer(m, 2, e.FLOAT, !1, 16, 0), e.vertexAttribPointer(g, 2, e.FLOAT, !1, 16, 8), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, y), n.disable(e.CULL_FACE), n.buffers.depth.setMask(!1), I = 0, N = t.length; I < N; I++) {
            if (D = 16 / T.w, L.set(D * S, D), U = t[I], M.set(U.matrixWorld.elements[12], U.matrixWorld.elements[13], U.matrixWorld.elements[14]), M.applyMatrix4(E.matrixWorldInverse), M.applyMatrix4(E.projectionMatrix), P.copy(M), k.x = T.x + P.x * A + A - 8, k.y = T.y + P.y * C + C - 8, !0 === R.containsPoint(k)) {
              n.activeTexture(e.TEXTURE0), n.bindTexture(e.TEXTURE_2D, null), n.activeTexture(e.TEXTURE1), n.bindTexture(e.TEXTURE_2D, _), e.copyTexImage2D(e.TEXTURE_2D, 0, e.RGB, k.x, k.y, 16, 16, 0), e.uniform1i(o, 0), e.uniform2f(d, L.x, L.y), e.uniform3f(f, P.x, P.y, P.z), n.disable(e.BLEND), n.enable(e.DEPTH_TEST), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), n.activeTexture(e.TEXTURE0), n.bindTexture(e.TEXTURE_2D, w), e.copyTexImage2D(e.TEXTURE_2D, 0, e.RGBA, k.x, k.y, 16, 16, 0), e.uniform1i(o,
              1), n.disable(e.DEPTH_TEST), n.activeTexture(e.TEXTURE1), n.bindTexture(e.TEXTURE_2D, _), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), U.positionScreen.copy(P), U.customUpdateCallback ? U.customUpdateCallback(U) : U.updateLensFlares(), e.uniform1i(o, 2), n.enable(e.BLEND);
              for (var F = 0, O = U.lensFlares.length; F < O; F++) {
                var B = U.lensFlares[F];
                .001 < B.opacity && .001 < B.scale && (P.x = B.x, P.y = B.y, P.z = B.z, D = B.size * B.scale / T.w, L.x = D * S, L.y = D, e.uniform3f(f, P.x, P.y, P.z), e.uniform2f(d, L.x, L.y), e.uniform1f(p, B.rotation), e.uniform1f(h, B.opacity), e.uniform3f(u, B.color.r, B.color.g, B.color.b), n.setBlending(B.blending, B.blendEquation, B.blendSrc, B.blendDst), r.setTexture2D(B.texture, 1), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0));
              }
            }
          }
          n.enable(e.CULL_FACE), n.enable(e.DEPTH_TEST), n.buffers.depth.setMask(!0), n.reset();
        }
      };
    }
    function W(t, e, i, n, r, a, s, c, l) {
      o.call(this, t, e, i, n, r, a, s, c, l), this.needsUpdate = !0;
    }
    function X(t, e, i, n, s) {
      function o(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : e.id - t.id;
      }
      var c, l, h, u, d, p, f, m, g, v, y, x, b, _, w, M, E, T, S, A, C, L = new a, P = new r, k = new a;
      this.render = function(r, a, R) {
        if (0 !== r.length) {
          if (void 0 === A) {
            var D = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]), I = new Uint16Array([0, 1, 2, 0, 2, 3]);
            T = e.createBuffer(), S = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, T), e.bufferData(e.ARRAY_BUFFER, D, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, S), e.bufferData(e.ELEMENT_ARRAY_BUFFER, I, e.STATIC_DRAW), D = e.createProgram(), I = e.createShader(e.VERTEX_SHADER);
            var N = e.createShader(e.FRAGMENT_SHADER);
            e.shaderSource(I, ["precision " + s.precision + " float;", "#define SHADER_NAME SpriteMaterial\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float fogDepth;\nvoid main() {\n\tvUV = uvOffset + uv * uvScale;\n\tvec2 alignedPosition = position * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tvec4 mvPosition;\n\tmvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\tfogDepth = - mvPosition.z;\n}"].join("\n")),
            e.shaderSource(N, ["precision " + s.precision + " float;", "#define SHADER_NAME SpriteMaterial\nuniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvarying float fogDepth;\nvoid main() {\n\tvec4 texture = texture2D( map, vUV );\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\n\tif ( gl_FragColor.a < alphaTest ) discard;\n\tif ( fogType > 0 ) {\n\t\tfloat fogFactor = 0.0;\n\t\tif ( fogType == 1 ) {\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t\t} else {\n\t\t\tconst float LOG2 = 1.442695;\n\t\t\tfogFactor = exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 );\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\t\t}\n\t\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\t}\n}"].join("\n")),
            e.compileShader(I), e.compileShader(N), e.attachShader(D, I), e.attachShader(D, N), e.linkProgram(D), A = D, M = e.getAttribLocation(A, "position"), E = e.getAttribLocation(A, "uv"), c = e.getUniformLocation(A, "uvOffset"), l = e.getUniformLocation(A, "uvScale"), h = e.getUniformLocation(A, "rotation"), u = e.getUniformLocation(A, "scale"), d = e.getUniformLocation(A, "color"), p = e.getUniformLocation(A, "map"), f = e.getUniformLocation(A, "opacity"), m = e.getUniformLocation(A, "modelViewMatrix"),
            g = e.getUniformLocation(A, "projectionMatrix"), v = e.getUniformLocation(A, "fogType"), y = e.getUniformLocation(A, "fogDensity"), x = e.getUniformLocation(A, "fogNear"), b = e.getUniformLocation(A, "fogFar"), _ = e.getUniformLocation(A, "fogColor"), e.getUniformLocation(A, "fogDepth"), w = e.getUniformLocation(A, "alphaTest"), (D = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = 8, D.height = 8, (I = D.getContext("2d")).fillStyle = "white", I.fillRect(0,
            0, 8, 8), C = new W(D);
          }
          i.useProgram(A), i.initAttributes(), i.enableAttribute(M), i.enableAttribute(E), i.disableUnusedAttributes(), i.disable(e.CULL_FACE), i.enable(e.BLEND), e.bindBuffer(e.ARRAY_BUFFER, T), e.vertexAttribPointer(M, 2, e.FLOAT, !1, 16, 0), e.vertexAttribPointer(E, 2, e.FLOAT, !1, 16, 8), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, S), e.uniformMatrix4fv(g, !1, R.projectionMatrix.elements), i.activeTexture(e.TEXTURE0), e.uniform1i(p, 0), I = D = 0, (N = a.fog) ? (e.uniform3f(_, N.color.r, N.color.g,
          N.color.b), N.isFog ? (e.uniform1f(x, N.near), e.uniform1f(b, N.far), e.uniform1i(v, 1), I = D = 1) : N.isFogExp2 && (e.uniform1f(y, N.density), e.uniform1i(v, 2), I = D = 2)) : (e.uniform1i(v, 0), I = D = 0);
          for (var U = 0, F = r.length; U < F; U++) {
            (N = r[U]).modelViewMatrix.multiplyMatrices(R.matrixWorldInverse, N.matrixWorld), N.z = -N.modelViewMatrix.elements[14];
          }
          r.sort(o);
          for (var O = [], U = 0, F = r.length; U < F; U++) {
            var B = (N = r[U]).material;
            if (!1 !== B.visible) {
              N.onBeforeRender(t, a, R, void 0, B, void 0), e.uniform1f(w, B.alphaTest), e.uniformMatrix4fv(m, !1, N.modelViewMatrix.elements), N.matrixWorld.decompose(L, P, k), O[0] = k.x, O[1] = k.y;
              var z = 0;
              a.fog && B.fog && (z = I), D !== z && (e.uniform1i(v, z), D = z), null !== B.map ? (e.uniform2f(c, B.map.offset.x, B.map.offset.y), e.uniform2f(l, B.map.repeat.x, B.map.repeat.y)) : (e.uniform2f(c, 0, 0), e.uniform2f(l, 1, 1)), e.uniform1f(f, B.opacity), e.uniform3f(d, B.color.r, B.color.g, B.color.b), e.uniform1f(h, B.rotation), e.uniform2fv(u, O), i.setBlending(B.blending, B.blendEquation, B.blendSrc, B.blendDst, B.blendEquationAlpha, B.blendSrcAlpha, B.blendDstAlpha, B.premultipliedAlpha),
              i.buffers.depth.setTest(B.depthTest), i.buffers.depth.setMask(B.depthWrite), i.buffers.color.setMask(B.colorWrite), n.setTexture2D(B.map || C, 0), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), N.onAfterRender(t, a, R, void 0, B, void 0);
            }
          }
          i.enable(e.CULL_FACE), i.reset();
        }
      };
    }
    function $() {
      Object.defineProperty(this, "id", {value:hi++}), this.uuid = Ze.generateUUID(), this.name = "", this.type = "Material", this.lights = this.fog = !0, this.blending = 1, this.side = 0, this.flatShading = !1, this.vertexColors = 0, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null, this.depthFunc = 3, this.depthWrite = this.depthTest = !0, this.clippingPlanes = null,
      this.clipShadows = this.clipIntersection = !1, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetUnits = this.polygonOffsetFactor = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this.userData = {}, this.needsUpdate = !0;
    }
    function Y(t) {
      $.call(this), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.morphTargets = this.skinning = !1, this.displacementMap = this.alphaMap = this.map = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.lights = this.fog = !1, this.setValues(t);
    }
    function Z(t) {
      $.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new a, this.nearDistance = 1, this.farDistance = 1e3, this.morphTargets = this.skinning = !1, this.displacementMap = this.alphaMap = this.map = null, this.displacementScale = 1, this.displacementBias = 0, this.lights = this.fog = !1, this.setValues(t);
    }
    function Q(t, e) {
      this.min = void 0 !== t ? t : new a(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new a(-1 / 0, -1 / 0, -1 / 0);
    }
    function J(t, e) {
      this.center = void 0 !== t ? t : new a, this.radius = void 0 !== e ? e : 0;
    }
    function K(t, e) {
      this.normal = void 0 !== t ? t : new a(1, 0, 0), this.constant = void 0 !== e ? e : 0;
    }
    function tt(t, e, i, n, r, a) {
      this.planes = [void 0 !== t ? t : new K, void 0 !== e ? e : new K, void 0 !== i ? i : new K, void 0 !== n ? n : new K, void 0 !== r ? r : new K, void 0 !== a ? a : new K];
    }
    function et(t, e, r) {
      function s(e, i, n, r, a, s) {
        var o = e.geometry, c = g, l = e.customDepthMaterial;
        return n && (c = v, l = e.customDistanceMaterial), l ? c = l : (l = !1, i.morphTargets && (o && o.isBufferGeometry ? l = o.morphAttributes && o.morphAttributes.position && 0 < o.morphAttributes.position.length : o && o.isGeometry && (l = o.morphTargets && 0 < o.morphTargets.length)), e = e.isSkinnedMesh && i.skinning, o = 0, l && (o |= 1), e && (o |= 2), c = c[o]), t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length && (o = c.uuid, l = i.uuid, void 0 === (e = y[o]) &&
        (e = {}, y[o] = e), void 0 === (o = e[l]) && (o = c.clone(), e[l] = o), c = o), c.visible = i.visible, c.wireframe = i.wireframe, l = i.side, T.renderSingleSided && 2 == l && (l = 0), T.renderReverseSided && (0 === l ? l = 1 : 1 === l && (l = 0)), c.side = l, c.clipShadows = i.clipShadows, c.clippingPlanes = i.clippingPlanes, c.clipIntersection = i.clipIntersection, c.wireframeLinewidth = i.wireframeLinewidth, c.linewidth = i.linewidth, n && c.isMeshDistanceMaterial && (c.referencePosition.copy(r),
        c.nearDistance = a, c.farDistance = s), c;
      }
      function o(i, n, r, a) {
        var c;
        if (!1 !== i.visible) {
          if (i.layers.test(n.layers) && (i.isMesh || i.isLine || i.isPoints) && i.castShadow && (!i.frustumCulled || h.intersectsObject(i))) {
            i.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, i.matrixWorld);
            var l = e.update(i), u = i.material;
            if (Array.isArray(u)) {
              for (var d = l.groups, p = 0, f = d.length; p < f; p++) {
                var g = d[p];
                (c = u[g.materialIndex]) && c.visible && (c = s(i, c, a, m, r.near, r.far), t.renderBufferDirect(r, null, l, c, i, g));
              }
            } else {
              u.visible && (c = s(i, u, a, m, r.near, r.far), t.renderBufferDirect(r, null, l, c, i, null));
            }
          }
          for (l = 0, u = (i = i.children).length; l < u; l++) {
            o(i[l], n, r, a);
          }
        }
      }
      var h = new tt, u = new n, d = new i, p = new i(r, r), f = new a, m = new a, g = Array(4), v = Array(4), y = {}, x = [new a(1, 0, 0), new a(-1, 0, 0), new a(0, 0, 1), new a(0, 0, -1), new a(0, 1, 0), new a(0, -1, 0)], b = [new a(0, 1, 0), new a(0, 1, 0), new a(0, 1, 0), new a(0, 1, 0), new a(0, 0, 1), new a(0, 0, -1)], _ = [new c, new c, new c, new c, new c, new c];
      for (r = 0; 4 !== r; ++r) {
        var w = 0 != (1 & r), M = 0 != (2 & r), E = new Y({depthPacking:3201, morphTargets:w, skinning:M});
        g[r] = E, w = new Z({morphTargets:w, skinning:M}), v[r] = w;
      }
      var T = this;
      this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.renderSingleSided = this.renderReverseSided = !0, this.render = function(e, i, n) {
        if (!1 !== T.enabled && (!1 !== T.autoUpdate || !1 !== T.needsUpdate) && 0 !== e.length) {
          var r = t.state;
          r.disable(t.context.BLEND), r.buffers.color.setClear(1, 1, 1, 1), r.buffers.depth.setTest(!0), r.setScissorTest(!1);
          for (var a, s = 0, c = e.length; s < c; s++) {
            var g = e[s];
            a = g.shadow;
            var v = g && g.isPointLight;
            if (void 0 !== a) {
              var y = a.camera;
              if (d.copy(a.mapSize), d.min(p), v) {
                var w = d.x, M = d.y;
                _[0].set(2 * w, M, w, M), _[1].set(0, M, w, M), _[2].set(3 * w, M, w, M), _[3].set(w, M, w, M), _[4].set(3 * w, 0, w, M), _[5].set(w, 0, w, M), d.x *= 4, d.y *= 2;
              }
              for (null === a.map && (a.map = new l(d.x, d.y, {minFilter:1003, magFilter:1003, format:1023}), a.map.texture.name = g.name + ".shadowMap", y.updateProjectionMatrix()), a.isSpotLightShadow && a.update(g), w = a.map, M = a.matrix, m.setFromMatrixPosition(g.matrixWorld), y.position.copy(m), v ? (a = 6, M.makeTranslation(-m.x, -m.y, -m.z)) : (a = 1, f.setFromMatrixPosition(g.target.matrixWorld), y.lookAt(f), y.updateMatrixWorld(), M.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0,
              1), M.multiply(y.projectionMatrix), M.multiply(y.matrixWorldInverse)), t.setRenderTarget(w), t.clear(), g = 0; g < a; g++) {
                v && (f.copy(y.position), f.add(x[g]), y.up.copy(b[g]), y.lookAt(f), y.updateMatrixWorld(), r.viewport(_[g])), u.multiplyMatrices(y.projectionMatrix, y.matrixWorldInverse), h.setFromMatrix(u), o(i, n, y, v);
              }
            }
          }
          T.needsUpdate = !1;
        }
      };
    }
    function it(t) {
      var e = {};
      return {get:function(t) {
        return t.isInterleavedBufferAttribute && (t = t.data), e[t.uuid];
      }, remove:function(i) {
        i.isInterleavedBufferAttribute && (i = i.data);
        var n = e[i.uuid];
        n && (t.deleteBuffer(n.buffer), delete e[i.uuid]);
      }, update:function(i, n) {
        if (i.isInterleavedBufferAttribute && (i = i.data), void 0 === (r = e[i.uuid])) {
          var r = i.uuid, a = i.array, s = i.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW, o = t.createBuffer();
          t.bindBuffer(n, o), t.bufferData(n, a, s), i.onUploadCallback(), n = t.FLOAT, a instanceof Float32Array ? n = t.FLOAT : a instanceof Float64Array || (a instanceof Uint16Array ? n = t.UNSIGNED_SHORT : a instanceof Int16Array ? n = t.SHORT : a instanceof Uint32Array ? n = t.UNSIGNED_INT : a instanceof Int32Array ? n = t.INT : a instanceof Int8Array ? n = t.BYTE : a instanceof Uint8Array && (n = t.UNSIGNED_BYTE)), e[r] = {buffer:o, type:n, bytesPerElement:a.BYTES_PER_ELEMENT, version:i.version};
        } else {
          r.version < i.version && (a = i, o = a.array, s = a.updateRange, t.bindBuffer(n, r.buffer), !1 === a.dynamic ? t.bufferData(n, o, t.STATIC_DRAW) : -1 === s.count ? t.bufferSubData(n, 0, o) : 0 !== s.count && (t.bufferSubData(n, s.offset * o.BYTES_PER_ELEMENT, o.subarray(s.offset, s.offset + s.count)), s.count = -1), r.version = i.version);
        }
      }};
    }
    function nt(t, e, i, n) {
      this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = n || nt.DefaultOrder;
    }
    function rt() {
      this.mask = 1;
    }
    function at() {
      Object.defineProperty(this, "id", {value:ui++}), this.uuid = Ze.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = at.DefaultUp.clone();
      var t = new a, e = new nt, i = new r, o = new a(1, 1, 1);
      e.onChange(function() {
        i.setFromEuler(e, !1);
      }), i.onChange(function() {
        e.setFromQuaternion(i, void 0, !1);
      }), Object.defineProperties(this, {position:{enumerable:!0, value:t}, rotation:{enumerable:!0, value:e}, quaternion:{enumerable:!0, value:i}, scale:{enumerable:!0, value:o}, modelViewMatrix:{value:new n}, normalMatrix:{value:new s}}), this.matrix = new n, this.matrixWorld = new n, this.matrixAutoUpdate = at.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new rt, this.visible = !0, this.receiveShadow = this.castShadow = !1, this.frustumCulled = !0, this.renderOrder =
      0, this.userData = {};
    }
    function st() {
      at.call(this), this.type = "Camera", this.matrixWorldInverse = new n, this.projectionMatrix = new n;
    }
    function ot(t, e, i, n, r, a) {
      st.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = n, this.near = void 0 !== r ? r : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix();
    }
    function ct(t, e, i, n, r, s) {
      this.a = t, this.b = e, this.c = i, this.normal = n && n.isVector3 ? n : new a, this.vertexNormals = Array.isArray(n) ? n : [], this.color = r && r.isColor ? r : new G, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== s ? s : 0;
    }
    function lt() {
      Object.defineProperty(this, "id", {value:di += 2}), this.uuid = Ze.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingSphere = this.boundingBox = null, this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate =
      this.verticesNeedUpdate = this.elementsNeedUpdate = !1;
    }
    function ht(t, e, i) {
      if (Array.isArray(t)) {
        throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      }
      this.uuid = Ze.generateUUID(), this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === i, this.dynamic = !1, this.updateRange = {offset:0, count:-1}, this.onUploadCallback = function() {
      }, this.version = 0;
    }
    function ut(t, e, i) {
      ht.call(this, new Int8Array(t), e, i);
    }
    function dt(t, e, i) {
      ht.call(this, new Uint8Array(t), e, i);
    }
    function pt(t, e, i) {
      ht.call(this, new Uint8ClampedArray(t), e, i);
    }
    function ft(t, e, i) {
      ht.call(this, new Int16Array(t), e, i);
    }
    function mt(t, e, i) {
      ht.call(this, new Uint16Array(t), e, i);
    }
    function gt(t, e, i) {
      ht.call(this, new Int32Array(t), e, i);
    }
    function vt(t, e, i) {
      ht.call(this, new Uint32Array(t), e, i);
    }
    function yt(t, e, i) {
      ht.call(this, new Float32Array(t), e, i);
    }
    function xt(t, e, i) {
      ht.call(this, new Float64Array(t), e, i);
    }
    function bt() {
      this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingSphere = this.boundingBox = null, this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1;
    }
    function _t(t) {
      if (0 === t.length) {
        return -1 / 0;
      }
      for (var e = t[0], i = 1, n = t.length; i < n; ++i) {
        t[i] > e && (e = t[i]);
      }
      return e;
    }
    function wt() {
      Object.defineProperty(this, "id", {value:pi += 2}), this.uuid = Ze.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingSphere = this.boundingBox = null, this.drawRange = {start:0, count:1 / 0};
    }
    function Mt(t, e, i, n, r, a) {
      lt.call(this), this.type = "BoxGeometry", this.parameters = {width:t, height:e, depth:i, widthSegments:n, heightSegments:r, depthSegments:a}, this.fromBufferGeometry(new Et(t, e, i, n, r, a)), this.mergeVertices();
    }
    function Et(t, e, i, n, r, s) {
      function o(t, e, i, n, r, s, o, m, g, v, y) {
        var x = s / g, b = o / v, _ = s / 2, w = o / 2, M = m / 2;
        o = g + 1;
        var E, T, S = v + 1, A = s = 0, C = new a;
        for (T = 0; T < S; T++) {
          var L = T * b - w;
          for (E = 0; E < o; E++) {
            C[t] = (E * x - _) * n, C[e] = L * r, C[i] = M, h.push(C.x, C.y, C.z), C[t] = 0, C[e] = 0, C[i] = 0 < m ? 1 : -1, u.push(C.x, C.y, C.z), d.push(E / g), d.push(1 - T / v), s += 1;
          }
        }
        for (T = 0; T < v; T++) {
          for (E = 0; E < g; E++) {
            t = p + E + o * (T + 1), e = p + (E + 1) + o * (T + 1), i = p + (E + 1) + o * T, l.push(p + E + o * T, t, i), l.push(t, e, i), A += 6;
          }
        }
        c.addGroup(f, A, y), f += A, p += s;
      }
      wt.call(this), this.type = "BoxBufferGeometry", this.parameters = {width:t, height:e, depth:i, widthSegments:n, heightSegments:r, depthSegments:s};
      var c = this;
      t = t || 1, e = e || 1, i = i || 1, n = Math.floor(n) || 1, r = Math.floor(r) || 1;
      var l = [], h = [], u = [], d = [], p = 0, f = 0;
      o("z", "y", "x", -1, -1, i, e, t, s = Math.floor(s) || 1, r, 0), o("z", "y", "x", 1, -1, i, e, -t, s, r, 1), o("x", "z", "y", 1, 1, t, i, e, n, s, 2), o("x", "z", "y", 1, -1, t, i, -e, n, s, 3), o("x", "y", "z", 1, -1, t, e, i, n, r, 4), o("x", "y", "z", -1, -1, t, e, -i, n, r, 5), this.setIndex(l), this.addAttribute("position", new yt(h, 3)), this.addAttribute("normal", new yt(u, 3)), this.addAttribute("uv", new yt(d, 2));
    }
    function Tt(t, e, i, n) {
      lt.call(this), this.type = "PlaneGeometry", this.parameters = {width:t, height:e, widthSegments:i, heightSegments:n}, this.fromBufferGeometry(new St(t, e, i, n)), this.mergeVertices();
    }
    function St(t, e, i, n) {
      wt.call(this), this.type = "PlaneBufferGeometry", this.parameters = {width:t, height:e, widthSegments:i, heightSegments:n};
      var r = (t = t || 1) / 2, a = (e = e || 1) / 2, s = (i = Math.floor(i) || 1) + 1, o = (n = Math.floor(n) || 1) + 1, c = t / i, l = e / n, h = [], u = [], d = [], p = [];
      for (t = 0; t < o; t++) {
        var f = t * l - a;
        for (e = 0; e < s; e++) {
          u.push(e * c - r, -f, 0), d.push(0, 0, 1), p.push(e / i), p.push(1 - t / n);
        }
      }
      for (t = 0; t < n; t++) {
        for (e = 0; e < i; e++) {
          r = e + s * (t + 1), a = e + 1 + s * (t + 1), o = e + 1 + s * t, h.push(e + s * t, r, o), h.push(r, a, o);
        }
      }
      this.setIndex(h), this.addAttribute("position", new yt(u, 3)), this.addAttribute("normal", new yt(d, 3)), this.addAttribute("uv", new yt(p, 2));
    }
    function At(t) {
      $.call(this), this.type = "MeshBasicMaterial", this.color = new G(16777215), this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.envMap = this.alphaMap = this.specularMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.lights = this.morphTargets = this.skinning = !1, this.setValues(t);
    }
    function Ct(t) {
      $.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1, this.extensions = {derivatives:!1, fragDepth:!1,
      drawBuffers:!1, shaderTextureLOD:!1}, this.defaultAttributeValues = {color:[1, 1, 1], uv:[0, 0], uv2:[0, 0]}, this.index0AttributeName = void 0, void 0 !== t && this.setValues(t);
    }
    function Lt(t, e) {
      this.origin = void 0 !== t ? t : new a, this.direction = void 0 !== e ? e : new a;
    }
    function Pt(t, e) {
      this.start = void 0 !== t ? t : new a, this.end = void 0 !== e ? e : new a;
    }
    function kt(t, e, i) {
      this.a = void 0 !== t ? t : new a, this.b = void 0 !== e ? e : new a, this.c = void 0 !== i ? i : new a;
    }
    function Rt(t, e) {
      at.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new wt, this.material = void 0 !== e ? e : new At({color:16777215 * Math.random()}), this.drawMode = 0, this.updateMorphTargets();
    }
    function Dt(t, e, i, n) {
      function r(t, i) {
        e.buffers.color.setClear(t.r, t.g, t.b, i, n);
      }
      var a, s, o, c = new G(0), l = 0;
      return {getClearColor:function() {
        return c;
      }, setClearColor:function(t, e) {
        c.set(t), r(c, l = void 0 !== e ? e : 1);
      }, getClearAlpha:function() {
        return l;
      }, setClearAlpha:function(t) {
        r(c, l = t);
      }, render:function(e, n, h, u) {
        null === (n = n.background) ? r(c, l) : n && n.isColor && (r(n, 1), u = !0), (t.autoClear || u) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), n && n.isCubeTexture ? (void 0 === o && ((o = new Rt(new Et(1, 1, 1), new Ct({uniforms:li.cube.uniforms, vertexShader:li.cube.vertexShader, fragmentShader:li.cube.fragmentShader, side:1, depthTest:!0, depthWrite:!1, fog:!1}))).geometry.removeAttribute("normal"), o.geometry.removeAttribute("uv"), o.onBeforeRender = function(t, e,
        i) {
          this.matrixWorld.copyPosition(i.matrixWorld);
        }, i.update(o.geometry)), o.material.uniforms.tCube.value = n, e.push(o, o.geometry, o.material, 0, null)) : n && n.isTexture && (void 0 === a && (a = new ot(-1, 1, 1, -1, 0, 1), s = new Rt(new St(2, 2), new At({depthTest:!1, depthWrite:!1, fog:!1})), i.update(s.geometry)), s.material.map = n, t.renderBufferDirect(a, null, s.geometry, s.material, s, null));
      }};
    }
    function It(t, e) {
      return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id;
    }
    function Nt(t, e) {
      return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id;
    }
    function Ut() {
      var t = [], e = 0, i = [], n = [];
      return {opaque:i, transparent:n, init:function() {
        e = 0, i.length = 0, n.length = 0;
      }, push:function(r, a, s, o, c) {
        var l = t[e];
        void 0 === l ? (l = {id:r.id, object:r, geometry:a, material:s, program:s.program, renderOrder:r.renderOrder, z:o, group:c}, t[e] = l) : (l.id = r.id, l.object = r, l.geometry = a, l.material = s, l.program = s.program, l.renderOrder = r.renderOrder, l.z = o, l.group = c), (!0 === s.transparent ? n : i).push(l), e++;
      }, sort:function() {
        1 < i.length && i.sort(It), 1 < n.length && n.sort(Nt);
      }};
    }
    function Ft() {
      var t = {};
      return {get:function(e, i) {
        return e = e.id + "," + i.id, void 0 === (i = t[e]) && (i = new Ut, t[e] = i), i;
      }, dispose:function() {
        t = {};
      }};
    }
    function Ot(t, e) {
      return Math.abs(e[1]) - Math.abs(t[1]);
    }
    function Bt(t) {
      var e = {}, i = new Float32Array(8);
      return {update:function(n, r, a, s) {
        var o = n.morphTargetInfluences, c = o.length;
        if (void 0 === (n = e[r.id])) {
          n = [];
          for (var l = 0; l < c; l++) {
            n[l] = [l, 0];
          }
          e[r.id] = n;
        }
        var h = a.morphTargets && r.morphAttributes.position;
        for (a = a.morphNormals && r.morphAttributes.normal, l = 0; l < c; l++) {
          var u = n[l];
          0 !== u[1] && (h && r.removeAttribute("morphTarget" + l), a && r.removeAttribute("morphNormal" + l));
        }
        for (l = 0; l < c; l++) {
          u = n[l], u[0] = l, u[1] = o[l];
        }
        for (n.sort(Ot), l = 0; 8 > l; l++) {
          (u = n[l]) && (o = u[0], u = u[1]) ? (h && r.addAttribute("morphTarget" + l, h[o]), a && r.addAttribute("morphNormal" + l, a[o]), i[l] = u) : i[l] = 0;
        }
        s.getUniforms().setValue(t, "morphTargetInfluences", i);
      }};
    }
    function zt(t, e, i) {
      var n, r, a;
      this.setMode = function(t) {
        n = t;
      }, this.setIndex = function(t) {
        r = t.type, a = t.bytesPerElement;
      }, this.render = function(e, s) {
        t.drawElements(n, s, r, e * a), i.calls++, i.vertices += s, n === t.TRIANGLES ? i.faces += s / 3 : n === t.POINTS && (i.points += s);
      }, this.renderInstances = function(s, o, c) {
        var l = e.get("ANGLE_instanced_arrays");
        null !== l && (l.drawElementsInstancedANGLE(n, c, r, o * a, s.maxInstancedCount), i.calls++, i.vertices += c * s.maxInstancedCount, n === t.TRIANGLES ? i.faces += s.maxInstancedCount * c / 3 : n === t.POINTS && (i.points += s.maxInstancedCount * c));
      };
    }
    function Ht(t, e, i) {
      var n;
      this.setMode = function(t) {
        n = t;
      }, this.render = function(e, r) {
        t.drawArrays(n, e, r), i.calls++, i.vertices += r, n === t.TRIANGLES ? i.faces += r / 3 : n === t.POINTS && (i.points += r);
      }, this.renderInstances = function(r, a, s) {
        var o = e.get("ANGLE_instanced_arrays");
        if (null !== o) {
          var c = r.attributes.position;
          c.isInterleavedBufferAttribute ? (s = c.data.count, o.drawArraysInstancedANGLE(n, 0, s, r.maxInstancedCount)) : o.drawArraysInstancedANGLE(n, a, s, r.maxInstancedCount), i.calls++, i.vertices += s * r.maxInstancedCount, n === t.TRIANGLES ? i.faces += r.maxInstancedCount * s / 3 : n === t.POINTS && (i.points += r.maxInstancedCount * s);
        }
      };
    }
    function Vt(t, e, i) {
      function n(t) {
        t = t.target;
        var s = r[t.id];
        null !== s.index && e.remove(s.index);
        for (var o in s.attributes) {
          e.remove(s.attributes[o]);
        }
        t.removeEventListener("dispose", n), delete r[t.id], (o = a[t.id]) && (e.remove(o), delete a[t.id]), (o = a[s.id]) && (e.remove(o), delete a[s.id]), i.geometries--;
      }
      var r = {}, a = {};
      return {get:function(t, e) {
        var a = r[e.id];
        return a || (e.addEventListener("dispose", n), e.isBufferGeometry ? a = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new wt).setFromObject(t)), a = e._bufferGeometry), r[e.id] = a, i.geometries++, a);
      }, update:function(i) {
        var n = i.index, r = i.attributes;
        null !== n && e.update(n, t.ELEMENT_ARRAY_BUFFER);
        for (var a in r) {
          e.update(r[a], t.ARRAY_BUFFER);
        }
        i = i.morphAttributes;
        for (a in i) {
          for (var n = i[a], r = 0, s = n.length; r < s; r++) {
            e.update(n[r], t.ARRAY_BUFFER);
          }
        }
      }, getWireframeAttribute:function(i) {
        var n = a[i.id];
        if (n) {
          return n;
        }
        n = [];
        var r = i.index, s = i.attributes;
        if (null !== r) {
          for (var o = r.array, c = 0, l = o.length; c < l; c += 3) {
            var h = o[c + 0];
            s = o[c + 1], r = o[c + 2], n.push(h, s, s, r, r, h);
          }
        } else {
          for (o = s.position.array, c = 0, l = o.length / 3 - 1; c < l; c += 3) {
            h = c + 0, s = c + 1, r = c + 2, n.push(h, s, s, r, r, h);
          }
        }
        return n = new (65535 < _t(n) ? vt : mt)(n, 1), e.update(n, t.ELEMENT_ARRAY_BUFFER), a[i.id] = n;
      }};
    }
    function Gt() {
      var t = {};
      return {get:function(e) {
        if (void 0 !== t[e.id]) {
          return t[e.id];
        }
        switch(e.type) {
          case "DirectionalLight":
            var n = {direction:new a, color:new G, shadow:!1, shadowBias:0, shadowRadius:1, shadowMapSize:new i};
            break;
          case "SpotLight":
            n = {position:new a, direction:new a, color:new G, distance:0, coneCos:0, penumbraCos:0, decay:0, shadow:!1, shadowBias:0, shadowRadius:1, shadowMapSize:new i};
            break;
          case "PointLight":
            n = {position:new a, color:new G, distance:0, decay:0, shadow:!1, shadowBias:0, shadowRadius:1, shadowMapSize:new i, shadowCameraNear:1, shadowCameraFar:1e3};
            break;
          case "HemisphereLight":
            n = {direction:new a, skyColor:new G, groundColor:new G};
            break;
          case "RectAreaLight":
            n = {color:new G, position:new a, halfWidth:new a, halfHeight:new a};
        }
        return t[e.id] = n;
      }};
    }
    function jt() {
      var t = new Gt, e = {hash:"", ambient:[0, 0, 0], directional:[], directionalShadowMap:[], directionalShadowMatrix:[], spot:[], spotShadowMap:[], spotShadowMatrix:[], rectArea:[], point:[], pointShadowMap:[], pointShadowMatrix:[], hemi:[]}, i = new a, r = new n, s = new n;
      return {setup:function(n, a, o) {
        for (var c, l = 0, h = 0, u = 0, d = 0, p = 0, f = 0, m = 0, g = 0, v = o.matrixWorldInverse, y = 0, x = n.length; y < x; y++) {
          var b = n[y];
          c = b.color;
          var _ = b.intensity, w = b.distance, M = b.shadow && b.shadow.map ? b.shadow.map.texture : null;
          b.isAmbientLight ? (l += c.r * _, h += c.g * _, u += c.b * _) : b.isDirectionalLight ? ((o = t.get(b)).color.copy(b.color).multiplyScalar(b.intensity), o.direction.setFromMatrixPosition(b.matrixWorld), i.setFromMatrixPosition(b.target.matrixWorld), o.direction.sub(i), o.direction.transformDirection(v), (o.shadow = b.castShadow) && (c = b.shadow, o.shadowBias = c.bias, o.shadowRadius = c.radius, o.shadowMapSize = c.mapSize), e.directionalShadowMap[d] = M, e.directionalShadowMatrix[d] = b.shadow.matrix,
          e.directional[d] = o, d++) : b.isSpotLight ? ((o = t.get(b)).position.setFromMatrixPosition(b.matrixWorld), o.position.applyMatrix4(v), o.color.copy(c).multiplyScalar(_), o.distance = w, o.direction.setFromMatrixPosition(b.matrixWorld), i.setFromMatrixPosition(b.target.matrixWorld), o.direction.sub(i), o.direction.transformDirection(v), o.coneCos = Math.cos(b.angle), o.penumbraCos = Math.cos(b.angle * (1 - b.penumbra)), o.decay = 0 === b.distance ? 0 : b.decay, (o.shadow = b.castShadow) &&
          (c = b.shadow, o.shadowBias = c.bias, o.shadowRadius = c.radius, o.shadowMapSize = c.mapSize), e.spotShadowMap[f] = M, e.spotShadowMatrix[f] = b.shadow.matrix, e.spot[f] = o, f++) : b.isRectAreaLight ? ((o = t.get(b)).color.copy(c).multiplyScalar(_ / (b.width * b.height)), o.position.setFromMatrixPosition(b.matrixWorld), o.position.applyMatrix4(v), s.identity(), r.copy(b.matrixWorld), r.premultiply(v), s.extractRotation(r), o.halfWidth.set(.5 * b.width, 0, 0), o.halfHeight.set(0, .5 * b.height,
          0), o.halfWidth.applyMatrix4(s), o.halfHeight.applyMatrix4(s), e.rectArea[m] = o, m++) : b.isPointLight ? ((o = t.get(b)).position.setFromMatrixPosition(b.matrixWorld), o.position.applyMatrix4(v), o.color.copy(b.color).multiplyScalar(b.intensity), o.distance = b.distance, o.decay = 0 === b.distance ? 0 : b.decay, (o.shadow = b.castShadow) && (c = b.shadow, o.shadowBias = c.bias, o.shadowRadius = c.radius, o.shadowMapSize = c.mapSize, o.shadowCameraNear = c.camera.near, o.shadowCameraFar =
          c.camera.far), e.pointShadowMap[p] = M, e.pointShadowMatrix[p] = b.shadow.matrix, e.point[p] = o, p++) : b.isHemisphereLight && ((o = t.get(b)).direction.setFromMatrixPosition(b.matrixWorld), o.direction.transformDirection(v), o.direction.normalize(), o.skyColor.copy(b.color).multiplyScalar(_), o.groundColor.copy(b.groundColor).multiplyScalar(_), e.hemi[g] = o, g++);
        }
        e.ambient[0] = l, e.ambient[1] = h, e.ambient[2] = u, e.directional.length = d, e.spot.length = f, e.rectArea.length = m, e.point.length = p, e.hemi.length = g, e.hash = d + "," + p + "," + f + "," + m + "," + g + "," + a.length;
      }, state:e};
    }
    function qt(t, e) {
      var i = {};
      return {update:function(n) {
        var r = e.frame, a = n.geometry, s = t.get(n, a);
        return i[s.id] !== r && (a.isGeometry && s.updateFromObject(n), t.update(s), i[s.id] = r), s;
      }, clear:function() {
        i = {};
      }};
    }
    function Wt(t, e, i) {
      return e = t.createShader(e), t.shaderSource(e, i), t.compileShader(e), t.getShaderParameter(e, t.COMPILE_STATUS), t.getShaderInfoLog(e), e;
    }
    function Xt(t) {
      switch(t) {
        case 3e3:
          return ["Linear", "( value )"];
        case 3001:
          return ["sRGB", "( value )"];
        case 3002:
          return ["RGBE", "( value )"];
        case 3004:
          return ["RGBM", "( value, 7.0 )"];
        case 3005:
          return ["RGBM", "( value, 16.0 )"];
        case 3006:
          return ["RGBD", "( value, 256.0 )"];
        case 3007:
          return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        default:
          throw Error("unsupported encoding: " + t);
      }
    }
    function $t(t, e) {
      return e = Xt(e), "vec4 " + t + "( vec4 value ) { return " + e[0] + "ToLinear" + e[1] + "; }";
    }
    function Yt(t, e) {
      return e = Xt(e), "vec4 " + t + "( vec4 value ) { return LinearTo" + e[0] + e[1] + "; }";
    }
    function Zt(t, e) {
      switch(e) {
        case 1:
          e = "Linear";
          break;
        case 2:
          e = "Reinhard";
          break;
        case 3:
          e = "Uncharted2";
          break;
        case 4:
          e = "OptimizedCineon";
          break;
        default:
          throw Error("unsupported toneMapping: " + e);
      }
      return "vec3 " + t + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
    }
    function Qt(t, e, i) {
      return t = t || {}, [t.derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Kt).join("\n");
    }
    function Jt(t) {
      var e, i = [];
      for (e in t) {
        var n = t[e];
        !1 !== n && i.push("#define " + e + " " + n);
      }
      return i.join("\n");
    }
    function Kt(t) {
      return "" !== t;
    }
    function te(t, e) {
      return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights);
    }
    function ee(t) {
      return t.replace(/^[ \t]*#include +<([\w\d.]+)>/gm, function(t, e) {
        if (void 0 === (t = ci[e])) {
          throw Error("Can not resolve #include <" + e + ">");
        }
        return ee(t);
      });
    }
    function ie(t) {
      return t.replace(/for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(t, e, i, n) {
        for (t = "", e = parseInt(e); e < parseInt(i); e++) {
          t += n.replace(/\[ i \]/g, "[ " + e + " ]");
        }
        return t;
      });
    }
    function ne(t, e, i, n, r, a) {
      var s = t.context, o = n.defines, c = r.vertexShader, l = r.fragmentShader, h = "SHADOWMAP_TYPE_BASIC";
      1 === a.shadowMapType ? h = "SHADOWMAP_TYPE_PCF" : 2 === a.shadowMapType && (h = "SHADOWMAP_TYPE_PCF_SOFT");
      var u = "ENVMAP_TYPE_CUBE", d = "ENVMAP_MODE_REFLECTION", p = "ENVMAP_BLENDING_MULTIPLY";
      if (a.envMap) {
        switch(n.envMap.mapping) {
          case 301:
          case 302:
            u = "ENVMAP_TYPE_CUBE";
            break;
          case 306:
          case 307:
            u = "ENVMAP_TYPE_CUBE_UV";
            break;
          case 303:
          case 304:
            u = "ENVMAP_TYPE_EQUIREC";
            break;
          case 305:
            u = "ENVMAP_TYPE_SPHERE";
        }
        switch(n.envMap.mapping) {
          case 302:
          case 304:
            d = "ENVMAP_MODE_REFRACTION";
        }
        switch(n.combine) {
          case 0:
            p = "ENVMAP_BLENDING_MULTIPLY";
            break;
          case 1:
            p = "ENVMAP_BLENDING_MIX";
            break;
          case 2:
            p = "ENVMAP_BLENDING_ADD";
        }
      }
      var f = 0 < t.gammaFactor ? t.gammaFactor : 1, m = Qt(n.extensions, a, e), g = Jt(o), v = s.createProgram();
      n.isRawShaderMaterial ? (0 < (o = [g].filter(Kt).join("\n")).length && (o += "\n"), 0 < (e = [m, g].filter(Kt).join("\n")).length && (e += "\n")) : (o = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, g, a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + f, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" :
      "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + d : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" :
      "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + a.numClippingPlanes, a.shadowMapEnabled ?
      "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + h : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && e.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;",
      "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;",
      "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Kt).join("\n"), e = [m, "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, g, a.alphaTest ? "#define ALPHATEST " + a.alphaTest : "", "#define GAMMA_FACTOR " + f, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" :
      "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + u : "", a.envMap ? "#define " + d : "", a.envMap ? "#define " + p : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ?
      "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + a.numClippingPlanes, "#define UNION_CLIPPING_PLANES " + (a.numClippingPlanes - a.numClipIntersection), a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ?
      "#define " + h : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && e.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", a.envMap && e.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", 0 !== a.toneMapping ? "#define TONE_MAPPING" : "", 0 !== a.toneMapping ?
      ci.tonemapping_pars_fragment : "", 0 !== a.toneMapping ? Zt("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? ci.encodings_pars_fragment : "", a.mapEncoding ? $t("mapTexelToLinear", a.mapEncoding) : "", a.envMapEncoding ? $t("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? $t("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? Yt("linearToOutputTexel",
      a.outputEncoding) : "", a.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Kt).join("\n")), c = te(c = ee(c), a), l = te(l = ee(l), a), n.isShaderMaterial || (c = ie(c), l = ie(l)), l = e + l, c = Wt(s, s.VERTEX_SHADER, o + c), l = Wt(s, s.FRAGMENT_SHADER, l), s.attachShader(v, c), s.attachShader(v, l), void 0 !== n.index0AttributeName ? s.bindAttribLocation(v, 0, n.index0AttributeName) : !0 === a.morphTargets && s.bindAttribLocation(v, 0, "position"), s.linkProgram(v),
      a = s.getProgramInfoLog(v), r = s.getShaderInfoLog(c), h = s.getShaderInfoLog(l), d = u = !0, !1 === s.getProgramParameter(v, s.LINK_STATUS) ? u = !1 : "" !== a || "" !== r && "" !== h || (d = !1), d && (this.diagnostics = {runnable:u, material:n, programLog:a, vertexShader:{log:r, prefix:o}, fragmentShader:{log:h, prefix:e}}), s.deleteShader(c), s.deleteShader(l);
      var y;
      this.getUniforms = function() {
        return void 0 === y && (y = new V(s, v, t)), y;
      };
      var x;
      return this.getAttributes = function() {
        if (void 0 === x) {
          for (var t = {}, e = s.getProgramParameter(v, s.ACTIVE_ATTRIBUTES), i = 0; i < e; i++) {
            var n = s.getActiveAttrib(v, i).name;
            t[n] = s.getAttribLocation(v, n);
          }
          x = t;
        }
        return x;
      }, this.destroy = function() {
        s.deleteProgram(v), this.program = void 0;
      }, Object.defineProperties(this, {uniforms:{get:function() {
        return this.getUniforms();
      }}, attributes:{get:function() {
        return this.getAttributes();
      }}}), this.id = fi++, this.code = i, this.usedTimes = 1, this.program = v, this.vertexShader = c, this.fragmentShader = l, this;
    }
    function re(t, e, i) {
      function n(t, e) {
        if (t) {
          t.isTexture ? i = t.encoding : t.isWebGLRenderTarget && (i = t.texture.encoding);
        } else {
          var i = 3e3;
        }
        return 3e3 === i && e && (i = 3007), i;
      }
      var r = [], a = {MeshDepthMaterial:"depth", MeshDistanceMaterial:"distanceRGBA", MeshNormalMaterial:"normal", MeshBasicMaterial:"basic", MeshLambertMaterial:"lambert", MeshPhongMaterial:"phong", MeshToonMaterial:"phong", MeshStandardMaterial:"physical", MeshPhysicalMaterial:"physical", LineBasicMaterial:"basic", LineDashedMaterial:"dashed", PointsMaterial:"points", ShadowMaterial:"shadow"}, s = "precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering".split(" ");
      this.getParameters = function(e, r, s, o, c, l, h) {
        var u = a[e.type];
        if (h.isSkinnedMesh) {
          var d = h.skeleton.bones;
          if (i.floatVertexTextures) {
            d = 1024;
          } else {
            var p = Math.min(Math.floor((i.maxVertexUniforms - 20) / 4), d.length);
            d = p < d.length ? 0 : p;
          }
        } else {
          d = 0;
        }
        p = i.precision, null !== e.precision && (p = i.getMaxPrecision(e.precision));
        var f = t.getRenderTarget();
        return {shaderID:u, precision:p, supportsVertexTextures:i.vertexTextures, outputEncoding:n(f ? f.texture : null, t.gammaOutput), map:!!e.map, mapEncoding:n(e.map, t.gammaInput), envMap:!!e.envMap, envMapMode:e.envMap && e.envMap.mapping, envMapEncoding:n(e.envMap, t.gammaInput), envMapCubeUV:!!e.envMap && (306 === e.envMap.mapping || 307 === e.envMap.mapping), lightMap:!!e.lightMap, aoMap:!!e.aoMap, emissiveMap:!!e.emissiveMap, emissiveMapEncoding:n(e.emissiveMap, t.gammaInput), bumpMap:!!e.bumpMap,
        normalMap:!!e.normalMap, displacementMap:!!e.displacementMap, roughnessMap:!!e.roughnessMap, metalnessMap:!!e.metalnessMap, specularMap:!!e.specularMap, alphaMap:!!e.alphaMap, gradientMap:!!e.gradientMap, combine:e.combine, vertexColors:e.vertexColors, fog:!!o, useFog:e.fog, fogExp:o && o.isFogExp2, flatShading:e.flatShading, sizeAttenuation:e.sizeAttenuation, logarithmicDepthBuffer:i.logarithmicDepthBuffer, skinning:e.skinning && 0 < d, maxBones:d, useVertexTexture:i.floatVertexTextures,
        morphTargets:e.morphTargets, morphNormals:e.morphNormals, maxMorphTargets:t.maxMorphTargets, maxMorphNormals:t.maxMorphNormals, numDirLights:r.directional.length, numPointLights:r.point.length, numSpotLights:r.spot.length, numRectAreaLights:r.rectArea.length, numHemiLights:r.hemi.length, numClippingPlanes:c, numClipIntersection:l, dithering:e.dithering, shadowMapEnabled:t.shadowMap.enabled && h.receiveShadow && 0 < s.length, shadowMapType:t.shadowMap.type, toneMapping:t.toneMapping, physicallyCorrectLights:t.physicallyCorrectLights,
        premultipliedAlpha:e.premultipliedAlpha, alphaTest:e.alphaTest, doubleSided:2 === e.side, flipSided:1 === e.side, depthPacking:void 0 !== e.depthPacking && e.depthPacking};
      }, this.getProgramCode = function(e, i) {
        var n = [];
        if (i.shaderID ? n.push(i.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines) {
          for (var r in e.defines) {
            n.push(r), n.push(e.defines[r]);
          }
        }
        for (r = 0; r < s.length; r++) {
          n.push(i[s[r]]);
        }
        return n.push(e.onBeforeCompile.toString()), n.push(t.gammaOutput), n.join();
      }, this.acquireProgram = function(i, n, a, s) {
        for (var o, c = 0, l = r.length; c < l; c++) {
          var h = r[c];
          if (h.code === s) {
            ++(o = h).usedTimes;
            break;
          }
        }
        return void 0 === o && (o = new ne(t, e, s, i, n, a), r.push(o)), o;
      }, this.releaseProgram = function(t) {
        if (0 == --t.usedTimes) {
          var e = r.indexOf(t);
          r[e] = r[r.length - 1], r.pop(), t.destroy();
        }
      }, this.programs = r;
    }
    function ae(t, e, i, n, r, a, s) {
      function o(t, e) {
        if (t.width > e || t.height > e) {
          e /= Math.max(t.width, t.height);
          var i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
          return i.width = Math.floor(t.width * e), i.height = Math.floor(t.height * e), i.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, i.width, i.height), i;
        }
        return t;
      }
      function c(t) {
        return Ze.isPowerOfTwo(t.width) && Ze.isPowerOfTwo(t.height);
      }
      function l(t, e) {
        return t.generateMipmaps && e && 1003 !== t.minFilter && 1006 !== t.minFilter;
      }
      function h(e) {
        return 1003 === e || 1004 === e || 1005 === e ? t.NEAREST : t.LINEAR;
      }
      function u(e) {
        (e = e.target).removeEventListener("dispose", u);
        t: {
          var i = n.get(e);
          if (e.image && i.__image__webglTextureCube) {
            t.deleteTexture(i.__image__webglTextureCube);
          } else {
            if (void 0 === i.__webglInit) {
              break t;
            }
            t.deleteTexture(i.__webglTexture);
          }
          n.remove(e);
        }
        s.textures--;
      }
      function d(e) {
        (e = e.target).removeEventListener("dispose", d);
        var i = n.get(e), r = n.get(e.texture);
        if (e) {
          if (void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture), e.depthTexture && e.depthTexture.dispose(), e.isWebGLRenderTargetCube) {
            for (r = 0; 6 > r; r++) {
              t.deleteFramebuffer(i.__webglFramebuffer[r]), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer[r]);
            }
          } else {
            t.deleteFramebuffer(i.__webglFramebuffer), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer);
          }
          n.remove(e.texture), n.remove(e);
        }
        s.textures--;
      }
      function p(e, h) {
        var d = n.get(e);
        if (0 < e.version && d.__version !== e.version && void 0 !== (m = e.image) && !1 !== m.complete) {
          void 0 === d.__webglInit && (d.__webglInit = !0, e.addEventListener("dispose", u), d.__webglTexture = t.createTexture(), s.textures++), i.activeTexture(t.TEXTURE0 + h), i.bindTexture(t.TEXTURE_2D, d.__webglTexture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, e.unpackAlignment);
          var p = o(e.image, r.maxTextureSize);
          (1001 !== e.wrapS || 1001 !== e.wrapT || 1003 !== e.minFilter && 1006 !== e.minFilter) && !1 === c(p) && ((h = p) instanceof HTMLImageElement || h instanceof HTMLCanvasElement || h instanceof ImageBitmap ? (m = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), m.width = Ze.floorPowerOfTwo(h.width), m.height = Ze.floorPowerOfTwo(h.height), m.getContext("2d").drawImage(h, 0, 0, m.width, m.height), p = m) : p = h), h = c(p);
          var m = a.convert(e.format), g = a.convert(e.type);
          f(t.TEXTURE_2D, e, h);
          var y = e.mipmaps;
          if (e.isDepthTexture) {
            if (y = t.DEPTH_COMPONENT, 1015 === e.type) {
              if (!v) {
                throw Error("Float Depth Texture only supported in WebGL2.0");
              }
              y = t.DEPTH_COMPONENT32F;
            } else {
              v && (y = t.DEPTH_COMPONENT16);
            }
            1026 === e.format && y === t.DEPTH_COMPONENT && 1012 !== e.type && 1014 !== e.type && (e.type = 1012, g = a.convert(e.type)), 1027 === e.format && (y = t.DEPTH_STENCIL, 1020 !== e.type && (e.type = 1020, g = a.convert(e.type))), i.texImage2D(t.TEXTURE_2D, 0, y, p.width, p.height, 0, m, g, null);
          } else {
            if (e.isDataTexture) {
              if (0 < y.length && h) {
                for (var x = 0, b = y.length; x < b; x++) {
                  p = y[x], i.texImage2D(t.TEXTURE_2D, x, m, p.width, p.height, 0, m, g, p.data);
                }
                e.generateMipmaps = !1;
              } else {
                i.texImage2D(t.TEXTURE_2D, 0, m, p.width, p.height, 0, m, g, p.data);
              }
            } else {
              if (e.isCompressedTexture) {
                for (x = 0, b = y.length; x < b; x++) {
                  p = y[x], 1023 !== e.format && 1022 !== e.format ? -1 < i.getCompressedTextureFormats().indexOf(m) && i.compressedTexImage2D(t.TEXTURE_2D, x, m, p.width, p.height, 0, p.data) : i.texImage2D(t.TEXTURE_2D, x, m, p.width, p.height, 0, m, g, p.data);
                }
              } else {
                if (0 < y.length && h) {
                  for (x = 0, b = y.length; x < b; x++) {
                    p = y[x], i.texImage2D(t.TEXTURE_2D, x, m, m, g, p);
                  }
                  e.generateMipmaps = !1;
                } else {
                  i.texImage2D(t.TEXTURE_2D, 0, m, m, g, p);
                }
              }
            }
          }
          return l(e, h) && t.generateMipmap(t.TEXTURE_2D), d.__version = e.version, void(e.onUpdate && e.onUpdate(e));
        }
        i.activeTexture(t.TEXTURE0 + h), i.bindTexture(t.TEXTURE_2D, d.__webglTexture);
      }
      function f(i, s, o) {
        o ? (t.texParameteri(i, t.TEXTURE_WRAP_S, a.convert(s.wrapS)), t.texParameteri(i, t.TEXTURE_WRAP_T, a.convert(s.wrapT)), t.texParameteri(i, t.TEXTURE_MAG_FILTER, a.convert(s.magFilter)), t.texParameteri(i, t.TEXTURE_MIN_FILTER, a.convert(s.minFilter))) : (t.texParameteri(i, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(i, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(i, t.TEXTURE_MAG_FILTER, h(s.magFilter)), t.texParameteri(i, t.TEXTURE_MIN_FILTER, h(s.minFilter))), !(o = e.get("EXT_texture_filter_anisotropic")) ||
        1015 === s.type && null === e.get("OES_texture_float_linear") || 1016 === s.type && null === e.get("OES_texture_half_float_linear") || !(1 < s.anisotropy || n.get(s).__currentAnisotropy) || (t.texParameterf(i, o.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())), n.get(s).__currentAnisotropy = s.anisotropy);
      }
      function m(e, r, s, o) {
        var c = a.convert(r.texture.format), l = a.convert(r.texture.type);
        i.texImage2D(o, 0, c, r.width, r.height, 0, c, l, null), t.bindFramebuffer(t.FRAMEBUFFER, e), t.framebufferTexture2D(t.FRAMEBUFFER, s, o, n.get(r.texture).__webglTexture, 0), t.bindFramebuffer(t.FRAMEBUFFER, null);
      }
      function g(e, i) {
        t.bindRenderbuffer(t.RENDERBUFFER, e), i.depthBuffer && !i.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, i.width, i.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)) : i.depthBuffer && i.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, i.width, i.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)) : t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, i.width,
        i.height), t.bindRenderbuffer(t.RENDERBUFFER, null);
      }
      var v = "undefined" != typeof WebGL2RenderingContext && t instanceof window.WebGL2RenderingContext;
      this.setTexture2D = p, this.setTextureCube = function(e, h) {
        var d = n.get(e);
        if (6 === e.image.length) {
          if (0 < e.version && d.__version !== e.version) {
            d.__image__webglTextureCube || (e.addEventListener("dispose", u), d.__image__webglTextureCube = t.createTexture(), s.textures++), i.activeTexture(t.TEXTURE0 + h), i.bindTexture(t.TEXTURE_CUBE_MAP, d.__image__webglTextureCube), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY), h = e && e.isCompressedTexture;
            for (var p = e.image[0] && e.image[0].isDataTexture, m = [], g = 0; 6 > g; g++) {
              m[g] = h || p ? p ? e.image[g].image : e.image[g] : o(e.image[g], r.maxCubemapSize);
            }
            var v = c(m[0]), y = a.convert(e.format), x = a.convert(e.type);
            for (f(t.TEXTURE_CUBE_MAP, e, v), g = 0; 6 > g; g++) {
              if (h) {
                for (var b, _ = m[g].mipmaps, w = 0, M = _.length; w < M; w++) {
                  b = _[w], 1023 !== e.format && 1022 !== e.format ? -1 < i.getCompressedTextureFormats().indexOf(y) && i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + g, w, y, b.width, b.height, 0, b.data) : i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + g, w, y, b.width, b.height, 0, y, x, b.data);
                }
              } else {
                p ? i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + g, 0, y, m[g].width, m[g].height, 0, y, x, m[g].data) : i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + g, 0, y, y, x, m[g]);
              }
            }
            l(e, v) && t.generateMipmap(t.TEXTURE_CUBE_MAP), d.__version = e.version, e.onUpdate && e.onUpdate(e);
          } else {
            i.activeTexture(t.TEXTURE0 + h), i.bindTexture(t.TEXTURE_CUBE_MAP, d.__image__webglTextureCube);
          }
        }
      }, this.setTextureCubeDynamic = function(e, r) {
        i.activeTexture(t.TEXTURE0 + r), i.bindTexture(t.TEXTURE_CUBE_MAP, n.get(e).__webglTexture);
      }, this.setupRenderTarget = function(e) {
        var r = n.get(e), a = n.get(e.texture);
        e.addEventListener("dispose", d), a.__webglTexture = t.createTexture(), s.textures++;
        var o = !0 === e.isWebGLRenderTargetCube, h = c(e);
        if (o) {
          r.__webglFramebuffer = [];
          for (var u = 0; 6 > u; u++) {
            r.__webglFramebuffer[u] = t.createFramebuffer();
          }
        } else {
          r.__webglFramebuffer = t.createFramebuffer();
        }
        if (o) {
          for (i.bindTexture(t.TEXTURE_CUBE_MAP, a.__webglTexture), f(t.TEXTURE_CUBE_MAP, e.texture, h), u = 0; 6 > u; u++) {
            m(r.__webglFramebuffer[u], e, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + u);
          }
          l(e.texture, h) && t.generateMipmap(t.TEXTURE_CUBE_MAP), i.bindTexture(t.TEXTURE_CUBE_MAP, null);
        } else {
          i.bindTexture(t.TEXTURE_2D, a.__webglTexture), f(t.TEXTURE_2D, e.texture, h), m(r.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, t.TEXTURE_2D), l(e.texture, h) && t.generateMipmap(t.TEXTURE_2D), i.bindTexture(t.TEXTURE_2D, null);
        }
        if (e.depthBuffer) {
          if (r = n.get(e), a = !0 === e.isWebGLRenderTargetCube, e.depthTexture) {
            if (a) {
              throw Error("target.depthTexture not supported in Cube render targets");
            }
            if (e && e.isWebGLRenderTargetCube) {
              throw Error("Depth Texture with cube render targets is not supported");
            }
            if (t.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer), !e.depthTexture || !e.depthTexture.isDepthTexture) {
              throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
            }
            if (n.get(e.depthTexture).__webglTexture && e.depthTexture.image.width === e.width && e.depthTexture.image.height === e.height || (e.depthTexture.image.width = e.width, e.depthTexture.image.height = e.height, e.depthTexture.needsUpdate = !0), p(e.depthTexture, 0), r = n.get(e.depthTexture).__webglTexture, 1026 === e.depthTexture.format) {
              t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, r, 0);
            } else {
              if (1027 !== e.depthTexture.format) {
                throw Error("Unknown depthTexture format");
              }
              t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, r, 0);
            }
          } else {
            if (a) {
              for (r.__webglDepthbuffer = [], a = 0; 6 > a; a++) {
                t.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer[a]), r.__webglDepthbuffer[a] = t.createRenderbuffer(), g(r.__webglDepthbuffer[a], e);
              }
            } else {
              t.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer), r.__webglDepthbuffer = t.createRenderbuffer(), g(r.__webglDepthbuffer, e);
            }
          }
          t.bindFramebuffer(t.FRAMEBUFFER, null);
        }
      }, this.updateRenderTargetMipmap = function(e) {
        var r = e.texture;
        l(r, c(e)) && (e = e.isWebGLRenderTargetCube ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D, r = n.get(r).__webglTexture, i.bindTexture(e, r), t.generateMipmap(e), i.bindTexture(e, null));
      };
    }
    function se() {
      var t = {};
      return {get:function(e) {
        e = e.uuid;
        var i = t[e];
        return void 0 === i && (i = {}, t[e] = i), i;
      }, remove:function(e) {
        delete t[e.uuid];
      }, clear:function() {
        t = {};
      }};
    }
    function oe(t, e, i) {
      function n(e, i, n) {
        var r = new Uint8Array(4), a = t.createTexture();
        for (t.bindTexture(e, a), t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST), e = 0; e < n; e++) {
          t.texImage2D(i + e, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, r);
        }
        return a;
      }
      function r(e) {
        !0 !== x[e] && (t.enable(e), x[e] = !0);
      }
      function a(e) {
        !1 !== x[e] && (t.disable(e), x[e] = !1);
      }
      function s(e, n, s, o, c, l, h, u) {
        if (0 !== e ? r(t.BLEND) : a(t.BLEND), 5 !== e) {
          if (e !== w || u !== L) {
            switch(e) {
              case 2:
                u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE, t.ONE, t.ONE)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.SRC_ALPHA, t.ONE));
                break;
              case 3:
                u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR));
                break;
              case 4:
                u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.SRC_COLOR));
                break;
              default:
                u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA));
            }
          }
          C = A = S = T = E = M = null;
        } else {
          c = c || n, l = l || s, h = h || o, n === M && c === S || (t.blendEquationSeparate(i.convert(n), i.convert(c)), M = n, S = c), s === E && o === T && l === A && h === C || (t.blendFuncSeparate(i.convert(s), i.convert(o), i.convert(l), i.convert(h)), E = s, T = o, A = l, C = h);
        }
        w = e, L = u;
      }
      function o(e) {
        P !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), P = e);
      }
      function l(e) {
        0 !== e ? (r(t.CULL_FACE), e !== k && (1 === e ? t.cullFace(t.BACK) : 2 === e ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : a(t.CULL_FACE), k = e;
      }
      function h(e, i, n) {
        e ? (r(t.POLYGON_OFFSET_FILL), (D !== i || I !== n) && (t.polygonOffset(i, n), D = i, I = n)) : a(t.POLYGON_OFFSET_FILL);
      }
      function u(e) {
        void 0 === e && (e = t.TEXTURE0 + N - 1), F !== e && (t.activeTexture(e), F = e);
      }
      var d = new function() {
        var e = !1, i = new c, n = null, r = new c(0, 0, 0, 0);
        return {setMask:function(i) {
          n === i || e || (t.colorMask(i, i, i, i), n = i);
        }, setLocked:function(t) {
          e = t;
        }, setClear:function(e, n, a, s, o) {
          !0 === o && (e *= s, n *= s, a *= s), i.set(e, n, a, s), !1 === r.equals(i) && (t.clearColor(e, n, a, s), r.copy(i));
        }, reset:function() {
          e = !1, n = null, r.set(-1, 0, 0, 0);
        }};
      }, p = new function() {
        var e = !1, i = null, n = null, s = null;
        return {setTest:function(e) {
          e ? r(t.DEPTH_TEST) : a(t.DEPTH_TEST);
        }, setMask:function(n) {
          i === n || e || (t.depthMask(n), i = n);
        }, setFunc:function(e) {
          if (n !== e) {
            if (e) {
              switch(e) {
                case 0:
                  t.depthFunc(t.NEVER);
                  break;
                case 1:
                  t.depthFunc(t.ALWAYS);
                  break;
                case 2:
                  t.depthFunc(t.LESS);
                  break;
                case 3:
                  t.depthFunc(t.LEQUAL);
                  break;
                case 4:
                  t.depthFunc(t.EQUAL);
                  break;
                case 5:
                  t.depthFunc(t.GEQUAL);
                  break;
                case 6:
                  t.depthFunc(t.GREATER);
                  break;
                case 7:
                  t.depthFunc(t.NOTEQUAL);
                  break;
                default:
                  t.depthFunc(t.LEQUAL);
              }
            } else {
              t.depthFunc(t.LEQUAL);
            }
            n = e;
          }
        }, setLocked:function(t) {
          e = t;
        }, setClear:function(e) {
          s !== e && (t.clearDepth(e), s = e);
        }, reset:function() {
          e = !1, s = n = i = null;
        }};
      }, f = new function() {
        var e = !1, i = null, n = null, s = null, o = null, c = null, l = null, h = null, u = null;
        return {setTest:function(e) {
          e ? r(t.STENCIL_TEST) : a(t.STENCIL_TEST);
        }, setMask:function(n) {
          i === n || e || (t.stencilMask(n), i = n);
        }, setFunc:function(e, i, r) {
          n === e && s === i && o === r || (t.stencilFunc(e, i, r), n = e, s = i, o = r);
        }, setOp:function(e, i, n) {
          c === e && l === i && h === n || (t.stencilOp(e, i, n), c = e, l = i, h = n);
        }, setLocked:function(t) {
          e = t;
        }, setClear:function(e) {
          u !== e && (t.clearStencil(e), u = e);
        }, reset:function() {
          e = !1, u = h = l = c = o = s = n = i = null;
        }};
      }, m = t.getParameter(t.MAX_VERTEX_ATTRIBS), g = new Uint8Array(m), v = new Uint8Array(m), y = new Uint8Array(m), x = {}, b = null, _ = null, w = null, M = null, E = null, T = null, S = null, A = null, C = null, L = !1, P = null, k = null, R = null, D = null, I = null, N = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS), m = parseFloat(/^WebGL ([0-9])/.exec(t.getParameter(t.VERSION))[1]), U = 1 <= parseFloat(m), F = null, O = {}, B = new c, z = new c, H = {};
      return H[t.TEXTURE_2D] = n(t.TEXTURE_2D, t.TEXTURE_2D, 1), H[t.TEXTURE_CUBE_MAP] = n(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6), d.setClear(0, 0, 0, 1), p.setClear(1), f.setClear(0), r(t.DEPTH_TEST), p.setFunc(3), o(!1), l(1), r(t.CULL_FACE), r(t.BLEND), s(1), {buffers:{color:d, depth:p, stencil:f}, initAttributes:function() {
        for (var t = 0, e = g.length; t < e; t++) {
          g[t] = 0;
        }
      }, enableAttribute:function(i) {
        g[i] = 1, 0 === v[i] && (t.enableVertexAttribArray(i), v[i] = 1), 0 !== y[i] && (e.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(i, 0), y[i] = 0);
      }, enableAttributeAndDivisor:function(i, n) {
        g[i] = 1, 0 === v[i] && (t.enableVertexAttribArray(i), v[i] = 1), y[i] !== n && (e.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(i, n), y[i] = n);
      }, disableUnusedAttributes:function() {
        for (var e = 0, i = v.length; e !== i; ++e) {
          v[e] !== g[e] && (t.disableVertexAttribArray(e), v[e] = 0);
        }
      }, enable:r, disable:a, getCompressedTextureFormats:function() {
        if (null === b && (b = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1"))) {
          for (var i = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), n = 0; n < i.length; n++) {
            b.push(i[n]);
          }
        }
        return b;
      }, useProgram:function(e) {
        return _ !== e && (t.useProgram(e), _ = e, !0);
      }, setBlending:s, setMaterial:function(e) {
        2 === e.side ? a(t.CULL_FACE) : r(t.CULL_FACE), o(1 === e.side), !0 === e.transparent ? s(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha) : s(0), p.setFunc(e.depthFunc), p.setTest(e.depthTest), p.setMask(e.depthWrite), d.setMask(e.colorWrite), h(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits);
      }, setFlipSided:o, setCullFace:l, setLineWidth:function(e) {
        e !== R && (U && t.lineWidth(e), R = e);
      }, setPolygonOffset:h, setScissorTest:function(e) {
        e ? r(t.SCISSOR_TEST) : a(t.SCISSOR_TEST);
      }, activeTexture:u, bindTexture:function(e, i) {
        null === F && u();
        var n = O[F];
        void 0 === n && (n = {type:void 0, texture:void 0}, O[F] = n), n.type === e && n.texture === i || (t.bindTexture(e, i || H[e]), n.type = e, n.texture = i);
      }, compressedTexImage2D:function() {
        try {
          t.compressedTexImage2D.apply(t, arguments);
        } catch (t$19) {
        }
      }, texImage2D:function() {
        try {
          t.texImage2D.apply(t, arguments);
        } catch (t$20) {
        }
      }, scissor:function(e) {
        !1 === B.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), B.copy(e));
      }, viewport:function(e) {
        !1 === z.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), z.copy(e));
      }, reset:function() {
        for (var e = 0; e < v.length; e++) {
          1 === v[e] && (t.disableVertexAttribArray(e), v[e] = 0);
        }
        x = {}, F = b = null, O = {}, k = P = w = _ = null, d.reset(), p.reset(), f.reset();
      }};
    }
    function ce(t, e, i) {
      function n(e) {
        if ("highp" === e) {
          if (0 < t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision && 0 < t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision) {
            return "highp";
          }
          e = "mediump";
        }
        return "mediump" === e && 0 < t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision && 0 < t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision ? "mediump" : "lowp";
      }
      var r, a = void 0 !== i.precision ? i.precision : "highp";
      (s = n(a)) !== a && (a = s), i = !0 === i.logarithmicDepthBuffer;
      var s = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), o = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS), c = t.getParameter(t.MAX_TEXTURE_SIZE), l = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE), h = t.getParameter(t.MAX_VERTEX_ATTRIBS), u = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS), d = t.getParameter(t.MAX_VARYING_VECTORS), p = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS), f = 0 < o, m = !!e.get("OES_texture_float");
      return {getMaxAnisotropy:function() {
        if (void 0 !== r) {
          return r;
        }
        var i = e.get("EXT_texture_filter_anisotropic");
        return r = null !== i ? t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
      }, getMaxPrecision:n, precision:a, logarithmicDepthBuffer:i, maxTextures:s, maxVertexTextures:o, maxTextureSize:c, maxCubemapSize:l, maxAttributes:h, maxVertexUniforms:u, maxVaryings:d, maxFragmentUniforms:p, vertexTextures:f, floatFragmentTextures:m, floatVertexTextures:f && m};
    }
    function le(t, e, i, n) {
      st.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== n ? n : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    function he(t) {
      le.call(this), this.cameras = t || [];
    }
    function ue(t) {
      function e() {
        if (null !== r && r.isPresenting) {
          var e = (n = r.getEyeParameters("left")).renderWidth, n = n.renderHeight;
          f = t.getPixelRatio(), p = t.getSize(), t.setDrawingBufferSize(2 * e, n, 1);
        } else {
          i.enabled && t.setDrawingBufferSize(p.width, p.height, f);
        }
      }
      var i = this, r = null, a = null;
      "undefined" != typeof window && "VRFrameData" in window && (a = new window.VRFrameData);
      var s = new n, o = new n, l = new n, h = new le;
      h.bounds = new c(0, 0, .5, 1), h.layers.enable(1);
      var u = new le;
      u.bounds = new c(.5, 0, .5, 1), u.layers.enable(2);
      var d = new he([h, u]);
      d.layers.enable(1), d.layers.enable(2);
      var p, f;
      "undefined" != typeof window && window.addEventListener("vrdisplaypresentchange", e, !1), this.standing = this.enabled = !1, this.getDevice = function() {
        return r;
      }, this.setDevice = function(t) {
        void 0 !== t && (r = t);
      }, this.getCamera = function(t) {
        if (null === r) {
          return t;
        }
        r.depthNear = t.near, r.depthFar = t.far, r.getFrameData(a);
        var e = a.pose;
        return null !== e.position ? t.position.fromArray(e.position) : t.position.set(0, 0, 0), null !== e.orientation && t.quaternion.fromArray(e.orientation), t.updateMatrixWorld(), e = r.stageParameters, this.standing && e && (o.fromArray(e.sittingToStandingTransform), l.getInverse(o), t.matrixWorld.multiply(o), t.matrixWorldInverse.multiply(l)), !1 === r.isPresenting ? t : (h.near = t.near, u.near = t.near, h.far = t.far, u.far = t.far, d.matrixWorld.copy(t.matrixWorld), d.matrixWorldInverse.copy(t.matrixWorldInverse),
        h.matrixWorldInverse.fromArray(a.leftViewMatrix), u.matrixWorldInverse.fromArray(a.rightViewMatrix), this.standing && e && (h.matrixWorldInverse.multiply(l), u.matrixWorldInverse.multiply(l)), null !== (t = t.parent) && (s.getInverse(t.matrixWorld), h.matrixWorldInverse.multiply(s), u.matrixWorldInverse.multiply(s)), h.matrixWorld.getInverse(h.matrixWorldInverse), u.matrixWorld.getInverse(u.matrixWorldInverse), h.projectionMatrix.fromArray(a.leftProjectionMatrix), u.projectionMatrix.fromArray(a.rightProjectionMatrix),
        d.projectionMatrix.copy(h.projectionMatrix), (t = r.getLayers()).length && (null !== (t = t[0]).leftBounds && 4 === t.leftBounds.length && h.bounds.fromArray(t.leftBounds), null !== t.rightBounds && 4 === t.rightBounds.length && u.bounds.fromArray(t.rightBounds)), d);
      }, this.getStandingMatrix = function() {
        return o;
      }, this.submitFrame = function() {
        r && r.isPresenting && r.submitFrame();
      }, this.dispose = function() {
        "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", e);
      };
    }
    function de(t) {
      var e = {};
      return {get:function(i) {
        if (void 0 !== e[i]) {
          return e[i];
        }
        switch(i) {
          case "WEBGL_depth_texture":
            var n = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
          case "EXT_texture_filter_anisotropic":
            n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
          case "WEBGL_compressed_texture_s3tc":
            n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
          case "WEBGL_compressed_texture_pvrtc":
            n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
          case "WEBGL_compressed_texture_etc1":
            n = t.getExtension("WEBGL_compressed_texture_etc1");
            break;
          default:
            n = t.getExtension(i);
        }
        return e[i] = n;
      }};
    }
    function pe() {
      function t() {
        h.value !== n && (h.value = n, h.needsUpdate = 0 < r), i.numPlanes = r, i.numIntersection = 0;
      }
      function e(t, e, n, r) {
        var a = null !== t ? t.length : 0, s = null;
        if (0 !== a) {
          if (s = h.value, !0 !== r || null === s) {
            for (r = n + 4 * a, e = e.matrixWorldInverse, l.getNormalMatrix(e), (null === s || s.length < r) && (s = new Float32Array(r)), r = 0; r !== a; ++r, n += 4) {
              c.copy(t[r]).applyMatrix4(e, l), c.normal.toArray(s, n), s[n + 3] = c.constant;
            }
          }
          h.value = s, h.needsUpdate = !0;
        }
        return i.numPlanes = a, s;
      }
      var i = this, n = null, r = 0, a = !1, o = !1, c = new K, l = new s, h = {value:null, needsUpdate:!1};
      this.uniform = h, this.numIntersection = this.numPlanes = 0, this.init = function(t, i, s) {
        var o = 0 !== t.length || i || 0 !== r || a;
        return a = i, n = e(t, s, 0), r = t.length, o;
      }, this.beginShadows = function() {
        o = !0, e(null);
      }, this.endShadows = function() {
        o = !1, t();
      }, this.setState = function(i, s, c, l, u, d) {
        if (!a || null === i || 0 === i.length || o && !c) {
          o ? e(null) : t();
        } else {
          var p = 4 * (c = o ? 0 : r), f = u.clippingState || null;
          for (h.value = f, f = e(i, l, p, d), i = 0; i !== p; ++i) {
            f[i] = n[i];
          }
          u.clippingState = f, this.numIntersection = s ? this.numPlanes : 0, this.numPlanes += c;
        }
      };
    }
    function fe(t, e) {
      return {convert:function(i) {
        if (1e3 === i) {
          return t.REPEAT;
        }
        if (1001 === i) {
          return t.CLAMP_TO_EDGE;
        }
        if (1002 === i) {
          return t.MIRRORED_REPEAT;
        }
        if (1003 === i) {
          return t.NEAREST;
        }
        if (1004 === i) {
          return t.NEAREST_MIPMAP_NEAREST;
        }
        if (1005 === i) {
          return t.NEAREST_MIPMAP_LINEAR;
        }
        if (1006 === i) {
          return t.LINEAR;
        }
        if (1007 === i) {
          return t.LINEAR_MIPMAP_NEAREST;
        }
        if (1008 === i) {
          return t.LINEAR_MIPMAP_LINEAR;
        }
        if (1009 === i) {
          return t.UNSIGNED_BYTE;
        }
        if (1017 === i) {
          return t.UNSIGNED_SHORT_4_4_4_4;
        }
        if (1018 === i) {
          return t.UNSIGNED_SHORT_5_5_5_1;
        }
        if (1019 === i) {
          return t.UNSIGNED_SHORT_5_6_5;
        }
        if (1010 === i) {
          return t.BYTE;
        }
        if (1011 === i) {
          return t.SHORT;
        }
        if (1012 === i) {
          return t.UNSIGNED_SHORT;
        }
        if (1013 === i) {
          return t.INT;
        }
        if (1014 === i) {
          return t.UNSIGNED_INT;
        }
        if (1015 === i) {
          return t.FLOAT;
        }
        if (1016 === i) {
          var n = e.get("OES_texture_half_float");
          if (null !== n) {
            return n.HALF_FLOAT_OES;
          }
        }
        if (1021 === i) {
          return t.ALPHA;
        }
        if (1022 === i) {
          return t.RGB;
        }
        if (1023 === i) {
          return t.RGBA;
        }
        if (1024 === i) {
          return t.LUMINANCE;
        }
        if (1025 === i) {
          return t.LUMINANCE_ALPHA;
        }
        if (1026 === i) {
          return t.DEPTH_COMPONENT;
        }
        if (1027 === i) {
          return t.DEPTH_STENCIL;
        }
        if (100 === i) {
          return t.FUNC_ADD;
        }
        if (101 === i) {
          return t.FUNC_SUBTRACT;
        }
        if (102 === i) {
          return t.FUNC_REVERSE_SUBTRACT;
        }
        if (200 === i) {
          return t.ZERO;
        }
        if (201 === i) {
          return t.ONE;
        }
        if (202 === i) {
          return t.SRC_COLOR;
        }
        if (203 === i) {
          return t.ONE_MINUS_SRC_COLOR;
        }
        if (204 === i) {
          return t.SRC_ALPHA;
        }
        if (205 === i) {
          return t.ONE_MINUS_SRC_ALPHA;
        }
        if (206 === i) {
          return t.DST_ALPHA;
        }
        if (207 === i) {
          return t.ONE_MINUS_DST_ALPHA;
        }
        if (208 === i) {
          return t.DST_COLOR;
        }
        if (209 === i) {
          return t.ONE_MINUS_DST_COLOR;
        }
        if (210 === i) {
          return t.SRC_ALPHA_SATURATE;
        }
        if ((2001 === i || 2002 === i || 2003 === i || 2004 === i) && null !== (n = e.get("WEBGL_compressed_texture_s3tc"))) {
          if (2001 === i) {
            return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
          }
          if (2002 === i) {
            return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          }
          if (2003 === i) {
            return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          }
          if (2004 === i) {
            return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
          }
        }
        if ((2100 === i || 2101 === i || 2102 === i || 2103 === i) && null !== (n = e.get("WEBGL_compressed_texture_pvrtc"))) {
          if (2100 === i) {
            return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          }
          if (2101 === i) {
            return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          }
          if (2102 === i) {
            return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          }
          if (2103 === i) {
            return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
          }
        }
        if (2151 === i && null !== (n = e.get("WEBGL_compressed_texture_etc1"))) {
          return n.COMPRESSED_RGB_ETC1_WEBGL;
        }
        if ((103 === i || 104 === i) && null !== (n = e.get("EXT_blend_minmax"))) {
          if (103 === i) {
            return n.MIN_EXT;
          }
          if (104 === i) {
            return n.MAX_EXT;
          }
        }
        return 1020 === i && null !== (n = e.get("WEBGL_depth_texture")) ? n.UNSIGNED_INT_24_8_WEBGL : 0;
      }};
    }
    function me(t, e) {
      this.name = "", this.color = new G(t), this.density = void 0 !== e ? e : 25e-5;
    }
    function ge(t, e, i) {
      this.name = "", this.color = new G(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== i ? i : 1e3;
    }
    function ve() {
      at.call(this), this.type = "Scene", this.overrideMaterial = this.fog = this.background = null, this.autoUpdate = !0;
    }
    function ye(t) {
      $.call(this), this.type = "SpriteMaterial", this.color = new G(16777215), this.map = null, this.rotation = 0, this.lights = this.fog = !1, this.setValues(t);
    }
    function xe(t) {
      at.call(this), this.type = "Sprite", this.material = void 0 !== t ? t : new ye;
    }
    function be() {
      at.call(this), this.type = "Group";
    }
    function _e(t, e, i, n, r) {
      lt.call(this), this.type = "TorusGeometry", this.parameters = {radius:t, tube:e, radialSegments:i, tubularSegments:n, arc:r}, this.fromBufferGeometry(new we(t, e, i, n, r)), this.mergeVertices();
    }
    function we(t, e, i, n, r) {
      wt.call(this), this.type = "TorusBufferGeometry", this.parameters = {radius:t, tube:e, radialSegments:i, tubularSegments:n, arc:r}, t = t || 1, e = e || .4, i = Math.floor(i) || 8, n = Math.floor(n) || 6, r = r || 2 * Math.PI;
      var s, o, c = [], l = [], h = [], u = [], d = new a, p = new a, f = new a;
      for (s = 0; s <= i; s++) {
        for (o = 0; o <= n; o++) {
          var m = o / n * r, g = s / i * Math.PI * 2;
          p.x = (t + e * Math.cos(g)) * Math.cos(m), p.y = (t + e * Math.cos(g)) * Math.sin(m), p.z = e * Math.sin(g), l.push(p.x, p.y, p.z), d.x = t * Math.cos(m), d.y = t * Math.sin(m), f.subVectors(p, d).normalize(), h.push(f.x, f.y, f.z), u.push(o / n), u.push(s / i);
        }
      }
      for (s = 1; s <= i; s++) {
        for (o = 1; o <= n; o++) {
          t = (n + 1) * (s - 1) + o - 1, e = (n + 1) * (s - 1) + o, r = (n + 1) * s + o, c.push((n + 1) * s + o - 1, t, r), c.push(t, e, r);
        }
      }
      this.setIndex(c), this.addAttribute("position", new yt(l, 3)), this.addAttribute("normal", new yt(h, 3)), this.addAttribute("uv", new yt(u, 2));
    }
    function Me(t, e, i, n, r, a, s) {
      lt.call(this), this.type = "SphereGeometry", this.parameters = {radius:t, widthSegments:e, heightSegments:i, phiStart:n, phiLength:r, thetaStart:a, thetaLength:s}, this.fromBufferGeometry(new Ee(t, e, i, n, r, a, s)), this.mergeVertices();
    }
    function Ee(t, e, i, n, r, s, o) {
      wt.call(this), this.type = "SphereBufferGeometry", this.parameters = {radius:t, widthSegments:e, heightSegments:i, phiStart:n, phiLength:r, thetaStart:s, thetaLength:o}, t = t || 1, e = Math.max(3, Math.floor(e) || 8), i = Math.max(2, Math.floor(i) || 6), n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI;
      var c, l, h = (s = void 0 !== s ? s : 0) + (o = void 0 !== o ? o : Math.PI), u = 0, d = [], p = new a, f = new a, m = [], g = [], v = [], y = [];
      for (l = 0; l <= i; l++) {
        var x = [], b = l / i;
        for (c = 0; c <= e; c++) {
          var _ = c / e;
          p.x = -t * Math.cos(n + _ * r) * Math.sin(s + b * o), p.y = t * Math.cos(s + b * o), p.z = t * Math.sin(n + _ * r) * Math.sin(s + b * o), g.push(p.x, p.y, p.z), f.set(p.x, p.y, p.z).normalize(), v.push(f.x, f.y, f.z), y.push(_, 1 - b), x.push(u++);
        }
        d.push(x);
      }
      for (l = 0; l < i; l++) {
        for (c = 0; c < e; c++) {
          t = d[l][c + 1], n = d[l][c], r = d[l + 1][c], o = d[l + 1][c + 1], (0 !== l || 0 < s) && m.push(t, n, o), (l !== i - 1 || h < Math.PI) && m.push(n, r, o);
        }
      }
      this.setIndex(m), this.addAttribute("position", new yt(g, 3)), this.addAttribute("normal", new yt(v, 3)), this.addAttribute("uv", new yt(y, 2));
    }
    function Te(t, e, i, n, r, a, s, o) {
      lt.call(this), this.type = "CylinderGeometry", this.parameters = {radiusTop:t, radiusBottom:e, height:i, radialSegments:n, heightSegments:r, openEnded:a, thetaStart:s, thetaLength:o}, this.fromBufferGeometry(new Se(t, e, i, n, r, a, s, o)), this.mergeVertices();
    }
    function Se(t, e, n, r, s, o, c, l) {
      function h(n) {
        var s, o = new i, h = new a, v = 0, b = !0 === n ? t : e, _ = !0 === n ? 1 : -1, w = g;
        for (s = 1; s <= r; s++) {
          p.push(0, y * _, 0), f.push(0, _, 0), m.push(.5, .5), g++;
        }
        var M = g;
        for (s = 0; s <= r; s++) {
          var E = s / r * l + c, T = Math.cos(E), E = Math.sin(E);
          h.x = b * E, h.y = y * _, h.z = b * T, p.push(h.x, h.y, h.z), f.push(0, _, 0), o.x = .5 * T + .5, o.y = .5 * E * _ + .5, m.push(o.x, o.y), g++;
        }
        for (s = 0; s < r; s++) {
          o = w + s, h = M + s, !0 === n ? d.push(h, h + 1, o) : d.push(h + 1, h, o), v += 3;
        }
        u.addGroup(x, v, !0 === n ? 1 : 2), x += v;
      }
      wt.call(this), this.type = "CylinderBufferGeometry", this.parameters = {radiusTop:t, radiusBottom:e, height:n, radialSegments:r, heightSegments:s, openEnded:o, thetaStart:c, thetaLength:l};
      var u = this;
      t = void 0 !== t ? t : 1, e = void 0 !== e ? e : 1, n = n || 1, r = Math.floor(r) || 8, s = Math.floor(s) || 1, o = void 0 !== o && o, c = void 0 !== c ? c : 0, l = void 0 !== l ? l : 2 * Math.PI;
      var d = [], p = [], f = [], m = [], g = 0, v = [], y = n / 2, x = 0;
      !function() {
        var i, o, h = new a, b = new a, _ = 0, w = (e - t) / n;
        for (o = 0; o <= s; o++) {
          var M = [], E = o / s, T = E * (e - t) + t;
          for (i = 0; i <= r; i++) {
            var S = i / r, A = S * l + c, C = Math.sin(A), A = Math.cos(A);
            b.x = T * C, b.y = -E * n + y, b.z = T * A, p.push(b.x, b.y, b.z), h.set(C, w, A).normalize(), f.push(h.x, h.y, h.z), m.push(S, 1 - E), M.push(g++);
          }
          v.push(M);
        }
        for (i = 0; i < r; i++) {
          for (o = 0; o < s; o++) {
            h = v[o + 1][i], b = v[o + 1][i + 1], w = v[o][i + 1], d.push(v[o][i], h, w), d.push(h, b, w), _ += 6;
          }
        }
        u.addGroup(x, _, 0), x += _;
      }(), !1 === o && (0 < t && h(!0), 0 < e && h(!1)), this.setIndex(d), this.addAttribute("position", new yt(p, 3)), this.addAttribute("normal", new yt(f, 3)), this.addAttribute("uv", new yt(m, 2));
    }
    function Ae(t) {
      Ct.call(this, t), this.type = "RawShaderMaterial";
    }
    function Ce(t) {
      $.call(this), this.defines = {STANDARD:""}, this.type = "MeshStandardMaterial", this.color = new G(16777215), this.metalness = this.roughness = .5, this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new G(0), this.emissiveIntensity = 1, this.bumpMap = this.emissiveMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new i(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias =
      0, this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(t);
    }
    function Le(t) {
      $.call(this), this.type = "MeshPhongMaterial", this.color = new G(16777215), this.specular = new G(1118481), this.shininess = 30, this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new G(0), this.emissiveIntensity = 1, this.bumpMap = this.emissiveMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new i(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.envMap =
      this.alphaMap = this.specularMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(t);
    }
    function Pe(t) {
      $.call(this), this.type = "MeshLambertMaterial", this.color = new G(16777215), this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new G(0), this.emissiveIntensity = 1, this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.morphNormals =
      this.morphTargets = this.skinning = !1, this.setValues(t);
    }
    function ke(t) {
      this.manager = void 0 !== t ? t : gi;
    }
    function Re(t) {
      this.manager = void 0 !== t ? t : gi;
    }
    function De(t) {
      this.manager = void 0 !== t ? t : gi;
    }
    function Ie(t) {
      this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new i(512, 512), this.map = null, this.matrix = new n;
    }
    function Ne() {
      Ie.call(this, new ot(-5, 5, 5, -5, .5, 500));
    }
    function Ue(t, e) {
      at.call(this), this.type = "Light", this.color = new G(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0;
    }
    function Fe(t, e) {
      Ue.call(this, t, e), this.type = "DirectionalLight", this.position.copy(at.DefaultUp), this.updateMatrix(), this.target = new at, this.shadow = new Ne;
    }
    function Oe(t, e) {
      Ue.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0;
    }
    function Be(t, e) {
      "string" == typeof t && (t = e), this.value = t;
    }
    function ze() {
      wt.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0;
    }
    function He(t, e, i, n) {
      this.uuid = Ze.generateUUID(), this.data = t, this.itemSize = e, this.offset = i, this.normalized = !0 === n;
    }
    function Ve(t, e) {
      this.uuid = Ze.generateUUID(), this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = {offset:0, count:-1}, this.onUploadCallback = function() {
      }, this.version = 0;
    }
    function Ge(t, e, i) {
      Ve.call(this, t, e), this.meshPerAttribute = i || 1;
    }
    function je(t, e, i) {
      ht.call(this, t, e), this.meshPerAttribute = i || 1;
    }
    function qe(t, e, i, n) {
      this.ray = new Lt(t, e), this.near = i || 0, this.far = n || 1 / 0, this.params = {Mesh:{}, Line:{}, LOD:{}, Points:{threshold:1}, Sprite:{}}, Object.defineProperties(this.params, {PointCloud:{get:function() {
        return this.Points;
      }}});
    }
    function We(t, e) {
      return t.distance - e.distance;
    }
    function Xe(t, e, i, n) {
      if (!1 !== t.visible && (t.raycast(e, i), !0 === n)) {
        n = 0;
        for (var r = (t = t.children).length; n < r; n++) {
          Xe(t[n], e, i, !0);
        }
      }
    }
    function $e(t, e, i) {
      return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== i ? i : 0, this;
    }
    function Ye(t, e, i) {
      return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== i ? i : 0, this;
    }
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(t) {
      return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
    }), void 0 === Math.sign && (Math.sign = function(t) {
      return 0 > t ? -1 : 0 < t ? 1 : +t;
    }), !1 == "name" in Function.prototype && Object.defineProperty(Function.prototype, "name", {get:function() {
      return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
    }}), void 0 === Object.assign && (Object.assign = function(t) {
      if (void 0 === t || null === t) {
        throw new TypeError("Cannot convert undefined or null to object");
      }
      for (var e = Object(t), i = 1; i < arguments.length; i++) {
        var n = arguments[i];
        if (void 0 !== n && null !== n) {
          for (var r in n) {
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
        }
      }
      return e;
    }), Object.assign(e.prototype, {addEventListener:function(t, e) {
      void 0 === this._listeners && (this._listeners = {});
      var i = this._listeners;
      void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e);
    }, hasEventListener:function(t, e) {
      if (void 0 === this._listeners) {
        return !1;
      }
      var i = this._listeners;
      return void 0 !== i[t] && -1 !== i[t].indexOf(e);
    }, removeEventListener:function(t, e) {
      void 0 !== this._listeners && void 0 !== (t = this._listeners[t]) && -1 !== (e = t.indexOf(e)) && t.splice(e, 1);
    }, dispatchEvent:function(t) {
      if (void 0 !== this._listeners) {
        var e = this._listeners[t.type];
        if (void 0 !== e) {
          t.target = this;
          for (var i = 0, n = (e = e.slice(0)).length; i < n; i++) {
            e[i].call(this, t);
          }
        }
      }
    }});
    var Ze = {DEG2RAD:Math.PI / 180, RAD2DEG:180 / Math.PI, generateUUID:function() {
      for (var t = [], e = 0; 256 > e; e++) {
        t[e] = (16 > e ? "0" : "") + e.toString(16).toUpperCase();
      }
      return function() {
        var e = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0, r = 4294967295 * Math.random() | 0;
        return t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + "-" + t[255 & i] + t[i >> 8 & 255] + "-" + t[i >> 16 & 15 | 64] + t[i >> 24 & 255] + "-" + t[63 & n | 128] + t[n >> 8 & 255] + "-" + t[n >> 16 & 255] + t[n >> 24 & 255] + t[255 & r] + t[r >> 8 & 255] + t[r >> 16 & 255] + t[r >> 24 & 255];
      };
    }(), clamp:function(t, e, i) {
      return Math.max(e, Math.min(i, t));
    }, euclideanModulo:function(t, e) {
      return (t % e + e) % e;
    }, mapLinear:function(t, e, i, n, r) {
      return n + (t - e) * (r - n) / (i - e);
    }, lerp:function(t, e, i) {
      return (1 - i) * t + i * e;
    }, smoothstep:function(t, e, i) {
      return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t);
    }, smootherstep:function(t, e, i) {
      return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10);
    }, randInt:function(t, e) {
      return t + Math.floor(Math.random() * (e - t + 1));
    }, randFloat:function(t, e) {
      return t + Math.random() * (e - t);
    }, randFloatSpread:function(t) {
      return t * (.5 - Math.random());
    }, degToRad:function(t) {
      return t * Ze.DEG2RAD;
    }, radToDeg:function(t) {
      return t * Ze.RAD2DEG;
    }, isPowerOfTwo:function(t) {
      return 0 == (t & t - 1) && 0 !== t;
    }, ceilPowerOfTwo:function(t) {
      return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
    }, floorPowerOfTwo:function(t) {
      return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
    }};
    Object.defineProperties(i.prototype, {width:{get:function() {
      return this.x;
    }, set:function(t) {
      this.x = t;
    }}, height:{get:function() {
      return this.y;
    }, set:function(t) {
      this.y = t;
    }}}), Object.assign(i.prototype, {isVector2:!0, set:function(t, e) {
      return this.x = t, this.y = e, this;
    }, setScalar:function(t) {
      return this.y = this.x = t, this;
    }, setX:function(t) {
      return this.x = t, this;
    }, setY:function(t) {
      return this.y = t, this;
    }, setComponent:function(t, e) {
      switch(t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw Error("index is out of range: " + t);
      }
      return this;
    }, getComponent:function(t) {
      switch(t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw Error("index is out of range: " + t);
      }
    }, clone:function() {
      return new this.constructor(this.x, this.y);
    }, copy:function(t) {
      return this.x = t.x, this.y = t.y, this;
    }, add:function(t, e) {
      return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this);
    }, addScalar:function(t) {
      return this.x += t, this.y += t, this;
    }, addVectors:function(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this;
    }, addScaledVector:function(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this;
    }, sub:function(t, e) {
      return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this);
    }, subScalar:function(t) {
      return this.x -= t, this.y -= t, this;
    }, subVectors:function(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this;
    }, multiply:function(t) {
      return this.x *= t.x, this.y *= t.y, this;
    }, multiplyScalar:function(t) {
      return this.x *= t, this.y *= t, this;
    }, divide:function(t) {
      return this.x /= t.x, this.y /= t.y, this;
    }, divideScalar:function(t) {
      return this.multiplyScalar(1 / t);
    }, applyMatrix3:function(t) {
      var e = this.x, i = this.y;
      return t = t.elements, this.x = t[0] * e + t[3] * i + t[6], this.y = t[1] * e + t[4] * i + t[7], this;
    }, min:function(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
    }, max:function(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
    }, clamp:function(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
    }, clampScalar:function() {
      var t = new i, e = new i;
      return function(i, n) {
        return t.set(i, i), e.set(n, n), this.clamp(t, e);
      };
    }(), clampLength:function(t, e) {
      var i = this.length();
      return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)));
    }, floor:function() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }, ceil:function() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }, round:function() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }, roundToZero:function() {
      return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this;
    }, negate:function() {
      return this.x = -this.x, this.y = -this.y, this;
    }, dot:function(t) {
      return this.x * t.x + this.y * t.y;
    }, lengthSq:function() {
      return this.x * this.x + this.y * this.y;
    }, length:function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }, manhattanLength:function() {
      return Math.abs(this.x) + Math.abs(this.y);
    }, normalize:function() {
      return this.divideScalar(this.length() || 1);
    }, angle:function() {
      var t = Math.atan2(this.y, this.x);
      return 0 > t && (t += 2 * Math.PI), t;
    }, distanceTo:function(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }, distanceToSquared:function(t) {
      var e = this.x - t.x;
      return t = this.y - t.y, e * e + t * t;
    }, manhattanDistanceTo:function(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
    }, setLength:function(t) {
      return this.normalize().multiplyScalar(t);
    }, lerp:function(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
    }, lerpVectors:function(t, e, i) {
      return this.subVectors(e, t).multiplyScalar(i).add(t);
    }, equals:function(t) {
      return t.x === this.x && t.y === this.y;
    }, fromArray:function(t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this;
    }, toArray:function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t;
    }, fromBufferAttribute:function(t, e, i) {
      return this.x = t.getX(e), this.y = t.getY(e), this;
    }, rotateAround:function(t, e) {
      var i = Math.cos(e);
      e = Math.sin(e);
      var n = this.x - t.x, r = this.y - t.y;
      return this.x = n * i - r * e + t.x, this.y = n * e + r * i + t.y, this;
    }}), Object.assign(n.prototype, {isMatrix4:!0, set:function(t, e, i, n, r, a, s, o, c, l, h, u, d, p, f, m) {
      var g = this.elements;
      return g[0] = t, g[4] = e, g[8] = i, g[12] = n, g[1] = r, g[5] = a, g[9] = s, g[13] = o, g[2] = c, g[6] = l, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this;
    }, identity:function() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }, clone:function() {
      return (new n).fromArray(this.elements);
    }, copy:function(t) {
      var e = this.elements;
      return t = t.elements, e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], this;
    }, copyPosition:function(t) {
      var e = this.elements;
      return t = t.elements, e[12] = t[12], e[13] = t[13], e[14] = t[14], this;
    }, extractBasis:function(t, e, i) {
      return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
    }, makeBasis:function(t, e, i) {
      return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this;
    }, extractRotation:function() {
      var t = new a;
      return function(e) {
        var i = this.elements, n = e.elements, r = 1 / t.setFromMatrixColumn(e, 0).length(), a = 1 / t.setFromMatrixColumn(e, 1).length();
        return e = 1 / t.setFromMatrixColumn(e, 2).length(), i[0] = n[0] * r, i[1] = n[1] * r, i[2] = n[2] * r, i[4] = n[4] * a, i[5] = n[5] * a, i[6] = n[6] * a, i[8] = n[8] * e, i[9] = n[9] * e, i[10] = n[10] * e, this;
      };
    }(), makeRotationFromEuler:function(t) {
      var e = this.elements, i = t.x, n = t.y, r = t.z, a = Math.cos(i), i = Math.sin(i), s = Math.cos(n), n = Math.sin(n), o = Math.cos(r), r = Math.sin(r);
      if ("XYZ" === t.order) {
        var c = a * o, l = a * r, h = i * o;
        t = i * r, e[0] = s * o, e[4] = -s * r, e[8] = n, e[1] = l + h * n, e[5] = c - t * n, e[9] = -i * s, e[2] = t - c * n, e[6] = h + l * n, e[10] = a * s;
      } else {
        "YXZ" === t.order ? (c = s * o, l = s * r, h = n * o, t = n * r, e[0] = c + t * i, e[4] = h * i - l, e[8] = a * n, e[1] = a * r, e[5] = a * o, e[9] = -i, e[2] = l * i - h, e[6] = t + c * i, e[10] = a * s) : "ZXY" === t.order ? (c = s * o, l = s * r, h = n * o, t = n * r, e[0] = c - t * i, e[4] = -a * r, e[8] = h + l * i, e[1] = l + h * i, e[5] = a * o, e[9] = t - c * i, e[2] = -a * n, e[6] = i, e[10] = a * s) : "ZYX" === t.order ? (c = a * o, l = a * r, h = i * o, t = i * r, e[0] = s * o,
        e[4] = h * n - l, e[8] = c * n + t, e[1] = s * r, e[5] = t * n + c, e[9] = l * n - h, e[2] = -n, e[6] = i * s, e[10] = a * s) : "YZX" === t.order ? (c = a * s, l = a * n, h = i * s, t = i * n, e[0] = s * o, e[4] = t - c * r, e[8] = h * r + l, e[1] = r, e[5] = a * o, e[9] = -i * o, e[2] = -n * o, e[6] = l * r + h, e[10] = c - t * r) : "XZY" === t.order && (c = a * s, l = a * n, h = i * s, t = i * n, e[0] = s * o, e[4] = -r, e[8] = n * o, e[1] = c * r + t, e[5] = a * o, e[9] = l * r - h, e[2] =
        h * r - l, e[6] = i * o, e[10] = t * r + c);
      }
      return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
    }, makeRotationFromQuaternion:function(t) {
      var e = this.elements, i = t._x, n = t._y, r = t._z, a = t._w, s = r + r;
      t = i * (l = i + i);
      var o = i * (h = n + n), i = i * s, c = n * h, n = n * s, r = r * s, l = a * l, h = a * h, a = a * s;
      return e[0] = 1 - (c + r), e[4] = o - a, e[8] = i + h, e[1] = o + a, e[5] = 1 - (t + r), e[9] = n - l, e[2] = i - h, e[6] = n + l, e[10] = 1 - (t + c), e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
    }, lookAt:function() {
      var t = new a, e = new a, i = new a;
      return function(n, r, a) {
        var s = this.elements;
        return i.subVectors(n, r), 0 === i.lengthSq() && (i.z = 1), i.normalize(), t.crossVectors(a, i), 0 === t.lengthSq() && (1 === Math.abs(a.z) ? i.x += 1e-4 : i.z += 1e-4, i.normalize(), t.crossVectors(a, i)), t.normalize(), e.crossVectors(i, t), s[0] = t.x, s[4] = e.x, s[8] = i.x, s[1] = t.y, s[5] = e.y, s[9] = i.y, s[2] = t.z, s[6] = e.z, s[10] = i.z, this;
      };
    }(), multiply:function(t, e) {
      return void 0 !== e ? this.multiplyMatrices(t, e) : this.multiplyMatrices(this, t);
    }, premultiply:function(t) {
      return this.multiplyMatrices(t, this);
    }, multiplyMatrices:function(t, e) {
      var i = t.elements, n = e.elements;
      e = this.elements, t = i[0];
      var r = i[4], a = i[8], s = i[12], o = i[1], c = i[5], l = i[9], h = i[13], u = i[2], d = i[6], p = i[10], f = i[14], m = i[3], g = i[7], v = i[11], i = i[15], y = n[0], x = n[4], b = n[8], _ = n[12], w = n[1], M = n[5], E = n[9], T = n[13], S = n[2], A = n[6], C = n[10], L = n[14], P = n[3], k = n[7], R = n[11], n = n[15];
      return e[0] = t * y + r * w + a * S + s * P, e[4] = t * x + r * M + a * A + s * k, e[8] = t * b + r * E + a * C + s * R, e[12] = t * _ + r * T + a * L + s * n, e[1] = o * y + c * w + l * S + h * P, e[5] = o * x + c * M + l * A + h * k, e[9] = o * b + c * E + l * C + h * R, e[13] = o * _ + c * T + l * L + h * n, e[2] = u * y + d * w + p * S + f * P, e[6] = u * x + d * M + p * A + f * k, e[10] = u * b + d * E + p * C + f * R, e[14] = u * _ + d * T + p * L + f * n, e[3] = m * y + g * w + v * S +
      i * P, e[7] = m * x + g * M + v * A + i * k, e[11] = m * b + g * E + v * C + i * R, e[15] = m * _ + g * T + v * L + i * n, this;
    }, multiplyScalar:function(t) {
      var e = this.elements;
      return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
    }, applyToBufferAttribute:function() {
      var t = new a;
      return function(e) {
        for (var i = 0, n = e.count; i < n; i++) {
          t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.applyMatrix4(this), e.setXYZ(i, t.x, t.y, t.z);
        }
        return e;
      };
    }(), determinant:function() {
      var t = this.elements, e = t[0], i = t[4], n = t[8], r = t[12], a = t[1], s = t[5], o = t[9], c = t[13], l = t[2], h = t[6], u = t[10], d = t[14];
      return t[3] * (+r * o * h - n * c * h - r * s * u + i * c * u + n * s * d - i * o * d) + t[7] * (+e * o * d - e * c * u + r * a * u - n * a * d + n * c * l - r * o * l) + t[11] * (+e * c * h - e * s * d - r * a * h + i * a * d + r * s * l - i * c * l) + t[15] * (-n * s * l - e * o * h + e * s * u + n * a * h - i * a * u + i * o * l);
    }, transpose:function() {
      var t = this.elements, e = t[1];
      return t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
    }, setPosition:function(t) {
      var e = this.elements;
      return e[12] = t.x, e[13] = t.y, e[14] = t.z, this;
    }, getInverse:function(t, e) {
      var i = this.elements, n = t.elements;
      t = n[0];
      var r = n[1], a = n[2], s = n[3], o = n[4], c = n[5], l = n[6], h = n[7], u = n[8], d = n[9], p = n[10], f = n[11], m = n[12], g = n[13], v = n[14], y = d * v * h - g * p * h + g * l * f - c * v * f - d * l * (n = n[15]) + c * p * n, x = m * p * h - u * v * h - m * l * f + o * v * f + u * l * n - o * p * n, b = u * g * h - m * d * h + m * c * f - o * g * f - u * c * n + o * d * n, _ = m * d * l - u * g * l - m * c * p + o * g * p + u * c * v - o * d * v, w = t * y + r * x + a * b + s * _;
      if (0 === w) {
        if (!0 === e) {
          throw Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");
        }
        return this.identity();
      }
      return e = 1 / w, i[0] = y * e, i[1] = (g * p * s - d * v * s - g * a * f + r * v * f + d * a * n - r * p * n) * e, i[2] = (c * v * s - g * l * s + g * a * h - r * v * h - c * a * n + r * l * n) * e, i[3] = (d * l * s - c * p * s - d * a * h + r * p * h + c * a * f - r * l * f) * e, i[4] = x * e, i[5] = (u * v * s - m * p * s + m * a * f - t * v * f - u * a * n + t * p * n) * e, i[6] = (m * l * s - o * v * s - m * a * h + t * v * h + o * a * n - t * l * n) * e, i[7] = (o * p * s - u * l * s +
      u * a * h - t * p * h - o * a * f + t * l * f) * e, i[8] = b * e, i[9] = (m * d * s - u * g * s - m * r * f + t * g * f + u * r * n - t * d * n) * e, i[10] = (o * g * s - m * c * s + m * r * h - t * g * h - o * r * n + t * c * n) * e, i[11] = (u * c * s - o * d * s - u * r * h + t * d * h + o * r * f - t * c * f) * e, i[12] = _ * e, i[13] = (u * g * a - m * d * a + m * r * p - t * g * p - u * r * v + t * d * v) * e, i[14] = (m * c * a - o * g * a - m * r * l + t * g * l + o * r * v - t * c *
      v) * e, i[15] = (o * d * a - u * c * a + u * r * l - t * d * l - o * r * p + t * c * p) * e, this;
    }, scale:function(t) {
      var e = this.elements, i = t.x, n = t.y;
      return t = t.z, e[0] *= i, e[4] *= n, e[8] *= t, e[1] *= i, e[5] *= n, e[9] *= t, e[2] *= i, e[6] *= n, e[10] *= t, e[3] *= i, e[7] *= n, e[11] *= t, this;
    }, getMaxScaleOnAxis:function() {
      var t = this.elements;
      return Math.sqrt(Math.max(t[0] * t[0] + t[1] * t[1] + t[2] * t[2], t[4] * t[4] + t[5] * t[5] + t[6] * t[6], t[8] * t[8] + t[9] * t[9] + t[10] * t[10]));
    }, makeTranslation:function(t, e, i) {
      return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this;
    }, makeRotationX:function(t) {
      var e = Math.cos(t);
      return t = Math.sin(t), this.set(1, 0, 0, 0, 0, e, -t, 0, 0, t, e, 0, 0, 0, 0, 1), this;
    }, makeRotationY:function(t) {
      var e = Math.cos(t);
      return t = Math.sin(t), this.set(e, 0, t, 0, 0, 1, 0, 0, -t, 0, e, 0, 0, 0, 0, 1), this;
    }, makeRotationZ:function(t) {
      var e = Math.cos(t);
      return t = Math.sin(t), this.set(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }, makeRotationAxis:function(t, e) {
      var i = Math.cos(e);
      e = Math.sin(e);
      var n = 1 - i, r = t.x, a = t.y;
      t = t.z;
      var s = n * r, o = n * a;
      return this.set(s * r + i, s * a - e * t, s * t + e * a, 0, s * a + e * t, o * a + i, o * t - e * r, 0, s * t - e * a, o * t + e * r, n * t * t + i, 0, 0, 0, 0, 1), this;
    }, makeScale:function(t, e, i) {
      return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
    }, makeShear:function(t, e, i) {
      return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1), this;
    }, compose:function(t, e, i) {
      return this.makeRotationFromQuaternion(e), this.scale(i), this.setPosition(t), this;
    }, decompose:function() {
      var t = new a, e = new n;
      return function(i, n, r) {
        var a = this.elements, s = t.set(a[0], a[1], a[2]).length(), o = t.set(a[4], a[5], a[6]).length(), c = t.set(a[8], a[9], a[10]).length();
        0 > this.determinant() && (s = -s), i.x = a[12], i.y = a[13], i.z = a[14], e.copy(this), i = 1 / s;
        var a = 1 / o, l = 1 / c;
        return e.elements[0] *= i, e.elements[1] *= i, e.elements[2] *= i, e.elements[4] *= a, e.elements[5] *= a, e.elements[6] *= a, e.elements[8] *= l, e.elements[9] *= l, e.elements[10] *= l, n.setFromRotationMatrix(e), r.x = s, r.y = o, r.z = c, this;
      };
    }(), makePerspective:function(t, e, i, n, r, a) {
      var s = this.elements;
      return s[0] = 2 * r / (e - t), s[4] = 0, s[8] = (e + t) / (e - t), s[12] = 0, s[1] = 0, s[5] = 2 * r / (i - n), s[9] = (i + n) / (i - n), s[13] = 0, s[2] = 0, s[6] = 0, s[10] = -(a + r) / (a - r), s[14] = -2 * a * r / (a - r), s[3] = 0, s[7] = 0, s[11] = -1, s[15] = 0, this;
    }, makeOrthographic:function(t, e, i, n, r, a) {
      var s = this.elements, o = 1 / (e - t), c = 1 / (i - n), l = 1 / (a - r);
      return s[0] = 2 * o, s[4] = 0, s[8] = 0, s[12] = -(e + t) * o, s[1] = 0, s[5] = 2 * c, s[9] = 0, s[13] = -(i + n) * c, s[2] = 0, s[6] = 0, s[10] = -2 * l, s[14] = -(a + r) * l, s[3] = 0, s[7] = 0, s[11] = 0, s[15] = 1, this;
    }, equals:function(t) {
      var e = this.elements;
      t = t.elements;
      for (var i = 0; 16 > i; i++) {
        if (e[i] !== t[i]) {
          return !1;
        }
      }
      return !0;
    }, fromArray:function(t, e) {
      void 0 === e && (e = 0);
      for (var i = 0; 16 > i; i++) {
        this.elements[i] = t[i + e];
      }
      return this;
    }, toArray:function(t, e) {
      void 0 === t && (t = []), void 0 === e && (e = 0);
      var i = this.elements;
      return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t;
    }}), Object.assign(r, {slerp:function(t, e, i, n) {
      return i.copy(t).slerp(e, n);
    }, slerpFlat:function(t, e, i, n, r, a, s) {
      var o = i[n + 0], c = i[n + 1], l = i[n + 2];
      i = i[n + 3], n = r[a + 0];
      var h = r[a + 1], u = r[a + 2];
      if (r = r[a + 3], i !== r || o !== n || c !== h || l !== u) {
        a = 1 - s;
        var d = o * n + c * h + l * u + i * r, p = 0 <= d ? 1 : -1, f = 1 - d * d;
        f > Number.EPSILON && (f = Math.sqrt(f), d = Math.atan2(f, d * p), a = Math.sin(a * d) / f, s = Math.sin(s * d) / f), o = o * a + n * (p *= s), c = c * a + h * p, l = l * a + u * p, i = i * a + r * p, a === 1 - s && (s = 1 / Math.sqrt(o * o + c * c + l * l + i * i), o *= s, c *= s, l *= s, i *= s);
      }
      t[e] = o, t[e + 1] = c, t[e + 2] = l, t[e + 3] = i;
    }}), Object.defineProperties(r.prototype, {x:{get:function() {
      return this._x;
    }, set:function(t) {
      this._x = t, this.onChangeCallback();
    }}, y:{get:function() {
      return this._y;
    }, set:function(t) {
      this._y = t, this.onChangeCallback();
    }}, z:{get:function() {
      return this._z;
    }, set:function(t) {
      this._z = t, this.onChangeCallback();
    }}, w:{get:function() {
      return this._w;
    }, set:function(t) {
      this._w = t, this.onChangeCallback();
    }}}), Object.assign(r.prototype, {set:function(t, e, i, n) {
      return this._x = t, this._y = e, this._z = i, this._w = n, this.onChangeCallback(), this;
    }, clone:function() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }, copy:function(t) {
      return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this;
    }, setFromEuler:function(t, e) {
      if (!t || !t.isEuler) {
        throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
      }
      var i = t._x, n = t._y, r = t._z;
      t = t.order;
      var a = Math.cos, s = Math.sin, o = a(i / 2), c = a(n / 2), a = a(r / 2), i = s(i / 2), n = s(n / 2), r = s(r / 2);
      return "XYZ" === t ? (this._x = i * c * a + o * n * r, this._y = o * n * a - i * c * r, this._z = o * c * r + i * n * a, this._w = o * c * a - i * n * r) : "YXZ" === t ? (this._x = i * c * a + o * n * r, this._y = o * n * a - i * c * r, this._z = o * c * r - i * n * a, this._w = o * c * a + i * n * r) : "ZXY" === t ? (this._x = i * c * a - o * n * r, this._y = o * n * a + i * c * r, this._z = o * c * r + i * n * a, this._w = o * c * a - i * n * r) : "ZYX" === t ? (this._x = i * c * a - o *
      n * r, this._y = o * n * a + i * c * r, this._z = o * c * r - i * n * a, this._w = o * c * a + i * n * r) : "YZX" === t ? (this._x = i * c * a + o * n * r, this._y = o * n * a + i * c * r, this._z = o * c * r - i * n * a, this._w = o * c * a - i * n * r) : "XZY" === t && (this._x = i * c * a - o * n * r, this._y = o * n * a - i * c * r, this._z = o * c * r + i * n * a, this._w = o * c * a + i * n * r), !1 !== e && this.onChangeCallback(), this;
    }, setFromAxisAngle:function(t, e) {
      e /= 2;
      var i = Math.sin(e);
      return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(e), this.onChangeCallback(), this;
    }, setFromRotationMatrix:function(t) {
      var e = t.elements, i = e[0];
      t = e[4];
      var n = e[8], r = e[1], a = e[5], s = e[9], o = e[2], c = e[6], l = i + a + (e = e[10]);
      return 0 < l ? (i = .5 / Math.sqrt(l + 1), this._w = .25 / i, this._x = (c - s) * i, this._y = (n - o) * i, this._z = (r - t) * i) : i > a && i > e ? (i = 2 * Math.sqrt(1 + i - a - e), this._w = (c - s) / i, this._x = .25 * i, this._y = (t + r) / i, this._z = (n + o) / i) : a > e ? (i = 2 * Math.sqrt(1 + a - i - e), this._w = (n - o) / i, this._x = (t + r) / i, this._y = .25 * i, this._z = (s + c) / i) : (i = 2 * Math.sqrt(1 + e - i - a), this._w = (r - t) / i, this._x = (n + o) / i, this._y =
      (s + c) / i, this._z = .25 * i), this.onChangeCallback(), this;
    }, setFromUnitVectors:function() {
      var t, e = new a;
      return function(i, n) {
        return void 0 === e && (e = new a), 1e-6 > (t = i.dot(n) + 1) ? (t = 0, Math.abs(i.x) > Math.abs(i.z) ? e.set(-i.y, i.x, 0) : e.set(0, -i.z, i.y)) : e.crossVectors(i, n), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize();
      };
    }(), inverse:function() {
      return this.conjugate().normalize();
    }, conjugate:function() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this;
    }, dot:function(t) {
      return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
    }, lengthSq:function() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }, length:function() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }, normalize:function() {
      var t = this.length();
      return 0 === t ? (this._z = this._y = this._x = 0, this._w = 1) : (t = 1 / t, this._x *= t, this._y *= t, this._z *= t, this._w *= t), this.onChangeCallback(), this;
    }, multiply:function(t, e) {
      return void 0 !== e ? this.multiplyQuaternions(t, e) : this.multiplyQuaternions(this, t);
    }, premultiply:function(t) {
      return this.multiplyQuaternions(t, this);
    }, multiplyQuaternions:function(t, e) {
      var i = t._x, n = t._y, r = t._z;
      t = t._w;
      var a = e._x, s = e._y, o = e._z;
      return e = e._w, this._x = i * e + t * a + n * o - r * s, this._y = n * e + t * s + r * a - i * o, this._z = r * e + t * o + i * s - n * a, this._w = t * e - i * a - n * s - r * o, this.onChangeCallback(), this;
    }, slerp:function(t, e) {
      if (0 === e) {
        return this;
      }
      if (1 === e) {
        return this.copy(t);
      }
      var i = this._x, n = this._y, r = this._z, a = this._w;
      if (0 > (o = a * t._w + i * t._x + n * t._y + r * t._z) ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), 1 <= o) {
        return this._w = a, this._x = i, this._y = n, this._z = r, this;
      }
      if (t = Math.sqrt(1 - o * o), .001 > Math.abs(t)) {
        return this._w = .5 * (a + this._w), this._x = .5 * (i + this._x), this._y = .5 * (n + this._y), this._z = .5 * (r + this._z), this;
      }
      var s = Math.atan2(t, o), o = Math.sin((1 - e) * s) / t;
      return e = Math.sin(e * s) / t, this._w = a * o + this._w * e, this._x = i * o + this._x * e, this._y = n * o + this._y * e, this._z = r * o + this._z * e, this.onChangeCallback(), this;
    }, equals:function(t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
    }, fromArray:function(t, e) {
      return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this;
    }, toArray:function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
    }, onChange:function(t) {
      return this.onChangeCallback = t, this;
    }, onChangeCallback:function() {
    }}), Object.assign(a.prototype, {isVector3:!0, set:function(t, e, i) {
      return this.x = t, this.y = e, this.z = i, this;
    }, setScalar:function(t) {
      return this.z = this.y = this.x = t, this;
    }, setX:function(t) {
      return this.x = t, this;
    }, setY:function(t) {
      return this.y = t, this;
    }, setZ:function(t) {
      return this.z = t, this;
    }, setComponent:function(t, e) {
      switch(t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        default:
          throw Error("index is out of range: " + t);
      }
      return this;
    }, getComponent:function(t) {
      switch(t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw Error("index is out of range: " + t);
      }
    }, clone:function() {
      return new this.constructor(this.x, this.y, this.z);
    }, copy:function(t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this;
    }, add:function(t, e) {
      return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this.z += t.z, this);
    }, addScalar:function(t) {
      return this.x += t, this.y += t, this.z += t, this;
    }, addVectors:function(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
    }, addScaledVector:function(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
    }, sub:function(t, e) {
      return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this);
    }, subScalar:function(t) {
      return this.x -= t, this.y -= t, this.z -= t, this;
    }, subVectors:function(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
    }, multiply:function(t, e) {
      return void 0 !== e ? this.multiplyVectors(t, e) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this);
    }, multiplyScalar:function(t) {
      return this.x *= t, this.y *= t, this.z *= t, this;
    }, multiplyVectors:function(t, e) {
      return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
    }, applyEuler:function() {
      var t = new r;
      return function(e) {
        return this.applyQuaternion(t.setFromEuler(e));
      };
    }(), applyAxisAngle:function() {
      var t = new r;
      return function(e, i) {
        return this.applyQuaternion(t.setFromAxisAngle(e, i));
      };
    }(), applyMatrix3:function(t) {
      var e = this.x, i = this.y, n = this.z;
      return t = t.elements, this.x = t[0] * e + t[3] * i + t[6] * n, this.y = t[1] * e + t[4] * i + t[7] * n, this.z = t[2] * e + t[5] * i + t[8] * n, this;
    }, applyMatrix4:function(t) {
      var e = this.x, i = this.y, n = this.z, r = 1 / ((t = t.elements)[3] * e + t[7] * i + t[11] * n + t[15]);
      return this.x = (t[0] * e + t[4] * i + t[8] * n + t[12]) * r, this.y = (t[1] * e + t[5] * i + t[9] * n + t[13]) * r, this.z = (t[2] * e + t[6] * i + t[10] * n + t[14]) * r, this;
    }, applyQuaternion:function(t) {
      var e = this.x, i = this.y, n = this.z, r = t.x, a = t.y, s = t.z, o = (t = t.w) * e + a * n - s * i, c = t * i + s * e - r * n, l = t * n + r * i - a * e, e = -r * e - a * i - s * n;
      return this.x = o * t + e * -r + c * -s - l * -a, this.y = c * t + e * -a + l * -r - o * -s, this.z = l * t + e * -s + o * -a - c * -r, this;
    }, project:function() {
      var t = new n;
      return function(e) {
        return t.multiplyMatrices(e.projectionMatrix, t.getInverse(e.matrixWorld)), this.applyMatrix4(t);
      };
    }(), unproject:function() {
      var t = new n;
      return function(e) {
        return t.multiplyMatrices(e.matrixWorld, t.getInverse(e.projectionMatrix)), this.applyMatrix4(t);
      };
    }(), transformDirection:function(t) {
      var e = this.x, i = this.y, n = this.z;
      return t = t.elements, this.x = t[0] * e + t[4] * i + t[8] * n, this.y = t[1] * e + t[5] * i + t[9] * n, this.z = t[2] * e + t[6] * i + t[10] * n, this.normalize();
    }, divide:function(t) {
      return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
    }, divideScalar:function(t) {
      return this.multiplyScalar(1 / t);
    }, min:function(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
    }, max:function(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
    }, clamp:function(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
    }, clampScalar:function() {
      var t = new a, e = new a;
      return function(i, n) {
        return t.set(i, i, i), e.set(n, n, n), this.clamp(t, e);
      };
    }(), clampLength:function(t, e) {
      var i = this.length();
      return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)));
    }, floor:function() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }, ceil:function() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }, round:function() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }, roundToZero:function() {
      return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z), this;
    }, negate:function() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }, dot:function(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z;
    }, lengthSq:function() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }, length:function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }, manhattanLength:function() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }, normalize:function() {
      return this.divideScalar(this.length() || 1);
    }, setLength:function(t) {
      return this.normalize().multiplyScalar(t);
    }, lerp:function(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
    }, lerpVectors:function(t, e, i) {
      return this.subVectors(e, t).multiplyScalar(i).add(t);
    }, cross:function(t, e) {
      return void 0 !== e ? this.crossVectors(t, e) : this.crossVectors(this, t);
    }, crossVectors:function(t, e) {
      var i = t.x, n = t.y;
      t = t.z;
      var r = e.x, a = e.y;
      return e = e.z, this.x = n * e - t * a, this.y = t * r - i * e, this.z = i * a - n * r, this;
    }, projectOnVector:function(t) {
      var e = t.dot(this) / t.lengthSq();
      return this.copy(t).multiplyScalar(e);
    }, projectOnPlane:function() {
      var t = new a;
      return function(e) {
        return t.copy(this).projectOnVector(e), this.sub(t);
      };
    }(), reflect:function() {
      var t = new a;
      return function(e) {
        return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)));
      };
    }(), angleTo:function(t) {
      return t = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq()), Math.acos(Ze.clamp(t, -1, 1));
    }, distanceTo:function(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }, distanceToSquared:function(t) {
      var e = this.x - t.x, i = this.y - t.y;
      return t = this.z - t.z, e * e + i * i + t * t;
    }, manhattanDistanceTo:function(t) {
      return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
    }, setFromSpherical:function(t) {
      var e = Math.sin(t.phi) * t.radius;
      return this.x = e * Math.sin(t.theta), this.y = Math.cos(t.phi) * t.radius, this.z = e * Math.cos(t.theta), this;
    }, setFromCylindrical:function(t) {
      return this.x = t.radius * Math.sin(t.theta), this.y = t.y, this.z = t.radius * Math.cos(t.theta), this;
    }, setFromMatrixPosition:function(t) {
      return t = t.elements, this.x = t[12], this.y = t[13], this.z = t[14], this;
    }, setFromMatrixScale:function(t) {
      var e = this.setFromMatrixColumn(t, 0).length(), i = this.setFromMatrixColumn(t, 1).length();
      return t = this.setFromMatrixColumn(t, 2).length(), this.x = e, this.y = i, this.z = t, this;
    }, setFromMatrixColumn:function(t, e) {
      return this.fromArray(t.elements, 4 * e);
    }, equals:function(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z;
    }, fromArray:function(t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
    }, toArray:function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
    }, fromBufferAttribute:function(t, e, i) {
      return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
    }}), Object.assign(s.prototype, {isMatrix3:!0, set:function(t, e, i, n, r, a, s, o, c) {
      var l = this.elements;
      return l[0] = t, l[1] = n, l[2] = s, l[3] = e, l[4] = r, l[5] = o, l[6] = i, l[7] = a, l[8] = c, this;
    }, identity:function() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }, clone:function() {
      return (new this.constructor).fromArray(this.elements);
    }, copy:function(t) {
      var e = this.elements;
      return t = t.elements, e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], this;
    }, setFromMatrix4:function(t) {
      return t = t.elements, this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
    }, applyToBufferAttribute:function() {
      var t = new a;
      return function(e) {
        for (var i = 0, n = e.count; i < n; i++) {
          t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.applyMatrix3(this), e.setXYZ(i, t.x, t.y, t.z);
        }
        return e;
      };
    }(), multiply:function(t) {
      return this.multiplyMatrices(this, t);
    }, premultiply:function(t) {
      return this.multiplyMatrices(t, this);
    }, multiplyMatrices:function(t, e) {
      var i = t.elements, n = e.elements;
      e = this.elements, t = i[0];
      var r = i[3], a = i[6], s = i[1], o = i[4], c = i[7], l = i[2], h = i[5], i = i[8], u = n[0], d = n[3], p = n[6], f = n[1], m = n[4], g = n[7], v = n[2], y = n[5], n = n[8];
      return e[0] = t * u + r * f + a * v, e[3] = t * d + r * m + a * y, e[6] = t * p + r * g + a * n, e[1] = s * u + o * f + c * v, e[4] = s * d + o * m + c * y, e[7] = s * p + o * g + c * n, e[2] = l * u + h * f + i * v, e[5] = l * d + h * m + i * y, e[8] = l * p + h * g + i * n, this;
    }, multiplyScalar:function(t) {
      var e = this.elements;
      return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
    }, determinant:function() {
      var t = this.elements, e = t[0], i = t[1], n = t[2], r = t[3], a = t[4], s = t[5], o = t[6], c = t[7];
      return e * a * (t = t[8]) - e * s * c - i * r * t + i * s * o + n * r * c - n * a * o;
    }, getInverse:function(t, e) {
      var i = t.elements;
      t = this.elements;
      var n = i[0], r = i[1], a = i[2], s = i[3], o = i[4], c = i[5], l = i[6], h = i[7], u = (i = i[8]) * o - c * h, d = c * l - i * s, p = h * s - o * l, f = n * u + r * d + a * p;
      if (0 === f) {
        if (!0 === e) {
          throw Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");
        }
        return this.identity();
      }
      return e = 1 / f, t[0] = u * e, t[1] = (a * h - i * r) * e, t[2] = (c * r - a * o) * e, t[3] = d * e, t[4] = (i * n - a * l) * e, t[5] = (a * s - c * n) * e, t[6] = p * e, t[7] = (r * l - h * n) * e, t[8] = (o * n - r * s) * e, this;
    }, transpose:function() {
      var t = this.elements, e = t[1];
      return t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
    }, getNormalMatrix:function(t) {
      return this.setFromMatrix4(t).getInverse(this).transpose();
    }, transposeIntoArray:function(t) {
      var e = this.elements;
      return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
    }, setUvTransform:function(t, e, i, n, r, a, s) {
      var o = Math.cos(r);
      r = Math.sin(r), this.set(i * o, i * r, -i * (o * a + r * s) + a + t, -n * r, n * o, -n * (-r * a + o * s) + s + e, 0, 0, 1);
    }, scale:function(t, e) {
      var i = this.elements;
      return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this;
    }, rotate:function(t) {
      var e = Math.cos(t);
      t = Math.sin(t);
      var i = this.elements, n = i[0], r = i[3], a = i[6], s = i[1], o = i[4], c = i[7];
      return i[0] = e * n + t * s, i[3] = e * r + t * o, i[6] = e * a + t * c, i[1] = -t * n + e * s, i[4] = -t * r + e * o, i[7] = -t * a + e * c, this;
    }, translate:function(t, e) {
      var i = this.elements;
      return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e * i[5], i[7] += e * i[8], this;
    }, equals:function(t) {
      var e = this.elements;
      t = t.elements;
      for (var i = 0; 9 > i; i++) {
        if (e[i] !== t[i]) {
          return !1;
        }
      }
      return !0;
    }, fromArray:function(t, e) {
      void 0 === e && (e = 0);
      for (var i = 0; 9 > i; i++) {
        this.elements[i] = t[i + e];
      }
      return this;
    }, toArray:function(t, e) {
      void 0 === t && (t = []), void 0 === e && (e = 0);
      var i = this.elements;
      return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t;
    }});
    var Qe = 0;
    o.DEFAULT_IMAGE = void 0, o.DEFAULT_MAPPING = 300, Object.defineProperty(o.prototype, "needsUpdate", {set:function(t) {
      !0 === t && this.version++;
    }}), Object.assign(o.prototype, e.prototype, {constructor:o, isTexture:!0, clone:function() {
      return (new this.constructor).copy(this);
    }, copy:function(t) {
      return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps =
      t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this;
    }, toJSON:!1, dispose:function() {
      this.dispatchEvent({type:"dispose"});
    }, transformUv:function(t) {
      if (300 === this.mapping) {
        if (t.applyMatrix3(this.matrix), 0 > t.x || 1 < t.x) {
          switch(this.wrapS) {
            case 1e3:
              t.x -= Math.floor(t.x);
              break;
            case 1001:
              t.x = 0 > t.x ? 0 : 1;
              break;
            case 1002:
              t.x = 1 === Math.abs(Math.floor(t.x) % 2) ? Math.ceil(t.x) - t.x : t.x - Math.floor(t.x);
          }
        }
        if (0 > t.y || 1 < t.y) {
          switch(this.wrapT) {
            case 1e3:
              t.y -= Math.floor(t.y);
              break;
            case 1001:
              t.y = 0 > t.y ? 0 : 1;
              break;
            case 1002:
              t.y = 1 === Math.abs(Math.floor(t.y) % 2) ? Math.ceil(t.y) - t.y : t.y - Math.floor(t.y);
          }
        }
        this.flipY && (t.y = 1 - t.y);
      }
    }}), Object.assign(c.prototype, {isVector4:!0, set:function(t, e, i, n) {
      return this.x = t, this.y = e, this.z = i, this.w = n, this;
    }, setScalar:function(t) {
      return this.w = this.z = this.y = this.x = t, this;
    }, setX:function(t) {
      return this.x = t, this;
    }, setY:function(t) {
      return this.y = t, this;
    }, setZ:function(t) {
      return this.z = t, this;
    }, setW:function(t) {
      return this.w = t, this;
    }, setComponent:function(t, e) {
      switch(t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        case 3:
          this.w = e;
          break;
        default:
          throw Error("index is out of range: " + t);
      }
      return this;
    }, getComponent:function(t) {
      switch(t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw Error("index is out of range: " + t);
      }
    }, clone:function() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }, copy:function(t) {
      return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this;
    }, add:function(t, e) {
      return void 0 !== e ? this.addVectors(t, e) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this);
    }, addScalar:function(t) {
      return this.x += t, this.y += t, this.z += t, this.w += t, this;
    }, addVectors:function(t, e) {
      return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
    }, addScaledVector:function(t, e) {
      return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
    }, sub:function(t, e) {
      return void 0 !== e ? this.subVectors(t, e) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this);
    }, subScalar:function(t) {
      return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
    }, subVectors:function(t, e) {
      return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
    }, multiplyScalar:function(t) {
      return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
    }, applyMatrix4:function(t) {
      var e = this.x, i = this.y, n = this.z, r = this.w;
      return t = t.elements, this.x = t[0] * e + t[4] * i + t[8] * n + t[12] * r, this.y = t[1] * e + t[5] * i + t[9] * n + t[13] * r, this.z = t[2] * e + t[6] * i + t[10] * n + t[14] * r, this.w = t[3] * e + t[7] * i + t[11] * n + t[15] * r, this;
    }, divideScalar:function(t) {
      return this.multiplyScalar(1 / t);
    }, setAxisAngleFromQuaternion:function(t) {
      this.w = 2 * Math.acos(t.w);
      var e = Math.sqrt(1 - t.w * t.w);
      return 1e-4 > e ? (this.x = 1, this.z = this.y = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
    }, setAxisAngleFromRotationMatrix:function(t) {
      var e = (t = t.elements)[0], i = t[4], n = t[8], r = t[1], a = t[5], s = t[9], o = t[2], c = t[6], l = t[10];
      return .01 > Math.abs(i - r) && .01 > Math.abs(n - o) && .01 > Math.abs(s - c) ? .1 > Math.abs(i + r) && .1 > Math.abs(n + o) && .1 > Math.abs(s + c) && .1 > Math.abs(e + a + l - 3) ? (this.set(1, 0, 0, 0), this) : (t = Math.PI, e = (e + 1) / 2, a = (a + 1) / 2, l = (l + 1) / 2, i = (i + r) / 4, n = (n + o) / 4, s = (s + c) / 4, e > a && e > l ? .01 > e ? (c = 0, i = o = .707106781) : (c = Math.sqrt(e), o = i / c, i = n / c) : a > l ? .01 > a ? (c = .707106781, o = 0, i = .707106781) : (o =
      Math.sqrt(a), c = i / o, i = s / o) : .01 > l ? (o = c = .707106781, i = 0) : (i = Math.sqrt(l), c = n / i, o = s / i), this.set(c, o, i, t), this) : (t = Math.sqrt((c - s) * (c - s) + (n - o) * (n - o) + (r - i) * (r - i)), .001 > Math.abs(t) && (t = 1), this.x = (c - s) / t, this.y = (n - o) / t, this.z = (r - i) / t, this.w = Math.acos((e + a + l - 1) / 2), this);
    }, min:function(t) {
      return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
    }, max:function(t) {
      return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
    }, clamp:function(t, e) {
      return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
    }, clampScalar:function() {
      var t, e;
      return function(i, n) {
        return void 0 === t && (t = new c, e = new c), t.set(i, i, i, i), e.set(n, n, n, n), this.clamp(t, e);
      };
    }(), clampLength:function(t, e) {
      var i = this.length();
      return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)));
    }, floor:function() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }, ceil:function() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }, round:function() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }, roundToZero:function() {
      return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z), this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w), this;
    }, negate:function() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }, dot:function(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
    }, lengthSq:function() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }, length:function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }, manhattanLength:function() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }, normalize:function() {
      return this.divideScalar(this.length() || 1);
    }, setLength:function(t) {
      return this.normalize().multiplyScalar(t);
    }, lerp:function(t, e) {
      return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
    }, lerpVectors:function(t, e, i) {
      return this.subVectors(e, t).multiplyScalar(i).add(t);
    }, equals:function(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
    }, fromArray:function(t, e) {
      return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
    }, toArray:function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
    }, fromBufferAttribute:function(t, e, i) {
      return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
    }}), Object.assign(l.prototype, e.prototype, {isWebGLRenderTarget:!0, setSize:function(t, e) {
      this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
    }, clone:function() {
      return (new this.constructor).copy(this);
    }, copy:function(t) {
      return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this;
    }, dispose:function() {
      this.dispatchEvent({type:"dispose"});
    }}), h.prototype = Object.create(o.prototype), h.prototype.constructor = h, h.prototype.isDataTexture = !0, (u.prototype = Object.create(o.prototype)).constructor = u, u.prototype.isCubeTexture = !0, Object.defineProperty(u.prototype, "images", {get:function() {
      return this.image;
    }, set:function(t) {
      this.image = t;
    }});
    var Je = new o, Ke = new u, ti = [], ei = [], ii = new Float32Array(16), ni = new Float32Array(9);
    H.prototype.setValue = function(t, e) {
      for (var i = this.seq, n = 0, r = i.length; n !== r; ++n) {
        var a = i[n];
        a.setValue(t, e[a.id]);
      }
    };
    var ri = /([\w\d_]+)(\])?(\[|\.)?/g;
    V.prototype.setValue = function(t, e, i) {
      void 0 !== (e = this.map[e]) && e.setValue(t, i, this.renderer);
    }, V.prototype.setOptional = function(t, e, i) {
      void 0 !== (e = e[i]) && this.setValue(t, i, e);
    }, V.upload = function(t, e, i, n) {
      for (var r = 0, a = e.length; r !== a; ++r) {
        var s = e[r], o = i[s.id];
        !1 !== o.needsUpdate && s.setValue(t, o.value, n);
      }
    }, V.seqWithValue = function(t, e) {
      for (var i = [], n = 0, r = t.length; n !== r; ++n) {
        var a = t[n];
        a.id in e && i.push(a);
      }
      return i;
    };
    var ai = {aliceblue:15792383, antiquewhite:16444375, aqua:65535, aquamarine:8388564, azure:15794175, beige:16119260, bisque:16770244, black:0, blanchedalmond:16772045, blue:255, blueviolet:9055202, brown:10824234, burlywood:14596231, cadetblue:6266528, chartreuse:8388352, chocolate:13789470, coral:16744272, cornflowerblue:6591981, cornsilk:16775388, crimson:14423100, cyan:65535, darkblue:139, darkcyan:35723, darkgoldenrod:12092939, darkgray:11119017, darkgreen:25600, darkgrey:11119017, darkkhaki:12433259,
    darkmagenta:9109643, darkolivegreen:5597999, darkorange:16747520, darkorchid:10040012, darkred:9109504, darksalmon:15308410, darkseagreen:9419919, darkslateblue:4734347, darkslategray:3100495, darkslategrey:3100495, darkturquoise:52945, darkviolet:9699539, deeppink:16716947, deepskyblue:49151, dimgray:6908265, dimgrey:6908265, dodgerblue:2003199, firebrick:11674146, floralwhite:16775920, forestgreen:2263842, fuchsia:16711935, gainsboro:14474460, ghostwhite:16316671, gold:16766720, goldenrod:14329120,
    gray:8421504, green:32768, greenyellow:11403055, grey:8421504, honeydew:15794160, hotpink:16738740, indianred:13458524, indigo:4915330, ivory:16777200, khaki:15787660, lavender:15132410, lavenderblush:16773365, lawngreen:8190976, lemonchiffon:16775885, lightblue:11393254, lightcoral:15761536, lightcyan:14745599, lightgoldenrodyellow:16448210, lightgray:13882323, lightgreen:9498256, lightgrey:13882323, lightpink:16758465, lightsalmon:16752762, lightseagreen:2142890, lightskyblue:8900346, lightslategray:7833753,
    lightslategrey:7833753, lightsteelblue:11584734, lightyellow:16777184, lime:65280, limegreen:3329330, linen:16445670, magenta:16711935, maroon:8388608, mediumaquamarine:6737322, mediumblue:205, mediumorchid:12211667, mediumpurple:9662683, mediumseagreen:3978097, mediumslateblue:8087790, mediumspringgreen:64154, mediumturquoise:4772300, mediumvioletred:13047173, midnightblue:1644912, mintcream:16121850, mistyrose:16770273, moccasin:16770229, navajowhite:16768685, navy:128, oldlace:16643558, olive:8421376,
    olivedrab:7048739, orange:16753920, orangered:16729344, orchid:14315734, palegoldenrod:15657130, palegreen:10025880, paleturquoise:11529966, palevioletred:14381203, papayawhip:16773077, peachpuff:16767673, peru:13468991, pink:16761035, plum:14524637, powderblue:11591910, purple:8388736, rebeccapurple:6697881, red:16711680, rosybrown:12357519, royalblue:4286945, saddlebrown:9127187, salmon:16416882, sandybrown:16032864, seagreen:3050327, seashell:16774638, sienna:10506797, silver:12632256, skyblue:8900331,
    slateblue:6970061, slategray:7372944, slategrey:7372944, snow:16775930, springgreen:65407, steelblue:4620980, tan:13808780, teal:32896, thistle:14204888, tomato:16737095, turquoise:4251856, violet:15631086, wheat:16113331, white:16777215, whitesmoke:16119285, yellow:16776960, yellowgreen:10145074};
    Object.assign(G.prototype, {isColor:!0, r:1, g:1, b:1, set:function(t) {
      return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this;
    }, setScalar:function(t) {
      return this.b = this.g = this.r = t, this;
    }, setHex:function(t) {
      return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this;
    }, setRGB:function(t, e, i) {
      return this.r = t, this.g = e, this.b = i, this;
    }, setHSL:function() {
      function t(t, e, i) {
        return 0 > i && (i += 1), 1 < i && --i, i < 1 / 6 ? t + 6 * (e - t) * i : .5 > i ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t;
      }
      return function(e, i, n) {
        return e = Ze.euclideanModulo(e, 1), i = Ze.clamp(i, 0, 1), n = Ze.clamp(n, 0, 1), 0 === i ? this.r = this.g = this.b = n : (i = .5 >= n ? n * (1 + i) : n + i - n * i, n = 2 * n - i, this.r = t(n, i, e + 1 / 3), this.g = t(n, i, e), this.b = t(n, i, e - 1 / 3)), this;
      };
    }(), setStyle:function(t) {
      var e;
      if (e = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
        var i = e[2];
        switch(e[1]) {
          case "rgb":
          case "rgba":
            if (e = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i)) {
              return this.r = Math.min(255, parseInt(e[1], 10)) / 255, this.g = Math.min(255, parseInt(e[2], 10)) / 255, this.b = Math.min(255, parseInt(e[3], 10)) / 255, this;
            }
            if (e = /^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i)) {
              return this.r = Math.min(100, parseInt(e[1], 10)) / 100, this.g = Math.min(100, parseInt(e[2], 10)) / 100, this.b = Math.min(100, parseInt(e[3], 10)) / 100, this;
            }
            break;
          case "hsl":
          case "hsla":
            if (e = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i)) {
              return t = parseFloat(e[1]) / 360, i = parseInt(e[2], 10) / 100, e = parseInt(e[3], 10) / 100, this.setHSL(t, i, e);
            }
        }
      } else {
        if (e = /^#([A-Fa-f0-9]+)$/.exec(t)) {
          if (e = e[1], 3 === (i = e.length)) {
            return this.r = parseInt(e.charAt(0) + e.charAt(0), 16) / 255, this.g = parseInt(e.charAt(1) + e.charAt(1), 16) / 255, this.b = parseInt(e.charAt(2) + e.charAt(2), 16) / 255, this;
          }
          if (6 === i) {
            return this.r = parseInt(e.charAt(0) + e.charAt(1), 16) / 255, this.g = parseInt(e.charAt(2) + e.charAt(3), 16) / 255, this.b = parseInt(e.charAt(4) + e.charAt(5), 16) / 255, this;
          }
        }
      }
      return t && 0 < t.length && void 0 !== (e = ai[t]) && this.setHex(e), this;
    }, clone:function() {
      return new this.constructor(this.r, this.g, this.b);
    }, copy:function(t) {
      return this.r = t.r, this.g = t.g, this.b = t.b, this;
    }, copyGammaToLinear:function(t, e) {
      return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this;
    }, copyLinearToGamma:function(t, e) {
      return void 0 === e && (e = 2), e = 0 < e ? 1 / e : 1, this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this;
    }, convertGammaToLinear:function() {
      var t = this.r, e = this.g, i = this.b;
      return this.r = t * t, this.g = e * e, this.b = i * i, this;
    }, convertLinearToGamma:function() {
      return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this;
    }, getHex:function() {
      return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
    }, getHexString:function() {
      return ("000000" + this.getHex().toString(16)).slice(-6);
    }, getHSL:function(t) {
      t = t || {h:0, s:0, l:0};
      var e, i = this.r, n = this.g, r = this.b, a = Math.max(i, n, r), s = ((c = Math.min(i, n, r)) + a) / 2;
      if (c === a) {
        c = e = 0;
      } else {
        var o = a - c, c = .5 >= s ? o / (a + c) : o / (2 - a - c);
        switch(a) {
          case i:
            e = (n - r) / o + (n < r ? 6 : 0);
            break;
          case n:
            e = (r - i) / o + 2;
            break;
          case r:
            e = (i - n) / o + 4;
        }
        e /= 6;
      }
      return t.h = e, t.s = c, t.l = s, t;
    }, getStyle:function() {
      return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")";
    }, offsetHSL:function(t, e, i) {
      var n = this.getHSL();
      return n.h += t, n.s += e, n.l += i, this.setHSL(n.h, n.s, n.l), this;
    }, add:function(t) {
      return this.r += t.r, this.g += t.g, this.b += t.b, this;
    }, addColors:function(t, e) {
      return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
    }, addScalar:function(t) {
      return this.r += t, this.g += t, this.b += t, this;
    }, sub:function(t) {
      return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
    }, multiply:function(t) {
      return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
    }, multiplyScalar:function(t) {
      return this.r *= t, this.g *= t, this.b *= t, this;
    }, lerp:function(t, e) {
      return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
    }, equals:function(t) {
      return t.r === this.r && t.g === this.g && t.b === this.b;
    }, fromArray:function(t, e) {
      return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
    }, toArray:function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
    }, toJSON:!1});
    var si = {common:{diffuse:{value:new G(15658734)}, opacity:{value:1}, map:{value:null}, uvTransform:{value:new s}, alphaMap:{value:null}}, specularmap:{specularMap:{value:null}}, envmap:{envMap:{value:null}, flipEnvMap:{value:-1}, reflectivity:{value:1}, refractionRatio:{value:.98}}, aomap:{aoMap:{value:null}, aoMapIntensity:{value:1}}, lightmap:{lightMap:{value:null}, lightMapIntensity:{value:1}}, emissivemap:{emissiveMap:{value:null}}, bumpmap:{bumpMap:{value:null}, bumpScale:{value:1}}, normalmap:{normalMap:{value:null},
    normalScale:{value:new i(1, 1)}}, displacementmap:{displacementMap:{value:null}, displacementScale:{value:1}, displacementBias:{value:0}}, roughnessmap:{roughnessMap:{value:null}}, metalnessmap:{metalnessMap:{value:null}}, gradientmap:{gradientMap:{value:null}}, fog:{fogDensity:{value:25e-5}, fogNear:{value:1}, fogFar:{value:2e3}, fogColor:{value:new G(16777215)}}, lights:{ambientLightColor:{value:[]}, directionalLights:{value:[], properties:{direction:{}, color:{}, shadow:{}, shadowBias:{},
    shadowRadius:{}, shadowMapSize:{}}}, directionalShadowMap:{value:[]}, directionalShadowMatrix:{value:[]}, spotLights:{value:[], properties:{color:{}, position:{}, direction:{}, distance:{}, coneCos:{}, penumbraCos:{}, decay:{}, shadow:{}, shadowBias:{}, shadowRadius:{}, shadowMapSize:{}}}, spotShadowMap:{value:[]}, spotShadowMatrix:{value:[]}, pointLights:{value:[], properties:{color:{}, position:{}, decay:{}, distance:{}, shadow:{}, shadowBias:{}, shadowRadius:{}, shadowMapSize:{}, shadowCameraNear:{},
    shadowCameraFar:{}}}, pointShadowMap:{value:[]}, pointShadowMatrix:{value:[]}, hemisphereLights:{value:[], properties:{direction:{}, skyColor:{}, groundColor:{}}}, rectAreaLights:{value:[], properties:{color:{}, position:{}, width:{}, height:{}}}}, points:{diffuse:{value:new G(15658734)}, opacity:{value:1}, size:{value:1}, scale:{value:1}, map:{value:null}, uvTransform:{value:new s}}}, oi = {merge:function(t) {
      for (var e = {}, i = 0; i < t.length; i++) {
        var n, r = this.clone(t[i]);
        for (n in r) {
          e[n] = r[n];
        }
      }
      return e;
    }, clone:function(t) {
      var e, i = {};
      for (e in t) {
        i[e] = {};
        for (var n in t[e]) {
          var r = t[e][n];
          r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? i[e][n] = r.clone() : Array.isArray(r) ? i[e][n] = r.slice() : i[e][n] = r;
        }
      }
      return i;
    }}, ci = {alphamap_fragment:"#ifdef USE_ALPHAMAP\r\n\r\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\r\n\r\n#endif\r\n", alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\r\n\r\n\tuniform sampler2D alphaMap;\r\n\r\n#endif\r\n", alphatest_fragment:"#ifdef ALPHATEST\r\n\r\n\tif ( diffuseColor.a < ALPHATEST ) discard;\r\n\r\n#endif\r\n", aomap_fragment:"#ifdef USE_AOMAP\r\n\r\n\t// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\r\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\r\n\r\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\r\n\r\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\r\n\r\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\r\n\r\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\r\n\r\n\t#endif\r\n\r\n#endif\r\n",
    aomap_pars_fragment:"#ifdef USE_AOMAP\r\n\r\n\tuniform sampler2D aoMap;\r\n\tuniform float aoMapIntensity;\r\n\r\n#endif", begin_vertex:"\r\nvec3 transformed = vec3( position );\r\n", beginnormal_vertex:"\r\nvec3 objectNormal = vec3( normal );\r\n", bsdfs:"float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.86267 + (0.49788 + 0.01436 * y ) * y;\n\tfloat b = 3.45068 + (4.18814 + y) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt( 1.0 - x * x ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tvec3 result = vec3( LTC_ClippedSphereFormFactor( vectorFormFactor ) );\n\treturn result;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
    bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
    clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\r\n\r\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\r\n\r\n\t\tvec4 plane = clippingPlanes[ i ];\r\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\r\n\r\n\t}\r\n\t\t\r\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\r\n\r\n\t\tbool clipped = true;\r\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\r\n\t\t\tvec4 plane = clippingPlanes[ i ];\r\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\r\n\t\t}\r\n\r\n\t\tif ( clipped ) discard;\r\n\t\r\n\t#endif\r\n\r\n#endif\r\n",
    clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\r\n\r\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\r\n\t\tvarying vec3 vViewPosition;\r\n\t#endif\r\n\r\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\r\n\r\n#endif\r\n", clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\r\n\tvarying vec3 vViewPosition;\r\n#endif\r\n", clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\r\n\tvViewPosition = - mvPosition.xyz;\r\n#endif\r\n\r\n",
    color_fragment:"#ifdef USE_COLOR\r\n\r\n\tdiffuseColor.rgb *= vColor;\r\n\r\n#endif", color_pars_fragment:"#ifdef USE_COLOR\r\n\r\n\tvarying vec3 vColor;\r\n\r\n#endif\r\n", color_pars_vertex:"#ifdef USE_COLOR\r\n\r\n\tvarying vec3 vColor;\r\n\r\n#endif", color_vertex:"#ifdef USE_COLOR\r\n\r\n\tvColor.xyz = color.xyz;\r\n\r\n#endif", common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",
    cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\r\n\r\n#define cubeUV_textureSize (1024.0)\r\n\r\nint getFaceFromDirection(vec3 direction) {\r\n\tvec3 absDirection = abs(direction);\r\n\tint face = -1;\r\n\tif( absDirection.x > absDirection.z ) {\r\n\t\tif(absDirection.x > absDirection.y )\r\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\r\n\t\telse\r\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\r\n\t}\r\n\telse {\r\n\t\tif(absDirection.z > absDirection.y )\r\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\r\n\t\telse\r\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\r\n\t}\r\n\treturn face;\r\n}\r\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\r\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\r\n\r\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\r\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\r\n\tfloat dxRoughness = dFdx(roughness);\r\n\tfloat dyRoughness = dFdy(roughness);\r\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\r\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\r\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\r\n\t// Clamp the value to the max mip level counts. hard coded to 6 mips\r\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\r\n\tfloat mipLevel = 0.5 * log2(d);\r\n\treturn vec2(floor(mipLevel), fract(mipLevel));\r\n}\r\n\r\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\r\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\r\n\r\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\r\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\r\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\r\n\r\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\r\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\r\n\t// float powScale = exp2(roughnessLevel + mipLevel);\r\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\r\n\t// float scale =  1.0 / exp2(roughnessLevel + 2.0 + mipLevel);\r\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\r\n\t// float mipOffset = 0.75*(1.0 - 1.0/exp2(mipLevel))/exp2(roughnessLevel);\r\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\r\n\r\n\tbool bRes = mipLevel == 0.0;\r\n\tscale =  bRes && (scale < a) ? a : scale;\r\n\r\n\tvec3 r;\r\n\tvec2 offset;\r\n\tint face = getFaceFromDirection(direction);\r\n\r\n\tfloat rcpPowScale = 1.0 / powScale;\r\n\r\n\tif( face == 0) {\r\n\t\tr = vec3(direction.x, -direction.z, direction.y);\r\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\r\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\r\n\t}\r\n\telse if( face == 1) {\r\n\t\tr = vec3(direction.y, direction.x, direction.z);\r\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\r\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\r\n\t}\r\n\telse if( face == 2) {\r\n\t\tr = vec3(direction.z, direction.x, direction.y);\r\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\r\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\r\n\t}\r\n\telse if( face == 3) {\r\n\t\tr = vec3(direction.x, direction.z, direction.y);\r\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\r\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\r\n\t}\r\n\telse if( face == 4) {\r\n\t\tr = vec3(direction.y, direction.x, -direction.z);\r\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\r\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\r\n\t}\r\n\telse {\r\n\t\tr = vec3(direction.z, -direction.x, direction.y);\r\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\r\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\r\n\t}\r\n\tr = normalize(r);\r\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\r\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\r\n\tvec2 base = offset + vec2( texelOffset );\r\n\treturn base + s * ( scale - 2.0 * texelOffset );\r\n}\r\n\r\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\r\n\r\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\r\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\r\n\tfloat r1 = floor(roughnessVal);\r\n\tfloat r2 = r1 + 1.0;\r\n\tfloat t = fract(roughnessVal);\r\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\r\n\tfloat s = mipInfo.y;\r\n\tfloat level0 = mipInfo.x;\r\n\tfloat level1 = level0 + 1.0;\r\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\r\n\r\n\t// round to nearest mipmap if we are not interpolating.\r\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\r\n\r\n\t// Tri linear interpolation.\r\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\r\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\r\n\r\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\r\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\r\n\r\n\tvec4 result = mix(color10, color20, t);\r\n\r\n\treturn vec4(result.rgb, 1.0);\r\n}\r\n\r\n#endif\r\n",
    defaultnormal_vertex:"vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n", displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\r\n\r\n\tuniform sampler2D displacementMap;\r\n\tuniform float displacementScale;\r\n\tuniform float displacementBias;\r\n\r\n#endif\r\n", displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
    emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\r\n\r\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\r\n\r\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\r\n\r\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\r\n\r\n#endif\r\n", emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\r\n\r\n\tuniform sampler2D emissiveMap;\r\n\r\n#endif\r\n", encodings_fragment:"  gl_FragColor = linearToOutputTexel( gl_FragColor );\r\n", encodings_pars_fragment:"// For a discussion of what this is, please read this: http://lousodrome.net/blog/light/2013/05/26/gamma-correct-and-hdr-rendering-in-a-32-bits-buffer/\r\n\r\nvec4 LinearToLinear( in vec4 value ) {\r\n\treturn value;\r\n}\r\n\r\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\r\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\r\n}\r\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\r\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\r\n}\r\n\r\nvec4 sRGBToLinear( in vec4 value ) {\r\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\r\n}\r\nvec4 LinearTosRGB( in vec4 value ) {\r\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\r\n}\r\n\r\nvec4 RGBEToLinear( in vec4 value ) {\r\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\r\n}\r\nvec4 LinearToRGBE( in vec4 value ) {\r\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\r\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\r\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\r\n//  return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );\r\n}\r\n\r\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\r\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\r\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\r\n}\r\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\r\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\r\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\r\n\tM            = ceil( M * 255.0 ) / 255.0;\r\n\treturn vec4( value.rgb / ( M * maxRange ), M );\r\n}\r\n\r\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\r\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\r\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\r\n}\r\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\r\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\r\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\r\n\tD            = min( floor( D ) / 255.0, 1.0 );\r\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\r\n}\r\n\r\n// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html\r\n\r\n// M matrix, for encoding\r\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\r\nvec4 LinearToLogLuv( in vec4 value )  {\r\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\r\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\r\n\tvec4 vResult;\r\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\r\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\r\n\tvResult.w = fract(Le);\r\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\r\n\treturn vResult;\r\n}\r\n\r\n// Inverse M matrix, for decoding\r\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\r\nvec4 LogLuvToLinear( in vec4 value ) {\r\n\tfloat Le = value.z * 255.0 + value.w;\r\n\tvec3 Xp_Y_XYZp;\r\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\r\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\r\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\r\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\r\n\treturn vec4( max(vRGB, 0.0), 1.0 );\r\n}\r\n",
    envmap_fragment:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
    envmap_pars_fragment:"#if defined( USE_ENVMAP ) || defined( PHYSICAL )\r\n\tuniform float reflectivity;\r\n\tuniform float envMapIntensity;\r\n#endif\r\n\r\n#ifdef USE_ENVMAP\r\n\r\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\r\n\t\tvarying vec3 vWorldPosition;\r\n\t#endif\r\n\r\n\t#ifdef ENVMAP_TYPE_CUBE\r\n\t\tuniform samplerCube envMap;\r\n\t#else\r\n\t\tuniform sampler2D envMap;\r\n\t#endif\r\n\tuniform float flipEnvMap;\r\n\r\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\r\n\t\tuniform float refractionRatio;\r\n\t#else\r\n\t\tvarying vec3 vReflect;\r\n\t#endif\r\n\r\n#endif\r\n",
    envmap_pars_vertex:"#ifdef USE_ENVMAP\r\n\r\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\r\n\t\tvarying vec3 vWorldPosition;\r\n\r\n\t#else\r\n\r\n\t\tvarying vec3 vReflect;\r\n\t\tuniform float refractionRatio;\r\n\r\n\t#endif\r\n\r\n#endif\r\n", envmap_vertex:"#ifdef USE_ENVMAP\r\n\r\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\r\n\r\n\t\tvWorldPosition = worldPosition.xyz;\r\n\r\n\t#else\r\n\r\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\r\n\r\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\r\n\r\n\t\t#ifdef ENVMAP_MODE_REFLECTION\r\n\r\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\r\n\r\n\t\t#else\r\n\r\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\r\n\r\n\t\t#endif\r\n\r\n\t#endif\r\n\r\n#endif\r\n",
    fog_vertex:"\r\n#ifdef USE_FOG\r\nfogDepth = -mvPosition.z;\r\n#endif", fog_pars_vertex:"#ifdef USE_FOG\r\n\r\n  varying float fogDepth;\r\n\r\n#endif\r\n", fog_fragment:"#ifdef USE_FOG\r\n\r\n\t#ifdef FOG_EXP2\r\n\r\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\r\n\r\n\t#else\r\n\r\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\r\n\r\n\t#endif\r\n\r\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\r\n\r\n#endif\r\n",
    fog_pars_fragment:"#ifdef USE_FOG\r\n\r\n\tuniform vec3 fogColor;\r\n\tvarying float fogDepth;\r\n\r\n\t#ifdef FOG_EXP2\r\n\r\n\t\tuniform float fogDensity;\r\n\r\n\t#else\r\n\r\n\t\tuniform float fogNear;\r\n\t\tuniform float fogFar;\r\n\r\n\t#endif\r\n\r\n#endif\r\n", gradientmap_pars_fragment:"#ifdef TOON\r\n\r\n\tuniform sampler2D gradientMap;\r\n\r\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\r\n\r\n\t\t// dotNL will be from -1.0 to 1.0\r\n\t\tfloat dotNL = dot( normal, lightDirection );\r\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\r\n\r\n\t\t#ifdef USE_GRADIENTMAP\r\n\r\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\r\n\r\n\t\t#else\r\n\r\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\r\n\r\n\t\t#endif\r\n\r\n\r\n\t}\r\n\r\n#endif\r\n",
    lightmap_fragment:"#ifdef USE_LIGHTMAP\r\n\r\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity; // factor of PI should not be present; included here to prevent breakage\r\n\r\n#endif\r\n", lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\r\n\r\n\tuniform sampler2D lightMap;\r\n\tuniform float lightMapIntensity;\r\n\r\n#endif", lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\r\n\r\nGeometricContext geometry;\r\ngeometry.position = mvPosition.xyz;\r\ngeometry.normal = normalize( transformedNormal );\r\ngeometry.viewDir = normalize( -mvPosition.xyz );\r\n\r\nGeometricContext backGeometry;\r\nbackGeometry.position = geometry.position;\r\nbackGeometry.normal = -geometry.normal;\r\nbackGeometry.viewDir = geometry.viewDir;\r\n\r\nvLightFront = vec3( 0.0 );\r\n\r\n#ifdef DOUBLE_SIDED\r\n\tvLightBack = vec3( 0.0 );\r\n#endif\r\n\r\nIncidentLight directLight;\r\nfloat dotNL;\r\nvec3 directLightColor_Diffuse;\r\n\r\n#if NUM_POINT_LIGHTS > 0\r\n\r\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\r\n\r\n\t\tdotNL = dot( geometry.normal, directLight.direction );\r\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\r\n\r\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\r\n\r\n\t\t#ifdef DOUBLE_SIDED\r\n\r\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\r\n\r\n\t\t#endif\r\n\r\n\t}\r\n\r\n#endif\r\n\r\n#if NUM_SPOT_LIGHTS > 0\r\n\r\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\r\n\r\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\r\n\r\n\t\tdotNL = dot( geometry.normal, directLight.direction );\r\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\r\n\r\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\r\n\r\n\t\t#ifdef DOUBLE_SIDED\r\n\r\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\r\n\r\n\t\t#endif\r\n\t}\r\n\r\n#endif\r\n\r\n\r\n\r\n#if NUM_DIR_LIGHTS > 0\r\n\r\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\r\n\r\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\r\n\r\n\t\tdotNL = dot( geometry.normal, directLight.direction );\r\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\r\n\r\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\r\n\r\n\t\t#ifdef DOUBLE_SIDED\r\n\r\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\r\n\r\n\t\t#endif\r\n\r\n\t}\r\n\r\n#endif\r\n\r\n#if NUM_HEMI_LIGHTS > 0\r\n\r\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\r\n\r\n\t\t#ifdef DOUBLE_SIDED\r\n\r\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\r\n\r\n\t\t#endif\r\n\r\n\t}\r\n\r\n#endif\r\n",
    lights_pars:"uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
    lights_phong_fragment:"BlinnPhongMaterial material;\r\nmaterial.diffuseColor = diffuseColor.rgb;\r\nmaterial.specularColor = specular;\r\nmaterial.specularShininess = shininess;\r\nmaterial.specularStrength = specularStrength;\r\n", lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
    lights_physical_fragment:"PhysicalMaterial material;\r\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\r\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\r\n#ifdef STANDARD\r\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\r\n#else\r\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\r\n\tmaterial.clearCoat = saturate( clearCoat ); // Burley clearcoat model\r\n\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\r\n#endif\r\n",
    lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tfloat norm = texture2D( ltcMag, uv ).a;\n\t\tvec4 t = texture2D( ltcMat, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3(   1,   0, t.y ),\n\t\t\tvec3(   0, t.z,   0 ),\n\t\t\tvec3( t.w,   0, t.x )\n\t\t);\n\t\treflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
    lights_template:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
    logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment:"#ifdef USE_LOGDEPTHBUF\r\n\r\n\tuniform float logDepthBufFC;\r\n\r\n\t#ifdef USE_LOGDEPTHBUF_EXT\r\n\r\n\t\tvarying float vFragDepth;\r\n\r\n\t#endif\r\n\r\n#endif\r\n", logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\r\n\r\n\t#ifdef USE_LOGDEPTHBUF_EXT\r\n\r\n\t\tvarying float vFragDepth;\r\n\r\n\t#endif\r\n\r\n\tuniform float logDepthBufFC;\r\n\r\n#endif",
    logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n", map_fragment:"#ifdef USE_MAP\r\n\r\n\tvec4 texelColor = texture2D( map, vUv );\r\n\r\n\ttexelColor = mapTexelToLinear( texelColor );\r\n\tdiffuseColor *= texelColor;\r\n\r\n#endif\r\n", map_pars_fragment:"#ifdef USE_MAP\r\n\r\n\tuniform sampler2D map;\r\n\r\n#endif\r\n",
    map_particle_fragment:"#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n", map_particle_pars_fragment:"#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n", metalnessmap_fragment:"float metalnessFactor = metalness;\r\n\r\n#ifdef USE_METALNESSMAP\r\n\r\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\r\n\r\n\t// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\r\n\tmetalnessFactor *= texelMetalness.b;\r\n\r\n#endif\r\n",
    metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\r\n\r\n\tuniform sampler2D metalnessMap;\r\n\r\n#endif", morphnormal_vertex:"#ifdef USE_MORPHNORMALS\r\n\r\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\r\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\r\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\r\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\r\n\r\n#endif\r\n", morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\r\n\r\n\t#ifndef USE_MORPHNORMALS\r\n\r\n\tuniform float morphTargetInfluences[ 8 ];\r\n\r\n\t#else\r\n\r\n\tuniform float morphTargetInfluences[ 4 ];\r\n\r\n\t#endif\r\n\r\n#endif",
    morphtarget_vertex:"#ifdef USE_MORPHTARGETS\r\n\r\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\r\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\r\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\r\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\r\n\r\n\t#ifndef USE_MORPHNORMALS\r\n\r\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\r\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\r\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\r\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\r\n\r\n\t#endif\r\n\r\n#endif\r\n",
    normal_fragment:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
    normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
    packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
    premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\r\n\r\n\t// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.\r\n\tgl_FragColor.rgb *= gl_FragColor.a;\r\n\r\n#endif\r\n", project_vertex:"vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n", dithering_fragment:"#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n", dithering_pars_fragment:"#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
    roughnessmap_fragment:"float roughnessFactor = roughness;\r\n\r\n#ifdef USE_ROUGHNESSMAP\r\n\r\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\r\n\r\n\t// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\r\n\troughnessFactor *= texelRoughness.g;\r\n\r\n#endif\r\n", roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\r\n\r\n\tuniform sampler2D roughnessMap;\r\n\r\n#endif", shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
    shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\r\n\r\n\t#if NUM_DIR_LIGHTS > 0\r\n\r\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\r\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\r\n\r\n\t#endif\r\n\r\n\t#if NUM_SPOT_LIGHTS > 0\r\n\r\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\r\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\r\n\r\n\t#endif\r\n\r\n\t#if NUM_POINT_LIGHTS > 0\r\n\r\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\r\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\r\n\r\n\t#endif\r\n\r\n\r\n\r\n#endif\r\n",
    shadowmap_vertex:"#ifdef USE_SHADOWMAP\r\n\r\n\t#if NUM_DIR_LIGHTS > 0\r\n\r\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\r\n\r\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\r\n\r\n\t}\r\n\r\n\t#endif\r\n\r\n\t#if NUM_SPOT_LIGHTS > 0\r\n\r\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\r\n\r\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\r\n\r\n\t}\r\n\r\n\t#endif\r\n\r\n\t#if NUM_POINT_LIGHTS > 0\r\n\r\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\r\n\r\n\t}\r\n\r\n\t#endif\r\n\r\n\r\n\r\n#endif\r\n",
    shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
    skinbase_vertex:"#ifdef USE_SKINNING\r\n\r\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\r\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\r\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\r\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\r\n\r\n#endif", skinning_pars_vertex:"#ifdef USE_SKINNING\r\n\r\n\tuniform mat4 bindMatrix;\r\n\tuniform mat4 bindMatrixInverse;\r\n\r\n\t#ifdef BONE_TEXTURE\r\n\r\n\t\tuniform sampler2D boneTexture;\r\n\t\tuniform int boneTextureSize;\r\n\r\n\t\tmat4 getBoneMatrix( const in float i ) {\r\n\r\n\t\t\tfloat j = i * 4.0;\r\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\r\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\r\n\r\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\r\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\r\n\r\n\t\t\ty = dy * ( y + 0.5 );\r\n\r\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\r\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\r\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\r\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\r\n\r\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\r\n\r\n\t\t\treturn bone;\r\n\r\n\t\t}\r\n\r\n\t#else\r\n\r\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\r\n\r\n\t\tmat4 getBoneMatrix( const in float i ) {\r\n\r\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\r\n\t\t\treturn bone;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n#endif\r\n",
    skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n", skinnormal_vertex:"#ifdef USE_SKINNING\r\n\r\n\tmat4 skinMatrix = mat4( 0.0 );\r\n\tskinMatrix += skinWeight.x * boneMatX;\r\n\tskinMatrix += skinWeight.y * boneMatY;\r\n\tskinMatrix += skinWeight.z * boneMatZ;\r\n\tskinMatrix += skinWeight.w * boneMatW;\r\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\r\n\r\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\r\n\r\n#endif\r\n",
    specularmap_fragment:"float specularStrength;\r\n\r\n#ifdef USE_SPECULARMAP\r\n\r\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\r\n\tspecularStrength = texelSpecular.r;\r\n\r\n#else\r\n\r\n\tspecularStrength = 1.0;\r\n\r\n#endif", specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\r\n\r\n\tuniform sampler2D specularMap;\r\n\r\n#endif", tonemapping_fragment:"#if defined( TONE_MAPPING )\r\n\r\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\r\n\r\n#endif\r\n", tonemapping_pars_fragment:"#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
    uv_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\r\n\r\n\tvarying vec2 vUv;\r\n\r\n#endif", uv_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",
    uv_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif", uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\r\n\r\n\tvarying vec2 vUv2;\r\n\r\n#endif", uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\r\n\r\n\tattribute vec2 uv2;\r\n\tvarying vec2 vUv2;\r\n\r\n#endif",
    uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\r\n\r\n\tvUv2 = uv2;\r\n\r\n#endif", worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n", cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
    cube_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n", depth_frag:"#if DEPTH_PACKING == 3200\r\n\r\n\tuniform float opacity;\r\n\r\n#endif\r\n\r\n#include <common>\r\n#include <packing>\r\n#include <uv_pars_fragment>\r\n#include <map_pars_fragment>\r\n#include <alphamap_pars_fragment>\r\n#include <logdepthbuf_pars_fragment>\r\n#include <clipping_planes_pars_fragment>\r\n\r\nvoid main() {\r\n\r\n\t#include <clipping_planes_fragment>\r\n\r\n\tvec4 diffuseColor = vec4( 1.0 );\r\n\r\n\t#if DEPTH_PACKING == 3200\r\n\r\n\t\tdiffuseColor.a = opacity;\r\n\r\n\t#endif\r\n\r\n\t#include <map_fragment>\r\n\t#include <alphamap_fragment>\r\n\t#include <alphatest_fragment>\r\n\r\n\t#include <logdepthbuf_fragment>\r\n\r\n\t#if DEPTH_PACKING == 3200\r\n\r\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\r\n\r\n\t#elif DEPTH_PACKING == 3201\r\n\r\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\r\n\r\n\t#endif\r\n\r\n}\r\n",
    depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
    distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",
    distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",
    equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n", equirect_vert:"varying vec3 vWorldPosition;\r\n\r\n#include <common>\r\n\r\nvoid main() {\r\n\r\n\tvWorldPosition = transformDirection( position, modelMatrix );\r\n\r\n\t#include <begin_vertex>\r\n\t#include <project_vertex>\r\n\r\n}\r\n",
    linedashed_frag:"uniform vec3 diffuse;\r\nuniform float opacity;\r\n\r\nuniform float dashSize;\r\nuniform float totalSize;\r\n\r\nvarying float vLineDistance;\r\n\r\n#include <common>\r\n#include <color_pars_fragment>\r\n#include <fog_pars_fragment>\r\n#include <logdepthbuf_pars_fragment>\r\n#include <clipping_planes_pars_fragment>\r\n\r\nvoid main() {\r\n\r\n\t#include <clipping_planes_fragment>\r\n\r\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\r\n\r\n\t\tdiscard;\r\n\r\n\t}\r\n\r\n\tvec3 outgoingLight = vec3( 0.0 );\r\n\tvec4 diffuseColor = vec4( diffuse, opacity );\r\n\r\n\t#include <logdepthbuf_fragment>\r\n\t#include <color_fragment>\r\n\r\n\toutgoingLight = diffuseColor.rgb; // simple shader\r\n\r\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\r\n\r\n\t#include <premultiplied_alpha_fragment>\r\n\t#include <tonemapping_fragment>\r\n\t#include <encodings_fragment>\r\n\t#include <fog_fragment>\r\n\r\n}\r\n",
    linedashed_vert:"uniform float scale;\r\nattribute float lineDistance;\r\n\r\nvarying float vLineDistance;\r\n\r\n#include <common>\r\n#include <color_pars_vertex>\r\n#include <fog_pars_vertex>\r\n#include <logdepthbuf_pars_vertex>\r\n#include <clipping_planes_pars_vertex>\r\n\r\nvoid main() {\r\n\r\n\t#include <color_vertex>\r\n\r\n\tvLineDistance = scale * lineDistance;\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n\t#include <logdepthbuf_vertex>\r\n\t#include <clipping_planes_vertex>\r\n\t#include <fog_vertex>\r\n\r\n}\r\n",
    meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
    meshbasic_vert:"#include <common>\r\n#include <uv_pars_vertex>\r\n#include <uv2_pars_vertex>\r\n#include <envmap_pars_vertex>\r\n#include <color_pars_vertex>\r\n#include <fog_pars_vertex>\r\n#include <morphtarget_pars_vertex>\r\n#include <skinning_pars_vertex>\r\n#include <logdepthbuf_pars_vertex>\r\n#include <clipping_planes_pars_vertex>\r\n\r\nvoid main() {\r\n\r\n\t#include <uv_vertex>\r\n\t#include <uv2_vertex>\r\n\t#include <color_vertex>\r\n\t#include <skinbase_vertex>\r\n\r\n\t#ifdef USE_ENVMAP\r\n\r\n\t#include <beginnormal_vertex>\r\n\t#include <morphnormal_vertex>\r\n\t#include <skinnormal_vertex>\r\n\t#include <defaultnormal_vertex>\r\n\r\n\t#endif\r\n\r\n\t#include <begin_vertex>\r\n\t#include <morphtarget_vertex>\r\n\t#include <skinning_vertex>\r\n\t#include <project_vertex>\r\n\t#include <logdepthbuf_vertex>\r\n\r\n\t#include <worldpos_vertex>\r\n\t#include <clipping_planes_vertex>\r\n\t#include <envmap_vertex>\r\n\t#include <fog_vertex>\r\n\r\n}\r\n",
    meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
    meshlambert_vert:"#define LAMBERT\r\n\r\nvarying vec3 vLightFront;\r\n\r\n#ifdef DOUBLE_SIDED\r\n\r\n\tvarying vec3 vLightBack;\r\n\r\n#endif\r\n\r\n#include <common>\r\n#include <uv_pars_vertex>\r\n#include <uv2_pars_vertex>\r\n#include <envmap_pars_vertex>\r\n#include <bsdfs>\r\n#include <lights_pars>\r\n#include <color_pars_vertex>\r\n#include <fog_pars_vertex>\r\n#include <morphtarget_pars_vertex>\r\n#include <skinning_pars_vertex>\r\n#include <shadowmap_pars_vertex>\r\n#include <logdepthbuf_pars_vertex>\r\n#include <clipping_planes_pars_vertex>\r\n\r\nvoid main() {\r\n\r\n\t#include <uv_vertex>\r\n\t#include <uv2_vertex>\r\n\t#include <color_vertex>\r\n\r\n\t#include <beginnormal_vertex>\r\n\t#include <morphnormal_vertex>\r\n\t#include <skinbase_vertex>\r\n\t#include <skinnormal_vertex>\r\n\t#include <defaultnormal_vertex>\r\n\r\n\t#include <begin_vertex>\r\n\t#include <morphtarget_vertex>\r\n\t#include <skinning_vertex>\r\n\t#include <project_vertex>\r\n\t#include <logdepthbuf_vertex>\r\n\t#include <clipping_planes_vertex>\r\n\r\n\t#include <worldpos_vertex>\r\n\t#include <envmap_vertex>\r\n\t#include <lights_lambert_vertex>\r\n\t#include <shadowmap_vertex>\r\n\t#include <fog_vertex>\r\n\r\n}\r\n",
    meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
    meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
    meshphysical_frag:"#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
    meshphysical_vert:"#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
    normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
    normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
    points_frag:"uniform vec3 diffuse;\r\nuniform float opacity;\r\n\r\n#include <common>\r\n#include <packing>\r\n#include <color_pars_fragment>\r\n#include <map_particle_pars_fragment>\r\n#include <fog_pars_fragment>\r\n#include <shadowmap_pars_fragment>\r\n#include <logdepthbuf_pars_fragment>\r\n#include <clipping_planes_pars_fragment>\r\n\r\nvoid main() {\r\n\r\n\t#include <clipping_planes_fragment>\r\n\r\n\tvec3 outgoingLight = vec3( 0.0 );\r\n\tvec4 diffuseColor = vec4( diffuse, opacity );\r\n\r\n\t#include <logdepthbuf_fragment>\r\n\t#include <map_particle_fragment>\r\n\t#include <color_fragment>\r\n\t#include <alphatest_fragment>\r\n\r\n\toutgoingLight = diffuseColor.rgb;\r\n\r\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\r\n\r\n\t#include <premultiplied_alpha_fragment>\r\n\t#include <tonemapping_fragment>\r\n\t#include <encodings_fragment>\r\n\t#include <fog_fragment>\r\n\r\n}\r\n",
    points_vert:"uniform float size;\r\nuniform float scale;\r\n\r\n#include <common>\r\n#include <color_pars_vertex>\r\n#include <fog_pars_vertex>\r\n#include <shadowmap_pars_vertex>\r\n#include <logdepthbuf_pars_vertex>\r\n#include <clipping_planes_pars_vertex>\r\n\r\nvoid main() {\r\n\r\n\t#include <color_vertex>\r\n\t#include <begin_vertex>\r\n\t#include <project_vertex>\r\n\r\n\t#ifdef USE_SIZEATTENUATION\r\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\r\n\t#else\r\n\t\tgl_PointSize = size;\r\n\t#endif\r\n\r\n\t#include <logdepthbuf_vertex>\r\n\t#include <clipping_planes_vertex>\r\n\t#include <worldpos_vertex>\r\n\t#include <shadowmap_vertex>\r\n\t#include <fog_vertex>\r\n\r\n}\r\n",
    shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n", shadow_vert:"#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n"},
    li = {basic:{uniforms:oi.merge([si.common, si.specularmap, si.envmap, si.aomap, si.lightmap, si.fog]), vertexShader:ci.meshbasic_vert, fragmentShader:ci.meshbasic_frag}, lambert:{uniforms:oi.merge([si.common, si.specularmap, si.envmap, si.aomap, si.lightmap, si.emissivemap, si.fog, si.lights, {emissive:{value:new G(0)}}]), vertexShader:ci.meshlambert_vert, fragmentShader:ci.meshlambert_frag}, phong:{uniforms:oi.merge([si.common, si.specularmap, si.envmap, si.aomap, si.lightmap, si.emissivemap,
    si.bumpmap, si.normalmap, si.displacementmap, si.gradientmap, si.fog, si.lights, {emissive:{value:new G(0)}, specular:{value:new G(1118481)}, shininess:{value:30}}]), vertexShader:ci.meshphong_vert, fragmentShader:ci.meshphong_frag}, standard:{uniforms:oi.merge([si.common, si.envmap, si.aomap, si.lightmap, si.emissivemap, si.bumpmap, si.normalmap, si.displacementmap, si.roughnessmap, si.metalnessmap, si.fog, si.lights, {emissive:{value:new G(0)}, roughness:{value:.5}, metalness:{value:.5}, envMapIntensity:{value:1}}]),
    vertexShader:ci.meshphysical_vert, fragmentShader:ci.meshphysical_frag}, points:{uniforms:oi.merge([si.points, si.fog]), vertexShader:ci.points_vert, fragmentShader:ci.points_frag}, dashed:{uniforms:oi.merge([si.common, si.fog, {scale:{value:1}, dashSize:{value:1}, totalSize:{value:2}}]), vertexShader:ci.linedashed_vert, fragmentShader:ci.linedashed_frag}, depth:{uniforms:oi.merge([si.common, si.displacementmap]), vertexShader:ci.depth_vert, fragmentShader:ci.depth_frag}, normal:{uniforms:oi.merge([si.common,
    si.bumpmap, si.normalmap, si.displacementmap, {opacity:{value:1}}]), vertexShader:ci.normal_vert, fragmentShader:ci.normal_frag}, cube:{uniforms:{tCube:{value:null}, tFlip:{value:-1}, opacity:{value:1}}, vertexShader:ci.cube_vert, fragmentShader:ci.cube_frag}, equirect:{uniforms:{tEquirect:{value:null}}, vertexShader:ci.equirect_vert, fragmentShader:ci.equirect_frag}, distanceRGBA:{uniforms:oi.merge([si.common, si.displacementmap, {referencePosition:{value:new a}, nearDistance:{value:1}, farDistance:{value:1e3}}]),
    vertexShader:ci.distanceRGBA_vert, fragmentShader:ci.distanceRGBA_frag}, shadow:{uniforms:oi.merge([si.lights, si.fog, {color:{value:new G(0)}, opacity:{value:1}}]), vertexShader:ci.shadow_vert, fragmentShader:ci.shadow_frag}};
    li.physical = {uniforms:oi.merge([li.standard.uniforms, {clearCoat:{value:0}, clearCoatRoughness:{value:0}}]), vertexShader:ci.meshphysical_vert, fragmentShader:ci.meshphysical_frag}, Object.assign(j.prototype, {set:function(t, e) {
      return this.min.copy(t), this.max.copy(e), this;
    }, setFromPoints:function(t) {
      this.makeEmpty();
      for (var e = 0, i = t.length; e < i; e++) {
        this.expandByPoint(t[e]);
      }
      return this;
    }, setFromCenterAndSize:function() {
      var t = new i;
      return function(e, i) {
        return i = t.copy(i).multiplyScalar(.5), this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
      };
    }(), clone:function() {
      return (new this.constructor).copy(this);
    }, copy:function(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this;
    }, makeEmpty:function() {
      return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
    }, isEmpty:function() {
      return this.max.x < this.min.x || this.max.y < this.min.y;
    }, getCenter:function(t) {
      return t = t || new i, this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
    }, getSize:function(t) {
      return t = t || new i, this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min);
    }, expandByPoint:function(t) {
      return this.min.min(t), this.max.max(t), this;
    }, expandByVector:function(t) {
      return this.min.sub(t), this.max.add(t), this;
    }, expandByScalar:function(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this;
    }, containsPoint:function(t) {
      return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y);
    }, containsBox:function(t) {
      return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y;
    }, getParameter:function(t, e) {
      return (e || new i).set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y));
    }, intersectsBox:function(t) {
      return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y);
    }, clampPoint:function(t, e) {
      return (e || new i).copy(t).clamp(this.min, this.max);
    }, distanceToPoint:function() {
      var t = new i;
      return function(e) {
        return t.copy(e).clamp(this.min, this.max).sub(e).length();
      };
    }(), intersect:function(t) {
      return this.min.max(t.min), this.max.min(t.max), this;
    }, union:function(t) {
      return this.min.min(t.min), this.max.max(t.max), this;
    }, translate:function(t) {
      return this.min.add(t), this.max.add(t), this;
    }, equals:function(t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    }}), W.prototype = Object.create(o.prototype), W.prototype.constructor = W;
    var hi = 0;
    Object.assign($.prototype, e.prototype, {isMaterial:!0, onBeforeCompile:function() {
    }, setValues:function(t) {
      if (void 0 !== t) {
        for (var e in t) {
          var i = t[e];
          if (void 0 !== i) {
            if ("shading" === e) {
              this.flatShading = 1 === i;
            } else {
              var n = this[e];
              void 0 !== n && (n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = "overdraw" === e ? Number(i) : i);
            }
          }
        }
      }
    }, toJSON:!1, clone:function() {
      return (new this.constructor).copy(this);
    }, copy:function(t) {
      this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest =
      t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.overdraw = t.overdraw, this.visible = t.visible, this.userData = JSON.parse(JSON.stringify(t.userData)), this.clipShadows = t.clipShadows,
      this.clipIntersection = t.clipIntersection;
      i = null;
      if (null !== (t = t.clippingPlanes)) {
        for (var e = t.length, i = Array(e), n = 0; n !== e; ++n) {
          i[n] = t[n].clone();
        }
      }
      return this.clippingPlanes = i, this;
    }, dispose:function() {
      this.dispatchEvent({type:"dispose"});
    }}), Y.prototype = Object.create($.prototype), Y.prototype.constructor = Y, Y.prototype.isMeshDepthMaterial = !0, Y.prototype.copy = function(t) {
      return $.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
    }, Z.prototype = Object.create($.prototype), Z.prototype.constructor = Z, Z.prototype.isMeshDistanceMaterial = !0, Z.prototype.copy = function(t) {
      return $.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
    }, Object.assign(Q.prototype, {isBox3:!0, set:function(t, e) {
      return this.min.copy(t), this.max.copy(e), this;
    }, setFromArray:function(t) {
      for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, s = -1 / 0, o = 0, c = t.length; o < c; o += 3) {
        var l = t[o], h = t[o + 1], u = t[o + 2];
        l < e && (e = l), h < i && (i = h), u < n && (n = u), l > r && (r = l), h > a && (a = h), u > s && (s = u);
      }
      return this.min.set(e, i, n), this.max.set(r, a, s), this;
    }, setFromBufferAttribute:function(t) {
      for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, s = -1 / 0, o = 0, c = t.count; o < c; o++) {
        var l = t.getX(o), h = t.getY(o), u = t.getZ(o);
        l < e && (e = l), h < i && (i = h), u < n && (n = u), l > r && (r = l), h > a && (a = h), u > s && (s = u);
      }
      return this.min.set(e, i, n), this.max.set(r, a, s), this;
    }, setFromPoints:function(t) {
      this.makeEmpty();
      for (var e = 0, i = t.length; e < i; e++) {
        this.expandByPoint(t[e]);
      }
      return this;
    }, setFromCenterAndSize:function() {
      var t = new a;
      return function(e, i) {
        return i = t.copy(i).multiplyScalar(.5), this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
      };
    }(), setFromObject:function(t) {
      return this.makeEmpty(), this.expandByObject(t);
    }, clone:function() {
      return (new this.constructor).copy(this);
    }, copy:function(t) {
      return this.min.copy(t.min), this.max.copy(t.max), this;
    }, makeEmpty:function() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }, isEmpty:function() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }, getCenter:function(t) {
      return t = t || new a, this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
    }, getSize:function(t) {
      return t = t || new a, this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
    }, expandByPoint:function(t) {
      return this.min.min(t), this.max.max(t), this;
    }, expandByVector:function(t) {
      return this.min.sub(t), this.max.add(t), this;
    }, expandByScalar:function(t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this;
    }, expandByObject:function() {
      function t(t) {
        var a = t.geometry;
        if (void 0 !== a) {
          if (a.isGeometry) {
            for (a = a.vertices, i = 0, n = a.length; i < n; i++) {
              r.copy(a[i]), r.applyMatrix4(t.matrixWorld), e.expandByPoint(r);
            }
          } else {
            if (a.isBufferGeometry && void 0 !== (a = a.attributes.position)) {
              for (i = 0, n = a.count; i < n; i++) {
                r.fromBufferAttribute(a, i).applyMatrix4(t.matrixWorld), e.expandByPoint(r);
              }
            }
          }
        }
      }
      var e, i, n, r = new a;
      return function(i) {
        return e = this, i.updateMatrixWorld(!0), i.traverse(t), this;
      };
    }(), containsPoint:function(t) {
      return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
    }, containsBox:function(t) {
      return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
    }, getParameter:function(t, e) {
      return (e || new a).set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
    }, intersectsBox:function(t) {
      return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
    }, intersectsSphere:function() {
      var t = new a;
      return function(e) {
        return this.clampPoint(e.center, t), t.distanceToSquared(e.center) <= e.radius * e.radius;
      };
    }(), intersectsPlane:function(t) {
      if (0 < t.normal.x) {
        var e = t.normal.x * this.min.x, i = t.normal.x * this.max.x;
      } else {
        e = t.normal.x * this.max.x, i = t.normal.x * this.min.x;
      }
      return 0 < t.normal.y ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), 0 < t.normal.z ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= t.constant && i >= t.constant;
    }, clampPoint:function(t, e) {
      return (e || new a).copy(t).clamp(this.min, this.max);
    }, distanceToPoint:function() {
      var t = new a;
      return function(e) {
        return t.copy(e).clamp(this.min, this.max).sub(e).length();
      };
    }(), getBoundingSphere:function() {
      var t = new a;
      return function(e) {
        return e = e || new J, this.getCenter(e.center), e.radius = .5 * this.getSize(t).length(), e;
      };
    }(), intersect:function(t) {
      return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
    }, union:function(t) {
      return this.min.min(t.min), this.max.max(t.max), this;
    }, applyMatrix4:function() {
      var t = [new a, new a, new a, new a, new a, new a, new a, new a];
      return function(e) {
        return this.isEmpty() ? this : (t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), t[7].set(this.max.x, this.max.y,
        this.max.z).applyMatrix4(e), this.setFromPoints(t), this);
      };
    }(), translate:function(t) {
      return this.min.add(t), this.max.add(t), this;
    }, equals:function(t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    }}), Object.assign(J.prototype, {set:function(t, e) {
      return this.center.copy(t), this.radius = e, this;
    }, setFromPoints:function() {
      var t = new Q;
      return function(e, i) {
        var n = this.center;
        void 0 !== i ? n.copy(i) : t.setFromPoints(e).getCenter(n);
        for (var r = i = 0, a = e.length; r < a; r++) {
          i = Math.max(i, n.distanceToSquared(e[r]));
        }
        return this.radius = Math.sqrt(i), this;
      };
    }(), clone:function() {
      return (new this.constructor).copy(this);
    }, copy:function(t) {
      return this.center.copy(t.center), this.radius = t.radius, this;
    }, empty:function() {
      return 0 >= this.radius;
    }, containsPoint:function(t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius;
    }, distanceToPoint:function(t) {
      return t.distanceTo(this.center) - this.radius;
    }, intersectsSphere:function(t) {
      var e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e;
    }, intersectsBox:function(t) {
      return t.intersectsSphere(this);
    }, intersectsPlane:function(t) {
      return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
    }, clampPoint:function(t, e) {
      var i = this.center.distanceToSquared(t);
      return (e = e || new a).copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
    }, getBoundingBox:function(t) {
      return (t = t || new Q).set(this.center, this.center), t.expandByScalar(this.radius), t;
    }, applyMatrix4:function(t) {
      return this.center.applyMatrix4(t), this.radius *= t.getMaxScaleOnAxis(), this;
    }, translate:function(t) {
      return this.center.add(t), this;
    }, equals:function(t) {
      return t.center.equals(this.center) && t.radius === this.radius;
    }}), Object.assign(K.prototype, {set:function(t, e) {
      return this.normal.copy(t), this.constant = e, this;
    }, setComponents:function(t, e, i, n) {
      return this.normal.set(t, e, i), this.constant = n, this;
    }, setFromNormalAndCoplanarPoint:function(t, e) {
      return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
    }, setFromCoplanarPoints:function() {
      var t = new a, e = new a;
      return function(i, n, r) {
        return n = t.subVectors(r, n).cross(e.subVectors(i, n)).normalize(), this.setFromNormalAndCoplanarPoint(n, i), this;
      };
    }(), clone:function() {
      return (new this.constructor).copy(this);
    }, copy:function(t) {
      return this.normal.copy(t.normal), this.constant = t.constant, this;
    }, normalize:function() {
      var t = 1 / this.normal.length();
      return this.normal.multiplyScalar(t), this.constant *= t, this;
    }, negate:function() {
      return this.constant *= -1, this.normal.negate(), this;
    }, distanceToPoint:function(t) {
      return this.normal.dot(t) + this.constant;
    }, distanceToSphere:function(t) {
      return this.distanceToPoint(t.center) - t.radius;
    }, projectPoint:function(t, e) {
      return (e || new a).copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
    }, intersectLine:function() {
      var t = new a;
      return function(e, i) {
        i = i || new a;
        var n = e.delta(t), r = this.normal.dot(n);
        if (0 === r) {
          if (0 === this.distanceToPoint(e.start)) {
            return i.copy(e.start);
          }
        } else {
          if (!(0 > (r = -(e.start.dot(this.normal) + this.constant) / r) || 1 < r)) {
            return i.copy(n).multiplyScalar(r).add(e.start);
          }
        }
      };
    }(), intersectsLine:function(t) {
      var e = this.distanceToPoint(t.start);
      return t = this.distanceToPoint(t.end), 0 > e && 0 < t || 0 > t && 0 < e;
    }, intersectsBox:function(t) {
      return t.intersectsPlane(this);
    }, intersectsSphere:function(t) {
      return t.intersectsPlane(this);
    }, coplanarPoint:function(t) {
      return (t || new a).copy(this.normal).multiplyScalar(-this.constant);
    }, applyMatrix4:function() {
      var t = new a, e = new s;
      return function(i, n) {
        return n = n || e.getNormalMatrix(i), i = this.coplanarPoint(t).applyMatrix4(i), n = this.normal.applyMatrix3(n).normalize(), this.constant = -i.dot(n), this;
      };
    }(), translate:function(t) {
      return this.constant -= t.dot(this.normal), this;
    }, equals:function(t) {
      return t.normal.equals(this.normal) && t.constant === this.constant;
    }}), Object.assign(tt.prototype, {set:function(t, e, i, n, r, a) {
      var s = this.planes;
      return s[0].copy(t), s[1].copy(e), s[2].copy(i), s[3].copy(n), s[4].copy(r), s[5].copy(a), this;
    }, clone:function() {
      return (new this.constructor).copy(this);
    }, copy:function(t) {
      for (var e = this.planes, i = 0; 6 > i; i++) {
        e[i].copy(t.planes[i]);
      }
      return this;
    }, setFromMatrix:function(t) {
      var e = this.planes;
      t = (g = t.elements)[0];
      var i = g[1], n = g[2], r = g[3], a = g[4], s = g[5], o = g[6], c = g[7], l = g[8], h = g[9], u = g[10], d = g[11], p = g[12], f = g[13], m = g[14], g = g[15];
      return e[0].setComponents(r - t, c - a, d - l, g - p).normalize(), e[1].setComponents(r + t, c + a, d + l, g + p).normalize(), e[2].setComponents(r + i, c + s, d + h, g + f).normalize(), e[3].setComponents(r - i, c - s, d - h, g - f).normalize(), e[4].setComponents(r - n, c - o, d - u, g - m).normalize(), e[5].setComponents(r + n, c + o, d + u, g + m).normalize(), this;
    }, intersectsObject:function() {
      var t = new J;
      return function(e) {
        var i = e.geometry;
        return null === i.boundingSphere && i.computeBoundingSphere(), t.copy(i.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(t);
      };
    }(), intersectsSprite:function() {
      var t = new J;
      return function(e) {
        return t.center.set(0, 0, 0), t.radius = .7071067811865476, t.applyMatrix4(e.matrixWorld), this.intersectsSphere(t);
      };
    }(), intersectsSphere:function(t) {
      var e = this.planes, i = t.center;
      t = -t.radius;
      for (var n = 0; 6 > n; n++) {
        if (e[n].distanceToPoint(i) < t) {
          return !1;
        }
      }
      return !0;
    }, intersectsBox:function() {
      var t = new a, e = new a;
      return function(i) {
        for (var n = this.planes, r = 0; 6 > r; r++) {
          s = n[r];
          t.x = 0 < s.normal.x ? i.min.x : i.max.x, e.x = 0 < s.normal.x ? i.max.x : i.min.x, t.y = 0 < s.normal.y ? i.min.y : i.max.y, e.y = 0 < s.normal.y ? i.max.y : i.min.y, t.z = 0 < s.normal.z ? i.min.z : i.max.z, e.z = 0 < s.normal.z ? i.max.z : i.min.z;
          var a = s.distanceToPoint(t), s = s.distanceToPoint(e);
          if (0 > a && 0 > s) {
            return !1;
          }
        }
        return !0;
      };
    }(), containsPoint:function(t) {
      for (var e = this.planes, i = 0; 6 > i; i++) {
        if (0 > e[i].distanceToPoint(t)) {
          return !1;
        }
      }
      return !0;
    }}), nt.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" "), nt.DefaultOrder = "XYZ", Object.defineProperties(nt.prototype, {x:{get:function() {
      return this._x;
    }, set:function(t) {
      this._x = t, this.onChangeCallback();
    }}, y:{get:function() {
      return this._y;
    }, set:function(t) {
      this._y = t, this.onChangeCallback();
    }}, z:{get:function() {
      return this._z;
    }, set:function(t) {
      this._z = t, this.onChangeCallback();
    }}, order:{get:function() {
      return this._order;
    }, set:function(t) {
      this._order = t, this.onChangeCallback();
    }}}), Object.assign(nt.prototype, {isEuler:!0, set:function(t, e, i, n) {
      return this._x = t, this._y = e, this._z = i, this._order = n || this._order, this.onChangeCallback(), this;
    }, clone:function() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }, copy:function(t) {
      return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this;
    }, setFromRotationMatrix:function(t, e, i) {
      var n = Ze.clamp;
      t = (u = t.elements)[0];
      var r = u[4], a = u[8], s = u[1], o = u[5], c = u[9], l = u[2], h = u[6], u = u[10];
      return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(n(a, -1, 1)), .99999 > Math.abs(a) ? (this._x = Math.atan2(-c, u), this._z = Math.atan2(-r, t)) : (this._x = Math.atan2(h, o), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(c, -1, 1)), .99999 > Math.abs(c) ? (this._y = Math.atan2(a, u), this._z = Math.atan2(s, o)) : (this._y = Math.atan2(-l, t), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(n(h, -1, 1)), .99999 > Math.abs(h) ? (this._y = Math.atan2(-l, u), this._z =
      Math.atan2(-r, o)) : (this._y = 0, this._z = Math.atan2(s, t))) : "ZYX" === e ? (this._y = Math.asin(-n(l, -1, 1)), .99999 > Math.abs(l) ? (this._x = Math.atan2(h, u), this._z = Math.atan2(s, t)) : (this._x = 0, this._z = Math.atan2(-r, o))) : "YZX" === e ? (this._z = Math.asin(n(s, -1, 1)), .99999 > Math.abs(s) ? (this._x = Math.atan2(-c, o), this._y = Math.atan2(-l, t)) : (this._x = 0, this._y = Math.atan2(a, u))) : "XZY" === e && (this._z = Math.asin(-n(r, -1, 1)), .99999 > Math.abs(r) ?
      (this._x = Math.atan2(h, o), this._y = Math.atan2(a, t)) : (this._x = Math.atan2(-c, u), this._y = 0)), this._order = e, !1 !== i && this.onChangeCallback(), this;
    }, setFromQuaternion:function() {
      var t = new n;
      return function(e, i, n) {
        return t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, i, n);
      };
    }(), setFromVector3:function(t, e) {
      return this.set(t.x, t.y, t.z, e || this._order);
    }, reorder:function() {
      var t = new r;
      return function(e) {
        return t.setFromEuler(this), this.setFromQuaternion(t, e);
      };
    }(), equals:function(t) {
      return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
    }, fromArray:function(t) {
      return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this;
    }, toArray:function(t, e) {
      return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
    }, toVector3:function(t) {
      return t ? t.set(this._x, this._y, this._z) : new a(this._x, this._y, this._z);
    }, onChange:function(t) {
      return this.onChangeCallback = t, this;
    }, onChangeCallback:function() {
    }}), Object.assign(rt.prototype, {set:function(t) {
      this.mask = 1 << t | 0;
    }, enable:function(t) {
      this.mask = this.mask | 1 << t | 0;
    }, toggle:function(t) {
      this.mask ^= 1 << t | 0;
    }, disable:function(t) {
      this.mask &= ~(1 << t | 0);
    }, test:function(t) {
      return 0 != (this.mask & t.mask);
    }});
    var ui = 0;
    at.DefaultUp = new a(0, 1, 0), at.DefaultMatrixAutoUpdate = !0, Object.assign(at.prototype, e.prototype, {isObject3D:!0, onBeforeRender:function() {
    }, onAfterRender:function() {
    }, applyMatrix:function(t) {
      this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }, applyQuaternion:function(t) {
      return this.quaternion.premultiply(t), this;
    }, setRotationFromAxisAngle:function(t, e) {
      this.quaternion.setFromAxisAngle(t, e);
    }, setRotationFromEuler:function(t) {
      this.quaternion.setFromEuler(t, !0);
    }, setRotationFromMatrix:function(t) {
      this.quaternion.setFromRotationMatrix(t);
    }, setRotationFromQuaternion:function(t) {
      this.quaternion.copy(t);
    }, rotateOnAxis:function() {
      var t = new r;
      return function(e, i) {
        return t.setFromAxisAngle(e, i), this.quaternion.multiply(t), this;
      };
    }(), rotateOnWorldAxis:function() {
      var t = new r;
      return function(e, i) {
        return t.setFromAxisAngle(e, i), this.quaternion.premultiply(t), this;
      };
    }(), rotateX:function() {
      var t = new a(1, 0, 0);
      return function(e) {
        return this.rotateOnAxis(t, e);
      };
    }(), rotateY:function() {
      var t = new a(0, 1, 0);
      return function(e) {
        return this.rotateOnAxis(t, e);
      };
    }(), rotateZ:function() {
      var t = new a(0, 0, 1);
      return function(e) {
        return this.rotateOnAxis(t, e);
      };
    }(), translateOnAxis:function() {
      var t = new a;
      return function(e, i) {
        return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(i)), this;
      };
    }(), translateX:function() {
      var t = new a(1, 0, 0);
      return function(e) {
        return this.translateOnAxis(t, e);
      };
    }(), translateY:function() {
      var t = new a(0, 1, 0);
      return function(e) {
        return this.translateOnAxis(t, e);
      };
    }(), translateZ:function() {
      var t = new a(0, 0, 1);
      return function(e) {
        return this.translateOnAxis(t, e);
      };
    }(), localToWorld:function(t) {
      return t.applyMatrix4(this.matrixWorld);
    }, worldToLocal:function() {
      var t = new n;
      return function(e) {
        return e.applyMatrix4(t.getInverse(this.matrixWorld));
      };
    }(), lookAt:function() {
      var t = new n, e = new a;
      return function(i, n, r) {
        i.isVector3 ? e.copy(i) : e.set(i, n, r), this.isCamera ? t.lookAt(this.position, e, this.up) : t.lookAt(e, this.position, this.up), this.quaternion.setFromRotationMatrix(t);
      };
    }(), add:function(t) {
      if (1 < arguments.length) {
        for (var e = 0; e < arguments.length; e++) {
          this.add(arguments[e]);
        }
        return this;
      }
      return t === this ? this : (t && t.isObject3D && (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({type:"added"}), this.children.push(t)), this);
    }, remove:function(t) {
      if (1 < arguments.length) {
        for (var e = 0; e < arguments.length; e++) {
          this.remove(arguments[e]);
        }
        return this;
      }
      return -1 !== (e = this.children.indexOf(t)) && (t.parent = null, t.dispatchEvent({type:"removed"}), this.children.splice(e, 1)), this;
    }, getObjectById:function(t) {
      return this.getObjectByProperty("id", t);
    }, getObjectByName:function(t) {
      return this.getObjectByProperty("name", t);
    }, getObjectByProperty:function(t, e) {
      if (this[t] === e) {
        return this;
      }
      for (var i = 0, n = this.children.length; i < n; i++) {
        var r = this.children[i].getObjectByProperty(t, e);
        if (void 0 !== r) {
          return r;
        }
      }
    }, getWorldPosition:function(t) {
      return t = t || new a, this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld);
    }, getWorldQuaternion:function() {
      var t = new a, e = new a;
      return function(i) {
        return i = i || new r, this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, i, e), i;
      };
    }(), getWorldRotation:function() {
      var t = new r;
      return function(e) {
        return e = e || new nt, this.getWorldQuaternion(t), e.setFromQuaternion(t, this.rotation.order, !1);
      };
    }(), getWorldScale:function() {
      var t = new a, e = new r;
      return function(i) {
        return i = i || new a, this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, i), i;
      };
    }(), getWorldDirection:function() {
      var t = new r;
      return function(e) {
        return e = e || new a, this.getWorldQuaternion(t), e.set(0, 0, 1).applyQuaternion(t);
      };
    }(), raycast:function() {
    }, traverse:function(t) {
      t(this);
      for (var e = this.children, i = 0, n = e.length; i < n; i++) {
        e[i].traverse(t);
      }
    }, traverseVisible:function(t) {
      if (!1 !== this.visible) {
        t(this);
        for (var e = this.children, i = 0, n = e.length; i < n; i++) {
          e[i].traverseVisible(t);
        }
      }
    }, traverseAncestors:function(t) {
      var e = this.parent;
      null !== e && (t(e), e.traverseAncestors(t));
    }, updateMatrix:function() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
    }, updateMatrixWorld:function(t) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
      for (var e = this.children, i = 0, n = e.length; i < n; i++) {
        e[i].updateMatrixWorld(t);
      }
    }, toJSON:!1, clone:function(t) {
      return (new this.constructor).copy(this, t);
    }, copy:function(t, e) {
      if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled,
      this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e) {
        for (e = 0; e < t.children.length; e++) {
          this.add(t.children[e].clone());
        }
      }
      return this;
    }}), st.prototype = Object.assign(Object.create(at.prototype), {constructor:st, isCamera:!0, copy:function(t, e) {
      return at.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this;
    }, getWorldDirection:function() {
      var t = new r;
      return function(e) {
        return e = e || new a, this.getWorldQuaternion(t), e.set(0, 0, -1).applyQuaternion(t);
      };
    }(), updateMatrixWorld:function(t) {
      at.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld);
    }, clone:function() {
      return (new this.constructor).copy(this);
    }}), ot.prototype = Object.assign(Object.create(st.prototype), {constructor:ot, isOrthographicCamera:!0, copy:function(t, e) {
      return st.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this;
    }, setViewOffset:function(t, e, i, n, r, a) {
      null === this.view && (this.view = {enabled:!0, fullWidth:1, fullHeight:1, offsetX:0, offsetY:0, width:1, height:1}), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
    }, clearViewOffset:function() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
    }, updateProjectionMatrix:function() {
      var t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), i = (n = (this.right + this.left) / 2) - t, n = n + t, t = (a = (this.top + this.bottom) / 2) + e, e = a - e;
      if (null !== this.view && this.view.enabled) {
        var n = this.zoom / (this.view.width / this.view.fullWidth), e = this.zoom / (this.view.height / this.view.fullHeight), r = (this.right - this.left) / this.view.width, a = (this.top - this.bottom) / this.view.height, i = i + this.view.offsetX / n * r, n = i + this.view.width / n * r, t = t - this.view.offsetY / e * a, e = t - this.view.height / e * a;
      }
      this.projectionMatrix.makeOrthographic(i, n, t, e, this.near, this.far);
    }, toJSON:!1}), Object.assign(ct.prototype, {clone:function() {
      return (new this.constructor).copy(this);
    }, copy:function(t) {
      this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
      for (var e = 0, i = t.vertexNormals.length; e < i; e++) {
        this.vertexNormals[e] = t.vertexNormals[e].clone();
      }
      for (e = 0, i = t.vertexColors.length; e < i; e++) {
        this.vertexColors[e] = t.vertexColors[e].clone();
      }
      return this;
    }});
    var di = 0;
    Object.assign(lt.prototype, e.prototype, {isGeometry:!0, applyMatrix:function(t) {
      for (var e = (new s).getNormalMatrix(t), i = 0, n = this.vertices.length; i < n; i++) {
        this.vertices[i].applyMatrix4(t);
      }
      for (i = 0, n = this.faces.length; i < n; i++) {
        (t = this.faces[i]).normal.applyMatrix3(e).normalize();
        for (var r = 0, a = t.vertexNormals.length; r < a; r++) {
          t.vertexNormals[r].applyMatrix3(e).normalize();
        }
      }
      return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.normalsNeedUpdate = this.verticesNeedUpdate = !0, this;
    }, rotateX:function() {
      var t = new n;
      return function(e) {
        return t.makeRotationX(e), this.applyMatrix(t), this;
      };
    }(), rotateY:function() {
      var t = new n;
      return function(e) {
        return t.makeRotationY(e), this.applyMatrix(t), this;
      };
    }(), rotateZ:function() {
      var t = new n;
      return function(e) {
        return t.makeRotationZ(e), this.applyMatrix(t), this;
      };
    }(), translate:function() {
      var t = new n;
      return function(e, i, n) {
        return t.makeTranslation(e, i, n), this.applyMatrix(t), this;
      };
    }(), scale:function() {
      var t = new n;
      return function(e, i, n) {
        return t.makeScale(e, i, n), this.applyMatrix(t), this;
      };
    }(), lookAt:function() {
      var t = new at;
      return function(e) {
        t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix);
      };
    }(), fromBufferGeometry:function(t) {
      function e(t, e, i, r) {
        r = new ct(t, e, i, void 0 !== c ? [d[t].clone(), d[e].clone(), d[i].clone()] : [], void 0 !== l ? [n.colors[t].clone(), n.colors[e].clone(), n.colors[i].clone()] : [], r), n.faces.push(r), void 0 !== h && n.faceVertexUvs[0].push([p[t].clone(), p[e].clone(), p[i].clone()]), void 0 !== u && n.faceVertexUvs[1].push([f[t].clone(), f[e].clone(), f[i].clone()]);
      }
      var n = this, r = null !== t.index ? t.index.array : void 0, s = t.attributes, o = s.position.array, c = void 0 !== s.normal ? s.normal.array : void 0, l = void 0 !== s.color ? s.color.array : void 0, h = void 0 !== s.uv ? s.uv.array : void 0, u = void 0 !== s.uv2 ? s.uv2.array : void 0;
      void 0 !== u && (this.faceVertexUvs[1] = []);
      for (var d = [], p = [], f = [], m = s = 0; s < o.length; s += 3, m += 2) {
        n.vertices.push(new a(o[s], o[s + 1], o[s + 2])), void 0 !== c && d.push(new a(c[s], c[s + 1], c[s + 2])), void 0 !== l && n.colors.push(new G(l[s], l[s + 1], l[s + 2])), void 0 !== h && p.push(new i(h[m], h[m + 1])), void 0 !== u && f.push(new i(u[m], u[m + 1]));
      }
      var g = t.groups;
      if (0 < g.length) {
        for (s = 0; s < g.length; s++) {
          for (var o = g[s], v = o.start, y = o.count, m = v, v = v + y; m < v; m += 3) {
            void 0 !== r ? e(r[m], r[m + 1], r[m + 2], o.materialIndex) : e(m, m + 1, m + 2, o.materialIndex);
          }
        }
      } else {
        if (void 0 !== r) {
          for (s = 0; s < r.length; s += 3) {
            e(r[s], r[s + 1], r[s + 2]);
          }
        } else {
          for (s = 0; s < o.length / 3; s += 3) {
            e(s, s + 1, s + 2);
          }
        }
      }
      return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this;
    }, center:function() {
      this.computeBoundingBox();
      var t = this.boundingBox.getCenter().negate();
      return this.translate(t.x, t.y, t.z), t;
    }, normalize:function() {
      this.computeBoundingSphere();
      var t = this.boundingSphere.center, e = 0 === (e = this.boundingSphere.radius) ? 1 : 1 / e, i = new n;
      return i.set(e, 0, 0, -e * t.x, 0, e, 0, -e * t.y, 0, 0, e, -e * t.z, 0, 0, 0, 1), this.applyMatrix(i), this;
    }, computeFaceNormals:function() {
      for (var t = new a, e = new a, i = 0, n = this.faces.length; i < n; i++) {
        var r = this.faces[i], s = this.vertices[r.a], o = this.vertices[r.b];
        t.subVectors(this.vertices[r.c], o), e.subVectors(s, o), t.cross(e), t.normalize(), r.normal.copy(t);
      }
    }, computeVertexNormals:function(t) {
      void 0 === t && (t = !0);
      var e, i = Array(this.vertices.length), n = 0;
      for (e = this.vertices.length; n < e; n++) {
        i[n] = new a;
      }
      if (t) {
        var r = new a, s = new a;
        for (t = 0, n = this.faces.length; t < n; t++) {
          e = this.faces[t];
          var o = this.vertices[e.a], c = this.vertices[e.b], l = this.vertices[e.c];
          r.subVectors(l, c), s.subVectors(o, c), r.cross(s), i[e.a].add(r), i[e.b].add(r), i[e.c].add(r);
        }
      } else {
        for (this.computeFaceNormals(), t = 0, n = this.faces.length; t < n; t++) {
          e = this.faces[t], i[e.a].add(e.normal), i[e.b].add(e.normal), i[e.c].add(e.normal);
        }
      }
      for (n = 0, e = this.vertices.length; n < e; n++) {
        i[n].normalize();
      }
      for (t = 0, n = this.faces.length; t < n; t++) {
        e = this.faces[t], 3 === (o = e.vertexNormals).length ? (o[0].copy(i[e.a]), o[1].copy(i[e.b]), o[2].copy(i[e.c])) : (o[0] = i[e.a].clone(), o[1] = i[e.b].clone(), o[2] = i[e.c].clone());
      }
      0 < this.faces.length && (this.normalsNeedUpdate = !0);
    }, computeFlatVertexNormals:function() {
      var t;
      this.computeFaceNormals();
      var e = 0;
      for (t = this.faces.length; e < t; e++) {
        var i = this.faces[e], n = i.vertexNormals;
        3 === n.length ? (n[0].copy(i.normal), n[1].copy(i.normal), n[2].copy(i.normal)) : (n[0] = i.normal.clone(), n[1] = i.normal.clone(), n[2] = i.normal.clone());
      }
      0 < this.faces.length && (this.normalsNeedUpdate = !0);
    }, computeMorphNormals:function() {
      var t, e, i = 0;
      for (e = this.faces.length; i < e; i++) {
        var n = this.faces[i];
        n.__originalFaceNormal ? n.__originalFaceNormal.copy(n.normal) : n.__originalFaceNormal = n.normal.clone(), n.__originalVertexNormals || (n.__originalVertexNormals = []);
        var r = 0;
        for (t = n.vertexNormals.length; r < t; r++) {
          n.__originalVertexNormals[r] ? n.__originalVertexNormals[r].copy(n.vertexNormals[r]) : n.__originalVertexNormals[r] = n.vertexNormals[r].clone();
        }
      }
      var s = new lt;
      for (s.faces = this.faces, r = 0, t = this.morphTargets.length; r < t; r++) {
        if (!this.morphNormals[r]) {
          this.morphNormals[r] = {}, this.morphNormals[r].faceNormals = [], this.morphNormals[r].vertexNormals = [], n = this.morphNormals[r].faceNormals;
          var o = this.morphNormals[r].vertexNormals;
          for (i = 0, e = this.faces.length; i < e; i++) {
            var c = new a, l = {a:new a, b:new a, c:new a};
            n.push(c), o.push(l);
          }
        }
        for (o = this.morphNormals[r], s.vertices = this.morphTargets[r].vertices, s.computeFaceNormals(), s.computeVertexNormals(), i = 0, e = this.faces.length; i < e; i++) {
          n = this.faces[i], c = o.faceNormals[i], l = o.vertexNormals[i], c.copy(n.normal), l.a.copy(n.vertexNormals[0]), l.b.copy(n.vertexNormals[1]), l.c.copy(n.vertexNormals[2]);
        }
      }
      for (i = 0, e = this.faces.length; i < e; i++) {
        n = this.faces[i], n.normal = n.__originalFaceNormal, n.vertexNormals = n.__originalVertexNormals;
      }
    }, computeLineDistances:function() {
      for (var t = 0, e = this.vertices, i = 0, n = e.length; i < n; i++) {
        0 < i && (t += e[i].distanceTo(e[i - 1])), this.lineDistances[i] = t;
      }
    }, computeBoundingBox:function() {
      null === this.boundingBox && (this.boundingBox = new Q), this.boundingBox.setFromPoints(this.vertices);
    }, computeBoundingSphere:function() {
      null === this.boundingSphere && (this.boundingSphere = new J), this.boundingSphere.setFromPoints(this.vertices);
    }, merge:function(t, e, i) {
      if (t && t.isGeometry) {
        var n, r = this.vertices.length, a = this.vertices, o = t.vertices, c = this.faces, l = t.faces, h = this.faceVertexUvs[0], u = t.faceVertexUvs[0], d = this.colors, p = t.colors;
        void 0 === i && (i = 0), void 0 !== e && (n = (new s).getNormalMatrix(e)), t = 0;
        for (var f = o.length; t < f; t++) {
          var m = o[t].clone();
          void 0 !== e && m.applyMatrix4(e), a.push(m);
        }
        for (t = 0, f = p.length; t < f; t++) {
          d.push(p[t].clone());
        }
        for (t = 0, f = l.length; t < f; t++) {
          var g = (o = l[t]).vertexNormals, p = o.vertexColors;
          for ((d = new ct(o.a + r, o.b + r, o.c + r)).normal.copy(o.normal), void 0 !== n && d.normal.applyMatrix3(n).normalize(), e = 0, a = g.length; e < a; e++) {
            m = g[e].clone(), void 0 !== n && m.applyMatrix3(n).normalize(), d.vertexNormals.push(m);
          }
          for (d.color.copy(o.color), e = 0, a = p.length; e < a; e++) {
            m = p[e], d.vertexColors.push(m.clone());
          }
          d.materialIndex = o.materialIndex + i, c.push(d);
        }
        for (t = 0, f = u.length; t < f; t++) {
          if (i = u[t], n = [], void 0 !== i) {
            for (e = 0, a = i.length; e < a; e++) {
              n.push(i[e].clone());
            }
            h.push(n);
          }
        }
      }
    }, mergeMesh:function(t) {
      t && t.isMesh && (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix));
    }, mergeVertices:function() {
      var t, e = {}, i = [], n = [], r = Math.pow(10, 4), a = 0;
      for (t = this.vertices.length; a < t; a++) {
        var s = this.vertices[a];
        void 0 === e[s = Math.round(s.x * r) + "_" + Math.round(s.y * r) + "_" + Math.round(s.z * r)] ? (e[s] = a, i.push(this.vertices[a]), n[a] = i.length - 1) : n[a] = n[e[s]];
      }
      for (e = [], a = 0, t = this.faces.length; a < t; a++) {
        for (r = this.faces[a], r.a = n[r.a], r.b = n[r.b], r.c = n[r.c], r = [r.a, r.b, r.c], s = 0; 3 > s; s++) {
          if (r[s] === r[(s + 1) % 3]) {
            e.push(a);
            break;
          }
        }
      }
      for (a = e.length - 1; 0 <= a; a--) {
        for (r = e[a], this.faces.splice(r, 1), n = 0, t = this.faceVertexUvs.length; n < t; n++) {
          this.faceVertexUvs[n].splice(r, 1);
        }
      }
      return a = this.vertices.length - i.length, this.vertices = i, a;
    }, setFromPoints:function(t) {
      this.vertices = [];
      for (var e = 0, i = t.length; e < i; e++) {
        var n = t[e];
        this.vertices.push(new a(n.x, n.y, n.z || 0));
      }
      return this;
    }, sortFacesByMaterialIndex:function() {
      for (var t = this.faces, e = t.length, i = 0; i < e; i++) {
        t[i]._id = i;
      }
      t.sort(function(t, e) {
        return t.materialIndex - e.materialIndex;
      });
      var n, r, a = this.faceVertexUvs[0], s = this.faceVertexUvs[1];
      for (a && a.length === e && (n = []), s && s.length === e && (r = []), i = 0; i < e; i++) {
        var o = t[i]._id;
        n && n.push(a[o]), r && r.push(s[o]);
      }
      n && (this.faceVertexUvs[0] = n), r && (this.faceVertexUvs[1] = r);
    }, toJSON:!1, clone:function() {
      return (new lt).copy(this);
    }, copy:function(t) {
      var e, i, n;
      this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingSphere = this.boundingBox = null, this.name = t.name;
      var r = t.vertices, a = 0;
      for (e = r.length; a < e; a++) {
        this.vertices.push(r[a].clone());
      }
      for (a = 0, e = (r = t.colors).length; a < e; a++) {
        this.colors.push(r[a].clone());
      }
      for (a = 0, e = (r = t.faces).length; a < e; a++) {
        this.faces.push(r[a].clone());
      }
      for (a = 0, e = t.faceVertexUvs.length; a < e; a++) {
        var s = t.faceVertexUvs[a];
        for (void 0 === this.faceVertexUvs[a] && (this.faceVertexUvs[a] = []), r = 0, i = s.length; r < i; r++) {
          var o = s[r], c = [], l = 0;
          for (n = o.length; l < n; l++) {
            c.push(o[l].clone());
          }
          this.faceVertexUvs[a].push(c);
        }
      }
      for (a = 0, e = (l = t.morphTargets).length; a < e; a++) {
        if (n = {}, n.name = l[a].name, void 0 !== l[a].vertices) {
          for (n.vertices = [], r = 0, i = l[a].vertices.length; r < i; r++) {
            n.vertices.push(l[a].vertices[r].clone());
          }
        }
        if (void 0 !== l[a].normals) {
          for (n.normals = [], r = 0, i = l[a].normals.length; r < i; r++) {
            n.normals.push(l[a].normals[r].clone());
          }
        }
        this.morphTargets.push(n);
      }
      for (a = 0, e = (l = t.morphNormals).length; a < e; a++) {
        if (n = {}, void 0 !== l[a].vertexNormals) {
          for (n.vertexNormals = [], r = 0, i = l[a].vertexNormals.length; r < i; r++) {
            s = l[a].vertexNormals[r], o = {}, o.a = s.a.clone(), o.b = s.b.clone(), o.c = s.c.clone(), n.vertexNormals.push(o);
          }
        }
        if (void 0 !== l[a].faceNormals) {
          for (n.faceNormals = [], r = 0, i = l[a].faceNormals.length; r < i; r++) {
            n.faceNormals.push(l[a].faceNormals[r].clone());
          }
        }
        this.morphNormals.push(n);
      }
      for (a = 0, e = (r = t.skinWeights).length; a < e; a++) {
        this.skinWeights.push(r[a].clone());
      }
      for (a = 0, e = (r = t.skinIndices).length; a < e; a++) {
        this.skinIndices.push(r[a].clone());
      }
      for (a = 0, e = (r = t.lineDistances).length; a < e; a++) {
        this.lineDistances.push(r[a]);
      }
      return null !== (a = t.boundingBox) && (this.boundingBox = a.clone()), null !== (a = t.boundingSphere) && (this.boundingSphere = a.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this;
    }, dispose:function() {
      this.dispatchEvent({type:"dispose"});
    }}), Object.defineProperty(ht.prototype, "needsUpdate", {set:function(t) {
      !0 === t && this.version++;
    }}), Object.assign(ht.prototype, {isBufferAttribute:!0, setArray:function(t) {
      if (Array.isArray(t)) {
        throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      }
      this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t;
    }, setDynamic:function(t) {
      return this.dynamic = t, this;
    }, copy:function(t) {
      return this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this;
    }, copyAt:function(t, e, i) {
      t *= this.itemSize, i *= e.itemSize;
      for (var n = 0, r = this.itemSize; n < r; n++) {
        this.array[t + n] = e.array[i + n];
      }
      return this;
    }, copyArray:function(t) {
      return this.array.set(t), this;
    }, copyColorsArray:function(t) {
      for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
        var a = t[n];
        void 0 === a && (a = new G), e[i++] = a.r, e[i++] = a.g, e[i++] = a.b;
      }
      return this;
    }, copyIndicesArray:function(t) {
      for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
        var a = t[n];
        e[i++] = a.a, e[i++] = a.b, e[i++] = a.c;
      }
      return this;
    }, copyVector2sArray:function(t) {
      for (var e = this.array, n = 0, r = 0, a = t.length; r < a; r++) {
        var s = t[r];
        void 0 === s && (s = new i), e[n++] = s.x, e[n++] = s.y;
      }
      return this;
    }, copyVector3sArray:function(t) {
      for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
        var s = t[n];
        void 0 === s && (s = new a), e[i++] = s.x, e[i++] = s.y, e[i++] = s.z;
      }
      return this;
    }, copyVector4sArray:function(t) {
      for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
        var a = t[n];
        void 0 === a && (a = new c), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z, e[i++] = a.w;
      }
      return this;
    }, set:function(t, e) {
      return void 0 === e && (e = 0), this.array.set(t, e), this;
    }, getX:function(t) {
      return this.array[t * this.itemSize];
    }, setX:function(t, e) {
      return this.array[t * this.itemSize] = e, this;
    }, getY:function(t) {
      return this.array[t * this.itemSize + 1];
    }, setY:function(t, e) {
      return this.array[t * this.itemSize + 1] = e, this;
    }, getZ:function(t) {
      return this.array[t * this.itemSize + 2];
    }, setZ:function(t, e) {
      return this.array[t * this.itemSize + 2] = e, this;
    }, getW:function(t) {
      return this.array[t * this.itemSize + 3];
    }, setW:function(t, e) {
      return this.array[t * this.itemSize + 3] = e, this;
    }, setXY:function(t, e, i) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this;
    }, setXYZ:function(t, e, i, n) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this;
    }, setXYZW:function(t, e, i, n, r) {
      return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this;
    }, onUpload:function(t) {
      return this.onUploadCallback = t, this;
    }, clone:function() {
      return (new this.constructor(this.array, this.itemSize)).copy(this);
    }}), (ut.prototype = Object.create(ht.prototype)).constructor = ut, (dt.prototype = Object.create(ht.prototype)).constructor = dt, (pt.prototype = Object.create(ht.prototype)).constructor = pt, (ft.prototype = Object.create(ht.prototype)).constructor = ft, mt.prototype = Object.create(ht.prototype), mt.prototype.constructor = mt, (gt.prototype = Object.create(ht.prototype)).constructor = gt, vt.prototype = Object.create(ht.prototype), vt.prototype.constructor = vt, yt.prototype = Object.create(ht.prototype),
    yt.prototype.constructor = yt, (xt.prototype = Object.create(ht.prototype)).constructor = xt, Object.assign(bt.prototype, {computeGroups:function(t) {
      var e = [], i = void 0;
      t = t.faces;
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        if (r.materialIndex !== i) {
          i = r.materialIndex, void 0 !== a && (a.count = 3 * n - a.start, e.push(a));
          var a = {start:3 * n, materialIndex:i};
        }
      }
      void 0 !== a && (a.count = 3 * n - a.start, e.push(a)), this.groups = e;
    }, fromGeometry:function(t) {
      var e = t.faces, n = t.vertices, r = t.faceVertexUvs, a = r[0] && 0 < r[0].length, s = r[1] && 0 < r[1].length, o = t.morphTargets, c = o.length;
      if (0 < c) {
        for (var l = [], h = 0; h < c; h++) {
          l[h] = [];
        }
        this.morphTargets.position = l;
      }
      var u = t.morphNormals, d = u.length;
      if (0 < d) {
        var p = [];
        for (h = 0; h < d; h++) {
          p[h] = [];
        }
        this.morphTargets.normal = p;
      }
      for (var f = t.skinIndices, m = t.skinWeights, g = f.length === n.length, v = m.length === n.length, h = 0; h < e.length; h++) {
        var y = e[h];
        this.vertices.push(n[y.a], n[y.b], n[y.c]);
        var x = y.vertexNormals;
        for (3 === x.length ? this.normals.push(x[0], x[1], x[2]) : (x = y.normal, this.normals.push(x, x, x)), 3 === (x = y.vertexColors).length ? this.colors.push(x[0], x[1], x[2]) : (x = y.color, this.colors.push(x, x, x)), !0 === a && (void 0 !== (x = r[0][h]) ? this.uvs.push(x[0], x[1], x[2]) : this.uvs.push(new i, new i, new i)), !0 === s && (void 0 !== (x = r[1][h]) ? this.uvs2.push(x[0], x[1], x[2]) : this.uvs2.push(new i, new i, new i)), x = 0; x < c; x++) {
          var b = o[x].vertices;
          l[x].push(b[y.a], b[y.b], b[y.c]);
        }
        for (x = 0; x < d; x++) {
          b = u[x].vertexNormals[h], p[x].push(b.a, b.b, b.c);
        }
        g && this.skinIndices.push(f[y.a], f[y.b], f[y.c]), v && this.skinWeights.push(m[y.a], m[y.b], m[y.c]);
      }
      return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this;
    }});
    var pi = 1;
    Object.assign(wt.prototype, e.prototype, {isBufferGeometry:!0, getIndex:function() {
      return this.index;
    }, setIndex:function(t) {
      Array.isArray(t) ? this.index = new (65535 < _t(t) ? vt : mt)(t, 1) : this.index = t;
    }, addAttribute:function(t, e, i) {
      if (e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute) {
        if ("index" !== t) {
          return this.attributes[t] = e, this;
        }
        this.setIndex(e);
      } else {
        this.addAttribute(t, new ht(e, i));
      }
    }, getAttribute:function(t) {
      return this.attributes[t];
    }, removeAttribute:function(t) {
      return delete this.attributes[t], this;
    }, addGroup:function(t, e, i) {
      this.groups.push({start:t, count:e, materialIndex:void 0 !== i ? i : 0});
    }, clearGroups:function() {
      this.groups = [];
    }, setDrawRange:function(t, e) {
      this.drawRange.start = t, this.drawRange.count = e;
    }, applyMatrix:function(t) {
      var e = this.attributes.position;
      return void 0 !== e && (t.applyToBufferAttribute(e), e.needsUpdate = !0), void 0 !== (e = this.attributes.normal) && ((new s).getNormalMatrix(t).applyToBufferAttribute(e), e.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
    }, rotateX:function() {
      var t = new n;
      return function(e) {
        return t.makeRotationX(e), this.applyMatrix(t), this;
      };
    }(), rotateY:function() {
      var t = new n;
      return function(e) {
        return t.makeRotationY(e), this.applyMatrix(t), this;
      };
    }(), rotateZ:function() {
      var t = new n;
      return function(e) {
        return t.makeRotationZ(e), this.applyMatrix(t), this;
      };
    }(), translate:function() {
      var t = new n;
      return function(e, i, n) {
        return t.makeTranslation(e, i, n), this.applyMatrix(t), this;
      };
    }(), scale:function() {
      var t = new n;
      return function(e, i, n) {
        return t.makeScale(e, i, n), this.applyMatrix(t), this;
      };
    }(), lookAt:function() {
      var t = new at;
      return function(e) {
        t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix);
      };
    }(), center:function() {
      this.computeBoundingBox();
      var t = this.boundingBox.getCenter().negate();
      return this.translate(t.x, t.y, t.z), t;
    }, setFromObject:function(t) {
      var e = t.geometry;
      if (t.isPoints || t.isLine) {
        t = new yt(3 * e.vertices.length, 3);
        var i = new yt(3 * e.colors.length, 3);
        this.addAttribute("position", t.copyVector3sArray(e.vertices)), this.addAttribute("color", i.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length && (t = new yt(e.lineDistances.length, 1), this.addAttribute("lineDistance", t.copyArray(e.lineDistances))), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone());
      } else {
        t.isMesh && e && e.isGeometry && this.fromGeometry(e);
      }
      return this;
    }, setFromPoints:function(t) {
      for (var e = [], i = 0, n = t.length; i < n; i++) {
        var r = t[i];
        e.push(r.x, r.y, r.z || 0);
      }
      return this.addAttribute("position", new yt(e, 3)), this;
    }, updateFromObject:function(t) {
      var e = t.geometry;
      if (t.isMesh) {
        var i = e.__directGeometry;
        if (!0 === e.elementsNeedUpdate && (i = void 0, e.elementsNeedUpdate = !1), void 0 === i) {
          return this.fromGeometry(e);
        }
        i.verticesNeedUpdate = e.verticesNeedUpdate, i.normalsNeedUpdate = e.normalsNeedUpdate, i.colorsNeedUpdate = e.colorsNeedUpdate, i.uvsNeedUpdate = e.uvsNeedUpdate, i.groupsNeedUpdate = e.groupsNeedUpdate, e.verticesNeedUpdate = !1, e.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.uvsNeedUpdate = !1, e.groupsNeedUpdate = !1, e = i;
      }
      return !0 === e.verticesNeedUpdate && (void 0 !== (i = this.attributes.position) && (i.copyVector3sArray(e.vertices), i.needsUpdate = !0), e.verticesNeedUpdate = !1), !0 === e.normalsNeedUpdate && (void 0 !== (i = this.attributes.normal) && (i.copyVector3sArray(e.normals), i.needsUpdate = !0), e.normalsNeedUpdate = !1), !0 === e.colorsNeedUpdate && (void 0 !== (i = this.attributes.color) && (i.copyColorsArray(e.colors), i.needsUpdate = !0), e.colorsNeedUpdate = !1), e.uvsNeedUpdate && (void 0 !==
      (i = this.attributes.uv) && (i.copyVector2sArray(e.uvs), i.needsUpdate = !0), e.uvsNeedUpdate = !1), e.lineDistancesNeedUpdate && (void 0 !== (i = this.attributes.lineDistance) && (i.copyArray(e.lineDistances), i.needsUpdate = !0), e.lineDistancesNeedUpdate = !1), e.groupsNeedUpdate && (e.computeGroups(t.geometry), this.groups = e.groups, e.groupsNeedUpdate = !1), this;
    }, fromGeometry:function(t) {
      return t.__directGeometry = (new bt).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry);
    }, fromDirectGeometry:function(t) {
      i = new Float32Array(3 * t.vertices.length);
      this.addAttribute("position", (new ht(i, 3)).copyVector3sArray(t.vertices)), 0 < t.normals.length && (i = new Float32Array(3 * t.normals.length), this.addAttribute("normal", (new ht(i, 3)).copyVector3sArray(t.normals))), 0 < t.colors.length && (i = new Float32Array(3 * t.colors.length), this.addAttribute("color", (new ht(i, 3)).copyColorsArray(t.colors))), 0 < t.uvs.length && (i = new Float32Array(2 * t.uvs.length), this.addAttribute("uv", (new ht(i, 2)).copyVector2sArray(t.uvs))), 0 < t.uvs2.length &&
      (i = new Float32Array(2 * t.uvs2.length), this.addAttribute("uv2", (new ht(i, 2)).copyVector2sArray(t.uvs2))), 0 < t.indices.length && (i = new (65535 < _t(t.indices) ? Uint32Array : Uint16Array)(3 * t.indices.length), this.setIndex((new ht(i, 1)).copyIndicesArray(t.indices))), this.groups = t.groups;
      for (var e in t.morphTargets) {
        for (var i = [], n = t.morphTargets[e], r = 0, a = n.length; r < a; r++) {
          var s = n[r], o = new yt(3 * s.length, 3);
          i.push(o.copyVector3sArray(s));
        }
        this.morphAttributes[e] = i;
      }
      return 0 < t.skinIndices.length && (e = new yt(4 * t.skinIndices.length, 4), this.addAttribute("skinIndex", e.copyVector4sArray(t.skinIndices))), 0 < t.skinWeights.length && (e = new yt(4 * t.skinWeights.length, 4), this.addAttribute("skinWeight", e.copyVector4sArray(t.skinWeights))), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this;
    }, computeBoundingBox:function() {
      null === this.boundingBox && (this.boundingBox = new Q);
      var t = this.attributes.position;
      void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(), isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z);
    }, computeBoundingSphere:function() {
      var t = new Q, e = new a;
      return function() {
        null === this.boundingSphere && (this.boundingSphere = new J);
        var i = this.attributes.position;
        if (i) {
          var n = this.boundingSphere.center;
          t.setFromBufferAttribute(i), t.getCenter(n);
          for (var r = 0, a = 0, s = i.count; a < s; a++) {
            e.x = i.getX(a), e.y = i.getY(a), e.z = i.getZ(a), r = Math.max(r, n.distanceToSquared(e));
          }
          this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius);
        }
      };
    }(), computeFaceNormals:function() {
    }, computeVertexNormals:function() {
      var t = this.index, e = this.attributes, i = this.groups;
      if (e.position) {
        var n = e.position.array;
        if (void 0 === e.normal) {
          this.addAttribute("normal", new ht(new Float32Array(n.length), 3));
        } else {
          for (var r = e.normal.array, s = 0, o = r.length; s < o; s++) {
            r[s] = 0;
          }
        }
        var r = e.normal.array, c = new a, l = new a, h = new a, u = new a, d = new a;
        if (t) {
          t = t.array, 0 === i.length && this.addGroup(0, t.length);
          for (var p = 0, f = i.length; p < f; ++p) {
            o = (s = i[p]).start;
            var m = s.count;
            for (s = o, o += m; s < o; s += 3) {
              m = 3 * t[s + 0];
              var g = 3 * t[s + 1], v = 3 * t[s + 2];
              c.fromArray(n, m), l.fromArray(n, g), h.fromArray(n, v), u.subVectors(h, l), d.subVectors(c, l), u.cross(d), r[m] += u.x, r[m + 1] += u.y, r[m + 2] += u.z, r[g] += u.x, r[g + 1] += u.y, r[g + 2] += u.z, r[v] += u.x, r[v + 1] += u.y, r[v + 2] += u.z;
            }
          }
        } else {
          for (s = 0, o = n.length; s < o; s += 9) {
            c.fromArray(n, s), l.fromArray(n, s + 3), h.fromArray(n, s + 6), u.subVectors(h, l), d.subVectors(c, l), u.cross(d), r[s] = u.x, r[s + 1] = u.y, r[s + 2] = u.z, r[s + 3] = u.x, r[s + 4] = u.y, r[s + 5] = u.z, r[s + 6] = u.x, r[s + 7] = u.y, r[s + 8] = u.z;
          }
        }
        this.normalizeNormals(), e.normal.needsUpdate = !0;
      }
    }, merge:function(t, e) {
      if (t && t.isBufferGeometry) {
        void 0 === e && (e = 0);
        var i, n = this.attributes;
        for (i in n) {
          if (void 0 !== t.attributes[i]) {
            for (var r = n[i].array, a = t.attributes[i], s = a.array, o = 0, a = a.itemSize * e; o < s.length; o++, a++) {
              r[a] = s[o];
            }
          }
        }
        return this;
      }
    }, normalizeNormals:function() {
      var t = new a;
      return function() {
        for (var e = this.attributes.normal, i = 0, n = e.count; i < n; i++) {
          t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.normalize(), e.setXYZ(i, t.x, t.y, t.z);
        }
      };
    }(), toNonIndexed:function() {
      if (null === this.index) {
        return this;
      }
      var t, e = new wt, i = this.index.array, n = this.attributes;
      for (t in n) {
        for (var r, a = (s = n[t]).array, s = s.itemSize, o = new a.constructor(i.length * s), c = 0, l = 0, h = i.length; l < h; l++) {
          r = i[l] * s;
          for (var u = 0; u < s; u++) {
            o[c++] = a[r++];
          }
        }
        e.addAttribute(t, new ht(o, s));
      }
      return e;
    }, toJSON:!1, clone:function() {
      return (new wt).copy(this);
    }, copy:function(t) {
      var e;
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingSphere = this.boundingBox = null, this.name = t.name;
      var i = t.index;
      null !== i && this.setIndex(i.clone()), i = t.attributes;
      for (s in i) {
        this.addAttribute(s, i[s].clone());
      }
      var n = t.morphAttributes;
      for (s in n) {
        var r = [], a = n[s];
        for (i = 0, e = a.length; i < e; i++) {
          r.push(a[i].clone());
        }
        this.morphAttributes[s] = r;
      }
      var s = t.groups;
      for (i = 0, e = s.length; i < e; i++) {
        n = s[i], this.addGroup(n.start, n.count, n.materialIndex);
      }
      return null !== (s = t.boundingBox) && (this.boundingBox = s.clone()), null !== (s = t.boundingSphere) && (this.boundingSphere = s.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this;
    }, dispose:function() {
      this.dispatchEvent({type:"dispose"});
    }}), (Mt.prototype = Object.create(lt.prototype)).constructor = Mt, Et.prototype = Object.create(wt.prototype), Et.prototype.constructor = Et, (Tt.prototype = Object.create(lt.prototype)).constructor = Tt, St.prototype = Object.create(wt.prototype), St.prototype.constructor = St, At.prototype = Object.create($.prototype), At.prototype.constructor = At, At.prototype.isMeshBasicMaterial = !0, At.prototype.copy = function(t) {
      return $.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap =
      t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this;
    }, Ct.prototype = Object.create($.prototype), Ct.prototype.constructor = Ct, Ct.prototype.isShaderMaterial = !0, Ct.prototype.copy = function(t) {
      return $.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = oi.clone(t.uniforms), this.defines = t.defines, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this;
    }, Ct.prototype.toJSON = function(t) {
      return t = $.prototype.toJSON.call(this, t), t.uniforms = this.uniforms, t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t;
    }, Object.assign(Lt.prototype, {set:function(t, e) {
      return this.origin.copy(t), this.direction.copy(e), this;
    }, clone:function() {
      return (new this.constructor).copy(this);
    }, copy:function(t) {
      return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
    }, at:function(t, e) {
      return (e || new a).copy(this.direction).multiplyScalar(t).add(this.origin);
    }, lookAt:function(t) {
      return this.direction.copy(t).sub(this.origin).normalize(), this;
    }, recast:function() {
      var t = new a;
      return function(e) {
        return this.origin.copy(this.at(e, t)), this;
      };
    }(), closestPointToPoint:function(t, e) {
      return (e = e || new a).subVectors(t, this.origin), 0 > (t = e.dot(this.direction)) ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(t).add(this.origin);
    }, distanceToPoint:function(t) {
      return Math.sqrt(this.distanceSqToPoint(t));
    }, distanceSqToPoint:function() {
      var t = new a;
      return function(e) {
        var i = t.subVectors(e, this.origin).dot(this.direction);
        return 0 > i ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(i).add(this.origin), t.distanceToSquared(e));
      };
    }(), distanceSqToSegment:function() {
      var t = new a, e = new a, i = new a;
      return function(n, r, a, s) {
        t.copy(n).add(r).multiplyScalar(.5), e.copy(r).sub(n).normalize(), i.copy(this.origin).sub(t);
        var o = .5 * n.distanceTo(r), c = -this.direction.dot(e), l = i.dot(this.direction), h = -i.dot(e), u = i.lengthSq(), d = Math.abs(1 - c * c);
        if (0 < d) {
          r = c * l - h;
          var p = o * d;
          0 <= (n = c * h - l) ? r >= -p ? r <= p ? (o = 1 / d, n *= o, r *= o, c = n * (n + c * r + 2 * l) + r * (c * n + r + 2 * h) + u) : (r = o, n = Math.max(0, -(c * r + l)), c = -n * n + r * (r + 2 * h) + u) : (r = -o, n = Math.max(0, -(c * r + l)), c = -n * n + r * (r + 2 * h) + u) : r <= -p ? (n = Math.max(0, -(-c * o + l)), r = 0 < n ? -o : Math.min(Math.max(-o, -h), o), c = -n * n + r * (r + 2 * h) + u) : r <= p ? (n = 0, r = Math.min(Math.max(-o, -h), o), c = r * (r + 2 * h) + u) : (n =
          Math.max(0, -(c * o + l)), r = 0 < n ? o : Math.min(Math.max(-o, -h), o), c = -n * n + r * (r + 2 * h) + u);
        } else {
          r = 0 < c ? -o : o, n = Math.max(0, -(c * r + l)), c = -n * n + r * (r + 2 * h) + u;
        }
        return a && a.copy(this.direction).multiplyScalar(n).add(this.origin), s && s.copy(e).multiplyScalar(r).add(t), c;
      };
    }(), intersectSphere:function() {
      var t = new a;
      return function(e, i) {
        t.subVectors(e.center, this.origin);
        var n = t.dot(this.direction), r = t.dot(t) - n * n;
        return e = e.radius * e.radius, r > e ? null : (e = Math.sqrt(e - r), r = n - e, n += e, 0 > r && 0 > n ? null : 0 > r ? this.at(n, i) : this.at(r, i));
      };
    }(), intersectsSphere:function(t) {
      return this.distanceToPoint(t.center) <= t.radius;
    }, distanceToPlane:function(t) {
      var e = t.normal.dot(this.direction);
      return 0 === e ? 0 === t.distanceToPoint(this.origin) ? 0 : null : 0 <= (t = -(this.origin.dot(t.normal) + t.constant) / e) ? t : null;
    }, intersectPlane:function(t, e) {
      return null === (t = this.distanceToPlane(t)) ? null : this.at(t, e);
    }, intersectsPlane:function(t) {
      var e = t.distanceToPoint(this.origin);
      return 0 === e || 0 > t.normal.dot(this.direction) * e;
    }, intersectBox:function(t, e) {
      var i = 1 / this.direction.x, n = 1 / this.direction.y, r = 1 / this.direction.z, a = this.origin;
      if (0 <= i) {
        var s = (t.min.x - a.x) * i;
        i *= t.max.x - a.x;
      } else {
        s = (t.max.x - a.x) * i, i *= t.min.x - a.x;
      }
      if (0 <= n) {
        var o = (t.min.y - a.y) * n;
        n *= t.max.y - a.y;
      } else {
        o = (t.max.y - a.y) * n, n *= t.min.y - a.y;
      }
      return s > n || o > i ? null : ((o > s || s !== s) && (s = o), (n < i || i !== i) && (i = n), 0 <= r ? (o = (t.min.z - a.z) * r, t = (t.max.z - a.z) * r) : (o = (t.max.z - a.z) * r, t = (t.min.z - a.z) * r), s > t || o > i ? null : ((o > s || s !== s) && (s = o), (t < i || i !== i) && (i = t), 0 > i ? null : this.at(0 <= s ? s : i, e)));
    }, intersectsBox:function() {
      var t = new a;
      return function(e) {
        return null !== this.intersectBox(e, t);
      };
    }(), intersectTriangle:function() {
      var t = new a, e = new a, i = new a, n = new a;
      return function(r, a, s, o, c) {
        if (e.subVectors(a, r), i.subVectors(s, r), n.crossVectors(e, i), 0 < (a = this.direction.dot(n))) {
          if (o) {
            return null;
          }
          o = 1;
        } else {
          if (!(0 > a)) {
            return null;
          }
          o = -1, a = -a;
        }
        return t.subVectors(this.origin, r), 0 > (r = o * this.direction.dot(i.crossVectors(t, i))) ? null : 0 > (s = o * this.direction.dot(e.cross(t))) || r + s > a ? null : 0 > (r = -o * t.dot(n)) ? null : this.at(r / a, c);
      };
    }(), applyMatrix4:function(t) {
      return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
    }, equals:function(t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction);
    }}), Object.assign(Pt.prototype, {set:function(t, e) {
      return this.start.copy(t), this.end.copy(e), this;
    }, clone:function() {
      return (new this.constructor).copy(this);
    }, copy:function(t) {
      return this.start.copy(t.start), this.end.copy(t.end), this;
    }, getCenter:function(t) {
      return (t || new a).addVectors(this.start, this.end).multiplyScalar(.5);
    }, delta:function(t) {
      return (t || new a).subVectors(this.end, this.start);
    }, distanceSq:function() {
      return this.start.distanceToSquared(this.end);
    }, distance:function() {
      return this.start.distanceTo(this.end);
    }, at:function(t, e) {
      return e = e || new a, this.delta(e).multiplyScalar(t).add(this.start);
    }, closestPointToPointParameter:function() {
      var t = new a, e = new a;
      return function(i, n) {
        return t.subVectors(i, this.start), e.subVectors(this.end, this.start), i = e.dot(e), i = e.dot(t) / i, n && (i = Ze.clamp(i, 0, 1)), i;
      };
    }(), closestPointToPoint:function(t, e, i) {
      return t = this.closestPointToPointParameter(t, e), i = i || new a, this.delta(i).multiplyScalar(t).add(this.start);
    }, applyMatrix4:function(t) {
      return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
    }, equals:function(t) {
      return t.start.equals(this.start) && t.end.equals(this.end);
    }}), Object.assign(kt, {normal:function() {
      var t = new a;
      return function(e, i, n, r) {
        return (r = r || new a).subVectors(n, i), t.subVectors(e, i), r.cross(t), 0 < (e = r.lengthSq()) ? r.multiplyScalar(1 / Math.sqrt(e)) : r.set(0, 0, 0);
      };
    }(), barycoordFromPoint:function() {
      var t = new a, e = new a, i = new a;
      return function(n, r, s, o, c) {
        t.subVectors(o, r), e.subVectors(s, r), i.subVectors(n, r), n = t.dot(t), r = t.dot(e), s = t.dot(i);
        var l = e.dot(e);
        o = e.dot(i);
        var h = n * l - r * r;
        return c = c || new a, 0 === h ? c.set(-2, -1, -1) : (h = 1 / h, l = (l * s - r * o) * h, n = (n * o - r * s) * h, c.set(1 - l - n, n, l));
      };
    }(), containsPoint:function() {
      var t = new a;
      return function(e, i, n, r) {
        return 0 <= (e = kt.barycoordFromPoint(e, i, n, r, t)).x && 0 <= e.y && 1 >= e.x + e.y;
      };
    }()}), Object.assign(kt.prototype, {set:function(t, e, i) {
      return this.a.copy(t), this.b.copy(e), this.c.copy(i), this;
    }, setFromPointsAndIndices:function(t, e, i, n) {
      return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this;
    }, clone:function() {
      return (new this.constructor).copy(this);
    }, copy:function(t) {
      return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
    }, area:function() {
      var t = new a, e = new a;
      return function() {
        return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length();
      };
    }(), midpoint:function(t) {
      return (t || new a).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }, normal:function(t) {
      return kt.normal(this.a, this.b, this.c, t);
    }, plane:function(t) {
      return (t || new K).setFromCoplanarPoints(this.a, this.b, this.c);
    }, barycoordFromPoint:function(t, e) {
      return kt.barycoordFromPoint(t, this.a, this.b, this.c, e);
    }, containsPoint:function(t) {
      return kt.containsPoint(t, this.a, this.b, this.c);
    }, closestPointToPoint:function() {
      var t = new K, e = [new Pt, new Pt, new Pt], i = new a, n = new a;
      return function(r, s) {
        s = s || new a;
        var o = 1 / 0;
        if (t.setFromCoplanarPoints(this.a, this.b, this.c), t.projectPoint(r, i), !0 === this.containsPoint(i)) {
          s.copy(i);
        } else {
          for (e[0].set(this.a, this.b), e[1].set(this.b, this.c), e[2].set(this.c, this.a), r = 0; r < e.length; r++) {
            e[r].closestPointToPoint(i, !0, n);
            var c = i.distanceToSquared(n);
            c < o && (o = c, s.copy(n));
          }
        }
        return s;
      };
    }(), equals:function(t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
    }}), Rt.prototype = Object.assign(Object.create(at.prototype), {constructor:Rt, isMesh:!0, setDrawMode:function(t) {
      this.drawMode = t;
    }, copy:function(t) {
      return at.prototype.copy.call(this, t), this.drawMode = t.drawMode, void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this;
    }, updateMorphTargets:function() {
      var t = this.geometry;
      if (t.isBufferGeometry) {
        t = t.morphAttributes;
        var e = Object.keys(t);
        if (0 < e.length) {
          var i = t[e[0]];
          if (void 0 !== i) {
            for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = i.length; t < e; t++) {
              var n = i[t].name || String(t);
              this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = t;
            }
          }
        }
      } else {
        if (void 0 !== (i = t.morphTargets) && 0 < i.length) {
          for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = i.length; t < e; t++) {
            n = i[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = t;
          }
        }
      }
    }, raycast:function() {
      function t(t, e, i, n, r, a, s) {
        return kt.barycoordFromPoint(t, e, i, n, y), r.multiplyScalar(y.x), a.multiplyScalar(y.y), s.multiplyScalar(y.z), r.add(a).add(s), r.clone();
      }
      function e(t, e, i, n, r, a, s, o) {
        return null === (1 === e.side ? n.intersectTriangle(s, a, r, !0, o) : n.intersectTriangle(r, a, s, 2 !== e.side, o)) ? null : (b.copy(o), b.applyMatrix4(t.matrixWorld), (e = i.ray.origin.distanceTo(b)) < i.near || e > i.far ? null : {distance:e, point:b.clone(), object:t});
      }
      function r(i, n, r, a, s, o, c, d) {
        return l.fromBufferAttribute(a, o), h.fromBufferAttribute(a, c), u.fromBufferAttribute(a, d), (i = e(i, i.material, n, r, l, h, u, x)) && (s && (m.fromBufferAttribute(s, o), g.fromBufferAttribute(s, c), v.fromBufferAttribute(s, d), i.uv = t(x, l, h, u, m, g, v)), i.face = new ct(o, c, d, kt.normal(l, h, u)), i.faceIndex = o), i;
      }
      var s = new n, o = new Lt, c = new J, l = new a, h = new a, u = new a, d = new a, p = new a, f = new a, m = new i, g = new i, v = new i, y = new a, x = new a, b = new a;
      return function(i, n) {
        var a = this.geometry, y = this.material, b = this.matrixWorld;
        if (void 0 !== y && (null === a.boundingSphere && a.computeBoundingSphere(), c.copy(a.boundingSphere), c.applyMatrix4(b), !1 !== i.ray.intersectsSphere(c) && (s.getInverse(b), o.copy(i.ray).applyMatrix4(s), null === a.boundingBox || !1 !== o.intersectsBox(a.boundingBox)))) {
          var _;
          if (a.isBufferGeometry) {
            var w, y = a.index, M = a.attributes.position, b = a.attributes.uv;
            if (null !== y) {
              var E = 0;
              for (w = y.count; E < w; E += 3) {
                a = y.getX(E);
                var T = y.getX(E + 1), S = y.getX(E + 2);
                (_ = r(this, i, o, M, b, a, T, S)) && (_.faceIndex = Math.floor(E / 3), n.push(_));
              }
            } else {
              if (void 0 !== M) {
                for (E = 0, w = M.count; E < w; E += 3) {
                  a = E, T = E + 1, S = E + 2, (_ = r(this, i, o, M, b, a, T, S)) && (_.index = a, n.push(_));
                }
              }
            }
          } else {
            if (a.isGeometry) {
              b = Array.isArray(y);
              E = a.vertices, w = a.faces, 0 < (T = a.faceVertexUvs[0]).length && (M = T);
              for (var A = 0, C = w.length; A < C; A++) {
                var L = w[A];
                if (void 0 !== (_ = b ? y[L.materialIndex] : y)) {
                  T = E[L.a], S = E[L.b];
                  var P = E[L.c];
                  if (!0 === _.morphTargets) {
                    var k = a.morphTargets, R = this.morphTargetInfluences;
                    l.set(0, 0, 0), h.set(0, 0, 0), u.set(0, 0, 0);
                    for (var D = 0, I = k.length; D < I; D++) {
                      var N = R[D];
                      if (0 !== N) {
                        var U = k[D].vertices;
                        l.addScaledVector(d.subVectors(U[L.a], T), N), h.addScaledVector(p.subVectors(U[L.b], S), N), u.addScaledVector(f.subVectors(U[L.c], P), N);
                      }
                    }
                    l.add(T), h.add(S), u.add(P), T = l, S = h, P = u;
                  }
                  (_ = e(this, _, i, o, T, S, P, x)) && (M && M[A] && (k = M[A], m.copy(k[0]), g.copy(k[1]), v.copy(k[2]), _.uv = t(x, T, S, P, m, g, v)), _.face = L, _.faceIndex = A, n.push(_));
                }
              }
            }
          }
        }
      };
    }(), clone:function() {
      return (new this.constructor(this.geometry, this.material)).copy(this);
    }});
    var fi = 0;
    le.prototype = Object.assign(Object.create(st.prototype), {constructor:le, isPerspectiveCamera:!0, copy:function(t, e) {
      return st.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
    }, setFocalLength:function(t) {
      t = .5 * this.getFilmHeight() / t, this.fov = 2 * Ze.RAD2DEG * Math.atan(t), this.updateProjectionMatrix();
    }, getFocalLength:function() {
      var t = Math.tan(.5 * Ze.DEG2RAD * this.fov);
      return .5 * this.getFilmHeight() / t;
    }, getEffectiveFOV:function() {
      return 2 * Ze.RAD2DEG * Math.atan(Math.tan(.5 * Ze.DEG2RAD * this.fov) / this.zoom);
    }, getFilmWidth:function() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }, getFilmHeight:function() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }, setViewOffset:function(t, e, i, n, r, a) {
      this.aspect = t / e, null === this.view && (this.view = {enabled:!0, fullWidth:1, fullHeight:1, offsetX:0, offsetY:0, width:1, height:1}), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
    }, clearViewOffset:function() {
      null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
    }, updateProjectionMatrix:function() {
      var t = this.near, e = 2 * (s = t * Math.tan(.5 * Ze.DEG2RAD * this.fov) / this.zoom), i = -.5 * (o = this.aspect * e), n = this.view;
      if (null !== this.view && this.view.enabled) {
        var r = n.fullWidth, a = n.fullHeight, i = i + n.offsetX * o / r, s = s - n.offsetY * e / a, o = n.width / r * o, e = n.height / a * e;
      }
      0 !== (n = this.filmOffset) && (i += t * n / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + o, s, s - e, t, this.far);
    }, toJSON:!1}), he.prototype = Object.assign(Object.create(le.prototype), {constructor:he, isArrayCamera:!0}), me.prototype.isFogExp2 = !0, me.prototype.clone = function() {
      return new me(this.color.getHex(), this.density);
    }, me.prototype.toJSON = function() {
      return {type:"FogExp2", color:this.color.getHex(), density:this.density};
    }, ge.prototype.isFog = !0, ge.prototype.clone = function() {
      return new ge(this.color.getHex(), this.near, this.far);
    }, ge.prototype.toJSON = function() {
      return {type:"Fog", color:this.color.getHex(), near:this.near, far:this.far};
    }, ve.prototype = Object.assign(Object.create(at.prototype), {constructor:ve, copy:function(t, e) {
      return at.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this;
    }, toJSON:!1}), ye.prototype = Object.create($.prototype), ye.prototype.constructor = ye, ye.prototype.isSpriteMaterial = !0, ye.prototype.copy = function(t) {
      return $.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this;
    }, xe.prototype = Object.assign(Object.create(at.prototype), {constructor:xe, isSprite:!0, raycast:function() {
      var t = new a, e = new a, i = new a;
      return function(n, r) {
        e.setFromMatrixPosition(this.matrixWorld), n.ray.closestPointToPoint(e, t), i.setFromMatrixScale(this.matrixWorld);
        var a = i.x * i.y / 4;
        e.distanceToSquared(t) > a || (a = n.ray.origin.distanceTo(t)) < n.near || a > n.far || r.push({distance:a, point:t.clone(), face:null, object:this});
      };
    }(), clone:function() {
      return (new this.constructor(this.material)).copy(this);
    }}), be.prototype = Object.assign(Object.create(at.prototype), {constructor:be}), (_e.prototype = Object.create(lt.prototype)).constructor = _e, (we.prototype = Object.create(wt.prototype)).constructor = we, (Me.prototype = Object.create(lt.prototype)).constructor = Me, (Ee.prototype = Object.create(wt.prototype)).constructor = Ee, (Te.prototype = Object.create(lt.prototype)).constructor = Te, (Se.prototype = Object.create(wt.prototype)).constructor = Se, (Ae.prototype = Object.create(Ct.prototype)).constructor =
    Ae, Ae.prototype.isRawShaderMaterial = !0, (Ce.prototype = Object.create($.prototype)).constructor = Ce, Ce.prototype.isMeshStandardMaterial = !0, Ce.prototype.copy = function(t) {
      return $.prototype.copy.call(this, t), this.defines = {STANDARD:""}, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap,
      this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap,
      this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this;
    }, (Le.prototype = Object.create($.prototype)).constructor = Le, Le.prototype.isMeshPhongMaterial = !0, Le.prototype.copy = function(t) {
      return $.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale),
      this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning =
      t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this;
    }, (Pe.prototype = Object.create($.prototype)).constructor = Pe, Pe.prototype.isMeshLambertMaterial = !0, Pe.prototype.copy = function(t) {
      return $.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio =
      t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this;
    };
    var mi = {enabled:!1, files:{}, add:function(t, e) {
      !1 !== this.enabled && (this.files[t] = e);
    }, get:function(t) {
      if (!1 !== this.enabled) {
        return this.files[t];
      }
    }, remove:function(t) {
      delete this.files[t];
    }, clear:function() {
      this.files = {};
    }}, gi = new function(t, e, i) {
      var n = this, r = !1, a = 0, s = 0, o = void 0;
      this.onStart = void 0, this.onLoad = void 0, this.onProgress = void 0, this.onError = void 0, this.itemStart = function(t) {
        s++, !1 === r && void 0 !== n.onStart && n.onStart(t, a, s), r = !0;
      }, this.itemEnd = function(t) {
        a++, void 0 !== n.onProgress && n.onProgress(t, a, s), a === s && (r = !1, void 0 !== n.onLoad) && n.onLoad();
      }, this.itemError = function(t) {
        void 0 !== n.onError && n.onError(t);
      }, this.resolveURL = function(t) {
        return o ? o(t) : t;
      }, this.setURLModifier = function(t) {
        o = t;
      };
    };
    Object.assign(ke.prototype, {crossOrigin:"Anonymous", load:function(t, e, i, n) {
      void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
      var r = this, a = mi.get(t);
      return void 0 !== a ? (r.manager.itemStart(t), setTimeout(function() {
        e && e(a), r.manager.itemEnd(t);
      }, 0), a) : ((i = document.createElementNS("http://www.w3.org/1999/xhtml", "img")).addEventListener("load", function() {
        mi.add(t, this), e && e(this), r.manager.itemEnd(t);
      }, !1), i.addEventListener("error", function(e) {
        n && n(e), r.manager.itemEnd(t), r.manager.itemError(t);
      }, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (i.crossOrigin = this.crossOrigin), r.manager.itemStart(t), i.src = t, i);
    }, setCrossOrigin:function(t) {
      return this.crossOrigin = t, this;
    }, setPath:function(t) {
      return this.path = t, this;
    }}), Object.assign(Re.prototype, {crossOrigin:"Anonymous", load:function(t, e, i, n) {
      var r = new ke(this.manager);
      r.setCrossOrigin(this.crossOrigin), r.setPath(this.path);
      var a = new o;
      return a.image = r.load(t, function() {
        var i = 0 < t.search(/\.(jpg|jpeg)$/) || 0 === t.search(/^data:image\/jpeg/);
        a.format = i ? 1022 : 1023, a.needsUpdate = !0, void 0 !== e && e(a);
      }, i, n), a;
    }, setCrossOrigin:function(t) {
      return this.crossOrigin = t, this;
    }, setPath:function(t) {
      return this.path = t, this;
    }});
    var vi = {};
    Object.assign(De.prototype, {load:function(t, e, i, n) {
      void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
      var r = this, a = mi.get(t);
      if (void 0 !== a) {
        return r.manager.itemStart(t), setTimeout(function() {
          e && e(a), r.manager.itemEnd(t);
        }, 0), a;
      }
      if (void 0 === vi[t]) {
        if (o = t.match(/^data:(.*?)(;base64)?,(.*)$/)) {
          i = o[1];
          var s = !!o[2], o = o[3], o = window.decodeURIComponent(o);
          s && (o = window.atob(o));
          try {
            var c = (this.responseType || "").toLowerCase();
            switch(c) {
              case "arraybuffer":
              case "blob":
                for (var l = new Uint8Array(o.length), s = 0; s < o.length; s++) {
                  l[s] = o.charCodeAt(s);
                }
                var h = "blob" === c ? new Blob([l.buffer], {type:i}) : l.buffer;
                break;
              case "document":
                h = (new DOMParser).parseFromString(o, i);
                break;
              case "json":
                h = JSON.parse(o);
                break;
              default:
                h = o;
            }
            window.setTimeout(function() {
              e && e(h), r.manager.itemEnd(t);
            }, 0);
          } catch (e$21) {
            window.setTimeout(function() {
              n && n(e$21), r.manager.itemEnd(t), r.manager.itemError(t);
            }, 0);
          }
        } else {
          vi[t] = [], vi[t].push({onLoad:e, onProgress:i, onError:n});
          var u = new XMLHttpRequest;
          u.open("GET", t, !0), u.addEventListener("load", function(e) {
            var i = e.target.response;
            mi.add(t, i);
            var n = vi[t];
            if (delete vi[t], 200 === this.status) {
              for (var a = 0, s = n.length; a < s; a++) {
                var o = n[a];
                o.onLoad && o.onLoad(i);
              }
              r.manager.itemEnd(t);
            } else {
              if (0 === this.status) {
                for (a = 0, s = n.length; a < s; a++) {
                  (o = n[a]).onLoad && o.onLoad(i);
                }
                r.manager.itemEnd(t);
              } else {
                for (a = 0, s = n.length; a < s; a++) {
                  (o = n[a]).onError && o.onError(e);
                }
                r.manager.itemEnd(t), r.manager.itemError(t);
              }
            }
          }, !1), u.addEventListener("progress", function(e) {
            for (var i = vi[t], n = 0, r = i.length; n < r; n++) {
              var a = i[n];
              a.onProgress && a.onProgress(e);
            }
          }, !1), u.addEventListener("error", function(e) {
            var i = vi[t];
            delete vi[t];
            for (var n = 0, a = i.length; n < a; n++) {
              var s = i[n];
              s.onError && s.onError(e);
            }
            r.manager.itemEnd(t), r.manager.itemError(t);
          }, !1), void 0 !== this.responseType && (u.responseType = this.responseType), void 0 !== this.withCredentials && (u.withCredentials = this.withCredentials), u.overrideMimeType && u.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
          for (s in this.requestHeader) {
            u.setRequestHeader(s, this.requestHeader[s]);
          }
          u.send(null);
        }
        return r.manager.itemStart(t), u;
      }
      vi[t].push({onLoad:e, onProgress:i, onError:n});
    }, setPath:function(t) {
      return this.path = t, this;
    }, setResponseType:function(t) {
      return this.responseType = t, this;
    }, setWithCredentials:function(t) {
      return this.withCredentials = t, this;
    }, setMimeType:function(t) {
      return this.mimeType = t, this;
    }, setRequestHeader:function(t) {
      return this.requestHeader = t, this;
    }}), Object.assign(Ie.prototype, {copy:function(t) {
      return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
    }, clone:function() {
      return (new this.constructor).copy(this);
    }, toJSON:!1}), Ne.prototype = Object.assign(Object.create(Ie.prototype), {constructor:Ne}), Ue.prototype = Object.assign(Object.create(at.prototype), {constructor:Ue, isLight:!0, copy:function(t) {
      return at.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this;
    }, toJSON:!1}), Fe.prototype = Object.assign(Object.create(Ue.prototype), {constructor:Fe, isDirectionalLight:!0, copy:function(t) {
      return Ue.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
    }}), Oe.prototype = Object.assign(Object.create(Ue.prototype), {constructor:Oe, isAmbientLight:!0}), Be.prototype.clone = function() {
      return new Be(void 0 === this.value.clone ? this.value : this.value.clone());
    }, ze.prototype = Object.assign(Object.create(wt.prototype), {constructor:ze, isInstancedBufferGeometry:!0, copy:function(t) {
      return wt.prototype.copy.call(this, t), this.maxInstancedCount = t.maxInstancedCount, this;
    }, clone:function() {
      return (new this.constructor).copy(this);
    }}), Object.defineProperties(He.prototype, {count:{get:function() {
      return this.data.count;
    }}, array:{get:function() {
      return this.data.array;
    }}}), Object.assign(He.prototype, {isInterleavedBufferAttribute:!0, setX:function(t, e) {
      return this.data.array[t * this.data.stride + this.offset] = e, this;
    }, setY:function(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 1] = e, this;
    }, setZ:function(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 2] = e, this;
    }, setW:function(t, e) {
      return this.data.array[t * this.data.stride + this.offset + 3] = e, this;
    }, getX:function(t) {
      return this.data.array[t * this.data.stride + this.offset];
    }, getY:function(t) {
      return this.data.array[t * this.data.stride + this.offset + 1];
    }, getZ:function(t) {
      return this.data.array[t * this.data.stride + this.offset + 2];
    }, getW:function(t) {
      return this.data.array[t * this.data.stride + this.offset + 3];
    }, setXY:function(t, e, i) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this;
    }, setXYZ:function(t, e, i, n) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this;
    }, setXYZW:function(t, e, i, n, r) {
      return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this;
    }}), Object.defineProperty(Ve.prototype, "needsUpdate", {set:function(t) {
      !0 === t && this.version++;
    }}), Object.assign(Ve.prototype, {isInterleavedBuffer:!0, setArray:function(t) {
      if (Array.isArray(t)) {
        throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      }
      this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t;
    }, setDynamic:function(t) {
      return this.dynamic = t, this;
    }, copy:function(t) {
      return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.dynamic = t.dynamic, this;
    }, copyAt:function(t, e, i) {
      t *= this.stride, i *= e.stride;
      for (var n = 0, r = this.stride; n < r; n++) {
        this.array[t + n] = e.array[i + n];
      }
      return this;
    }, set:function(t, e) {
      return void 0 === e && (e = 0), this.array.set(t, e), this;
    }, clone:function() {
      return (new this.constructor).copy(this);
    }, onUpload:function(t) {
      return this.onUploadCallback = t, this;
    }}), Ge.prototype = Object.assign(Object.create(Ve.prototype), {constructor:Ge, isInstancedInterleavedBuffer:!0, copy:function(t) {
      return Ve.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this;
    }}), je.prototype = Object.assign(Object.create(ht.prototype), {constructor:je, isInstancedBufferAttribute:!0, copy:function(t) {
      return ht.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this;
    }}), Object.assign(qe.prototype, {linePrecision:1, set:function(t, e) {
      this.ray.set(t, e);
    }, setFromCamera:function(t, e) {
      e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera && (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld));
    }, intersectObject:function(t, e) {
      var i = [];
      return Xe(t, this, i, e), i.sort(We), i;
    }, intersectObjects:function(t, e) {
      var i = [];
      if (!1 === Array.isArray(t)) {
        return i;
      }
      for (var n = 0, r = t.length; n < r; n++) {
        Xe(t[n], this, i, e);
      }
      return i.sort(We), i;
    }}), Object.assign($e.prototype, {set:function(t, e, i) {
      return this.radius = t, this.phi = e, this.theta = i, this;
    }, clone:function() {
      return (new this.constructor).copy(this);
    }, copy:function(t) {
      return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
    }, makeSafe:function() {
      return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
    }, setFromVector3:function(t) {
      return this.radius = t.length(), 0 === this.radius ? this.phi = this.theta = 0 : (this.theta = Math.atan2(t.x, t.z), this.phi = Math.acos(Ze.clamp(t.y / this.radius, -1, 1))), this;
    }}), Object.assign(Ye.prototype, {set:function(t, e, i) {
      return this.radius = t, this.theta = e, this.y = i, this;
    }, clone:function() {
      return (new this.constructor).copy(this);
    }, copy:function(t) {
      return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this;
    }, setFromVector3:function(t) {
      return this.radius = Math.sqrt(t.x * t.x + t.z * t.z), this.theta = Math.atan2(t.x, t.z), this.y = t.y, this;
    }}), t.WebGLRenderTarget = l, t.WebGLRenderer = function(t) {
      function e() {
        (ut = new de(ht)).get("WEBGL_depth_texture"), ut.get("OES_texture_float"), ut.get("OES_texture_float_linear"), ut.get("OES_texture_half_float"), ut.get("OES_texture_half_float_linear"), ut.get("OES_standard_derivatives"), ut.get("OES_element_index_uint"), ut.get("ANGLE_instanced_arrays"), Ct = new fe(ht, ut), dt = new ce(ht, ut, t), (pt = new oe(ht, ut, Ct)).scissor(H.copy(Q).multiplyScalar(Y)), pt.viewport(z.copy(Z).multiplyScalar(Y)), ft = new se, mt = new ae(ht, ut, pt, ft, dt, Ct, ct),
        gt = new it(ht), vt = new Vt(ht, gt, ct), yt = new qt(vt, lt), Mt = new Bt(ht), bt = new re(R, ut, dt), xt = new jt, _t = new Ft, wt = new Dt(R, pt, vt, T), Et = new Ht(ht, ut, lt), Tt = new zt(ht, ut, lt), St = new q(R, ht, pt, mt, dt), At = new X(R, ht, pt, mt, dt), R.info.programs = bt.programs, R.context = ht, R.capabilities = dt, R.extensions = ut, R.properties = ft, R.renderLists = _t, R.state = pt;
      }
      function i(t) {
        t.preventDefault(), D = !0;
      }
      function r() {
        D = !1, e();
      }
      function s(t) {
        (t = t.target).removeEventListener("dispose", s), o(t), ft.remove(t);
      }
      function o(t) {
        var e = ft.get(t).program;
        t.program = void 0, void 0 !== e && bt.releaseProgram(e);
      }
      function l(t, e, i) {
        t.render(function(t) {
          R.renderBufferImmediate(t, e, i);
        });
      }
      function u(t) {
        null !== Rt && Rt(t), (t = Lt.getDevice()) && t.isPresenting ? t.requestAnimationFrame(u) : window.requestAnimationFrame(u);
      }
      function d(t, e, i) {
        if (!1 !== t.visible) {
          if (t.layers.test(e.layers)) {
            if (t.isLight) {
              A.push(t), t.castShadow && C.push(t);
            } else {
              if (t.isSprite) {
                t.frustumCulled && !K.intersectsSprite(t) || P.push(t);
              } else {
                if (t.isLensFlare) {
                  k.push(t);
                } else {
                  if (t.isImmediateRenderObject) {
                    i && ot.setFromMatrixPosition(t.matrixWorld).applyMatrix4(st), L.push(t, null, t.material, ot.z, null);
                  } else {
                    if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.update(), !t.frustumCulled || K.intersectsObject(t))) {
                      i && ot.setFromMatrixPosition(t.matrixWorld).applyMatrix4(st);
                      var n = yt.update(t), r = t.material;
                      if (Array.isArray(r)) {
                        for (var a = n.groups, s = 0, o = a.length; s < o; s++) {
                          var c = a[s], l = r[c.materialIndex];
                          l && l.visible && L.push(t, n, l, ot.z, c);
                        }
                      } else {
                        r.visible && L.push(t, n, r, ot.z, null);
                      }
                    }
                  }
                }
              }
            }
          }
          for (s = 0, o = (t = t.children).length; s < o; s++) {
            d(t[s], e, i);
          }
        }
      }
      function p(t, e, i, n) {
        for (var r = 0, a = t.length; r < a; r++) {
          var s = (l = t[r]).object, o = l.geometry, c = void 0 === n ? l.material : n, l = l.group;
          if (i.isArrayCamera) {
            B = i;
            for (var h = i.cameras, u = 0, d = h.length; u < d; u++) {
              var p = h[u];
              if (s.layers.test(p.layers)) {
                var m = p.bounds;
                pt.viewport(z.set(m.x * W, m.y * $, m.z * W, m.w * $).multiplyScalar(Y)), f(s, e, p, o, c, l);
              }
            }
          } else {
            B = null, f(s, e, i, o, c, l);
          }
        }
      }
      function f(t, e, i, n, r, a) {
        if (t.onBeforeRender(R, e, i, n, r, a), t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
          pt.setMaterial(r);
          var s = g(i, e.fog, r, t);
          F = "", l(t, s, r);
        } else {
          R.renderBufferDirect(i, e.fog, n, r, t, a);
        }
        t.onAfterRender(R, e, i, n, r, a);
      }
      function m(t, e, i) {
        var n = ft.get(t);
        i = bt.getParameters(t, xt.state, C, e, nt.numPlanes, nt.numIntersection, i);
        var r = bt.getProgramCode(t, i), a = n.program, c = !0;
        if (void 0 === a) {
          t.addEventListener("dispose", s);
        } else {
          if (a.code !== r) {
            o(t);
          } else {
            if (void 0 !== i.shaderID) {
              return;
            }
            c = !1;
          }
        }
        if (c && (i.shaderID ? (a = li[i.shaderID], n.shader = {name:t.type, uniforms:oi.clone(a.uniforms), vertexShader:a.vertexShader, fragmentShader:a.fragmentShader}) : n.shader = {name:t.type, uniforms:t.uniforms, vertexShader:t.vertexShader, fragmentShader:t.fragmentShader}, t.onBeforeCompile(n.shader), a = bt.acquireProgram(t, n.shader, i, r), n.program = a, t.program = a), i = a.getAttributes(), t.morphTargets) {
          for (r = t.numSupportedMorphTargets = 0; r < R.maxMorphTargets; r++) {
            0 <= i["morphTarget" + r] && t.numSupportedMorphTargets++;
          }
        }
        if (t.morphNormals) {
          for (r = t.numSupportedMorphNormals = 0; r < R.maxMorphNormals; r++) {
            0 <= i["morphNormal" + r] && t.numSupportedMorphNormals++;
          }
        }
        i = n.shader.uniforms, (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (n.numClippingPlanes = nt.numPlanes, n.numIntersection = nt.numIntersection, i.clippingPlanes = nt.uniform), n.fog = e, n.lightsHash = xt.state.hash, t.lights && (i.ambientLightColor.value = xt.state.ambient, i.directionalLights.value = xt.state.directional, i.spotLights.value = xt.state.spot, i.rectAreaLights.value = xt.state.rectArea, i.pointLights.value = xt.state.point, i.hemisphereLights.value =
        xt.state.hemi, i.directionalShadowMap.value = xt.state.directionalShadowMap, i.directionalShadowMatrix.value = xt.state.directionalShadowMatrix, i.spotShadowMap.value = xt.state.spotShadowMap, i.spotShadowMatrix.value = xt.state.spotShadowMatrix, i.pointShadowMap.value = xt.state.pointShadowMap, i.pointShadowMatrix.value = xt.state.pointShadowMatrix), t = n.program.getUniforms(), t = V.seqWithValue(t.seq, i), n.uniformsList = t;
      }
      function g(t, e, i, n) {
        j = 0;
        var r = ft.get(i);
        rt && (at || t !== O) && nt.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, t, r, t === O && i.id === U), !1 === i.needsUpdate && (void 0 === r.program ? i.needsUpdate = !0 : i.fog && r.fog !== e ? i.needsUpdate = !0 : i.lights && r.lightsHash !== xt.state.hash ? i.needsUpdate = !0 : void 0 === r.numClippingPlanes || r.numClippingPlanes === nt.numPlanes && r.numIntersection === nt.numIntersection || (i.needsUpdate = !0)), i.needsUpdate && (m(i, e, n), i.needsUpdate = !1);
        var a = !1, s = !1, o = !1, c = r.program, l = c.getUniforms(), u = r.shader.uniforms;
        if (pt.useProgram(c.program) && (o = s = a = !0), i.id !== U && (U = i.id, s = !0), (a || t !== O) && (l.setValue(ht, "projectionMatrix", t.projectionMatrix), dt.logarithmicDepthBuffer && l.setValue(ht, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), O !== (B || t) && (O = B || t, o = s = !0), (i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.envMap) && void 0 !== (a = l.map.cameraPosition) && a.setValue(ht, ot.setFromMatrixPosition(t.matrixWorld)), (i.isMeshPhongMaterial ||
        i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && l.setValue(ht, "viewMatrix", t.matrixWorldInverse)), i.skinning && (l.setOptional(ht, n, "bindMatrix"), l.setOptional(ht, n, "bindMatrixInverse"), t = n.skeleton)) {
          if (a = t.bones, dt.floatVertexTextures) {
            if (void 0 === t.boneTexture) {
              var a = Math.sqrt(4 * a.length), a = Ze.ceilPowerOfTwo(a), a = Math.max(a, 4), d = new Float32Array(a * a * 4);
              d.set(t.boneMatrices);
              var p = new h(d, a, a, 1023, 1015);
              t.boneMatrices = d, t.boneTexture = p, t.boneTextureSize = a;
            }
            l.setValue(ht, "boneTexture", t.boneTexture), l.setValue(ht, "boneTextureSize", t.boneTextureSize);
          } else {
            l.setOptional(ht, t, "boneMatrices");
          }
        }
        return s && (l.setValue(ht, "toneMappingExposure", R.toneMappingExposure), l.setValue(ht, "toneMappingWhitePoint", R.toneMappingWhitePoint), i.lights && (s = o, u.ambientLightColor.needsUpdate = s, u.directionalLights.needsUpdate = s, u.pointLights.needsUpdate = s, u.spotLights.needsUpdate = s, u.rectAreaLights.needsUpdate = s, u.hemisphereLights.needsUpdate = s), e && i.fog && (u.fogColor.value = e.color, e.isFog ? (u.fogNear.value = e.near, u.fogFar.value = e.far) : e.isFogExp2 && (u.fogDensity.value =
        e.density)), i.isMeshBasicMaterial ? v(u, i) : i.isMeshLambertMaterial ? (v(u, i), i.emissiveMap && (u.emissiveMap.value = i.emissiveMap)) : i.isMeshPhongMaterial ? (v(u, i), i.isMeshToonMaterial ? (y(u, i), i.gradientMap && (u.gradientMap.value = i.gradientMap)) : y(u, i)) : i.isMeshStandardMaterial ? (v(u, i), i.isMeshPhysicalMaterial && (u.clearCoat.value = i.clearCoat, u.clearCoatRoughness.value = i.clearCoatRoughness), u.roughness.value = i.roughness, u.metalness.value = i.metalness,
        i.roughnessMap && (u.roughnessMap.value = i.roughnessMap), i.metalnessMap && (u.metalnessMap.value = i.metalnessMap), i.emissiveMap && (u.emissiveMap.value = i.emissiveMap), i.bumpMap && (u.bumpMap.value = i.bumpMap, u.bumpScale.value = i.bumpScale), i.normalMap && (u.normalMap.value = i.normalMap, u.normalScale.value.copy(i.normalScale)), i.displacementMap && (u.displacementMap.value = i.displacementMap, u.displacementScale.value = i.displacementScale, u.displacementBias.value = i.displacementBias),
        i.envMap && (u.envMapIntensity.value = i.envMapIntensity)) : i.isMeshDepthMaterial ? (v(u, i), i.displacementMap && (u.displacementMap.value = i.displacementMap, u.displacementScale.value = i.displacementScale, u.displacementBias.value = i.displacementBias)) : i.isMeshDistanceMaterial ? (v(u, i), i.displacementMap && (u.displacementMap.value = i.displacementMap, u.displacementScale.value = i.displacementScale, u.displacementBias.value = i.displacementBias), u.referencePosition.value.copy(i.referencePosition),
        u.nearDistance.value = i.nearDistance, u.farDistance.value = i.farDistance) : i.isMeshNormalMaterial ? (v(u, i), i.bumpMap && (u.bumpMap.value = i.bumpMap, u.bumpScale.value = i.bumpScale), i.normalMap && (u.normalMap.value = i.normalMap, u.normalScale.value.copy(i.normalScale)), i.displacementMap && (u.displacementMap.value = i.displacementMap, u.displacementScale.value = i.displacementScale, u.displacementBias.value = i.displacementBias)) : i.isLineBasicMaterial ? (u.diffuse.value = i.color,
        u.opacity.value = i.opacity, i.isLineDashedMaterial && (u.dashSize.value = i.dashSize, u.totalSize.value = i.dashSize + i.gapSize, u.scale.value = i.scale)) : i.isPointsMaterial ? (u.diffuse.value = i.color, u.opacity.value = i.opacity, u.size.value = i.size * Y, u.scale.value = .5 * $, u.map.value = i.map, null !== i.map && (!0 === i.map.matrixAutoUpdate && (e = i.map.offset, s = i.map.repeat, o = i.map.center, i.map.matrix.setUvTransform(e.x, e.y, s.x, s.y, i.map.rotation, o.x, o.y)), u.uvTransform.value.copy(i.map.matrix))) :
        i.isShadowMaterial && (u.color.value = i.color, u.opacity.value = i.opacity), void 0 !== u.ltcMat && (u.ltcMat.value = si.LTC_MAT_TEXTURE), void 0 !== u.ltcMag && (u.ltcMag.value = si.LTC_MAG_TEXTURE), V.upload(ht, r.uniformsList, u, R)), l.setValue(ht, "modelViewMatrix", n.modelViewMatrix), l.setValue(ht, "normalMatrix", n.normalMatrix), l.setValue(ht, "modelMatrix", n.matrixWorld), c;
      }
      function v(t, e) {
        if (t.opacity.value = e.opacity, e.color && (t.diffuse.value = e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap), e.envMap && (t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap && e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio), e.lightMap &&
        (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity), e.map) {
          var i = e.map;
        } else {
          e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap : e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.roughnessMap ? i = e.roughnessMap : e.metalnessMap ? i = e.metalnessMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && (i = e.emissiveMap);
        }
        if (void 0 !== i) {
          if (i.isWebGLRenderTarget && (i = i.texture), !0 === i.matrixAutoUpdate) {
            e = i.offset;
            var n = i.repeat, r = i.center;
            i.matrix.setUvTransform(e.x, e.y, n.x, n.y, i.rotation, r.x, r.y);
          }
          t.uvTransform.value.copy(i.matrix);
        }
      }
      function y(t, e) {
        t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias);
      }
      var x = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), b = void 0 !== t.context ? t.context : null, _ = void 0 !== t.alpha && t.alpha, w = void 0 === t.depth || t.depth, M = void 0 === t.stencil || t.stencil, E = void 0 !== t.antialias && t.antialias, T = void 0 === t.premultipliedAlpha || t.premultipliedAlpha, S = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer, A = [], C = [], L = null, P = [], k = [];
      this.domElement = x, this.context = null, this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.physicallyCorrectLights = this.gammaOutput = this.gammaInput = !1, this.toneMappingWhitePoint = this.toneMappingExposure = this.toneMapping = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
      var R = this, D = !1, I = null, N = null, U = -1, F = "", O = null, B = null, z = new c, H = new c, G = null, j = 0, W = x.width, $ = x.height, Y = 1, Z = new c(0, 0, W, $), Q = new c(0, 0, W, $), J = !1, K = new tt, nt = new pe, rt = !1, at = !1, st = new n, ot = new a, ct = {geometries:0, textures:0}, lt = {frame:0, calls:0, vertices:0, faces:0, points:0};
      this.info = {render:lt, memory:ct, programs:null};
      try {
        _ = {alpha:_, depth:w, stencil:M, antialias:E, premultipliedAlpha:T, preserveDrawingBuffer:S};
        var ht = b || x.getContext("webgl", _) || x.getContext("experimental-webgl", _);
        if (null === ht) {
          if (null !== x.getContext("webgl")) {
            throw "Error creating WebGL context with your selected attributes.";
          }
          throw "Error creating WebGL context.";
        }
        void 0 === ht.getShaderPrecisionFormat && (ht.getShaderPrecisionFormat = function() {
          return {rangeMin:1, rangeMax:1, precision:1};
        }), x.addEventListener("webglcontextlost", i, !1), x.addEventListener("webglcontextrestored", r, !1);
      } catch (t$22) {
      }
      var ut, dt, pt, ft, mt, gt, vt, yt, xt, bt, _t, wt, Mt, Et, Tt, St, At, Ct;
      e();
      var Lt = new ue(R);
      this.vr = Lt;
      var Pt = new et(R, yt, dt.maxTextureSize);
      this.shadowMap = Pt, this.getContext = function() {
        return ht;
      }, this.getContextAttributes = function() {
        return ht.getContextAttributes();
      }, this.forceContextLoss = function() {
        var t = ut.get("WEBGL_lose_context");
        t && t.loseContext();
      }, this.forceContextRestore = function() {
        var t = ut.get("WEBGL_lose_context");
        t && t.restoreContext();
      }, this.getPixelRatio = function() {
        return Y;
      }, this.setPixelRatio = function(t) {
        void 0 !== t && (Y = t, this.setSize(W, $, !1));
      }, this.getSize = function() {
        return {width:W, height:$};
      }, this.setSize = function(t, e, i) {
        var n = Lt.getDevice();
        n && n.isPresenting || (W = t, $ = e, x.width = t * Y, x.height = e * Y, !1 !== i && (x.style.width = t + "px", x.style.height = e + "px"), this.setViewport(0, 0, t, e));
      }, this.getDrawingBufferSize = function() {
        return {width:W * Y, height:$ * Y};
      }, this.setDrawingBufferSize = function(t, e, i) {
        W = t, $ = e, Y = i, x.width = t * i, x.height = e * i, this.setViewport(0, 0, t, e);
      }, this.setViewport = function(t, e, i, n) {
        Z.set(t, $ - e - n, i, n), pt.viewport(z.copy(Z).multiplyScalar(Y));
      }, this.setScissor = function(t, e, i, n) {
        Q.set(t, $ - e - n, i, n), pt.scissor(H.copy(Q).multiplyScalar(Y));
      }, this.setScissorTest = function(t) {
        pt.setScissorTest(J = t);
      }, this.getClearColor = function() {
        return wt.getClearColor();
      }, this.setClearColor = function() {
        wt.setClearColor.apply(wt, arguments);
      }, this.getClearAlpha = function() {
        return wt.getClearAlpha();
      }, this.setClearAlpha = function() {
        wt.setClearAlpha.apply(wt, arguments);
      }, this.clear = function(t, e, i) {
        var n = 0;
        (void 0 === t || t) && (n |= ht.COLOR_BUFFER_BIT), (void 0 === e || e) && (n |= ht.DEPTH_BUFFER_BIT), (void 0 === i || i) && (n |= ht.STENCIL_BUFFER_BIT), ht.clear(n);
      }, this.clearColor = function() {
        this.clear(!0, !1, !1);
      }, this.clearDepth = function() {
        this.clear(!1, !0, !1);
      }, this.clearStencil = function() {
        this.clear(!1, !1, !0);
      }, this.clearTarget = function(t, e, i, n) {
        this.setRenderTarget(t), this.clear(e, i, n);
      }, this.dispose = function() {
        x.removeEventListener("webglcontextlost", i, !1), x.removeEventListener("webglcontextrestored", r, !1), _t.dispose(), Lt.dispose();
      }, this.renderBufferImmediate = function(t, e, i) {
        pt.initAttributes();
        var n = ft.get(t);
        if (t.hasPositions && !n.position && (n.position = ht.createBuffer()), t.hasNormals && !n.normal && (n.normal = ht.createBuffer()), t.hasUvs && !n.uv && (n.uv = ht.createBuffer()), t.hasColors && !n.color && (n.color = ht.createBuffer()), e = e.getAttributes(), t.hasPositions && (ht.bindBuffer(ht.ARRAY_BUFFER, n.position), ht.bufferData(ht.ARRAY_BUFFER, t.positionArray, ht.DYNAMIC_DRAW), pt.enableAttribute(e.position), ht.vertexAttribPointer(e.position, 3, ht.FLOAT, !1, 0, 0)), t.hasNormals) {
          if (ht.bindBuffer(ht.ARRAY_BUFFER, n.normal), !i.isMeshPhongMaterial && !i.isMeshStandardMaterial && !i.isMeshNormalMaterial && !0 === i.flatShading) {
            for (var r = 0, a = 3 * t.count; r < a; r += 9) {
              var s = t.normalArray, o = (s[r + 0] + s[r + 3] + s[r + 6]) / 3, c = (s[r + 1] + s[r + 4] + s[r + 7]) / 3, l = (s[r + 2] + s[r + 5] + s[r + 8]) / 3;
              s[r + 0] = o, s[r + 1] = c, s[r + 2] = l, s[r + 3] = o, s[r + 4] = c, s[r + 5] = l, s[r + 6] = o, s[r + 7] = c, s[r + 8] = l;
            }
          }
          ht.bufferData(ht.ARRAY_BUFFER, t.normalArray, ht.DYNAMIC_DRAW), pt.enableAttribute(e.normal), ht.vertexAttribPointer(e.normal, 3, ht.FLOAT, !1, 0, 0);
        }
        t.hasUvs && i.map && (ht.bindBuffer(ht.ARRAY_BUFFER, n.uv), ht.bufferData(ht.ARRAY_BUFFER, t.uvArray, ht.DYNAMIC_DRAW), pt.enableAttribute(e.uv), ht.vertexAttribPointer(e.uv, 2, ht.FLOAT, !1, 0, 0)), t.hasColors && 0 !== i.vertexColors && (ht.bindBuffer(ht.ARRAY_BUFFER, n.color), ht.bufferData(ht.ARRAY_BUFFER, t.colorArray, ht.DYNAMIC_DRAW), pt.enableAttribute(e.color), ht.vertexAttribPointer(e.color, 3, ht.FLOAT, !1, 0, 0)), pt.disableUnusedAttributes(), ht.drawArrays(ht.TRIANGLES, 0, t.count),
        t.count = 0;
      }, this.renderBufferDirect = function(t, e, i, n, r, a) {
        pt.setMaterial(n);
        var s = g(t, e, n, r), o = !1;
        (t = i.id + "_" + s.id + "_" + (!0 === n.wireframe)) !== F && (F = t, o = !0), r.morphTargetInfluences && (Mt.update(r, i, n, s), o = !0);
        var c = i.index, l = i.attributes.position;
        if (e = 1, !0 === n.wireframe && (c = vt.getWireframeAttribute(i), e = 2), t = Et, null !== c) {
          var h = gt.get(c);
          (t = Tt).setIndex(h);
        }
        if (o) {
          if (o = void 0, !i || !i.isInstancedBufferGeometry || null !== ut.get("ANGLE_instanced_arrays")) {
            void 0 === o && (o = 0), pt.initAttributes();
            var u = i.attributes, s = s.getAttributes(), d = n.defaultAttributeValues;
            for (M in s) {
              var p = s[M];
              if (0 <= p) {
                if (void 0 !== (w = u[M])) {
                  var f = w.normalized, m = w.itemSize;
                  if (void 0 !== (x = gt.get(w))) {
                    var v = x.buffer, y = x.type, x = x.bytesPerElement;
                    if (w.isInterleavedBufferAttribute) {
                      var b = w.data, _ = b.stride, w = w.offset;
                      b && b.isInstancedInterleavedBuffer ? (pt.enableAttributeAndDivisor(p, b.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = b.meshPerAttribute * b.count)) : pt.enableAttribute(p), ht.bindBuffer(ht.ARRAY_BUFFER, v), ht.vertexAttribPointer(p, m, y, f, _ * x, (o * _ + w) * x);
                    } else {
                      w.isInstancedBufferAttribute ? (pt.enableAttributeAndDivisor(p, w.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = w.meshPerAttribute * w.count)) : pt.enableAttribute(p), ht.bindBuffer(ht.ARRAY_BUFFER, v), ht.vertexAttribPointer(p, m, y, f, 0, o * m * x);
                    }
                  }
                } else {
                  if (void 0 !== d && void 0 !== (f = d[M])) {
                    switch(f.length) {
                      case 2:
                        ht.vertexAttrib2fv(p, f);
                        break;
                      case 3:
                        ht.vertexAttrib3fv(p, f);
                        break;
                      case 4:
                        ht.vertexAttrib4fv(p, f);
                        break;
                      default:
                        ht.vertexAttrib1fv(p, f);
                    }
                  }
                }
              }
            }
            pt.disableUnusedAttributes();
          }
          null !== c && ht.bindBuffer(ht.ELEMENT_ARRAY_BUFFER, h.buffer);
        }
        h = 0, null !== c ? h = c.count : void 0 !== l && (h = l.count), c = i.drawRange.start * e, l = null !== a ? a.start * e : 0;
        var M = Math.max(c, l);
        if (0 !== (a = Math.max(0, Math.min(h, c + i.drawRange.count * e, l + (null !== a ? a.count * e : 1 / 0)) - 1 - M + 1))) {
          if (r.isMesh) {
            if (!0 === n.wireframe) {
              pt.setLineWidth(n.wireframeLinewidth * (null === I ? Y : 1)), t.setMode(ht.LINES);
            } else {
              switch(r.drawMode) {
                case 0:
                  t.setMode(ht.TRIANGLES);
                  break;
                case 1:
                  t.setMode(ht.TRIANGLE_STRIP);
                  break;
                case 2:
                  t.setMode(ht.TRIANGLE_FAN);
              }
            }
          } else {
            r.isLine ? (void 0 === (n = n.linewidth) && (n = 1), pt.setLineWidth(n * (null === I ? Y : 1)), r.isLineSegments ? t.setMode(ht.LINES) : r.isLineLoop ? t.setMode(ht.LINE_LOOP) : t.setMode(ht.LINE_STRIP)) : r.isPoints && t.setMode(ht.POINTS);
          }
          i && i.isInstancedBufferGeometry ? 0 < i.maxInstancedCount && t.renderInstances(i, M, a) : t.render(M, a);
        }
      }, this.compile = function(t, e) {
        A.length = 0, C.length = 0, t.traverse(function(t) {
          t.isLight && (A.push(t), t.castShadow && C.push(t));
        }), xt.setup(A, C, e), t.traverse(function(e) {
          if (e.material) {
            if (Array.isArray(e.material)) {
              for (var i = 0; i < e.material.length; i++) {
                m(e.material[i], t.fog, e);
              }
            } else {
              m(e.material, t.fog, e);
            }
          }
        });
      };
      var kt = !1, Rt = null;
      this.animate = function(t) {
        Rt = t, kt || ((t = Lt.getDevice()) && t.isPresenting ? t.requestAnimationFrame(u) : window.requestAnimationFrame(u), kt = !0);
      }, this.render = function(t, e, i, n) {
        if (e && e.isCamera && !D) {
          F = "", U = -1, O = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), Lt.enabled && (e = Lt.getCamera(e)), st.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), K.setFromMatrix(st), A.length = 0, C.length = 0, P.length = 0, k.length = 0, at = this.localClippingEnabled, rt = nt.init(this.clippingPlanes, at, e), (L = _t.get(t, e)).init(), d(t, e, R.sortObjects), !0 === R.sortObjects && L.sort(), rt && nt.beginShadows(), Pt.render(C, t,
          e), xt.setup(A, C, e), rt && nt.endShadows(), lt.frame++, lt.calls = 0, lt.vertices = 0, lt.faces = 0, lt.points = 0, void 0 === i && (i = null), this.setRenderTarget(i), wt.render(L, t, e, n), n = L.opaque;
          var r = L.transparent;
          if (t.overrideMaterial) {
            var a = t.overrideMaterial;
            n.length && p(n, t, e, a), r.length && p(r, t, e, a);
          } else {
            n.length && p(n, t, e), r.length && p(r, t, e);
          }
          At.render(P, t, e), St.render(k, t, e, z), i && mt.updateRenderTargetMipmap(i), pt.buffers.depth.setTest(!0), pt.buffers.depth.setMask(!0), pt.buffers.color.setMask(!0), pt.setPolygonOffset(!1), Lt.enabled && Lt.submitFrame();
        }
      }, this.setFaceCulling = function(t, e) {
        pt.setCullFace(t), pt.setFlipSided(0 === e);
      }, this.allocTextureUnit = function() {
        var t = j;
        return j += 1, t;
      }, this.setTexture2D = function(t, e) {
        t && t.isWebGLRenderTarget && (t = t.texture), mt.setTexture2D(t, e);
      }, this.setTexture = function(t, e) {
        mt.setTexture2D(t, e);
      }, this.setTextureCube = function(t, e) {
        t && t.isWebGLRenderTargetCube && (t = t.texture), t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? mt.setTextureCube(t, e) : mt.setTextureCubeDynamic(t, e);
      }, this.getRenderTarget = function() {
        return I;
      }, this.setRenderTarget = function(t) {
        (I = t) && void 0 === ft.get(t).__webglFramebuffer && mt.setupRenderTarget(t);
        var e = null, i = !1;
        t ? (e = ft.get(t).__webglFramebuffer, t.isWebGLRenderTargetCube && (e = e[t.activeCubeFace], i = !0), z.copy(t.viewport), H.copy(t.scissor), G = t.scissorTest) : (z.copy(Z).multiplyScalar(Y), H.copy(Q).multiplyScalar(Y), G = J), N !== e && (ht.bindFramebuffer(ht.FRAMEBUFFER, e), N = e), pt.viewport(z), pt.scissor(H), pt.setScissorTest(G), i && (i = ft.get(t.texture), ht.framebufferTexture2D(ht.FRAMEBUFFER, ht.COLOR_ATTACHMENT0, ht.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, i.__webglTexture,
        t.activeMipMapLevel));
      }, this.readRenderTargetPixels = function(t, e, i, n, r, a) {
        if (t && t.isWebGLRenderTarget) {
          var s = ft.get(t).__webglFramebuffer;
          if (s) {
            var o = !1;
            s !== N && (ht.bindFramebuffer(ht.FRAMEBUFFER, s), o = !0);
            try {
              var c = t.texture, l = c.format, h = c.type;
              1023 !== l && Ct.convert(l) !== ht.getParameter(ht.IMPLEMENTATION_COLOR_READ_FORMAT) || !(1009 === h || Ct.convert(h) === ht.getParameter(ht.IMPLEMENTATION_COLOR_READ_TYPE) || 1015 === h && (ut.get("OES_texture_float") || ut.get("WEBGL_color_buffer_float")) || 1016 === h && ut.get("EXT_color_buffer_half_float")) || ht.checkFramebufferStatus(ht.FRAMEBUFFER) === ht.FRAMEBUFFER_COMPLETE && 0 <= e && e <= t.width - n && 0 <= i && i <= t.height - r && ht.readPixels(e, i, n, r, Ct.convert(l),
              Ct.convert(h), a);
            } finally {
              o && ht.bindFramebuffer(ht.FRAMEBUFFER, N);
            }
          }
        }
      };
    }, t.ShaderChunk = ci, t.FogExp2 = me, t.Fog = ge, t.Scene = ve, t.Sprite = xe, t.Mesh = Rt, t.Group = be, t.CanvasTexture = W, t.Texture = o, t.TextureLoader = Re, t.FileLoader = De, t.DirectionalLightShadow = Ne, t.DirectionalLight = Fe, t.AmbientLight = Oe, t.PerspectiveCamera = le, t.OrthographicCamera = ot, t.Camera = st, t.Uniform = Be, t.InstancedBufferGeometry = ze, t.BufferGeometry = wt, t.Geometry = lt, t.InterleavedBufferAttribute = He, t.InstancedInterleavedBuffer = Ge, t.InterleavedBuffer =
    Ve, t.InstancedBufferAttribute = je, t.Face3 = ct, t.Object3D = at, t.Raycaster = qe, t.Triangle = kt, t.Math = Ze, t.Spherical = $e, t.Cylindrical = Ye, t.Plane = K, t.Frustum = tt, t.Sphere = J, t.Ray = Lt, t.Matrix4 = n, t.Matrix3 = s, t.Box3 = Q, t.Box2 = j, t.Line3 = Pt, t.Euler = nt, t.Vector4 = c, t.Vector3 = a, t.Vector2 = i, t.Quaternion = r, t.Color = G, t.TorusGeometry = _e, t.TorusBufferGeometry = we, t.SphereGeometry = Me, t.SphereBufferGeometry = Ee, t.PlaneGeometry = Tt, t.PlaneBufferGeometry =
    St, t.CylinderGeometry = Te, t.CylinderBufferGeometry = Se, t.BoxGeometry = Mt, t.BoxBufferGeometry = Et, t.SpriteMaterial = ye, t.RawShaderMaterial = Ae, t.MeshStandardMaterial = Ce, t.MeshPhongMaterial = Le, t.MeshLambertMaterial = Pe, t.MeshBasicMaterial = At, t.Material = $, t.Float64BufferAttribute = xt, t.Float32BufferAttribute = yt, t.Uint32BufferAttribute = vt, t.Int32BufferAttribute = gt, t.Uint16BufferAttribute = mt, t.Int16BufferAttribute = ft, t.Uint8ClampedBufferAttribute = pt, t.Uint8BufferAttribute =
    dt, t.Int8BufferAttribute = ut, t.BufferAttribute = ht, t.REVISION = "89dev", t.MOUSE = {LEFT:0, MIDDLE:1, RIGHT:2}, t.CullFaceNone = 0, t.CullFaceBack = 1, t.CullFaceFront = 2, t.CullFaceFrontBack = 3, t.FrontFaceDirectionCW = 0, t.FrontFaceDirectionCCW = 1, t.BasicShadowMap = 0, t.PCFShadowMap = 1, t.PCFSoftShadowMap = 2, t.FrontSide = 0, t.BackSide = 1, t.DoubleSide = 2, t.FlatShading = 1, t.SmoothShading = 2, t.NoColors = 0, t.FaceColors = 1, t.VertexColors = 2, t.NoBlending = 0, t.NormalBlending =
    1, t.AdditiveBlending = 2, t.SubtractiveBlending = 3, t.MultiplyBlending = 4, t.CustomBlending = 5, t.AddEquation = 100, t.SubtractEquation = 101, t.ReverseSubtractEquation = 102, t.MinEquation = 103, t.MaxEquation = 104, t.ZeroFactor = 200, t.OneFactor = 201, t.SrcColorFactor = 202, t.OneMinusSrcColorFactor = 203, t.SrcAlphaFactor = 204, t.OneMinusSrcAlphaFactor = 205, t.DstAlphaFactor = 206, t.OneMinusDstAlphaFactor = 207, t.DstColorFactor = 208, t.OneMinusDstColorFactor = 209, t.SrcAlphaSaturateFactor =
    210, t.NeverDepth = 0, t.AlwaysDepth = 1, t.LessDepth = 2, t.LessEqualDepth = 3, t.EqualDepth = 4, t.GreaterEqualDepth = 5, t.GreaterDepth = 6, t.NotEqualDepth = 7, t.MultiplyOperation = 0, t.MixOperation = 1, t.AddOperation = 2, t.NoToneMapping = 0, t.LinearToneMapping = 1, t.ReinhardToneMapping = 2, t.Uncharted2ToneMapping = 3, t.CineonToneMapping = 4, t.UVMapping = 300, t.CubeReflectionMapping = 301, t.CubeRefractionMapping = 302, t.EquirectangularReflectionMapping = 303, t.EquirectangularRefractionMapping =
    304, t.SphericalReflectionMapping = 305, t.CubeUVReflectionMapping = 306, t.CubeUVRefractionMapping = 307, t.RepeatWrapping = 1e3, t.ClampToEdgeWrapping = 1001, t.MirroredRepeatWrapping = 1002, t.NearestFilter = 1003, t.NearestMipMapNearestFilter = 1004, t.NearestMipMapLinearFilter = 1005, t.LinearFilter = 1006, t.LinearMipMapNearestFilter = 1007, t.LinearMipMapLinearFilter = 1008, t.UnsignedByteType = 1009, t.ByteType = 1010, t.ShortType = 1011, t.UnsignedShortType = 1012, t.IntType = 1013,
    t.UnsignedIntType = 1014, t.FloatType = 1015, t.HalfFloatType = 1016, t.UnsignedShort4444Type = 1017, t.UnsignedShort5551Type = 1018, t.UnsignedShort565Type = 1019, t.UnsignedInt248Type = 1020, t.AlphaFormat = 1021, t.RGBFormat = 1022, t.RGBAFormat = 1023, t.LuminanceFormat = 1024, t.LuminanceAlphaFormat = 1025, t.RGBEFormat = 1023, t.DepthFormat = 1026, t.DepthStencilFormat = 1027, t.RGB_S3TC_DXT1_Format = 2001, t.RGBA_S3TC_DXT1_Format = 2002, t.RGBA_S3TC_DXT3_Format = 2003, t.RGBA_S3TC_DXT5_Format =
    2004, t.RGB_PVRTC_4BPPV1_Format = 2100, t.RGB_PVRTC_2BPPV1_Format = 2101, t.RGBA_PVRTC_4BPPV1_Format = 2102, t.RGBA_PVRTC_2BPPV1_Format = 2103, t.RGB_ETC1_Format = 2151, t.LoopOnce = 2200, t.LoopRepeat = 2201, t.LoopPingPong = 2202, t.InterpolateDiscrete = 2300, t.InterpolateLinear = 2301, t.InterpolateSmooth = 2302, t.ZeroCurvatureEnding = 2400, t.ZeroSlopeEnding = 2401, t.WrapAroundEnding = 2402, t.TrianglesDrawMode = 0, t.TriangleStripDrawMode = 1, t.TriangleFanDrawMode = 2, t.LinearEncoding =
    3e3, t.sRGBEncoding = 3001, t.GammaEncoding = 3007, t.RGBEEncoding = 3002, t.LogLuvEncoding = 3003, t.RGBM7Encoding = 3004, t.RGBM16Encoding = 3005, t.RGBDEncoding = 3006, t.BasicDepthPacking = 3200, t.RGBADepthPacking = 3201, Object.defineProperty(t, "__esModule", {value:!0});
  }), function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.io = e() : t.io = e();
  }(this, function() {
    return function(t) {
      function e(n) {
        if (i[n]) {
          return i[n].exports;
        }
        var r = i[n] = {exports:{}, id:n, loaded:!1};
        return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports;
      }
      var i = {};
      return e.m = t, e.c = i, e.p = "", e(0);
    }([function(t, e, i) {
      function n(t, e) {
        "object" === (void 0 === t ? "undefined" : r(t)) && (e = t, t = void 0), e = e || {};
        var i, n = a(t), s = n.source, l = n.id, h = n.path, u = c[l] && h in c[l].nsps;
        return e.forceNew || e["force new connection"] || !1 === e.multiplex || u ? i = o(s, e) : (c[l] || (c[l] = o(s, e)), i = c[l]), n.query && !e.query && (e.query = n.query), i.socket(n.path, e);
      }
      $jscomp.initSymbol();
      $jscomp.initSymbol();
      $jscomp.initSymbolIterator();
      var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
      } : function(t) {
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, a = i(1), s = i(4), o = i(10);
      i(3)("socket.io-client"), t.exports = e = n;
      var c = e.managers = {};
      e.protocol = s.protocol, e.connect = n, e.Manager = i(10), e.Socket = i(36);
    }, function(t, e, i) {
      (function(e) {
        var n = i(2);
        i(3)("socket.io-client:url"), t.exports = function(t, i) {
          var r = t;
          i = i || e.location, null == t && (t = i.protocol + "//" + i.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? i.protocol + t : i.host + t), /^(https?|wss?):\/\//.test(t) || (t = void 0 !== i ? i.protocol + "//" + t : "https://" + t), r = n(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
          var a = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
          return r.id = r.protocol + "://" + a + ":" + r.port, r.href = r.protocol + "://" + a + (i && i.port === r.port ? "" : ":" + r.port), r;
        };
      }).call(e, function() {
        return this;
      }());
    }, function(t, e) {
      var i = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, n = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
      t.exports = function(t) {
        var e = t, r = t.indexOf("["), a = t.indexOf("]");
        -1 != r && -1 != a && (t = t.substring(0, r) + t.substring(r, a).replace(/:/g, ";") + t.substring(a, t.length));
        for (var s = i.exec(t || ""), o = {}, c = 14; c--;) {
          o[n[c]] = s[c] || "";
        }
        return -1 != r && -1 != a && (o.source = e, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o;
      };
    }, function(t, e) {
      t.exports = function() {
        return function() {
        };
      };
    }, function(t, e, i) {
      function n() {
      }
      function r(t) {
        var i = "" + t.type;
        return e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (i += t.attachments + "-"), t.nsp && "/" !== t.nsp && (i += t.nsp + ","), null != t.id && (i += t.id), null != t.data && (i += JSON.stringify(t.data)), i;
      }
      function a(t, e) {
        p.removeBlobs(t, function(t) {
          var i = p.deconstructPacket(t), n = r(i.packet), a = i.buffers;
          a.unshift(n), e(a);
        });
      }
      function s() {
        this.reconstructor = null;
      }
      function o(t) {
        var i = 0, n = {type:Number(t.charAt(0))};
        if (null == e.types[n.type]) {
          return h();
        }
        if (e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type) {
          for (var r = ""; "-" !== t.charAt(++i) && (r += t.charAt(i), i != t.length);) {
          }
          if (r != Number(r) || "-" !== t.charAt(i)) {
            throw new Error("Illegal attachments");
          }
          n.attachments = Number(r);
        }
        if ("/" === t.charAt(i + 1)) {
          for (n.nsp = ""; ++i && "," !== (s = t.charAt(i)) && (n.nsp += s, i !== t.length);) {
          }
        } else {
          n.nsp = "/";
        }
        var a = t.charAt(i + 1);
        if ("" !== a && Number(a) == a) {
          for (n.id = ""; ++i;) {
            var s = t.charAt(i);
            if (null == s || Number(s) != s) {
              --i;
              break;
            }
            if (n.id += t.charAt(i), i === t.length) {
              break;
            }
          }
          n.id = Number(n.id);
        }
        return t.charAt(++i) && (n = c(n, t.substr(i))), n;
      }
      function c(t, e) {
        try {
          t.data = JSON.parse(e);
        } catch (t$23) {
          return h();
        }
        return t;
      }
      function l(t) {
        this.reconPack = t, this.buffers = [];
      }
      function h() {
        return {type:e.ERROR, data:"parser error"};
      }
      var u = (i(3)("socket.io-parser"), i(5)), d = i(6), p = i(8), f = i(9);
      e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = n, e.Decoder = s, n.prototype.encode = function(t, i) {
        t.type !== e.EVENT && t.type !== e.ACK || !d(t.data) || (t.type = t.type === e.EVENT ? e.BINARY_EVENT : e.BINARY_ACK), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type ? a(t, i) : i([r(t)]);
      }, u(s.prototype), s.prototype.add = function(t) {
        var i;
        if ("string" == typeof t) {
          i = o(t), e.BINARY_EVENT === i.type || e.BINARY_ACK === i.type ? (this.reconstructor = new l(i), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", i)) : this.emit("decoded", i);
        } else {
          if (!f(t) && !t.base64) {
            throw new Error("Unknown type: " + t);
          }
          if (!this.reconstructor) {
            throw new Error("got binary data when not reconstructing a packet");
          }
          (i = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, this.emit("decoded", i));
        }
      }, s.prototype.destroy = function() {
        this.reconstructor && this.reconstructor.finishedReconstruction();
      }, l.prototype.takeBinaryData = function(t) {
        if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
          var e = p.reconstructPacket(this.reconPack, this.buffers);
          return this.finishedReconstruction(), e;
        }
        return null;
      }, l.prototype.finishedReconstruction = function() {
        this.reconPack = null, this.buffers = [];
      };
    }, function(t, e, i) {
      function n(t) {
        if (t) {
          return r(t);
        }
      }
      function r(t) {
        for (var e in n.prototype) {
          t[e] = n.prototype[e];
        }
        return t;
      }
      t.exports = n, n.prototype.on = n.prototype.addEventListener = function(t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
      }, n.prototype.once = function(t, e) {
        function i() {
          this.off(t, i), e.apply(this, arguments);
        }
        return i.fn = e, this.on(t, i), this;
      }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(t, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) {
          return this._callbacks = {}, this;
        }
        var i = this._callbacks["$" + t];
        if (!i) {
          return this;
        }
        if (1 == arguments.length) {
          return delete this._callbacks["$" + t], this;
        }
        for (var n, r = 0; r < i.length; r++) {
          if ((n = i[r]) === e || n.fn === e) {
            i.splice(r, 1);
            break;
          }
        }
        return this;
      }, n.prototype.emit = function(t) {
        this._callbacks = this._callbacks || {};
        var e = [].slice.call(arguments, 1), i = this._callbacks["$" + t];
        if (i) {
          for (var n = 0, r = (i = i.slice(0)).length; n < r; ++n) {
            i[n].apply(this, e);
          }
        }
        return this;
      }, n.prototype.listeners = function(t) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
      }, n.prototype.hasListeners = function(t) {
        return !!this.listeners(t).length;
      };
    }, function(t, e, i) {
      (function(e) {
        function n(t) {
          if (!t || "object" != typeof t) {
            return !1;
          }
          if (r(t)) {
            for (var i = 0, a = t.length; i < a; i++) {
              if (n(t[i])) {
                return !0;
              }
            }
            return !1;
          }
          if ("function" == typeof e.Buffer && e.Buffer.isBuffer && e.Buffer.isBuffer(t) || "function" == typeof e.ArrayBuffer && t instanceof ArrayBuffer || s && t instanceof Blob || o && t instanceof File) {
            return !0;
          }
          if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length) {
            return n(t.toJSON(), !0);
          }
          for (var c in t) {
            if (Object.prototype.hasOwnProperty.call(t, c) && n(t[c])) {
              return !0;
            }
          }
          return !1;
        }
        var r = i(7), a = Object.prototype.toString, s = "function" == typeof e.Blob || "[object BlobConstructor]" === a.call(e.Blob), o = "function" == typeof e.File || "[object FileConstructor]" === a.call(e.File);
        t.exports = n;
      }).call(e, function() {
        return this;
      }());
    }, function(t, e) {
      var i = {}.toString;
      t.exports = Array.isArray || function(t) {
        return "[object Array]" == i.call(t);
      };
    }, function(t, e, i) {
      (function(t) {
        function n(t, e) {
          if (!t) {
            return t;
          }
          if (s(t)) {
            var i = {_placeholder:!0, num:e.length};
            return e.push(t), i;
          }
          if (a(t)) {
            for (var r = new Array(t.length), o = 0; o < t.length; o++) {
              r[o] = n(t[o], e);
            }
            return r;
          }
          if ("object" == typeof t && !(t instanceof Date)) {
            r = {};
            for (var c in t) {
              r[c] = n(t[c], e);
            }
            return r;
          }
          return t;
        }
        function r(t, e) {
          if (!t) {
            return t;
          }
          if (t && t._placeholder) {
            return e[t.num];
          }
          if (a(t)) {
            for (var i = 0; i < t.length; i++) {
              t[i] = r(t[i], e);
            }
          } else {
            if ("object" == typeof t) {
              for (var n in t) {
                t[n] = r(t[n], e);
              }
            }
          }
          return t;
        }
        var a = i(7), s = i(9), o = Object.prototype.toString, c = "function" == typeof t.Blob || "[object BlobConstructor]" === o.call(t.Blob), l = "function" == typeof t.File || "[object FileConstructor]" === o.call(t.File);
        e.deconstructPacket = function(t) {
          var e = [], i = t.data, r = t;
          return r.data = n(i, e), r.attachments = e.length, {packet:r, buffers:e};
        }, e.reconstructPacket = function(t, e) {
          return t.data = r(t.data, e), t.attachments = void 0, t;
        }, e.removeBlobs = function(t, e) {
          function i(t, o, h) {
            if (!t) {
              return t;
            }
            if (c && t instanceof Blob || l && t instanceof File) {
              n++;
              var u = new FileReader;
              u.onload = function() {
                h ? h[o] = this.result : r = this.result, --n || e(r);
              }, u.readAsArrayBuffer(t);
            } else {
              if (a(t)) {
                for (var d = 0; d < t.length; d++) {
                  i(t[d], d, t);
                }
              } else {
                if ("object" == typeof t && !s(t)) {
                  for (var p in t) {
                    i(t[p], p, t);
                  }
                }
              }
            }
          }
          var n = 0, r = t;
          i(r), n || e(r);
        };
      }).call(e, function() {
        return this;
      }());
    }, function(t, e) {
      (function(e) {
        t.exports = function(t) {
          return e.Buffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer;
        };
      }).call(e, function() {
        return this;
      }());
    }, function(t, e, i) {
      function n(t, e) {
        if (!(this instanceof n)) {
          return new n(t, e);
        }
        t && "object" === (void 0 === t ? "undefined" : r(t)) && (e = t, t = void 0), (e = e || {}).path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(!1 !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new d({min:this.reconnectionDelay(), max:this.reconnectionDelayMax(),
        jitter:this.randomizationFactor()}), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
        var i = e.parser || c;
        this.encoder = new i.Encoder, this.decoder = new i.Decoder, this.autoConnect = !1 !== e.autoConnect, this.autoConnect && this.open();
      }
      $jscomp.initSymbol();
      $jscomp.initSymbol();
      $jscomp.initSymbolIterator();
      var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
      } : function(t) {
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, a = i(11), s = i(36), o = i(5), c = i(4), l = i(38), h = i(39), u = (i(3)("socket.io-client:manager"), i(34)), d = i(40), p = Object.prototype.hasOwnProperty;
      t.exports = n, n.prototype.emitAll = function() {
        this.emit.apply(this, arguments);
        for (var t in this.nsps) {
          p.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments);
        }
      }, n.prototype.updateSocketIds = function() {
        for (var t in this.nsps) {
          p.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t));
        }
      }, n.prototype.generateId = function(t) {
        return ("/" === t ? "" : t + "#") + this.engine.id;
      }, o(n.prototype), n.prototype.reconnection = function(t) {
        return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
      }, n.prototype.reconnectionAttempts = function(t) {
        return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts;
      }, n.prototype.reconnectionDelay = function(t) {
        return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay;
      }, n.prototype.randomizationFactor = function(t) {
        return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor;
      }, n.prototype.reconnectionDelayMax = function(t) {
        return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax;
      }, n.prototype.timeout = function(t) {
        return arguments.length ? (this._timeout = t, this) : this._timeout;
      }, n.prototype.maybeReconnectOnOpen = function() {
        !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
      }, n.prototype.open = n.prototype.connect = function(t, e) {
        if (~this.readyState.indexOf("open")) {
          return this;
        }
        this.engine = a(this.uri, this.opts);
        var i = this.engine, n = this;
        this.readyState = "opening", this.skipReconnect = !1;
        var r = l(i, "open", function() {
          n.onopen(), t && t();
        }), s = l(i, "error", function(e) {
          if (n.cleanup(), n.readyState = "closed", n.emitAll("connect_error", e), t) {
            var i = new Error("Connection error");
            i.data = e, t(i);
          } else {
            n.maybeReconnectOnOpen();
          }
        });
        if (!1 !== this._timeout) {
          var o = this._timeout, c = setTimeout(function() {
            r.destroy(), i.close(), i.emit("error", "timeout"), n.emitAll("connect_timeout", o);
          }, o);
          this.subs.push({destroy:function() {
            clearTimeout(c);
          }});
        }
        return this.subs.push(r), this.subs.push(s), this;
      }, n.prototype.onopen = function() {
        this.cleanup(), this.readyState = "open", this.emit("open");
        var t = this.engine;
        this.subs.push(l(t, "data", h(this, "ondata"))), this.subs.push(l(t, "ping", h(this, "onping"))), this.subs.push(l(t, "pong", h(this, "onpong"))), this.subs.push(l(t, "error", h(this, "onerror"))), this.subs.push(l(t, "close", h(this, "onclose"))), this.subs.push(l(this.decoder, "decoded", h(this, "ondecoded")));
      }, n.prototype.onping = function() {
        this.lastPing = new Date, this.emitAll("ping");
      }, n.prototype.onpong = function() {
        this.emitAll("pong", new Date - this.lastPing);
      }, n.prototype.ondata = function(t) {
        this.decoder.add(t);
      }, n.prototype.ondecoded = function(t) {
        this.emit("packet", t);
      }, n.prototype.onerror = function(t) {
        this.emitAll("error", t);
      }, n.prototype.socket = function(t, e) {
        function i() {
          ~u(r.connecting, n) || r.connecting.push(n);
        }
        var n = this.nsps[t];
        if (!n) {
          n = new s(this, t, e), this.nsps[t] = n;
          var r = this;
          n.on("connecting", i), n.on("connect", function() {
            n.id = r.generateId(t);
          }), this.autoConnect && i();
        }
        return n;
      }, n.prototype.destroy = function(t) {
        var e = u(this.connecting, t);
        ~e && this.connecting.splice(e, 1), this.connecting.length || this.close();
      }, n.prototype.packet = function(t) {
        var e = this;
        t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function(i) {
          for (var n = 0; n < i.length; n++) {
            e.engine.write(i[n], t.options);
          }
          e.encoding = !1, e.processPacketQueue();
        }));
      }, n.prototype.processPacketQueue = function() {
        if (this.packetBuffer.length > 0 && !this.encoding) {
          var t = this.packetBuffer.shift();
          this.packet(t);
        }
      }, n.prototype.cleanup = function() {
        for (var t = this.subs.length, e = 0; e < t; e++) {
          this.subs.shift().destroy();
        }
        this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
      }, n.prototype.close = n.prototype.disconnect = function() {
        this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
      }, n.prototype.onclose = function(t) {
        this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect();
      }, n.prototype.reconnect = function() {
        if (this.reconnecting || this.skipReconnect) {
          return this;
        }
        var t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
          this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
        } else {
          var e = this.backoff.duration();
          this.reconnecting = !0;
          var i = setTimeout(function() {
            t.skipReconnect || (t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function(e) {
              e ? (t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : t.onreconnect();
            }));
          }, e);
          this.subs.push({destroy:function() {
            clearTimeout(i);
          }});
        }
      }, n.prototype.onreconnect = function() {
        var t = this.backoff.attempts;
        this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t);
      };
    }, function(t, e, i) {
      t.exports = i(12);
    }, function(t, e, i) {
      t.exports = i(13), t.exports.parser = i(20);
    }, function(t, e, i) {
      (function(e) {
        function n(t, i) {
          if (!(this instanceof n)) {
            return new n(t, i);
          }
          i = i || {}, t && "object" == typeof t && (i = t, t = null), t ? (t = l(t), i.hostname = t.host, i.secure = "https" === t.protocol || "wss" === t.protocol, i.port = t.port, t.query && (i.query = t.query)) : i.host && (i.hostname = l(i.host).host), this.secure = null != i.secure ? i.secure : e.location && "https:" === location.protocol, i.hostname && !i.port && (i.port = this.secure ? "443" : "80"), this.agent = i.agent || !1, this.hostname = i.hostname || (e.location ? location.hostname :
          "localhost"), this.port = i.port || (e.location && location.port ? location.port : this.secure ? 443 : 80), this.query = i.query || {}, "string" == typeof this.query && (this.query = u.decode(this.query)), this.upgrade = !1 !== i.upgrade, this.path = (i.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!i.forceJSONP, this.jsonp = !1 !== i.jsonp, this.forceBase64 = !!i.forceBase64, this.enablesXDR = !!i.enablesXDR, this.timestampParam = i.timestampParam || "t", this.timestampRequests =
          i.timestampRequests, this.transports = i.transports || ["polling", "websocket"], this.transportOptions = i.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = i.policyPort || 843, this.rememberUpgrade = i.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = i.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== i.perMessageDeflate && (i.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate =
          {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = i.pfx || null, this.key = i.key || null, this.passphrase = i.passphrase || null, this.cert = i.cert || null, this.ca = i.ca || null, this.ciphers = i.ciphers || null, this.rejectUnauthorized = void 0 === i.rejectUnauthorized || i.rejectUnauthorized, this.forceNode = !!i.forceNode;
          var r = "object" == typeof e && e;
          r.global === r && (i.extraHeaders && Object.keys(i.extraHeaders).length > 0 && (this.extraHeaders = i.extraHeaders), i.localAddress && (this.localAddress = i.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open();
        }
        function r(t) {
          var e = {};
          for (var i in t) {
            t.hasOwnProperty(i) && (e[i] = t[i]);
          }
          return e;
        }
        var a = i(14), s = i(5), o = (i(3)("engine.io-client:socket"), i(34)), c = i(20), l = i(2), h = i(35), u = i(28);
        t.exports = n, n.priorWebsocketSuccess = !1, s(n.prototype), n.protocol = c.protocol, n.Socket = n, n.Transport = i(19), n.transports = i(14), n.parser = i(20), n.prototype.createTransport = function(t) {
          var e = r(this.query);
          e.EIO = c.protocol, e.transport = t;
          var i = this.transportOptions[t] || {};
          return this.id && (e.sid = this.id), new a[t]({query:e, socket:this, agent:i.agent || this.agent, hostname:i.hostname || this.hostname, port:i.port || this.port, secure:i.secure || this.secure, path:i.path || this.path, forceJSONP:i.forceJSONP || this.forceJSONP, jsonp:i.jsonp || this.jsonp, forceBase64:i.forceBase64 || this.forceBase64, enablesXDR:i.enablesXDR || this.enablesXDR, timestampRequests:i.timestampRequests || this.timestampRequests, timestampParam:i.timestampParam || this.timestampParam,
          policyPort:i.policyPort || this.policyPort, pfx:i.pfx || this.pfx, key:i.key || this.key, passphrase:i.passphrase || this.passphrase, cert:i.cert || this.cert, ca:i.ca || this.ca, ciphers:i.ciphers || this.ciphers, rejectUnauthorized:i.rejectUnauthorized || this.rejectUnauthorized, perMessageDeflate:i.perMessageDeflate || this.perMessageDeflate, extraHeaders:i.extraHeaders || this.extraHeaders, forceNode:i.forceNode || this.forceNode, localAddress:i.localAddress || this.localAddress, requestTimeout:i.requestTimeout ||
          this.requestTimeout, protocols:i.protocols || void 0});
        }, n.prototype.open = function() {
          var t;
          if (this.rememberUpgrade && n.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) {
            t = "websocket";
          } else {
            if (0 === this.transports.length) {
              var e = this;
              return void setTimeout(function() {
                e.emit("error", "No transports available");
              }, 0);
            }
            t = this.transports[0];
          }
          this.readyState = "opening";
          try {
            t = this.createTransport(t);
          } catch (t$24) {
            return this.transports.shift(), void this.open();
          }
          t.open(), this.setTransport(t);
        }, n.prototype.setTransport = function(t) {
          var e = this;
          this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", function() {
            e.onDrain();
          }).on("packet", function(t) {
            e.onPacket(t);
          }).on("error", function(t) {
            e.onError(t);
          }).on("close", function() {
            e.onClose("transport close");
          });
        }, n.prototype.probe = function(t) {
          function e() {
            if (u.onlyBinaryUpgrades) {
              var t = !this.supportsBinary && u.transport.supportsBinary;
              h = h || t;
            }
            h || (l.send([{type:"ping", data:"probe"}]), l.once("packet", function(t) {
              if (!h) {
                if ("pong" === t.type && "probe" === t.data) {
                  if (u.upgrading = !0, u.emit("upgrading", l), !l) {
                    return;
                  }
                  n.priorWebsocketSuccess = "websocket" === l.name, u.transport.pause(function() {
                    h || "closed" !== u.readyState && (c(), u.setTransport(l), l.send([{type:"upgrade"}]), u.emit("upgrade", l), l = null, u.upgrading = !1, u.flush());
                  });
                } else {
                  var e = new Error("probe error");
                  e.transport = l.name, u.emit("upgradeError", e);
                }
              }
            }));
          }
          function i() {
            h || (h = !0, c(), l.close(), l = null);
          }
          function r(t) {
            var e = new Error("probe error: " + t);
            e.transport = l.name, i(), u.emit("upgradeError", e);
          }
          function a() {
            r("transport closed");
          }
          function s() {
            r("socket closed");
          }
          function o(t) {
            l && t.name !== l.name && i();
          }
          function c() {
            l.removeListener("open", e), l.removeListener("error", r), l.removeListener("close", a), u.removeListener("close", s), u.removeListener("upgrading", o);
          }
          var l = this.createTransport(t, {probe:1}), h = !1, u = this;
          n.priorWebsocketSuccess = !1, l.once("open", e), l.once("error", r), l.once("close", a), this.once("close", s), this.once("upgrading", o), l.open();
        }, n.prototype.onOpen = function() {
          if (this.readyState = "open", n.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
            for (var t = 0, e = this.upgrades.length; t < e; t++) {
              this.probe(this.upgrades[t]);
            }
          }
        }, n.prototype.onPacket = function(t) {
          if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            switch(this.emit("packet", t), this.emit("heartbeat"), t.type) {
              case "open":
                this.onHandshake(h(t.data));
                break;
              case "pong":
                this.setPing(), this.emit("pong");
                break;
              case "error":
                var e = new Error("server error");
                e.code = t.data, this.onError(e);
                break;
              case "message":
                this.emit("data", t.data), this.emit("message", t.data);
            }
          }
        }, n.prototype.onHandshake = function(t) {
          this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));
        }, n.prototype.onHeartbeat = function(t) {
          clearTimeout(this.pingTimeoutTimer);
          var e = this;
          e.pingTimeoutTimer = setTimeout(function() {
            "closed" !== e.readyState && e.onClose("ping timeout");
          }, t || e.pingInterval + e.pingTimeout);
        }, n.prototype.setPing = function() {
          var t = this;
          clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function() {
            t.ping(), t.onHeartbeat(t.pingTimeout);
          }, t.pingInterval);
        }, n.prototype.ping = function() {
          var t = this;
          this.sendPacket("ping", function() {
            t.emit("ping");
          });
        }, n.prototype.onDrain = function() {
          this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
        }, n.prototype.flush = function() {
          "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
        }, n.prototype.write = n.prototype.send = function(t, e, i) {
          return this.sendPacket("message", t, e, i), this;
        }, n.prototype.sendPacket = function(t, e, i, n) {
          if ("function" == typeof e && (n = e, e = void 0), "function" == typeof i && (n = i, i = null), "closing" !== this.readyState && "closed" !== this.readyState) {
            (i = i || {}).compress = !1 !== i.compress;
            var r = {type:t, data:e, options:i};
            this.emit("packetCreate", r), this.writeBuffer.push(r), n && this.once("flush", n), this.flush();
          }
        }, n.prototype.close = function() {
          function t() {
            n.onClose("forced close"), n.transport.close();
          }
          function e() {
            n.removeListener("upgrade", e), n.removeListener("upgradeError", e), t();
          }
          function i() {
            n.once("upgrade", e), n.once("upgradeError", e);
          }
          if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            var n = this;
            this.writeBuffer.length ? this.once("drain", function() {
              this.upgrading ? i() : t();
            }) : this.upgrading ? i() : t();
          }
          return this;
        }, n.prototype.onError = function(t) {
          n.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t);
        }, n.prototype.onClose = function(t, e) {
          if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            var i = this;
            clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), i.writeBuffer = [], i.prevBufferLen = 0;
          }
        }, n.prototype.filterUpgrades = function(t) {
          for (var e = [], i = 0, n = t.length; i < n; i++) {
            ~o(this.transports, t[i]) && e.push(t[i]);
          }
          return e;
        };
      }).call(e, function() {
        return this;
      }());
    }, function(t, e, i) {
      (function(t) {
        var n = i(15), r = i(17), a = i(31), s = i(32);
        e.polling = function(e) {
          var i = !1, s = !1, o = !1 !== e.jsonp;
          if (t.location) {
            var c = "https:" === location.protocol, l = location.port;
            l || (l = c ? 443 : 80), i = e.hostname !== location.hostname || l !== e.port, s = e.secure !== c;
          }
          if (e.xdomain = i, e.xscheme = s, "open" in new n(e) && !e.forceJSONP) {
            return new r(e);
          }
          if (!o) {
            throw new Error("JSONP disabled");
          }
          return new a(e);
        }, e.websocket = s;
      }).call(e, function() {
        return this;
      }());
    }, function(t, e, i) {
      (function(e) {
        var n = i(16);
        t.exports = function(t) {
          var i = t.xdomain, r = t.xscheme, a = t.enablesXDR;
          try {
            if ("undefined" != typeof XMLHttpRequest && (!i || n)) {
              return new XMLHttpRequest;
            }
          } catch (t$25) {
          }
          try {
            if ("undefined" != typeof XDomainRequest && !r && a) {
              return new XDomainRequest;
            }
          } catch (t$26) {
          }
          if (!i) {
            try {
              return new (e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP");
            } catch (t$27) {
            }
          }
        };
      }).call(e, function() {
        return this;
      }());
    }, function(t, e) {
      try {
        t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
      } catch (e$28) {
        t.exports = !1;
      }
    }, function(t, e, i) {
      (function(e) {
        function n() {
        }
        function r(t) {
          if (c.call(this, t), this.requestTimeout = t.requestTimeout, this.extraHeaders = t.extraHeaders, e.location) {
            var i = "https:" === location.protocol, n = location.port;
            n || (n = i ? 443 : 80), this.xd = t.hostname !== e.location.hostname || n !== t.port, this.xs = t.secure !== i;
          }
        }
        function a(t) {
          this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.requestTimeout = t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized,
          this.extraHeaders = t.extraHeaders, this.create();
        }
        function s() {
          for (var t in a.requests) {
            a.requests.hasOwnProperty(t) && a.requests[t].abort();
          }
        }
        var o = i(15), c = i(18), l = i(5), h = i(29);
        i(3)("engine.io-client:polling-xhr"), t.exports = r, t.exports.Request = a, h(r, c), r.prototype.supportsBinary = !0, r.prototype.request = function(t) {
          return t = t || {}, t.uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, t.extraHeaders = this.extraHeaders, new a(t);
        }, r.prototype.doWrite = function(t, e) {
          var i = "string" != typeof t && void 0 !== t, n = this.request({method:"POST", data:t, isBinary:i}), r = this;
          n.on("success", e), n.on("error", function(t) {
            r.onError("xhr post error", t);
          }), this.sendXhr = n;
        }, r.prototype.doPoll = function() {
          var t = this.request(), e = this;
          t.on("data", function(t) {
            e.onData(t);
          }), t.on("error", function(t) {
            e.onError("xhr poll error", t);
          }), this.pollXhr = t;
        }, l(a.prototype), a.prototype.create = function() {
          var t = {agent:this.agent, xdomain:this.xd, xscheme:this.xs, enablesXDR:this.enablesXDR};
          t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized;
          var i = this.xhr = new o(t), n = this;
          try {
            i.open(this.method, this.uri, this.async);
            try {
              if (this.extraHeaders) {
                i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                for (var r in this.extraHeaders) {
                  this.extraHeaders.hasOwnProperty(r) && i.setRequestHeader(r, this.extraHeaders[r]);
                }
              }
            } catch (t$29) {
            }
            if ("POST" === this.method) {
              try {
                this.isBinary ? i.setRequestHeader("Content-type", "application/octet-stream") : i.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (t$30) {
              }
            }
            try {
              i.setRequestHeader("Accept", "*/*");
            } catch (t$31) {
            }
            "withCredentials" in i && (i.withCredentials = !0), this.requestTimeout && (i.timeout = this.requestTimeout), this.hasXDR() ? (i.onload = function() {
              n.onLoad();
            }, i.onerror = function() {
              n.onError(i.responseText);
            }) : i.onreadystatechange = function() {
              if (2 === i.readyState) {
                var t;
                try {
                  t = i.getResponseHeader("Content-Type");
                } catch (t$32) {
                }
                "application/octet-stream" === t && (i.responseType = "arraybuffer");
              }
              4 === i.readyState && (200 === i.status || 1223 === i.status ? n.onLoad() : setTimeout(function() {
                n.onError(i.status);
              }, 0));
            }, i.send(this.data);
          } catch (t$33) {
            return void setTimeout(function() {
              n.onError(t$33);
            }, 0);
          }
          e.document && (this.index = a.requestsCount++, a.requests[this.index] = this);
        }, a.prototype.onSuccess = function() {
          this.emit("success"), this.cleanup();
        }, a.prototype.onData = function(t) {
          this.emit("data", t), this.onSuccess();
        }, a.prototype.onError = function(t) {
          this.emit("error", t), this.cleanup(!0);
        }, a.prototype.cleanup = function(t) {
          if (void 0 !== this.xhr && null !== this.xhr) {
            if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = n : this.xhr.onreadystatechange = n, t) {
              try {
                this.xhr.abort();
              } catch (t$34) {
              }
            }
            e.document && delete a.requests[this.index], this.xhr = null;
          }
        }, a.prototype.onLoad = function() {
          var t;
          try {
            var e;
            try {
              e = this.xhr.getResponseHeader("Content-Type");
            } catch (t$35) {
            }
            t = "application/octet-stream" === e ? this.xhr.response || this.xhr.responseText : this.xhr.responseText;
          } catch (t$36) {
            this.onError(t$36);
          }
          null != t && this.onData(t);
        }, a.prototype.hasXDR = function() {
          return void 0 !== e.XDomainRequest && !this.xs && this.enablesXDR;
        }, a.prototype.abort = function() {
          this.cleanup();
        }, a.requestsCount = 0, a.requests = {}, e.document && (e.attachEvent ? e.attachEvent("onunload", s) : e.addEventListener && e.addEventListener("beforeunload", s, !1));
      }).call(e, function() {
        return this;
      }());
    }, function(t, e, i) {
      function n(t) {
        var e = t && t.forceBase64;
        l && !e || (this.supportsBinary = !1), r.call(this, t);
      }
      var r = i(19), a = i(28), s = i(20), o = i(29), c = i(30);
      i(3)("engine.io-client:polling"), t.exports = n;
      var l = null != (new (i(15))({xdomain:!1})).responseType;
      o(n, r), n.prototype.name = "polling", n.prototype.doOpen = function() {
        this.poll();
      }, n.prototype.pause = function(t) {
        function e() {
          i.readyState = "paused", t();
        }
        var i = this;
        if (this.readyState = "pausing", this.polling || !this.writable) {
          var n = 0;
          this.polling && (n++, this.once("pollComplete", function() {
            --n || e();
          })), this.writable || (n++, this.once("drain", function() {
            --n || e();
          }));
        } else {
          e();
        }
      }, n.prototype.poll = function() {
        this.polling = !0, this.doPoll(), this.emit("poll");
      }, n.prototype.onData = function(t) {
        var e = this;
        s.decodePayload(t, this.socket.binaryType, function(t, i, n) {
          return "opening" === e.readyState && e.onOpen(), "close" === t.type ? (e.onClose(), !1) : void e.onPacket(t);
        }), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState && this.poll());
      }, n.prototype.doClose = function() {
        function t() {
          e.write([{type:"close"}]);
        }
        var e = this;
        "open" === this.readyState ? t() : this.once("open", t);
      }, n.prototype.write = function(t) {
        var e = this;
        this.writable = !1;
        var i = function() {
          e.writable = !0, e.emit("drain");
        };
        s.encodePayload(t, this.supportsBinary, function(t) {
          e.doWrite(t, i);
        });
      }, n.prototype.uri = function() {
        var t = this.query || {}, e = this.secure ? "https" : "http", i = "";
        return !1 !== this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || t.sid || (t.b64 = 1), t = a.encode(t), this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (i = ":" + this.port), t.length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + i + this.path + t;
      };
    }, function(t, e, i) {
      function n(t) {
        this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode =
        t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress;
      }
      var r = i(20), a = i(5);
      t.exports = n, a(n.prototype), n.prototype.onError = function(t, e) {
        var i = new Error(t);
        return i.type = "TransportError", i.description = e, this.emit("error", i), this;
      }, n.prototype.open = function() {
        return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;
      }, n.prototype.close = function() {
        return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
      }, n.prototype.send = function(t) {
        if ("open" !== this.readyState) {
          throw new Error("Transport not open");
        }
        this.write(t);
      }, n.prototype.onOpen = function() {
        this.readyState = "open", this.writable = !0, this.emit("open");
      }, n.prototype.onData = function(t) {
        var e = r.decodePacket(t, this.socket.binaryType);
        this.onPacket(e);
      }, n.prototype.onPacket = function(t) {
        this.emit("packet", t);
      }, n.prototype.onClose = function() {
        this.readyState = "closed", this.emit("close");
      };
    }, function(t, e, i) {
      (function(t) {
        function n(t, i) {
          return i("b" + e.packets[t.type] + t.data.data);
        }
        function r(t, i, n) {
          if (!i) {
            return e.encodeBase64Packet(t, n);
          }
          var r = t.data, a = new Uint8Array(r), s = new Uint8Array(1 + r.byteLength);
          s[0] = y[t.type];
          for (var o = 0; o < a.length; o++) {
            s[o + 1] = a[o];
          }
          return n(s.buffer);
        }
        function a(t, i, n) {
          if (!i) {
            return e.encodeBase64Packet(t, n);
          }
          var r = new FileReader;
          return r.onload = function() {
            t.data = r.result, e.encodePacket(t, i, !0, n);
          }, r.readAsArrayBuffer(t.data);
        }
        function s(t, i, n) {
          if (!i) {
            return e.encodeBase64Packet(t, n);
          }
          if (v) {
            return a(t, i, n);
          }
          var r = new Uint8Array(1);
          return r[0] = y[t.type], n(new _([r.buffer, t.data]));
        }
        function o(t) {
          try {
            t = f.decode(t, {strict:!1});
          } catch (t$37) {
            return !1;
          }
          return t;
        }
        function c(t, e, i) {
          for (var n = new Array(t.length), r = p(t.length, i), a = 0; a < t.length; a++) {
            !function(t, i, r) {
              e(i, function(e, i) {
                n[t] = i, r(e, n);
              });
            }(a, t[a], r);
          }
        }
        var l, h = i(21), u = i(6), d = i(22), p = i(23), f = i(24);
        t && t.ArrayBuffer && (l = i(26));
        var m = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent), g = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent), v = m || g;
        e.protocol = 3;
        var y = e.packets = {open:0, close:1, ping:2, pong:3, message:4, upgrade:5, noop:6}, x = h(y), b = {type:"error", data:"parser error"}, _ = i(27);
        e.encodePacket = function(e, i, a, o) {
          "function" == typeof i && (o = i, i = !1), "function" == typeof a && (o = a, a = null);
          var c = void 0 === e.data ? void 0 : e.data.buffer || e.data;
          if (t.ArrayBuffer && c instanceof ArrayBuffer) {
            return r(e, i, o);
          }
          if (_ && c instanceof t.Blob) {
            return s(e, i, o);
          }
          if (c && c.base64) {
            return n(e, o);
          }
          var l = y[e.type];
          return void 0 !== e.data && (l += a ? f.encode(String(e.data), {strict:!1}) : String(e.data)), o("" + l);
        }, e.encodeBase64Packet = function(i, n) {
          var r = "b" + e.packets[i.type];
          if (_ && i.data instanceof t.Blob) {
            var a = new FileReader;
            return a.onload = function() {
              var t = a.result.split(",")[1];
              n(r + t);
            }, a.readAsDataURL(i.data);
          }
          var s;
          try {
            s = String.fromCharCode.apply(null, new Uint8Array(i.data));
          } catch (t$38) {
            for (var o = new Uint8Array(i.data), c = new Array(o.length), l = 0; l < o.length; l++) {
              c[l] = o[l];
            }
            s = String.fromCharCode.apply(null, c);
          }
          return r += t.btoa(s), n(r);
        }, e.decodePacket = function(t, i, n) {
          if (void 0 === t) {
            return b;
          }
          if ("string" == typeof t) {
            if ("b" === t.charAt(0)) {
              return e.decodeBase64Packet(t.substr(1), i);
            }
            if (n && !1 === (t = o(t))) {
              return b;
            }
            r = t.charAt(0);
            return Number(r) == r && x[r] ? t.length > 1 ? {type:x[r], data:t.substring(1)} : {type:x[r]} : b;
          }
          var r = (new Uint8Array(t))[0], a = d(t, 1);
          return _ && "blob" === i && (a = new _([a])), {type:x[r], data:a};
        }, e.decodeBase64Packet = function(t, e) {
          var i = x[t.charAt(0)];
          if (!l) {
            return {type:i, data:{base64:!0, data:t.substr(1)}};
          }
          var n = l.decode(t.substr(1));
          return "blob" === e && _ && (n = new _([n])), {type:i, data:n};
        }, e.encodePayload = function(t, i, n) {
          function r(t) {
            return t.length + ":" + t;
          }
          "function" == typeof i && (n = i, i = null);
          var a = u(t);
          return i && a ? _ && !v ? e.encodePayloadAsBlob(t, n) : e.encodePayloadAsArrayBuffer(t, n) : t.length ? void c(t, function(t, n) {
            e.encodePacket(t, !!a && i, !1, function(t) {
              n(null, r(t));
            });
          }, function(t, e) {
            return n(e.join(""));
          }) : n("0:");
        }, e.decodePayload = function(t, i, n) {
          if ("string" != typeof t) {
            return e.decodePayloadAsBinary(t, i, n);
          }
          "function" == typeof i && (n = i, i = null);
          var r;
          if ("" === t) {
            return n(b, 0, 1);
          }
          for (var a, s, o = "", c = 0, l = t.length; c < l; c++) {
            var h = t.charAt(c);
            if (":" === h) {
              if ("" === o || o != (a = Number(o))) {
                return n(b, 0, 1);
              }
              if (s = t.substr(c + 1, a), o != s.length) {
                return n(b, 0, 1);
              }
              if (s.length) {
                if (r = e.decodePacket(s, i, !1), b.type === r.type && b.data === r.data) {
                  return n(b, 0, 1);
                }
                if (!1 === n(r, c + a, l)) {
                  return;
                }
              }
              c += a, o = "";
            } else {
              o += h;
            }
          }
          return "" !== o ? n(b, 0, 1) : void 0;
        }, e.encodePayloadAsArrayBuffer = function(t, i) {
          return t.length ? void c(t, function(t, i) {
            e.encodePacket(t, !0, !0, function(t) {
              return i(null, t);
            });
          }, function(t, e) {
            var n = e.reduce(function(t, e) {
              var i;
              return i = "string" == typeof e ? e.length : e.byteLength, t + i.toString().length + i + 2;
            }, 0), r = new Uint8Array(n), a = 0;
            return e.forEach(function(t) {
              var e = "string" == typeof t, i = t;
              if (e) {
                for (var n = new Uint8Array(t.length), s = 0; s < t.length; s++) {
                  n[s] = t.charCodeAt(s);
                }
                i = n.buffer;
              }
              r[a++] = e ? 0 : 1;
              for (var o = i.byteLength.toString(), s = 0; s < o.length; s++) {
                r[a++] = parseInt(o[s]);
              }
              r[a++] = 255;
              for (var n = new Uint8Array(i), s = 0; s < n.length; s++) {
                r[a++] = n[s];
              }
            }), i(r.buffer);
          }) : i(new ArrayBuffer(0));
        }, e.encodePayloadAsBlob = function(t, i) {
          c(t, function(t, i) {
            e.encodePacket(t, !0, !0, function(t) {
              var e = new Uint8Array(1);
              if (e[0] = 1, "string" == typeof t) {
                for (var n = new Uint8Array(t.length), r = 0; r < t.length; r++) {
                  n[r] = t.charCodeAt(r);
                }
                t = n.buffer, e[0] = 0;
              }
              for (var a = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString(), s = new Uint8Array(a.length + 1), r = 0; r < a.length; r++) {
                s[r] = parseInt(a[r]);
              }
              if (s[a.length] = 255, _) {
                var o = new _([e.buffer, s.buffer, t]);
                i(null, o);
              }
            });
          }, function(t, e) {
            return i(new _(e));
          });
        }, e.decodePayloadAsBinary = function(t, i, n) {
          "function" == typeof i && (n = i, i = null);
          for (var r = t, a = []; r.byteLength > 0;) {
            for (var s = new Uint8Array(r), o = 0 === s[0], c = "", l = 1; 255 !== s[l]; l++) {
              if (c.length > 310) {
                return n(b, 0, 1);
              }
              c += s[l];
            }
            r = d(r, 2 + c.length), c = parseInt(c);
            var h = d(r, 0, c);
            if (o) {
              try {
                h = String.fromCharCode.apply(null, new Uint8Array(h));
              } catch (t$39) {
                var u = new Uint8Array(h);
                h = "";
                for (l = 0; l < u.length; l++) {
                  h += String.fromCharCode(u[l]);
                }
              }
            }
            a.push(h), r = d(r, c);
          }
          var p = a.length;
          a.forEach(function(t, r) {
            n(e.decodePacket(t, i, !0), r, p);
          });
        };
      }).call(e, function() {
        return this;
      }());
    }, function(t, e) {
      t.exports = Object.keys || function(t) {
        var e = [], i = Object.prototype.hasOwnProperty;
        for (var n in t) {
          i.call(t, n) && e.push(n);
        }
        return e;
      };
    }, function(t, e) {
      t.exports = function(t, e, i) {
        var n = t.byteLength;
        if (e = e || 0, i = i || n, t.slice) {
          return t.slice(e, i);
        }
        if (e < 0 && (e += n), i < 0 && (i += n), i > n && (i = n), e >= n || e >= i || 0 === n) {
          return new ArrayBuffer(0);
        }
        for (var r = new Uint8Array(t), a = new Uint8Array(i - e), s = e, o = 0; s < i; s++, o++) {
          a[o] = r[s];
        }
        return a.buffer;
      };
    }, function(t, e) {
      function i() {
      }
      t.exports = function(t, e, n) {
        function r(t, i) {
          if (r.count <= 0) {
            throw new Error("after called too many times");
          }
          --r.count, t ? (a = !0, e(t), e = n) : 0 !== r.count || a || e(null, i);
        }
        var a = !1;
        return n = n || i, r.count = t, 0 === t ? e() : r;
      };
    }, function(t, e, i) {
      var n;
      (function(t, r) {
        !function(a) {
          function s(t) {
            for (var e, i, n = [], r = 0, a = t.length; r < a;) {
              (e = t.charCodeAt(r++)) >= 55296 && e <= 56319 && r < a ? 56320 == (64512 & (i = t.charCodeAt(r++))) ? n.push(((1023 & e) << 10) + (1023 & i) + 65536) : (n.push(e), r--) : n.push(e);
            }
            return n;
          }
          function o(t) {
            for (var e, i = t.length, n = -1, r = ""; ++n < i;) {
              (e = t[n]) > 65535 && (e -= 65536, r += v(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), r += v(e);
            }
            return r;
          }
          function c(t, e) {
            if (t >= 55296 && t <= 57343) {
              if (e) {
                throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
              }
              return !1;
            }
            return !0;
          }
          function l(t, e) {
            return v(t >> e & 63 | 128);
          }
          function h(t, e) {
            if (0 == (4294967168 & t)) {
              return v(t);
            }
            var i = "";
            return 0 == (4294965248 & t) ? i = v(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (c(t, e) || (t = 65533), i = v(t >> 12 & 15 | 224), i += l(t, 6)) : 0 == (4292870144 & t) && (i = v(t >> 18 & 7 | 240), i += l(t, 12), i += l(t, 6)), i += v(63 & t | 128);
          }
          function u() {
            if (g >= m) {
              throw Error("Invalid byte index");
            }
            var t = 255 & f[g];
            if (g++, 128 == (192 & t)) {
              return 63 & t;
            }
            throw Error("Invalid continuation byte");
          }
          function d(t) {
            var e, i, n, r, a;
            if (g > m) {
              throw Error("Invalid byte index");
            }
            if (g == m) {
              return !1;
            }
            if (e = 255 & f[g], g++, 0 == (128 & e)) {
              return e;
            }
            if (192 == (224 & e)) {
              if (i = u(), (a = (31 & e) << 6 | i) >= 128) {
                return a;
              }
              throw Error("Invalid continuation byte");
            }
            if (224 == (240 & e)) {
              if (i = u(), n = u(), (a = (15 & e) << 12 | i << 6 | n) >= 2048) {
                return c(a, t) ? a : 65533;
              }
              throw Error("Invalid continuation byte");
            }
            if (240 == (248 & e) && (i = u(), n = u(), r = u(), (a = (7 & e) << 18 | i << 12 | n << 6 | r) >= 65536 && a <= 1114111)) {
              return a;
            }
            throw Error("Invalid UTF-8 detected");
          }
          var p = ("object" == typeof t && t && t.exports, "object" == typeof r && r);
          var f, m, g, v = String.fromCharCode, y = {version:"2.1.2", encode:function(t, e) {
            for (var i, n = !1 !== (e = e || {}).strict, r = s(t), a = r.length, o = -1, c = ""; ++o < a;) {
              i = r[o], c += h(i, n);
            }
            return c;
          }, decode:function(t, e) {
            var i = !1 !== (e = e || {}).strict;
            f = s(t), m = f.length, g = 0;
            for (var n, r = []; !1 !== (n = d(i));) {
              r.push(n);
            }
            return o(r);
          }};
          void 0 !== (n = function() {
            return y;
          }.call(e, i, e, t)) && (t.exports = n);
        }();
      }).call(e, i(25)(t), function() {
        return this;
      }());
    }, function(t, e) {
      t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {
        }, t.paths = [], t.children = [], t.webpackPolyfill = 1), t;
      };
    }, function(t, e) {
      !function() {
        for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = new Uint8Array(256), n = 0; n < t.length; n++) {
          i[t.charCodeAt(n)] = n;
        }
        e.encode = function(e) {
          var i, n = new Uint8Array(e), r = n.length, a = "";
          for (i = 0; i < r; i += 3) {
            a += t[n[i] >> 2], a += t[(3 & n[i]) << 4 | n[i + 1] >> 4], a += t[(15 & n[i + 1]) << 2 | n[i + 2] >> 6], a += t[63 & n[i + 2]];
          }
          return r % 3 == 2 ? a = a.substring(0, a.length - 1) + "=" : r % 3 == 1 && (a = a.substring(0, a.length - 2) + "=="), a;
        }, e.decode = function(t) {
          var e, n, r, a, s, o = .75 * t.length, c = t.length, l = 0;
          "=" === t[t.length - 1] && (o--, "=" === t[t.length - 2] && o--);
          var h = new ArrayBuffer(o), u = new Uint8Array(h);
          for (e = 0; e < c; e += 4) {
            n = i[t.charCodeAt(e)], r = i[t.charCodeAt(e + 1)], a = i[t.charCodeAt(e + 2)], s = i[t.charCodeAt(e + 3)], u[l++] = n << 2 | r >> 4, u[l++] = (15 & r) << 4 | a >> 2, u[l++] = (3 & a) << 6 | 63 & s;
          }
          return h;
        };
      }();
    }, function(t, e) {
      (function(e) {
        function i(t) {
          for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (i.buffer instanceof ArrayBuffer) {
              var n = i.buffer;
              if (i.byteLength !== n.byteLength) {
                var r = new Uint8Array(i.byteLength);
                r.set(new Uint8Array(n, i.byteOffset, i.byteLength)), n = r.buffer;
              }
              t[e] = n;
            }
          }
        }
        function n(t, e) {
          e = e || {};
          var n = new a;
          i(t);
          for (var r = 0; r < t.length; r++) {
            n.append(t[r]);
          }
          return e.type ? n.getBlob(e.type) : n.getBlob();
        }
        function r(t, e) {
          return i(t), new Blob(t, e || {});
        }
        var a = e.BlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.MozBlobBuilder, s = function() {
          try {
            return 2 === (new Blob(["hi"])).size;
          } catch (t$40) {
            return !1;
          }
        }(), o = s && function() {
          try {
            return 2 === (new Blob([new Uint8Array([1, 2])])).size;
          } catch (t$41) {
            return !1;
          }
        }(), c = a && a.prototype.append && a.prototype.getBlob;
        t.exports = s ? o ? e.Blob : r : c ? n : void 0;
      }).call(e, function() {
        return this;
      }());
    }, function(t, e) {
      e.encode = function(t) {
        var e = "";
        for (var i in t) {
          t.hasOwnProperty(i) && (e.length && (e += "&"), e += encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
        }
        return e;
      }, e.decode = function(t) {
        for (var e = {}, i = t.split("&"), n = 0, r = i.length; n < r; n++) {
          var a = i[n].split("=");
          e[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        }
        return e;
      };
    }, function(t, e) {
      t.exports = function(t, e) {
        var i = function() {
        };
        i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t;
      };
    }, function(t, e) {
      function i(t) {
        var e = "";
        do {
          e = a[t % s] + e, t = Math.floor(t / s);
        } while (t > 0);
        return e;
      }
      function n() {
        var t = i(+new Date);
        return t !== r ? (c = 0, r = t) : t + "." + i(c++);
      }
      for (var r, a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), s = 64, o = {}, c = 0, l = 0; l < s; l++) {
        o[a[l]] = l;
      }
      n.encode = i, n.decode = function(t) {
        var e = 0;
        for (l = 0; l < t.length; l++) {
          e = e * s + o[t.charAt(l)];
        }
        return e;
      }, t.exports = n;
    }, function(t, e, i) {
      (function(e) {
        function n() {
        }
        function r(t) {
          a.call(this, t), this.query = this.query || {}, o || (e.___eio || (e.___eio = []), o = e.___eio), this.index = o.length;
          var i = this;
          o.push(function(t) {
            i.onData(t);
          }), this.query.j = this.index, e.document && e.addEventListener && e.addEventListener("beforeunload", function() {
            i.script && (i.script.onerror = n);
          }, !1);
        }
        var a = i(18), s = i(29);
        t.exports = r;
        var o, c = /\n/g, l = /\\n/g;
        s(r, a), r.prototype.supportsBinary = !1, r.prototype.doClose = function() {
          this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), a.prototype.doClose.call(this);
        }, r.prototype.doPoll = function() {
          var t = this, e = document.createElement("script");
          this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function(e) {
            t.onError("jsonp poll error", e);
          };
          var i = document.getElementsByTagName("script")[0];
          i ? i.parentNode.insertBefore(e, i) : (document.head || document.body).appendChild(e), this.script = e, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
            var t = document.createElement("iframe");
            document.body.appendChild(t), document.body.removeChild(t);
          }, 100);
        }, r.prototype.doWrite = function(t, e) {
          function i() {
            n(), e();
          }
          function n() {
            if (r.iframe) {
              try {
                r.form.removeChild(r.iframe);
              } catch (t$42) {
                r.onError("jsonp polling iframe removal error", t$42);
              }
            }
            try {
              var t = '<iframe src="javascript:0" name="' + r.iframeId + '">';
              a = document.createElement(t);
            } catch (t$43) {
              (a = document.createElement("iframe")).name = r.iframeId, a.src = "javascript:0";
            }
            a.id = r.iframeId, r.form.appendChild(a), r.iframe = a;
          }
          var r = this;
          if (!this.form) {
            var a, s = document.createElement("form"), o = document.createElement("textarea"), h = this.iframeId = "eio_iframe_" + this.index;
            s.className = "socketio", s.style.position = "absolute", s.style.top = "-1000px", s.style.left = "-1000px", s.target = h, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), o.name = "d", s.appendChild(o), document.body.appendChild(s), this.form = s, this.area = o;
          }
          this.form.action = this.uri(), n(), t = t.replace(l, "\\\n"), this.area.value = t.replace(c, "\\n");
          try {
            this.form.submit();
          } catch (t$44) {
          }
          this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
            "complete" === r.iframe.readyState && i();
          } : this.iframe.onload = i;
        };
      }).call(e, function() {
        return this;
      }());
    }, function(t, e, i) {
      (function(e) {
        function n(t) {
          t && t.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = h && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (u = r), a.call(this, t);
        }
        var r, a = i(19), s = i(20), o = i(28), c = i(29), l = i(30), h = (i(3)("engine.io-client:websocket"), e.WebSocket || e.MozWebSocket);
        if ("undefined" == typeof window) {
          try {
            r = i(33);
          } catch (t$45) {
          }
        }
        var u = h;
        u || "undefined" != typeof window || (u = r), t.exports = n, c(n, a), n.prototype.name = "websocket", n.prototype.supportsBinary = !0, n.prototype.doOpen = function() {
          if (this.check()) {
            var t = this.uri(), e = this.protocols, i = {agent:this.agent, perMessageDeflate:this.perMessageDeflate};
            i.pfx = this.pfx, i.key = this.key, i.passphrase = this.passphrase, i.cert = this.cert, i.ca = this.ca, i.ciphers = this.ciphers, i.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (i.headers = this.extraHeaders), this.localAddress && (i.localAddress = this.localAddress);
            try {
              this.ws = this.usingBrowserWebSocket ? e ? new u(t, e) : new u(t) : new u(t, e, i);
            } catch (t$46) {
              return this.emit("error", t$46);
            }
            void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
          }
        }, n.prototype.addEventListeners = function() {
          var t = this;
          this.ws.onopen = function() {
            t.onOpen();
          }, this.ws.onclose = function() {
            t.onClose();
          }, this.ws.onmessage = function(e) {
            t.onData(e.data);
          }, this.ws.onerror = function(e) {
            t.onError("websocket error", e);
          };
        }, n.prototype.write = function(t) {
          function i() {
            n.emit("flush"), setTimeout(function() {
              n.writable = !0, n.emit("drain");
            }, 0);
          }
          var n = this;
          this.writable = !1;
          for (var r = t.length, a = 0, o = r; a < o; a++) {
            !function(t) {
              s.encodePacket(t, n.supportsBinary, function(a) {
                if (!n.usingBrowserWebSocket) {
                  var s = {};
                  t.options && (s.compress = t.options.compress), n.perMessageDeflate && ("string" == typeof a ? e.Buffer.byteLength(a) : a.length) < n.perMessageDeflate.threshold && (s.compress = !1);
                }
                try {
                  n.usingBrowserWebSocket ? n.ws.send(a) : n.ws.send(a, s);
                } catch (t$47) {
                }
                --r || i();
              });
            }(t[a]);
          }
        }, n.prototype.onClose = function() {
          a.prototype.onClose.call(this);
        }, n.prototype.doClose = function() {
          void 0 !== this.ws && this.ws.close();
        }, n.prototype.uri = function() {
          var t = this.query || {}, e = this.secure ? "wss" : "ws", i = "";
          return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (i = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = l()), this.supportsBinary || (t.b64 = 1), (t = o.encode(t)).length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + i + this.path + t;
        }, n.prototype.check = function() {
          return !(!u || "__initialize" in u && this.name === n.prototype.name);
        };
      }).call(e, function() {
        return this;
      }());
    }, function(t, e) {
    }, function(t, e) {
      var i = [].indexOf;
      t.exports = function(t, e) {
        if (i) {
          return t.indexOf(e);
        }
        for (var n = 0; n < t.length; ++n) {
          if (t[n] === e) {
            return n;
          }
        }
        return -1;
      };
    }, function(t, e) {
      (function(e) {
        var i = /^[\],:{}\s]*$/, n = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, r = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, a = /(?:^|:|,)(?:\s*\[)+/g, s = /^\s+/, o = /\s+$/;
        t.exports = function(t) {
          return "string" == typeof t && t ? (t = t.replace(s, "").replace(o, ""), e.JSON && JSON.parse ? JSON.parse(t) : i.test(t.replace(n, "@").replace(r, "]").replace(a, "")) ? (new Function("return " + t))() : void 0) : null;
        };
      }).call(e, function() {
        return this;
      }());
    }, function(t, e, i) {
      function n(t, e, i) {
        this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, i && i.query && (this.query = i.query), this.io.autoConnect && this.open();
      }
      $jscomp.initSymbol();
      $jscomp.initSymbol();
      $jscomp.initSymbolIterator();
      var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
      } : function(t) {
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        $jscomp.initSymbol();
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, a = i(4), s = i(5), o = i(37), c = i(38), l = i(39), h = (i(3)("socket.io-client:socket"), i(28));
      t.exports = n;
      var u = {connect:1, connect_error:1, connect_timeout:1, connecting:1, disconnect:1, error:1, reconnect:1, reconnect_attempt:1, reconnect_failed:1, reconnect_error:1, reconnecting:1, ping:1, pong:1}, d = s.prototype.emit;
      s(n.prototype), n.prototype.subEvents = function() {
        if (!this.subs) {
          var t = this.io;
          this.subs = [c(t, "open", l(this, "onopen")), c(t, "packet", l(this, "onpacket")), c(t, "close", l(this, "onclose"))];
        }
      }, n.prototype.open = n.prototype.connect = function() {
        return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this);
      }, n.prototype.send = function() {
        var t = o(arguments);
        return t.unshift("message"), this.emit.apply(this, t), this;
      }, n.prototype.emit = function(t) {
        if (u.hasOwnProperty(t)) {
          return d.apply(this, arguments), this;
        }
        var e = o(arguments), i = {type:a.EVENT, data:e};
        return i.options = {}, i.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (this.acks[this.ids] = e.pop(), i.id = this.ids++), this.connected ? this.packet(i) : this.sendBuffer.push(i), delete this.flags, this;
      }, n.prototype.packet = function(t) {
        t.nsp = this.nsp, this.io.packet(t);
      }, n.prototype.onopen = function() {
        if ("/" !== this.nsp) {
          if (this.query) {
            var t = "object" === r(this.query) ? h.encode(this.query) : this.query;
            this.packet({type:a.CONNECT, query:t});
          } else {
            this.packet({type:a.CONNECT});
          }
        }
      }, n.prototype.onclose = function(t) {
        this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t);
      }, n.prototype.onpacket = function(t) {
        if (t.nsp === this.nsp) {
          switch(t.type) {
            case a.CONNECT:
              this.onconnect();
              break;
            case a.EVENT:
            case a.BINARY_EVENT:
              this.onevent(t);
              break;
            case a.ACK:
            case a.BINARY_ACK:
              this.onack(t);
              break;
            case a.DISCONNECT:
              this.ondisconnect();
              break;
            case a.ERROR:
              this.emit("error", t.data);
          }
        }
      }, n.prototype.onevent = function(t) {
        var e = t.data || [];
        null != t.id && e.push(this.ack(t.id)), this.connected ? d.apply(this, e) : this.receiveBuffer.push(e);
      }, n.prototype.ack = function(t) {
        var e = this, i = !1;
        return function() {
          if (!i) {
            i = !0;
            var n = o(arguments);
            e.packet({type:a.ACK, id:t, data:n});
          }
        };
      }, n.prototype.onack = function(t) {
        var e = this.acks[t.id];
        "function" == typeof e && (e.apply(this, t.data), delete this.acks[t.id]);
      }, n.prototype.onconnect = function() {
        this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();
      }, n.prototype.emitBuffered = function() {
        var t;
        for (t = 0; t < this.receiveBuffer.length; t++) {
          d.apply(this, this.receiveBuffer[t]);
        }
        for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) {
          this.packet(this.sendBuffer[t]);
        }
        this.sendBuffer = [];
      }, n.prototype.ondisconnect = function() {
        this.destroy(), this.onclose("io server disconnect");
      }, n.prototype.destroy = function() {
        if (this.subs) {
          for (var t = 0; t < this.subs.length; t++) {
            this.subs[t].destroy();
          }
          this.subs = null;
        }
        this.io.destroy(this);
      }, n.prototype.close = n.prototype.disconnect = function() {
        return this.connected && this.packet({type:a.DISCONNECT}), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
      }, n.prototype.compress = function(t) {
        return this.flags = this.flags || {}, this.flags.compress = t, this;
      };
    }, function(t, e) {
      t.exports = function(t, e) {
        for (var i = [], n = (e = e || 0) || 0; n < t.length; n++) {
          i[n - e] = t[n];
        }
        return i;
      };
    }, function(t, e) {
      t.exports = function(t, e, i) {
        return t.on(e, i), {destroy:function() {
          t.removeListener(e, i);
        }};
      };
    }, function(t, e) {
      var i = [].slice;
      t.exports = function(t, e) {
        if ("string" == typeof e && (e = t[e]), "function" != typeof e) {
          throw new Error("bind() requires a function");
        }
        var n = i.call(arguments, 2);
        return function() {
          return e.apply(t, n.concat(i.call(arguments)));
        };
      };
    }, function(t, e) {
      function i(t) {
        t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
      }
      t.exports = i, i.prototype.duration = function() {
        var t = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var e = Math.random(), i = Math.floor(e * this.jitter * t);
          t = 0 == (1 & Math.floor(10 * e)) ? t - i : t + i;
        }
        return 0 | Math.min(t, this.max);
      }, i.prototype.reset = function() {
        this.attempts = 0;
      }, i.prototype.setMin = function(t) {
        this.ms = t;
      }, i.prototype.setMax = function(t) {
        this.max = t;
      }, i.prototype.setJitter = function(t) {
        this.jitter = t;
      };
    }]);
  }), function() {
    var t, e, i, n, r, a, s, o, c, l, h, u, d, p, f, m, g, v, y, x = {}.hasOwnProperty, b = [].indexOf || function(t) {
      for (var e = 0, i = this.length; e < i; e++) {
        if (e in this && this[e] === t) {
          return e;
        }
      }
      return -1;
    };
    a = {is_unordered:!1, is_counting:!1, is_exclusive:!1, is_solitary:!1, prevent_default:!1, prevent_repeat:!1}, v = "meta alt option ctrl shift cmd".split(" "), m = "ctrl", t = {debug:!1};
    var _ = function(t) {
      var e, i;
      for (e in t) {
        x.call(t, e) && !1 !== (i = t[e]) && (this[e] = i);
      }
      this.keys = this.keys || [], this.count = this.count || 0;
    };
    _.prototype.allows_key_repeat = function() {
      return !this.prevent_repeat && "function" == typeof this.on_keydown;
    }, _.prototype.reset = function() {
      return this.count = 0, this.keyup_fired = null;
    };
    var w = function(t, e) {
      var i, n;
      "undefined" != typeof jQuery && null !== jQuery && t instanceof jQuery && (1 !== t.length && f("Warning: your jQuery selector should have exactly one object."), t = t[0]), this.should_force_event_defaults = this.should_suppress_event_defaults = !1, this.sequence_delay = 800, this._registered_combos = [], this._keys_down = [], this._active_combos = [], this._sequence = [], this._sequence_timer = null, this._prevent_capture = !1, this._defaults = e || {};
      for (i in a) {
        x.call(a, i) && (n = a[i], this._defaults[i] = this._defaults[i] || n);
      }
      this.element = t || document.body, i = function(t, e, i) {
        return t.addEventListener ? t.addEventListener(e, i) : t.attachEvent && t.attachEvent("on" + e, i), i;
      };
      var r = this;
      this.keydown_event = i(this.element, "keydown", function(t) {
        return t = t || window.event, r._receive_input(t, !0), r._bug_catcher(t);
      });
      var s = this;
      this.keyup_event = i(this.element, "keyup", function(t) {
        return t = t || window.event, s._receive_input(t, !1);
      });
      var o = this;
      this.blur_event = i(window, "blur", function() {
        var t, e, i, n;
        for (e = 0, i = (n = o._keys_down).length; e < i; e++) {
          t = n[e], o._key_up(t, {});
        }
        return o._keys_down = [];
      });
    };
    w.prototype.destroy = function() {
      var t;
      return (t = function(t, e, i) {
        return null != t.removeEventListener ? t.removeEventListener(e, i) : null != t.removeEvent ? t.removeEvent("on" + e, i) : void 0;
      })(this.element, "keydown", this.keydown_event), t(this.element, "keyup", this.keyup_event), t(window, "blur", this.blur_event);
    }, w.prototype._bug_catcher = function(t) {
      var e, i;
      if ("cmd" === m && 0 <= b.call(this._keys_down, "cmd") && "cmd" !== (e = n(null != (i = t.keyCode) ? i : t.key)) && "shift" !== e && "alt" !== e && "caps" !== e && "tab" !== e) {
        return this._receive_input(t, !1);
      }
    }, w.prototype._cmd_bug_check = function(t) {
      return !("cmd" === m && 0 <= b.call(this._keys_down, "cmd") && 0 > b.call(t, "cmd"));
    }, w.prototype._prevent_default = function(t, e) {
      if ((e || this.should_suppress_event_defaults) && !this.should_force_event_defaults && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation)) {
        return t.stopPropagation();
      }
    }, w.prototype._get_active_combos = function(t) {
      var e, i;
      return e = [], (i = s(this._keys_down, function(e) {
        return e !== t;
      })).push(t), this._match_combo_arrays(i, function(t) {
        return function(i) {
          if (t._cmd_bug_check(i.keys)) {
            return e.push(i);
          }
        };
      }(this)), this._fuzzy_match_combo_arrays(i, function(t) {
        return function(i) {
          if (!(0 <= b.call(e, i)) && !i.is_solitary && t._cmd_bug_check(i.keys)) {
            return e.push(i);
          }
        };
      }(this)), e;
    }, w.prototype._get_potential_combos = function(t) {
      var e, i, n, r, a;
      for (i = [], n = 0, r = (a = this._registered_combos).length; n < r; n++) {
        (e = a[n]).is_sequence || 0 <= b.call(e.keys, t) && this._cmd_bug_check(e.keys) && i.push(e);
      }
      return i;
    }, w.prototype._add_to_active_combos = function(t) {
      var e, i, n, r, a, s, o, c, l, h, u;
      if (s = !1, a = !0, n = !1, 0 <= b.call(this._active_combos, t)) {
        return !0;
      }
      if (this._active_combos.length) {
        for (r = o = 0, h = this._active_combos.length; 0 <= h ? o < h : o > h; r = 0 <= h ? ++o : --o) {
          if ((e = this._active_combos[r]) && e.is_exclusive && t.is_exclusive) {
            if (e = e.keys, !s) {
              for (c = 0, l = e.length; c < l; c++) {
                if (i = e[c], s = !0, 0 > b.call(t.keys, i)) {
                  s = !1;
                  break;
                }
              }
            }
            if (a && !s) {
              for (c = 0, l = (u = t.keys).length; c < l; c++) {
                if (i = u[c], a = !1, 0 > b.call(e, i)) {
                  a = !0;
                  break;
                }
              }
            }
            s && (n ? null != (e = this._active_combos.splice(r, 1)[0]) && e.reset() : (null != (e = this._active_combos.splice(r, 1, t)[0]) && e.reset(), n = !0), a = !1);
          }
        }
      }
      return a && this._active_combos.unshift(t), s || a;
    }, w.prototype._remove_from_active_combos = function(t) {
      var e, i, n;
      for (e = i = 0, n = this._active_combos.length; 0 <= n ? i < n : i > n; e = 0 <= n ? ++i : --i) {
        if (this._active_combos[e] === t) {
          (t = this._active_combos.splice(e, 1)[0]).reset();
          break;
        }
      }
    }, w.prototype._get_possible_sequences = function() {
      var t, e, i, n, r, a, o, c, l, h, u, d;
      for (n = [], a = 0, l = (h = this._registered_combos).length; a < l; a++) {
        for (t = h[a], e = o = 1, u = this._sequence.length; 1 <= u ? o <= u : o >= u; e = 1 <= u ? ++o : --o) {
          if (r = this._sequence.slice(-e), t.is_sequence) {
            if (0 > b.call(t.keys, "shift") && !(r = s(r, function(t) {
              return "shift" !== t;
            })).length) {
              continue;
            }
            for (e = c = 0, d = r.length; 0 <= d ? c < d : c > d; e = 0 <= d ? ++c : --c) {
              if (t.keys[e] !== r[e]) {
                i = !1;
                break;
              }
              i = !0;
            }
            i && n.push(t);
          }
        }
      }
      return n;
    }, w.prototype._add_key_to_sequence = function(t, e) {
      var i, n, r, a;
      if (this._sequence.push(t), (n = this._get_possible_sequences()).length) {
        for (r = 0, a = n.length; r < a; r++) {
          i = n[r], this._prevent_default(e, i.prevent_default);
        }
        this._sequence_timer && clearTimeout(this._sequence_timer), -1 < this.sequence_delay && (this._sequence_timer = setTimeout(function() {
          return this._sequence = [];
        }, this.sequence_delay));
      } else {
        this._sequence = [];
      }
    }, w.prototype._get_sequence = function(t) {
      var e, i, n, r, a, o, c, l, h, u, d, p;
      for (o = 0, h = (u = this._registered_combos).length; o < h; o++) {
        if ((e = u[o]).is_sequence) {
          for (i = c = 1, d = this._sequence.length; 1 <= d ? c <= d : c >= d; i = 1 <= d ? ++c : --c) {
            if (a = s(this._sequence, function(t) {
              return 0 <= b.call(e.keys, "shift") || "shift" !== t;
            }).slice(-i), e.keys.length === a.length) {
              for (i = l = 0, p = a.length; 0 <= p ? l < p : l > p; i = 0 <= p ? ++l : --l) {
                if (r = a[i], !(0 > b.call(e.keys, "shift") && "shift" === r || "shift" === t && 0 > b.call(e.keys, "shift"))) {
                  if (e.keys[i] !== r) {
                    n = !1;
                    break;
                  }
                  n = !0;
                }
              }
            }
          }
          if (n) {
            return e.is_exclusive && (this._sequence = []), e;
          }
        }
      }
      return !1;
    }, w.prototype._receive_input = function(t, e) {
      var i, r;
      if (this._prevent_capture) {
        this._keys_down.length && (this._keys_down = []);
      } else {
        if (i = n(null != (r = t.keyCode) ? r : t.key), (e || this._keys_down.length || !("alt" === i || i === m)) && i) {
          return e ? this._key_down(i, t) : this._key_up(i, t);
        }
      }
    }, w.prototype._fire = function(t, e, i, n) {
      if ("function" == typeof e["on_" + t] && this._prevent_default(i, !0 !== e["on_" + t].call(e["this"], i, e.count, n)), "release" === t && (e.count = 0), "keyup" === t) {
        return e.keyup_fired = !0;
      }
    }, w.prototype._match_combo_arrays = function(t, n) {
      var r, a, s, o;
      for (a = 0, s = (o = this._registered_combos).length; a < s; a++) {
        (!(r = o[a]).is_unordered && i(t, r.keys) || r.is_unordered && e(t, r.keys)) && n(r);
      }
    }, w.prototype._fuzzy_match_combo_arrays = function(t, e) {
      var i, n, r, a;
      for (n = 0, r = (a = this._registered_combos).length; n < r; n++) {
        (!(i = a[n]).is_unordered && l(i.keys, t) || i.is_unordered && c(i.keys, t)) && e(i);
      }
    }, w.prototype._keys_remain = function(t) {
      var e, i, n, r;
      for (i = 0, n = (r = t.keys).length; i < n; i++) {
        if (t = r[i], 0 <= b.call(this._keys_down, t)) {
          e = !0;
          break;
        }
      }
      return e;
    }, w.prototype._key_down = function(t, e) {
      var i, n, a, s, o;
      (i = r(t, e)) && (t = i), this._add_key_to_sequence(t, e), (i = this._get_sequence(t)) && this._fire("keydown", i, e);
      for (a in g) {
        i = g[a], e[i] && (a === t || 0 <= b.call(this._keys_down, a) || this._keys_down.push(a));
      }
      for (a in g) {
        if (i = g[a], a !== t && 0 <= b.call(this._keys_down, a) && !e[i] && !("cmd" === a && "cmd" !== m)) {
          for (i = n = 0, s = this._keys_down.length; 0 <= s ? n < s : n > s; i = 0 <= s ? ++n : --n) {
            this._keys_down[i] === a && this._keys_down.splice(i, 1);
          }
        }
      }
      for (n = this._get_active_combos(t), a = this._get_potential_combos(t), s = 0, o = n.length; s < o; s++) {
        i = n[s], this._handle_combo_down(i, a, t, e);
      }
      if (a.length) {
        for (n = 0, s = a.length; n < s; n++) {
          i = a[n], this._prevent_default(e, i.prevent_default);
        }
      }
      0 > b.call(this._keys_down, t) && this._keys_down.push(t);
    }, w.prototype._handle_combo_down = function(t, e, i, n) {
      var r, a, s, o, c;
      if (0 > b.call(t.keys, i)) {
        return !1;
      }
      if (this._prevent_default(n, t && t.prevent_default), r = !1, 0 <= b.call(this._keys_down, i) && (r = !0, !t.allows_key_repeat())) {
        return !1;
      }
      if (s = this._add_to_active_combos(t, i), i = t.keyup_fired = !1, t.is_exclusive) {
        for (o = 0, c = e.length; o < c; o++) {
          if ((a = e[o]).is_exclusive && a.keys.length > t.keys.length) {
            i = !0;
            break;
          }
        }
      }
      return !i && (t.is_counting && "function" == typeof t.on_keydown && (t.count += 1), s) ? this._fire("keydown", t, n, r) : void 0;
    }, w.prototype._key_up = function(t, e) {
      var i, n, a, s, o, c;
      if (i = t, (a = r(t, e)) && (t = a), a = p[i], e.shiftKey ? a && 0 <= b.call(this._keys_down, a) || (t = i) : i && 0 <= b.call(this._keys_down, i) || (t = a), (s = this._get_sequence(t)) && this._fire("keyup", s, e), 0 > b.call(this._keys_down, t)) {
        return !1;
      }
      for (s = o = 0, c = this._keys_down.length; 0 <= c ? o < c : o > c; s = 0 <= c ? ++o : --o) {
        if ((n = this._keys_down[s]) === t || n === a || n === i) {
          this._keys_down.splice(s, 1);
          break;
        }
      }
      for (n = this._active_combos.length, a = [], s = 0, o = (c = this._active_combos).length; s < o; s++) {
        i = c[s], 0 <= b.call(i.keys, t) && a.push(i);
      }
      for (s = 0, o = a.length; s < o; s++) {
        i = a[s], this._handle_combo_up(i, e, t);
      }
      if (1 < n) {
        for (n = 0, s = (o = this._active_combos).length; n < s; n++) {
          void 0 === (i = o[n]) || 0 <= b.call(a, i) || this._keys_remain(i) || this._remove_from_active_combos(i);
        }
      }
    }, w.prototype._handle_combo_up = function(t, i, n) {
      var r, a;
      this._prevent_default(i, t && t.prevent_default), a = this._keys_remain(t), t.keyup_fired || ((r = this._keys_down.slice()).push(n), t.is_solitary && !e(r, t.keys)) || (this._fire("keyup", t, i), t.is_counting && "function" == typeof t.on_keyup && "function" != typeof t.on_keydown && (t.count += 1)), a || (this._fire("release", t, i), this._remove_from_active_combos(t));
    }, w.prototype.simple_combo = function(t, e) {
      return this.register_combo({keys:t, on_keydown:e});
    }, w.prototype.counting_combo = function(t, e) {
      return this.register_combo({keys:t, is_counting:!0, is_unordered:!1, on_keydown:e});
    }, w.prototype.sequence_combo = function(t, e) {
      return this.register_combo({keys:t, on_keydown:e, is_sequence:!0, is_exclusive:!0});
    }, w.prototype.register_combo = function(t) {
      var e, i, n;
      "string" == typeof t.keys && (t.keys = t.keys.split(" ")), n = this._defaults;
      for (e in n) {
        x.call(n, e) && (i = n[e], void 0 === t[e] && (t[e] = i));
      }
      if (t = new _(t), y(t)) {
        return this._registered_combos.push(t), t;
      }
    }, w.prototype.register_many = function(t) {
      var e, i, n, r;
      for (r = [], i = 0, n = t.length; i < n; i++) {
        e = t[i], r.push(this.register_combo(e));
      }
      return r;
    }, w.prototype.unregister_combo = function(t) {
      var n, r, a, s, o, c;
      if (!t) {
        return !1;
      }
      var l = this;
      if (r = function(t) {
        var e, i, n, r;
        for (r = [], e = i = 0, n = l._registered_combos.length; 0 <= n ? i < n : i > n; e = 0 <= n ? ++i : --i) {
          if (t === l._registered_combos[e]) {
            l._registered_combos.splice(e, 1);
            break;
          }
          r.push(void 0);
        }
        return r;
      }, t instanceof _) {
        return r(t);
      }
      for ("string" == typeof t && (t = t.split(" ")), c = [], a = 0, s = (o = this._registered_combos).length; a < s; a++) {
        null != (n = o[a]) && (n.is_unordered && e(t, n.keys) || !n.is_unordered && i(t, n.keys) ? c.push(r(n)) : c.push(void 0));
      }
      return c;
    }, w.prototype.unregister_many = function(t) {
      var e, i, n, r;
      for (r = [], i = 0, n = t.length; i < n; i++) {
        e = t[i], r.push(this.unregister_combo(e));
      }
      return r;
    }, w.prototype.get_registered_combos = function() {
      return this._registered_combos;
    }, w.prototype.reset = function() {
      return this._registered_combos = [];
    }, w.prototype.listen = function() {
      return this._prevent_capture = !1;
    }, w.prototype.stop_listening = function() {
      return this._prevent_capture = !0;
    }, w.prototype.get_meta_key = function() {
      return m;
    }, t.Listener = w, n = function(t) {
      return d[t];
    }, s = function(t, e) {
      var i;
      if (t.filter) {
        return t.filter(e);
      }
      var n, r, a;
      for (a = [], n = 0, r = t.length; n < r; n++) {
        i = t[n], e(i) && a.push(i);
      }
      return a;
    }, e = function(t, e) {
      var i, n, r;
      if (t.length !== e.length) {
        return !1;
      }
      for (n = 0, r = t.length; n < r; n++) {
        if (i = t[n], !(0 <= b.call(e, i))) {
          return !1;
        }
      }
      return !0;
    }, i = function(t, e) {
      var i, n, r;
      if (t.length !== e.length) {
        return !1;
      }
      for (i = n = 0, r = t.length; 0 <= r ? n < r : n > r; i = 0 <= r ? ++n : --n) {
        if (t[i] !== e[i]) {
          return !1;
        }
      }
      return !0;
    }, c = function(t, e) {
      var i, n, r;
      for (n = 0, r = t.length; n < r; n++) {
        if (i = t[n], 0 > b.call(e, i)) {
          return !1;
        }
      }
      return !0;
    }, o = Array.prototype.indexOf || function(t, e) {
      var i, n, r;
      for (i = n = 0, r = t.length; 0 <= r ? n <= r : n >= r; i = 0 <= r ? ++n : --n) {
        if (t[i] === e) {
          return i;
        }
      }
      return -1;
    }, l = function(t, e) {
      var i, n, r, a;
      for (r = n = 0, a = t.length; r < a; r++) {
        if (i = t[r], !((i = o.call(e, i)) >= n)) {
          return !1;
        }
        n = i;
      }
      return !0;
    }, f = function() {
      if (t.debug) {
        return console.log.apply(console, arguments);
      }
    }, h = function(t) {
      var e, i, n;
      e = !1;
      for (n in d) {
        if (i = d[n], t === i) {
          e = !0;
          break;
        }
      }
      if (!e) {
        for (n in p) {
          if (i = p[n], t === i) {
            e = !0;
            break;
          }
        }
      }
      return e;
    }, y = function(t) {
      var e, i, n, r, s, c, l;
      for (s = !0, t.keys.length || f("You're trying to bind a combo with no keys:", t), i = c = 0, l = t.keys.length; 0 <= l ? c < l : c > l; i = 0 <= l ? ++c : --c) {
        n = t.keys[i], (e = u[n]) && (n = t.keys[i] = e), "meta" === n && t.keys.splice(i, 1, m), "cmd" === n && f('Warning: use the "meta" key rather than "cmd" for Windows compatibility');
      }
      for (e = 0, c = (l = t.keys).length; e < c; e++) {
        n = l[e], h(n) || (f('Do not recognize the key "' + n + '"'), s = !1);
      }
      if (0 <= b.call(t.keys, "meta") || 0 <= b.call(t.keys, "cmd")) {
        for (e = t.keys.slice(), c = 0, l = v.length; c < l; c++) {
          n = v[c], -1 < (i = o.call(e, n)) && e.splice(i, 1);
        }
        1 < e.length && (f("META and CMD key combos cannot have more than 1 non-modifier keys", t, e), s = !1);
      }
      for (r in t) {
        "undefined" === a[r] && f("The property " + r + " is not a valid combo property. Your combo has still been registered.");
      }
      return s;
    }, r = function(t, e) {
      var i;
      return !!e.shiftKey && (null != (i = p[t]) && i);
    }, g = {cmd:"metaKey", ctrl:"ctrlKey", shift:"shiftKey", alt:"altKey"}, u = {escape:"esc", control:"ctrl", command:"cmd", "break":"pause", windows:"cmd", option:"alt", caps_lock:"caps", apostrophe:"'", semicolon:";", tilde:"~", accent:"`", scroll_lock:"scroll", num_lock:"num"}, p = {"/":"?", ".":">", ",":"<", "'":'"', ";":":", "[":"{", "]":"}", "\\":"|", "`":"~", "=":"+", "-":"_", 1:"!", 2:"@", 3:"#", 4:"$", 5:"%", 6:"^", 7:"&", 8:"*", 9:"(", 0:")"}, d = {0:"\\", 8:"backspace", 9:"tab", 12:"num",
    13:"enter", 16:"shift", 17:"ctrl", 18:"alt", 19:"pause", 20:"caps", 27:"esc", 32:"space", 33:"pageup", 34:"pagedown", 35:"end", 36:"home", 37:"left", 38:"up", 39:"right", 40:"down", 44:"print", 45:"insert", 46:"delete", 48:"0", 49:"1", 50:"2", 51:"3", 52:"4", 53:"5", 54:"6", 55:"7", 56:"8", 57:"9", 65:"a", 66:"b", 67:"c", 68:"d", 69:"e", 70:"f", 71:"g", 72:"h", 73:"i", 74:"j", 75:"k", 76:"l", 77:"m", 78:"n", 79:"o", 80:"p", 81:"q", 82:"r", 83:"s", 84:"t", 85:"u", 86:"v", 87:"w", 88:"x", 89:"y",
    90:"z", 91:"cmd", 92:"cmd", 93:"cmd", 96:"num_0", 97:"num_1", 98:"num_2", 99:"num_3", 100:"num_4", 101:"num_5", 102:"num_6", 103:"num_7", 104:"num_8", 105:"num_9", 106:"num_multiply", 107:"num_add", 108:"num_enter", 109:"num_subtract", 110:"num_decimal", 111:"num_divide", 112:"f1", 113:"f2", 114:"f3", 115:"f4", 116:"f5", 117:"f6", 118:"f7", 119:"f8", 120:"f9", 121:"f10", 122:"f11", 123:"f12", 124:"print", 144:"num", 145:"scroll", 186:";", 187:"=", 188:",", 189:"-", 190:".", 191:"/", 192:"`",
    219:"[", 220:"\\", 221:"]", 222:"'", 223:"`", 224:"cmd", 225:"alt", 57392:"ctrl", 63289:"num", 59:";", 61:"=", 173:"-"}, t._keycode_dictionary = d, t._is_array_in_array_sorted = l, -1 !== navigator.userAgent.indexOf("Mac OS X") && (m = "cmd"), -1 !== navigator.userAgent.indexOf("Opera") && (d[17] = "cmd"), "function" == typeof define && define.amd ? define([], function() {
      return t;
    }) : "undefined" != typeof exports && null !== exports ? exports.keypress = t : window.keypress = t;
  }.call(this), THREE.OBJLoader = function() {
    function t() {
      var t = {objects:[], object:{}, vertices:[], normals:[], colors:[], uvs:[], materialLibraries:[], startObject:function(t, e) {
        if (this.object && !1 === this.object.fromDeclaration) {
          return this.object.name = t, void(this.object.fromDeclaration = !1 !== e);
        }
        var i = this.object && "function" == typeof this.object.currentMaterial ? this.object.currentMaterial() : void 0;
        if (this.object && "function" == typeof this.object._finalize && this.object._finalize(!0), this.object = {name:t || "", fromDeclaration:!1 !== e, geometry:{vertices:[], normals:[], colors:[], uvs:[]}, materials:[], smooth:!0, startMaterial:function(t, e) {
          var i = this._finalize(!1);
          i && (i.inherited || i.groupCount <= 0) && this.materials.splice(i.index, 1);
          var n = {index:this.materials.length, name:t || "", mtllib:Array.isArray(e) && e.length > 0 ? e[e.length - 1] : "", smooth:void 0 !== i ? i.smooth : this.smooth, groupStart:void 0 !== i ? i.groupEnd : 0, groupEnd:-1, groupCount:-1, inherited:!1, clone:function(t) {
            var e = {index:"number" == typeof t ? t : this.index, name:this.name, mtllib:this.mtllib, smooth:this.smooth, groupStart:0, groupEnd:-1, groupCount:-1, inherited:!1};
            return e.clone = this.clone.bind(e), e;
          }};
          return this.materials.push(n), n;
        }, currentMaterial:function() {
          if (this.materials.length > 0) {
            return this.materials[this.materials.length - 1];
          }
        }, _finalize:function(t) {
          var e = this.currentMaterial();
          if (e && -1 === e.groupEnd && (e.groupEnd = this.geometry.vertices.length / 3, e.groupCount = e.groupEnd - e.groupStart, e.inherited = !1), t && this.materials.length > 1) {
            for (var i = this.materials.length - 1; i >= 0; i--) {
              this.materials[i].groupCount <= 0 && this.materials.splice(i, 1);
            }
          }
          return t && 0 === this.materials.length && this.materials.push({name:"", smooth:this.smooth}), e;
        }}, i && i.name && "function" == typeof i.clone) {
          var n = i.clone(0);
          n.inherited = !0, this.object.materials.push(n);
        }
        this.objects.push(this.object);
      }, finalize:function() {
        this.object && "function" == typeof this.object._finalize && this.object._finalize(!0);
      }, parseVertexIndex:function(t, e) {
        var i = parseInt(t, 10);
        return 3 * (i >= 0 ? i - 1 : i + e / 3);
      }, parseNormalIndex:function(t, e) {
        var i = parseInt(t, 10);
        return 3 * (i >= 0 ? i - 1 : i + e / 3);
      }, parseUVIndex:function(t, e) {
        var i = parseInt(t, 10);
        return 2 * (i >= 0 ? i - 1 : i + e / 2);
      }, addVertex:function(t, e, i) {
        var n = this.vertices, r = this.object.geometry.vertices;
        r.push(n[t + 0], n[t + 1], n[t + 2]), r.push(n[e + 0], n[e + 1], n[e + 2]), r.push(n[i + 0], n[i + 1], n[i + 2]);
      }, addVertexLine:function(t) {
        var e = this.vertices;
        this.object.geometry.vertices.push(e[t + 0], e[t + 1], e[t + 2]);
      }, addNormal:function(t, e, i) {
        var n = this.normals, r = this.object.geometry.normals;
        r.push(n[t + 0], n[t + 1], n[t + 2]), r.push(n[e + 0], n[e + 1], n[e + 2]), r.push(n[i + 0], n[i + 1], n[i + 2]);
      }, addColor:function(t, e, i) {
        var n = this.colors, r = this.object.geometry.colors;
        r.push(n[t + 0], n[t + 1], n[t + 2]), r.push(n[e + 0], n[e + 1], n[e + 2]), r.push(n[i + 0], n[i + 1], n[i + 2]);
      }, addUV:function(t, e, i) {
        var n = this.uvs, r = this.object.geometry.uvs;
        r.push(n[t + 0], n[t + 1]), r.push(n[e + 0], n[e + 1]), r.push(n[i + 0], n[i + 1]);
      }, addUVLine:function(t) {
        var e = this.uvs;
        this.object.geometry.uvs.push(e[t + 0], e[t + 1]);
      }, addFace:function(t, e, i, n, r, a, s, o, c) {
        var l = this.vertices.length, h = this.parseVertexIndex(t, l), u = this.parseVertexIndex(e, l), d = this.parseVertexIndex(i, l);
        if (this.addVertex(h, u, d), void 0 !== n) {
          var p = this.uvs.length;
          h = this.parseUVIndex(n, p), u = this.parseUVIndex(r, p), d = this.parseUVIndex(a, p), this.addUV(h, u, d);
        }
        if (void 0 !== s) {
          var f = this.normals.length;
          h = this.parseNormalIndex(s, f), u = s === o ? h : this.parseNormalIndex(o, f), d = s === c ? h : this.parseNormalIndex(c, f), this.addNormal(h, u, d);
        }
        this.colors.length > 0 && this.addColor(h, u, d);
      }, addLineGeometry:function(t, e) {
        this.object.geometry.type = "Line";
        for (var i = this.vertices.length, n = this.uvs.length, r = 0, a = t.length; r < a; r++) {
          this.addVertexLine(this.parseVertexIndex(t[r], i));
        }
        for (var s = 0, a = e.length; s < a; s++) {
          this.addUVLine(this.parseUVIndex(e[s], n));
        }
      }};
      return t.startObject("", !1), t;
    }
    function e(t) {
      this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager, this.materials = null;
    }
    var i = /^[og]\s*(.+)?/, n = /^mtllib /, r = /^usemtl /;
    return e.prototype = {constructor:e, load:function(t, e, i, n) {
      var r = this, a = new THREE.FileLoader(r.manager);
      a.setPath(this.path), a.load(t, function(t) {
        e(r.parse(t));
      }, i, n);
    }, setPath:function(t) {
      this.path = t;
    }, setMaterials:function(t) {
      return this.materials = t, this;
    }, parse:function(e) {
      console.time("OBJLoader");
      var a = new t;
      -1 !== e.indexOf("\r\n") && (e = e.replace(/\r\n/g, "\n")), -1 !== e.indexOf("\\\n") && (e = e.replace(/\\\n/g, ""));
      for (var s = e.split("\n"), o = "", c = "", l = [], h = "function" == typeof "".trimLeft, u = 0, d = s.length; u < d; u++) {
        if (o = s[u], o = h ? o.trimLeft() : o.trim(), 0 !== o.length && "#" !== (c = o.charAt(0))) {
          if ("v" === c) {
            var p = o.split(/\s+/);
            switch(p[0]) {
              case "v":
                a.vertices.push(parseFloat(p[1]), parseFloat(p[2]), parseFloat(p[3])), 8 === p.length && a.colors.push(parseFloat(p[4]), parseFloat(p[5]), parseFloat(p[6]));
                break;
              case "vn":
                a.normals.push(parseFloat(p[1]), parseFloat(p[2]), parseFloat(p[3]));
                break;
              case "vt":
                a.uvs.push(parseFloat(p[1]), parseFloat(p[2]));
            }
          } else {
            if ("f" === c) {
              for (var f = o.substr(1).trim().split(/\s+/), m = [], g = 0, v = f.length; g < v; g++) {
                var y = f[g];
                if (y.length > 0) {
                  var x = y.split("/");
                  m.push(x);
                }
              }
              for (var b = m[0], g = 1, v = m.length - 1; g < v; g++) {
                var _ = m[g], w = m[g + 1];
                a.addFace(b[0], _[0], w[0], b[1], _[1], w[1], b[2], _[2], w[2]);
              }
            } else {
              if ("l" === c) {
                var M = o.substring(1).trim().split(" "), E = [], T = [];
                if (-1 === o.indexOf("/")) {
                  E = M;
                } else {
                  for (var S = 0, A = M.length; S < A; S++) {
                    var C = M[S].split("/");
                    "" !== C[0] && E.push(C[0]), "" !== C[1] && T.push(C[1]);
                  }
                }
                a.addLineGeometry(E, T);
              } else {
                if (null !== (l = i.exec(o))) {
                  var L = (" " + l[0].substr(1).trim()).substr(1);
                  a.startObject(L);
                } else {
                  if (r.test(o)) {
                    a.object.startMaterial(o.substring(7).trim(), a.materialLibraries);
                  } else {
                    if (n.test(o)) {
                      a.materialLibraries.push(o.substring(7).trim());
                    } else {
                      if ("s" !== c) {
                        if ("\x00" === o) {
                          continue;
                        }
                        throw new Error('THREE.OBJLoader: Unexpected line: "' + o + '"');
                      }
                      if ((l = o.split(" ")).length > 1) {
                        var P = l[1].trim().toLowerCase();
                        a.object.smooth = "0" !== P && "off" !== P;
                      } else {
                        a.object.smooth = !0;
                      }
                      (H = a.object.currentMaterial()) && (H.smooth = a.object.smooth);
                    }
                  }
                }
              }
            }
          }
        }
      }
      a.finalize();
      var k = new THREE.Group;
      k.materialLibraries = [].concat(a.materialLibraries);
      for (var u = 0, d = a.objects.length; u < d; u++) {
        var R = a.objects[u], D = R.geometry, I = R.materials, N = "Line" === D.type;
        if (0 !== D.vertices.length) {
          var U = new THREE.BufferGeometry;
          U.addAttribute("position", new THREE.Float32BufferAttribute(D.vertices, 3)), D.normals.length > 0 ? U.addAttribute("normal", new THREE.Float32BufferAttribute(D.normals, 3)) : U.computeVertexNormals(), D.colors.length > 0 && U.addAttribute("color", new THREE.Float32BufferAttribute(D.colors, 3)), D.uvs.length > 0 && U.addAttribute("uv", new THREE.Float32BufferAttribute(D.uvs, 2));
          for (var F = [], O = 0, B = I.length; O < B; O++) {
            var z = I[O], H = void 0;
            if (null !== this.materials && (H = this.materials.create(z.name), N && H && !(H instanceof THREE.LineBasicMaterial))) {
              var V = new THREE.LineBasicMaterial;
              V.copy(H), H = V;
            }
            H || ((H = N ? new THREE.LineBasicMaterial : new THREE.MeshPhongMaterial).name = z.name), H.flatShading = !z.smooth, F.push(H);
          }
          var G;
          if (F.length > 1) {
            for (var O = 0, B = I.length; O < B; O++) {
              z = I[O];
              U.addGroup(z.groupStart, z.groupCount, O);
            }
            G = N ? new THREE.LineSegments(U, F) : new THREE.Mesh(U, F);
          } else {
            G = N ? new THREE.LineSegments(U, F[0]) : new THREE.Mesh(U, F[0]);
          }
          G.name = R.name, k.add(G);
        }
      }
      return console.timeEnd("OBJLoader"), k;
    }}, e;
  }(), function(t) {
    function e(e, i) {
      var n = new t.Vector3, r = new t.Vector3, a = new t.Vector3, s = new t.Vector3, o = new t.Vector3, c = i.vertices[e.a], l = i.vertices[e.b], h = i.vertices[e.c];
      return e instanceof t.Face3 ? (n.subVectors(h, l), r.subVectors(c, l), n.cross(r), n) : e instanceof t.Face4 ? (n = i.vertices[e.d], a.subVectors(n, l), r.subVectors(c, l), a.cross(r), s.subVectors(n, h), o.subVectors(l, h), s.cross(o), s.add(a), s.multiplyScalar(.5)) : void 0;
    }
    t.OBMLoader = function(e) {
      t.OBJLoader.call(this, e);
    }, t.OBMLoader.prototype = Object.create(t.OBJLoader.prototype);
    var i;
    t.OBMLoader.prototype.load = function(e, i, n, r) {
      var a = this, s = new t.FileLoader(a.manager);
      s.setPath(this.path), s.load(e, function(t) {
        a.loadString(t, i);
      }, n, r);
    }, t.OBMLoader.prototype.loadString = function(e, n) {
      e = this.preprocess(e);
      var r = this.parse(e);
      i.vn_autocreate && r.children.forEach(function(e, i) {
        e.geometry = (new t.Geometry).fromBufferGeometry(e.geometry), e.geometry.mergeVertices(), e.geometry.computeVertexNormals(), e.geometry = (new t.BufferGeometry).fromGeometry(e.geometry);
      }), i.vn_autocreate_degrees && r.children.forEach(function(e, n) {
        e.geometry = (new t.Geometry).fromBufferGeometry(e.geometry), e.geometry.mergeVertices(), e.geometry.computeVertexNormalsByDegrees(i.vn_autocreate_degrees), e.geometry = (new t.BufferGeometry).fromGeometry(e.geometry);
      }), n(r);
    }, t.OBMLoader.prototype.preprocess = function(t) {
      for (var e, n, r, a, s = [0, 0, 0], o = [0, 0, 0], c = [0, 0], l = 0, h = (t = t.replace(/~/g, "//").split("\n")).length; l < h; l++) {
        var u = t[l].trim().split(" ");
        if ("v" === (d = u.shift())) {
          u[0] = s[0] + parseInt(u[0], 10) / n, u[1] = s[1] + parseInt(u[1], 10) / n, u[2] = s[2] + parseInt(u[2], 10) / n, t[l] = "v " + u[0] * i.scale + " " + u[1] * i.scale + " " + u[2] * i.scale, s = u;
        } else {
          if ("vn" === d) {
            u[0] = o[0] + parseFloat(u[0]) / a, u[1] = o[1] + parseFloat(u[1]) / a, u[2] = o[2] + parseFloat(u[2]) / a, t[l] = "vn " + u[0] + " " + u[1] + " " + u[2], o = u;
          } else {
            if ("vt" === d) {
              void 0 !== c && (u[0] = c[0] + parseFloat(u[0]) / r, u[1] = c[1] + parseFloat(u[1]) / r, u[2] = c[2] + parseFloat(u[2]) / r, t[l] = "vt " + u[0] + " " + u[1] + " " + u[2]), c = u;
            } else {
              if ("f" === d) {
                if (u = u.map(function(t) {
                  return t.split("/");
                }), void 0 === e) {
                  for (e = u.slice(0), d = 0; d < u.length; d++) {
                    u[d] = u[d].join("/");
                  }
                } else {
                  for (var d = 0, p = u.length; d < p; d++) {
                    for (var f = 0, m = u[d].length; f < m; f++) {
                      e[d] && u[d] && "" !== u[d][f] && (u[d][f] = parseInt(u[d][f], 10) + parseInt(e[d][f], 10));
                    }
                  }
                  for (e = u.slice(0), d = 0; d < p; d++) {
                    u[d] = u[d].join("/");
                  }
                }
                t[l] = "f " + u.join(" ");
              } else {
                "#" === d && "INSTRUCTIONS" === u[0] && (i = JSON.parse(u.slice(1).join(" ")), n = Math.pow(10, i.v_precision), r = Math.pow(10, i.vt_precision), a = Math.pow(10, i.vn_precision));
              }
            }
          }
        }
      }
      return t.join("\n");
    }, t.Geometry.prototype.computeVertexNormalsByDegrees = function(i) {
      for (var n = this.faces, r = this.vertices, a = Array(r.length), s = n.length; s--;) {
        var o = n[s], c = o.normal.length(), l = o.vertexNormals;
        a[o.a] = a[o.a] || [], a[o.a].push({face:o, face_normal_length:c, vertexNormal:l[0], smoothingGroup:[]}), a[o.b] = a[o.b] || [], a[o.b].push({face:o, face_normal_length:c, vertexNormal:l[1], smoothingGroup:[]}), a[o.c] = a[o.c] || [], a[o.c].push({face:o, face_normal_length:c, vertexNormal:l[2], smoothingGroup:[]}), o.d && (a[o.d] = a[o.d] || [], a[o.d].push({face:o, face_normal_length:c, vertexNormal:l[3], smoothingGroup:[]}));
      }
      for (var h, s = 0, r = r.length; r--;) {
        if (a[r]) {
          for (o = 0, i_length = a[r].length; o < i_length; o++) {
            var c = a[r][o], l = a[r][(o + 1) % a[r].length], u = c.face.normal.dot(l.face.normal);
            180 * Math.acos(u / (c.face_normal_length * l.face_normal_length)) / Math.PI <= i ? (h = !0, c.smoothingGroup.push(s), l.smoothingGroup.push(s)) : (s++, c.vertexNormal.add(a[r][o].face.normal), l.vertexNormal.add(l.face.normal));
          }
        }
        if (h) {
          for (h = {}, c = (s = a[r]).length; c--;) {
            o = s[c].smoothingGroup[0], h[o] ? h[o].averageVec.add(e(s[c].face, this)) : h[o] = {averageVec:e(s[c].face, this)};
          }
          for (2 === s[0].smoothingGroup.length && (o = h[s[0].smoothingGroup[0]], s = h[s[0].smoothingGroup[1]], c = (new t.Vector3).addVectors(o.averageVec, s.averageVec), o.averageVec = c, s.averageVec = c), o = h, c = a[r].length; c--;) {
            h = a[r][c], void 0 !== (s = h.smoothingGroup[0]) && h.vertexNormal.copy(o[s].averageVec);
          }
        }
        h = !1, s = 0;
      }
      for (o = n.length; o--;) {
        for (i = n[o].vertexNormals.length; i--;) {
          n[o].vertexNormals[i].normalize();
        }
      }
    };
  }(THREE);
  var ht = function() {
    var t = window.innerWidth, e = window.innerHeight;
    Ei && (Ei.setSize(t, e), cn()), Tt && (Tt.width = t, Tt.height = e), Ai && (Ai.fov = 75, Ai.aspect = t / e, Ai.updateProjectionMatrix()), Ci && (Ci.left = -t / 2, Ci.right = t / 2, Ci.top = e / 2, Ci.bottom = -e / 2, Ci.updateProjectionMatrix());
  };
  window.addEventListener("resize", ht, !1);
  var ut = new THREE.TextureLoader, dt = new THREE.FileLoader, pt = new THREE.OBMLoader, ft = {}, mt = {}, gt = {}, vt = {}, yt = {};
  yt.promises = [], yt.compute = function(t) {
    return yt.promises.push(new Promise(function(e, i) {
      t(), e();
    })), yt.promises[yt.promises.length - 1];
  }, yt.loadTexture = function(t) {
    return yt.promises.push(new Promise(function(e, i) {
      ut.load(t, function(i) {
        ft[t.substring(t.lastIndexOf("/") + 1, t.length).replace(/\.[^/.]+$/, "")] = i, e();
      }, function(t) {
      }, function(t) {
      });
    })), yt.promises[yt.promises.length - 1];
  }, yt.loadModel = function(t) {
    return yt.promises.push(new Promise(function(e, i) {
      pt.load(t, function(i) {
        gt[t.substring(t.lastIndexOf("/") + 1, t.length).replace(/\.[^/.]+$/, "")] = i, e();
      });
    })), yt.promises[yt.promises.length - 1];
  }, yt.loadShader = function(t) {
    return yt.promises.push(new Promise(function(e, i) {
      dt.load(t, function(i) {
        mt[t.substring(t.lastIndexOf("/") + 1, t.length)] = i, e();
      });
    })), yt.promises[yt.promises.length - 1];
  }, yt.loadJSON = function(t) {
    return yt.promises.push(new Promise(function(e, i) {
      $.getJSON(t, function(i) {
        vt[t.substring(t.lastIndexOf("/") + 1, t.length).replace(/\.[^/.]+$/, "")] = i, e();
      });
    })), yt.promises[yt.promises.length - 1];
  }, yt.onFinish = function(t) {
    Promise.all(yt.promises).then(function(e) {
      t && t();
    });
  };
  var xt = [{value:1e18, symbol:"E"}, {value:1e15, symbol:"P"}, {value:1e12, symbol:"T"}, {value:1e9, symbol:"G"}, {value:1e6, symbol:"M"}, {value:1e3, symbol:"k"}], bt = /\.0+$|(\.[0-9]*[1-9])0+$/, _t = function(t) {
    return 1 == t || "true" == t;
  };
  yt.loadTexture("../data/terrain/color.jpg"), yt.loadTexture("../data/terrain/heightmap.jpg"), yt.loadTexture("../data/terrain/grassmap.png"), yt.loadTexture("../data/terrain/grass.png"), yt.loadTexture("../data/terrain/detail.jpg"), yt.loadTexture("../data/terrain/detail2.jpg"), yt.loadTexture("../data/terrain/detail_h.jpg"), yt.loadModel("../data/model/tree"), yt.loadTexture("../data/tree.png"), yt.loadShader("script/shader/grass.vert"), yt.loadShader("script/shader/grass.frag"), yt.loadShader("script/shader/terrain.vert"),
  yt.loadShader("script/shader/terrain.frag");
  var wt = function() {
    yt.loadTexture("../data/efx/gradient.jpg"), yt.loadTexture("../data/efx/heal_alpha.jpg"), yt.loadTexture("../data/efx/heal_color.jpg"), yt.loadTexture("../data/efx/ice_color.jpg"), yt.loadTexture("../data/efx/leech_color.jpg"), yt.loadTexture("../data/efx/decay_alpha.jpg"), yt.loadTexture("../data/efx/decay_color.jpg"), yt.loadTexture("../data/efx/swingtest.jpg"), yt.loadTexture("../data/efx/alpha.jpg"), yt.loadTexture("../data/factionA.png"), yt.loadTexture("../data/factionB.png"), yt.loadTexture("../data/items/items.png"),
    yt.loadModel("../data/model/crown"), yt.loadModel("../data/model/helmet"), yt.loadJSON("../data/items/items.json");
  }, Mt = ["armor", "weapon", "offhand", "glove", "armlet", "boot", "gem", "ring", "bag"], Et = {g:{type:"gold", name:"Gold", drop:0}, sw:{description:"Sword", slot:"weapon", type:"sword", rotatedSprite:!0, name:["Wooden Sword", "Rusty Ironsword", "Troll Blade", "Broadsword ", "Longsword", "Carved Bonesword", "Greatsword", "Ghastly Scimitar", "Nullfire Sword", "Knight's Greatsword", "King's Glaive", "Void Blade", "Zerst\u00f6rer", "Hearteater", "Demonedge", "Excalibur", "Harbinger"], drop:1, "class":["warrior"],
  lvl:[1, 3, 9, 15, 21, 28, 34, 40, 46, 52, 58, 64, 70, 76, 82, 88, 94], stats:{mindmg:{base:3, multi:.7, low:.6, high:.9}, maxdmg:{base:5, multi:.8, low:1.1, high:1.2}, crit:{base:2, multi:.12, low:.8, high:1, "float":!0}}}, st:{description:"Staff", slot:"weapon", type:"staff", rotatedSprite:!0, name:["Broken Twig", "Cracked Stick", "Gnarled Broomstick", "Oak Stave", "Mystic Wand", "Bone Stave", "Encrusted Rod", "Imbued Staff", "Emerald Staff", "Sapphire Staff", "Frozen Greatstaff", "Infernal Staff",
  "Hellfire Greatstaff", "Staff of Angelness ", "Crystal Core", "Witch's Heart", "Deathweaver"], drop:1, "class":["mage"], lvl:[1, 4, 10, 16, 22, 29, 35, 41, 47, 53, 59, 65, 71, 77, 83, 89, 95], stats:{mindmg:{base:2, multi:.9, low:.6, high:.9}, maxdmg:{base:3, multi:1.1, low:1.1, high:1.2}, crit:{base:2, multi:.1, low:.8, high:1, "float":!0}, mp:{base:5, multi:.8, low:.8, high:1}, mpreg:{base:.5, multi:.05, low:.8, high:1, "float":!0}}}, hm:{description:"Hammer", slot:"weapon", type:"hammer", rotatedSprite:!0,
  name:["Splintered Club", "Wooden Mallet", "Rusty Flail", "Orcish Bludgeon", "Heavy Mace", "Iron Basher", "Darkmetal Maul", "Divine Gavel", "Hallowed Hammer", "Dwarfen Maul", "Coldforged Gavel", "Amboss", "Skullshatterer", "Benevolence ", "Hammer of Gaia", "Worldender", "Nightmare"], drop:1, "class":["shaman"], lvl:[1, 5, 11, 17, 23, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96], stats:{mindmg:{base:1, multi:.6, low:.6, high:1}, maxdmg:{base:4, multi:.8, low:.7, high:1}, mpreg:{base:1, multi:.05,
  low:.8, high:1, "float":!0}}}, bw:{description:"Bow", slot:"weapon", type:"bow", rotatedSprite:!0, name:["Driftwood Shortbow", "Novice Shortbow", "Curved Shortbow", "Adventurer's Shortbow", "Long Bow", "Bone Bow", "Elven Bow", "Ancient Bow", "Iron Piercer", "Silver Recurve", "Assassin's Bow", "Skyfire Warbow", "Hellfire Warbow", "Widowmaker", "Stormsong", "Scarebow", "Fury"], drop:1, "class":["archer"], lvl:[1, 6, 12, 18, 24, 31, 37, 43, 49, 55, 61, 67, 73, 79, 85, 91, 97], stats:{mindmg:{base:1,
  multi:.7, low:.7, high:1}, maxdmg:{base:3, multi:.9, low:1, high:1.1}, crit:{base:3, multi:.15, low:.6, high:1, "float":!0}}}, ar:{description:"Chest armor", slot:"armor", type:"armor", rotatedSprite:!1, name:["Potato Sack", "Faded Garment", "Adventurer's Tunic", "Quilted Leather", "Scaled Chestguard", "Sky Cloak", "Shadow Cloak", "Obsidian Cloak", "Hellfire Cloak", "Soulkeeper", "Deathless"], drop:2, lvl:[1, 9, 18, 27, 36, 45, 56, 65, 74, 83], stats:{def:{base:5, multi:.9, low:.6, high:1}, hp:{base:10,
  multi:1.2, low:.6, high:1}, hpreg:{base:.5, multi:.05, low:.3, high:1, "float":!0}}}, gl:{description:"Gloves", slot:"glove", type:"glove", rotatedSprite:!1, name:["Hand Wraps", "Cloth Mitts", "Leather Gloves", "Bone Grips", "Iron Gauntlets", "Imbued Gloves", "Wartorn Mitts", "Fiery Handguards", "Gloves of Empowerment ", "Coldforged Fists", "Eternal Gauntlets", "Gloves of Midas", "Titan's Mitts"], drop:3, lvl:[1, 8, 17, 26, 35, 44, 55, 64, 73, 82], stats:{crit:{base:.2, multi:.05, low:.2, high:1,
  "float":!0}, def:{base:2, multi:.3, low:.5, high:1}, hp:{base:3, multi:.4, low:.5, high:1}}}, al:{description:"Armlet", slot:"armlet", type:"armlet", rotatedSprite:!1, name:["Simple Bracelet", "Makeshift Brace", "Leather Armlet", "Ivory Bracelet", "Iron Vambrace", "Imbued Bracers", "Ember Cuffs", "Mirrored Armlet", "Golem Fragment", "Coldforged Bracer", "Blackstar Gem", "Eternal Vambraces", "Lost Guardian"], drop:3, lvl:[1, 7, 16, 25, 34, 43, 54, 63, 72, 81], stats:{def:{base:2, multi:.4, low:.5,
  high:1}, hp:{base:3, multi:.3, low:.5, high:1}, mp:{base:5, multi:1, low:.5, high:1}, mpreg:{base:.2, multi:.05, low:.5, high:1, "float":!0}}}, bt:{description:"Boots", slot:"boot", type:"boot", rotatedSprite:!1, name:["Sandals", "Cloth Footpads", "Leather Boots", "Bone Greaves", "Scaled Treads", "Patterned Greaves", "Wartorn Boots", "Imbued Treads", "Skyswift Boots", "Coldforged Greaves", "Cloudrunner Treads", "Boots of Hermes", "Starshard Greaves"], drop:3, lvl:[1, 6, 15, 24, 33, 42, 53, 62,
  71, 80], stats:{def:{base:2, multi:.3, low:.5, high:1}, hp:{base:3, multi:.3, low:.5, high:1}, move:{base:.1, multi:.02, low:.5, high:1, "float":!0}}}, gm:{description:"Gem", slot:"gem", type:"gem", rotatedSprite:!1, name:["Potato Sack", "Faded Garment", "Adventurer's Tunic", "Quilted Leather"], drop:0, lvl:[1, 9, 18, 27, 36, 45, 56, 65, 74, 83], stats:{mindmg:{multi:1, low:.8, high:1}, maxdmg:{multi:1, low:1.5, high:1.9}, crit:{multi:.5, low:.8, high:1, "float":!0}, def:{multi:1, low:.8, high:1},
  hp:{multi:.5, low:.8, high:1}, hpreg:{multi:.5, low:.8, high:1, "float":!0}, mp:{multi:.5, low:.8, high:1}, mpreg:{multi:.5, low:.8, high:1, "float":!0}, move:{multi:1, low:.8, high:1, "float":!0}}}, ri:{description:"Ring", slot:"ring", type:"ring", rotatedSprite:!1, name:["Woven Band", "Ironbark Circlet", "Brass Ringlet", "Hollowed Bone", "Elven Band", "Imbued Circlet", "Arcane Ring", "Emerald Band", "Infernal Ring", "Ancient Talisman"], drop:2, lvl:[1, 5, 14, 23, 32, 41, 52, 61, 70, 79], stats:{hpreg:{base:.1,
  multi:.05, low:.2, high:1, "float":!0}, mpreg:{base:.1, multi:.05, low:.2, high:1, "float":!0}}}, bg:{description:"Bag", slot:"bag", type:"bag", rotatedSprite:!1, name:["Linen Pouch", "Adventurer's Rucksack", "Purpur Duffel", "Elven Saddlebag", "Moss Enigma"], drop:1, lvl:[15, 31, 46, 61, 82], stats:{slots:{multi:.5, low:.8, high:1}}}, qv:{description:"Quiver", slot:"offhand", type:"quiver", rotatedSprite:!0, name:["Linen Quiver", "Reinforced Quiver", "Last Reserves", "Lotharien", "Snake Quiver"],
  drop:1, "class":["archer"], lvl:[5, 25, 45, 65, 85], stats:{crit:{base:.5, multi:.08, low:.5, high:1, "float":!0}, move:{base:.1, multi:.03, low:.5, high:1, "float":!0}}}, sh:{description:"Shield", slot:"offhand", type:"shield", rotatedSprite:!1, name:["Wooden Shield", "Buckler", "Old Bulwark", "Metal Guard", "Protecteron"], drop:2, "class":["shaman", "warrior"], lvl:[2, 13, 33, 63, 88], stats:{def:{base:15, multi:1.2, low:.5, high:1}, hp:{base:8, multi:.4, low:.5, high:1}, hpreg:{base:.1, multi:.05,
  low:.5, high:1, "float":!0}}}, ta:{description:"Talisman", slot:"offhand", type:"talisman", rotatedSprite:!1, name:["Smelly Talisman", "Guided Talisman", "Ocean Talisman", "Qui'ton", "Dimension Talisman"], drop:1, "class":["mage"], lvl:[7, 27, 47, 67, 87], stats:{mp:{base:3, multi:1.2, low:.5, high:1}, mpreg:{base:.1, multi:.1, low:.5, high:1, "float":!0}}}, to:{description:"Totem", slot:"offhand", type:"totem", rotatedSprite:!0, name:["Potato Sack", "Faded Garment", "Adventurer's Tunic", "Quilted Leather"],
  drop:0, lvl:[10, 30, 50, 70, 90], stats:{mindmg:{multi:1, low:.8, high:1}, maxdmg:{multi:1, low:1.5, high:1.9}, crit:{multi:.5, low:.8, high:1, "float":!0}, def:{multi:1, low:.8, high:1}, hp:{multi:.5, low:.8, high:1}, hpreg:{multi:.5, low:.8, high:1, "float":!0}, mp:{multi:.5, low:.8, high:1}, mpreg:{multi:.5, low:.8, high:1, "float":!0}, move:{multi:1, low:.8, high:1, "float":!0}}}}, Tt = {};
  window.xhordes.Et = Et;
  ki = new Object, Tt.entities = ki;
  var St, At = function(t, e) {
    if (ki.hasOwnProperty(t)) {
      if (void 0 === ki[t]) {
        return;
      }
      ki[t].timeSinceLastUpdate = 0, ki[t].parseDeltaMsg(e);
    }
  }, Ct = function(t) {
    Pi && Pi.id == t && (Pi = void 0), ki.hasOwnProperty(t) && void 0 !== ki[t] && (Pi && Pi.target == ki[t] && (Pi.target = void 0), ae(ki[t]), ki[t].destroyBody(), ki[t] = void 0);
  }, Lt = function() {
    for (e in ki) {
      ki.hasOwnProperty(e) && ki[e] && ki[e].id && Ct(ki[e].id);
    }
    for (var t in le) {
      le.hasOwnProperty(t) && le[t].destroy();
    }
    ke(), Pi = void 0;
  }, Pt = !1, kt = !1, Rt = !1, Dt = !1, It = !1, Nt = !1, Ut = function(t) {
    var e = {is_unordered:!0, prevent_repeat:!0, prevent_default:!0};
    St = new window.keypress.Listener(document.getElementById("body"), e), $("input").bind("focus", function() {
      St.stop_listening();
    }).bind("blur", function() {
      St.listen();
    }), document.onkeyup = function(t) {
      ("key" in (t = t || window.event) ? "Escape" == t.key : 27 == t.keyCode) && Pi && (Pi.target = void 0);
    }, Ft();
  }, Ft = function() {
    if (!$("#sys-discord").length) {
      $("#sys-help").after('<button class="btn btn-default systembarbutton" id="sys-discord" type="button"><div class="sys-icon icon-discord"></div></button>');
    }
    if (!$("#sys-test").length) {
      $("#sys-help").after('<button class="btn btn-default systembarbutton" id="sys-test" type="button"><div class="sys-icon icon-test"></div></button>');
    }
    St.reset(), St.simple_combo(zt.get("toggleHelp"), function() {
      $("#modal-help").replaceWith('<div class="modal fade in" id="modal-help" tabindex="-1" role="dialog" style="display: block;"><div class="modal-dialog modal-body-base modal-help" role="document"><div class="modal-content"><div class="modal-body"><button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">\u00d7</span></button><h4><div class="sys-icon icon-help iconpanelmod"></div> Help</h4><div><h5>Controls <small>Can be changed with /rebind</small></h5><table class="table controltable"><tbody><tr><td><kbd>W A S D</kbd></td><td class="td-help"> Move around</td></tr><tr><td><kbd>1 2 3 4</kbd></td><td class="td-help"> Use skills on current target</td></tr><tr><td><kbd>B</kbd></td><td class="td-help"> Inventory</td></tr><tr><td><kbd>C</kbd></td><td class="td-help"> Character Panel</td></tr><tr><td><kbd>Left mouse</kbd></td><td class="td-help"> Select a target / Rotate camera</td></tr><tr><td><kbd>Right mouse</kbd></td><td class="td-help"> Look around</td></tr><tr><td><kbd>Tab</kbd></td><td class="td-help"> Next target</td></tr><tr><td><kbd>Shift</kbd></td><td class="td-help"> Next ally</td></tr><tr><td><kbd>F1</kbd></td><td class="td-help"> Toggle help</td></tr><tr><td style = "background-color: #FFCE44"><kbd>X</kbd></td><td class="td-help" style = "background-color: #FFCE44"> Show the XHORDES keys</td></tr></tbody></table><h5>Chat Commands <small>Type into chat to activate</small></h5><table class="table controltable"><tbody><tr><td><kbd>/bindings</kbd></td><td class="td-help"> Show list of current bindings</td></tr><tr><td><kbd>/rebind</kbd></td><td class="td-help"> Change the binding of a key</td></tr><tr><td><kbd>/resetbindings</kbd></td><td class="td-help"> Reset all bindings to default</td></tr><tr><td><kbd>/respawn</kbd></td><td class="td-help"> Suicide and go back to spawn</td></tr></tbody></table></div></div></div></div></div>');
      $("#modal-help").modal("toggle");
    }), St.simple_combo(zt.get("toggleXHelp"), function() {
      $("#modal-help").replaceWith('<div class="modal fade in" id="modal-help" tabindex="-1" role="dialog" style="display: block;"><div class="modal-dialog modal-body-base modal-help" role="document"><div class="modal-content"><div class="modal-body"><button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">\u00d7</span></button><h4><div class="sys-icon icon-help iconpanelmod"></div> Help</h4><div><h5>Controls <small>Can be changed with /rebind</small></h5><table class="table controltable"><tbody><tr><td><kbd>W A S D</kbd></td><td class="td-help"> Move around</td></tr><tr><td><kbd>1 2 3 4</kbd></td><td class="td-help"> Use skills on current target</td></tr><tr><td><kbd>B</kbd></td><td class="td-help"> Inventory</td></tr><tr><td><kbd>C</kbd></td><td class="td-help"> Character Panel</td></tr><tr><td><kbd>Left mouse</kbd></td><td class="td-help"> Select a target / Rotate camera</td></tr><tr><td><kbd>Right mouse</kbd></td><td class="td-help"> Look around</td></tr><tr><td><kbd>Tab</kbd></td><td class="td-help"> Next target</td></tr><tr><td><kbd>Shift</kbd></td><td class="td-help"> Next ally</td></tr><tr><td><kbd>F1</kbd></td><td class="td-help"> Toggle help</td></tr><tr><td style = "background-color: #FFCE44"><kbd>X</kbd></td><td class="td-help" style = "background-color: #FFCE44"> Show the XHORDES keys</td></tr></tbody></table><h5>Chat Commands <small>Type into chat to activate</small></h5><table class="table controltable"><tbody><tr><td><kbd>/bindings</kbd></td><td class="td-help"> Show list of current bindings</td></tr><tr><td><kbd>/rebind</kbd></td><td class="td-help"> Change the binding of a key</td></tr><tr><td><kbd>/resetbindings</kbd></td><td class="td-help"> Reset all bindings to default</td></tr><tr><td><kbd>/respawn</kbd></td><td class="td-help"> Suicide and go back to spawn</td></tr></tbody></table></div></div></div></div></div>');
      $("#modal-help").modal("toggle");
    }), St.simple_combo(zt.get("toggleChat"), function() {
      $("#chatbox").toggle();
    }), St.simple_combo(zt.get("toggleLb"), function() {
      $("#ladder-body").toggle();
      $("#statistics").toggle();
    }), St.simple_combo(zt.get("toggleLadder"), function() {
      $("#ladder-body").toggle();
    }), St.simple_combo(zt.get("toggleStats"), function() {
      $("#statistics").toggle();
    }), St.simple_combo(zt.get("profile"), function() {
      if (!$(".playerProfile").length) {
        $("#chatbox").before('<div class="playerProfile"> <h3 class = "profileName"> <div class = "profileClan" style = "color: purple;">[CLAN] </div> PLAYER</h3> <div class = "playerStats"> <button style = "height: auto; width: auto; background-color: rgba(235, 49, 49, 0.84); text-align: center; margin-left: 20%" class = "profileClose">Close</button> <button style = "height: auto; width: auto; background-color: rgba(52, 49, 235, 0.86); text-align: center;" class = "profileView">View Profile</button></div> </div>');
      }
      var name = window.getSelection().toString();
      if (window.getSelection()) {
        $(".profileName").load("https://hordes.io/player/" + name + " .col-md-12");
        $(".playerProfile").css("display", "inline-block");
      } else {
        $(".profileName").text("[CLAN]   PLAYER");
        $(".playerProfile").css("display", "none");
      }
      $(".profileClose").click(function() {
        $(".playerProfile").remove();
        name = "";
      });
      $(".profileView").click(function() {
        window.open("https://hordes.io/player/" + name, "_blank");
      });
    }), St.simple_combo(zt.get("globalChat"), function() {
      $("#chatChannelName").text("Global"), ai = "g";
      $("#chatInputForm").show(), $("#chatInput").focus(), t && Ke.chatboxWrapper.scrollTop(Ke.chatboxWrapper[0].scrollHeight);
    }), St.simple_combo(zt.get("clanChat"), function() {
      $("#chatChannelName").text("Clan"), ai = "c";
      $("#chatInputForm").show(), $("#chatInput").focus(), t && Ke.chatboxWrapper.scrollTop(Ke.chatboxWrapper[0].scrollHeight);
    }), St.register_combo({keys:zt.get("nextAlly"), on_keydown:function() {
      Pi && bn && (Pi.target = bn);
    }}), St.register_combo({keys:zt.get("nextTarget"), on_keydown:function() {
      Pi && xn && (Pi.target = xn);
    }}), St.register_combo({keys:zt.get("walkForward"), on_keydown:function() {
      Rt = !0;
    }, on_release:function() {
      Rt = !1;
    }}), St.register_combo({keys:zt.get("walkBackward"), on_keydown:function() {
      Dt = !0;
    }, on_release:function() {
      Dt = !1;
    }}), St.register_combo({keys:zt.get("walkRight"), on_keydown:function() {
      kt = !0;
    }, on_release:function() {
      kt = !1;
    }}), St.register_combo({keys:zt.get("walkLeft"), on_keydown:function() {
      Pt = !0;
    }, on_release:function() {
      Pt = !1;
    }}), St.register_combo({keys:zt.get("turnLeft"), on_keydown:function() {
      Nt = !0;
    }, on_release:function() {
      Nt = !1;
    }}), St.register_combo({keys:zt.get("turnRight"), on_keydown:function() {
      It = !0;
    }, on_release:function() {
      It = !1;
    }}), St.register_combo({keys:zt.get("walkForward2"), on_keydown:function() {
      Rt = !0;
    }, on_release:function() {
      Rt = !1;
    }}), St.register_combo({keys:zt.get("walkBackward2"), on_keydown:function() {
      Dt = !0;
    }, on_release:function() {
      Dt = !1;
    }}), St.register_combo({keys:zt.get("inventory"), prevent_default:!1, on_release:function() {
      Pi && $("#inventory").toggle();
    }}), St.register_combo({keys:zt.get("character"), prevent_default:!1, on_release:function() {
      Pi && $("#characterpanel").toggle();
    }}), St.simple_combo(zt.get("skill1"), function() {
      Pi && Pi.useSkill(1);
    }), St.simple_combo(zt.get("skill2"), function() {
      Pi && Pi.useSkill(2);
    }), St.simple_combo(zt.get("skill3"), function() {
      Pi && Pi.useSkill(3);
    }), St.simple_combo(zt.get("skill4"), function() {
      Pi && Pi.useSkill(4);
    }), St.simple_combo("enter", function() {
      if (Ke.chatboxWrapper) {
        Ge.unLock();
        var t = Math.round(Ke.chatboxWrapper[0].scrollHeight - Ke.chatboxWrapper[0].scrollTop) === Math.round(Ke.chatboxWrapper[0].clientHeight);
        $("#chatInputForm").show(), $("#chatInput").focus(), t && Ke.chatboxWrapper.scrollTop(Ke.chatboxWrapper[0].scrollHeight);
      }
    }), $("#skillButtonKbd1").html(zt.get("skill1")), $("#skillButtonKbd2").html(zt.get("skill2")), $("#skillButtonKbd3").html(zt.get("skill3")), $("#skillButtonKbd4").html(zt.get("skill4"));
  }, Ot = !1;
  if ("undefined" != typeof Storage) {
    try {
      x = "__storage_test__", localStorage.setItem(x, x), localStorage.removeItem(x), Ot = !0, console.log("Webstorage found. loading settings..");
    } catch (t$48) {
      console.log("Error: Webstorage not working.");
    }
  } else {
    console.log("Error: Webstorage not working.");
  }
  var Bt = {skill1:"1", skill2:"2", skill3:"3", skill4:"4", nextTarget:"tab", nextAlly:"shift", walkForward:"w", walkLeft:"a", walkRight:"d", walkBackward:"s", turnLeft:"left", turnRight:"right", walkForward2:"up", walkBackward2:"down", toggleHelp:"f1", inventory:"b", character:"c", toggleChat:"f2", globalChat:"g", clanChat:"h", toggleLb:"f3", toggleLadder:"o", toggleStats:"p", toggleXHelp:"x", profile:"t"}, zt = new function() {
    this.get = function(t) {
      return this.hasOwnProperty(t) ? this[t] : void 0;
    }, this.parse = function(t, e) {
      var i = e;
      return Ot && ((i = localStorage.getItem(t)) || (i = e)), this[t] = i, i;
    }, this.set = function(t, e) {
      return Ot && localStorage.setItem(t, e), this[t] = e, e;
    }, this.parse("name", void 0), this.parse("faction", void 0), this.parse("class", void 0), this.parse("server", void 0), this.parse("char", 0), this.parse("camlock", "true"), this.parse("resolution", "10"), this.parse("skillefx", "true"), this.parse("lastAd", "0"), this.parse("dmgnumbers", "true"), this.parse("nameplates", "true"), this.parse("shadows", "0"), this.parse("grass", "3"), this.parse("chat-loot", "true"), this.parse("chat-chat", "true"), this.parse("chat-exp", "true"), this.parse("chat-pvp",
    "true");
    for (k in Bt) {
      this.parse(k, Bt[k]);
    }
  }, Ht = function(t) {
    if ("string" != typeof t || t.length <= 0) {
      return !1;
    }
    if ("/" == t[0]) {
      var e = t.split(" ");
      if (e.length <= 0) {
        return !1;
      }
      var i = e.shift().substring(1), n = t.substring(1);
      if (typeof localStorage.muted === "string") {
        try {
          window.xhordes.muted = JSON.parse(localStorage.muted);
        } catch (e$49) {
          localStorage.muted = "[]";
          window.xhordes.muted = JSON.parse(localStorage.muted);
        }
      }
      Vt.hasOwnProperty(i) ? Vt[i](e, n) : Q({msg:"Unknown command: " + i, src:"system"});
    } else {
      o(t, ai);
    }
  }, Vt = {respawn:function(t) {
    Q({msg:"Respawning...", src:"system"}), _n.emit("respawn");
  }, rebind:function(t) {
    t.length < 2 ? Q({msg:"Wrong usage. Example: '/rebind skill1 e'. For a list of keybindings, try /bindings", src:"system"}) : Bt.hasOwnProperty(t[0]) ? (Q({msg:"Changed binding '" + t[0] + "' to: " + t[1], src:"system"}), zt.set(t[0], t[1]), Ft()) : Q({msg:"No such keybinding: '" + t[0] + "'. For a list of keybindings, try /bindings", src:"system"});
  }, resetbindings:function() {
    Q({msg:"Keybindings have been reset to default.", src:"system"});
    for (k in Bt) {
      zt.set(k, Bt[k]);
    }
    Ft();
  }, bindings:function() {
    Q({msg:"List of keybindings: ", src:"system"});
    for (k in Bt) {
      Q({msg:k + ": " + zt.get(k), src:"system"});
    }
  }, hideui:function() {
    di("hide");
  }, hideplayer:function() {
    Pi.geometry.visible = !1, Pi.namesprite.visible = !1, Pi.clansprite.visible = !1;
  }, mute:function(a) {
    Q({msg:"Muted " + a.join(" ") + " successfully!", src:"system"});
    typeof window.xhordes.muted === "undefined" ? window.xhordes.muted = [a.join(" ")] : window.xhordes.muted.push(a.join(" "));
    localStorage.muted = JSON.stringify(window.xhordes.muted);
  }, unmute:function(a) {
    var m = "";
    window.xhordes.muted.includes(a.join(" ")) ? m = "Successfully unmuted " + a.join(" ") : m = "Could not find " + a.join(" ");
    Q({msg:m, src:"system"});
    window.xhordes.muted = window.xhordes.muted.filter(function(i) {
      return i !== a.join(" ");
    });
    localStorage.muted = JSON.stringify(window.xhordes.muted);
  }, mutelist:function(a) {
    Q({msg:"Muted " + (typeof window.xhordes.muted === "object" && window.xhordes.muted.length > 0) ? window.xhordes.muted.join(", ") : "Nobody is muted!", src:"system"});
  }, showplayer:function() {
    Pi.geometry.visible = !0, Pi.namesprite.visible = !0, Pi.clansprite.visible = !0;
  }, togglelevels:function() {
    if (localStorage.levelsenabled === "false") {
      localStorage.levelsenabled = "true";
      Q({msg:"The level up popup has been re-enabled. (Use this command again to disable the level up popup)", src:"system"});
    } else {
      localStorage.levelsenabled = "false";
      Q({msg:"The level up popup has been disabled. (Use this command again to re-enable the level up popup)", src:"system"});
    }
  }, msg:function(t) {
    if (!(t.length < 1)) {
      if (t.length > 1) {
        for (var e = 2; e < t.length; ++e) {
          t[1] = t[1] + " " + t[e];
        }
      }
      var i = {};
      i[t[0]] = t[1] || "", wn.emit("msg", i);
    }
  }, global:function(t, e) {
    o(e.substring(6), "g");
  }, dance:function() {
    Pi && (Pi.emote = 1);
  }}, Gt = void 0, jt = void 0, qt = 2 * Math.PI, Wt = !1;
  h.prototype.tick = function(t) {
    if (!this.stats.isDead()) {
      var e = new THREE.Vector3(0, 0, 0);
      if (e.z = -this.walkForward, e.x = this.walkSideward, e.lengthSq() > 0 && e.normalize(), -1 == this.walkForward && (e.z *= .5, e.x *= .5), e.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rotation), this.velocity = e, !this.ignSteep && !this.isAi && (Wt || this == Pi) && (0 != this.velocity.x || 0 != this.velocity.y)) {
        var i = e.clone();
        i.normalize();
        var n = Hi(this.position.x, this.position.z), r = Hi(this.position.x + i.x, this.position.z), a = Hi(this.position.x, this.position.z + i.z), s = r - n > .5 ? 0 : 1, o = a - n > .5 ? 0 : 1;
        this.velocity.x *= s, this.velocity.z *= o;
      }
      this.position.x += this.velocity.x * t * this.stats.movespeed, this.position.y += this.velocity.y * t * this.stats.movespeed, this.position.z += this.velocity.z * t * this.stats.movespeed, Wt && this.ignoreMovement > 0 && this.lastPositionUpdate.copy(this.position), this["class"] && this["class"].tick && this["class"].tick(t), this.stats.tick(t), !Wt && this == Pi && 0 != this.emote && (0 != this.walkForward || 0 != this.walkSideward || 0 != this.state.id || this.animationQueue.length > 1) &&
      this.clearEmote();
    }
    for (; this.rotation < 0;) {
      this.rotation += qt;
    }
    for (; this.rotation > qt;) {
      this.rotation -= qt;
    }
    this.state.tick(t, this);
  }, h.prototype.getDeltaMsg = function() {
    var t = {};
    if (Wt || !Wt && !this.stats.incapacitated) {
      var e = this.walkForward != this.last.walkForward || this.walkSideward != this.last.walkSideward ? 0 : Wt ? this.isAi ? 8 : .5 : .3;
      Xt(this.position, this.last.position, "x", e, t, "x", 1), Xt(this.position, this.last.position, "z", e, t, "z", 1);
      this.isAi || ($t(this, this.last, "walkForward", t, "wf"), $t(this, this.last, "walkSideward", t, "ws"), Xt(this, this.last, "rotation", .08, t, "r", 2));
    }
    Wt && ($t(this.state, this.last.state, "id", t, "s"), $t(this, this.last, "faction", t, "f"), Yt(this, this.last, "name", t, "n"), Yt(this, this.last, "id", t, "id"), Yt(this, this.last, "clan", t, "c"), Yt(this, this.last, "isAi", t, "ai") && (t.ai = 1 == t.ai ? 1 : 0), this.stats.parseStatChanges(t), $t(this["class"], this.last["class"], "level", t, "lvl"), Yt(this["class"], this.last["class"], "type", t, "class"), Yt(this.stats, this.last.stats, "invincible", t, "ivc"), Yt(this.stats, this.last.stats,
    "incapacitated", t, "inc"), Yt(this.stats, this.last.stats, "stunned", t, "stn"), Yt(this, this.last, "combat", t, "cbt"), this.isAi ? ($t(this["class"].ai, this.last["class"].ai, "isresetting", t, "rs"), Xt(this["class"].ai, this.last["class"].ai, "goalx", .1, t, "gx", 1), Xt(this["class"].ai, this.last["class"].ai, "goalz", .1, t, "gz", 1)) : this.stats.incapacitated && this.lastPositionUpdate.copy(this.position), Yt(this.visuals, this.last.visuals, "h", t, "vh")), (Wt || this == Pi) && (this.target &&
    this.target.id != this.last.target.id ? Yt(this.target, this.last.target, "id", t, "tr") : void 0 == this.target && void 0 != this.last.target.id && (t.tr = "", this.last.target.id = void 0), $t(this, this.last, "emote", t, "emo"));
    for (var i in this.serverMsgQueue) {
      this.serverMsgQueue.hasOwnProperty(i) && (t[i] = this.serverMsgQueue[i]);
    }
    this.serverMsgQueue = {};
    var n = u(t);
    if (Wt) {
      r = Date.now();
      if (n) {
        if (!(r - this.lastserverheartbeat > 2e3)) {
          return !1;
        }
        this.lastserverheartbeat = r;
      } else {
        this.lastserverheartbeat = r;
      }
    } else {
      var r = Date.now();
      if (n) {
        if (!(r - this.last.updateTime > 2e3)) {
          return !1;
        }
        this.last.updateTime = r;
      } else {
        this.last.updateTime = r;
      }
    }
    return t;
  }, h.prototype.parseDeltaMsg = function(t) {
    if (Wt || !this.isPlayer) {
      var e = new THREE.Vector3;
      if (Wt) {
        if (!this.stats.incapacitated && this.ignoreMovement <= 0) {
          e.copy(this.position);
          var i = Zt(t, "x", "x", e), n = Zt(t, "z", "z", e);
          (i || n) && this.verifyPosition(e);
        }
        t.hasOwnProperty("lus") && "number" == typeof t.lus && this["class"].skills.hasOwnProperty(t.lus) && this["class"].skills[t.lus].tryLevelUp();
      } else {
        if (Zt(t, "x", "x", e) && (this.last.position.x = this.position.x, this.position.x = this.next.position.x, this.next.position.x = e.x), Zt(t, "z", "z", e) && (this.last.position.z = this.position.z, this.position.z = this.next.position.z, this.next.position.z = e.z), this.isAi) {
          Qt(t, "isresetting", "rs", this["class"].ai);
          var r = Zt(t, "x", "gx", this["class"].ai.goal), a = Zt(t, "z", "gz", this["class"].ai.goal);
          (r || a) && (this["class"].ai.hasReachedGoal = !1);
        }
      }
      (!Wt || Wt && !this.stats.incapacitated) && (Qt(t, "walkForward", "wf", this), Qt(t, "walkSideward", "ws", this), Zt(t, "rotation", "r", this), Jt(t, "queuedAction", "a", this));
    }
    if ((Wt || this != Pi) && t.hasOwnProperty("tr") && ("" == t.tr ? (this.target = void 0, Wt || (this.desiredTarget = "")) : Tt.entities.hasOwnProperty(t.tr) ? (this.target = Tt.entities[t.tr], Wt || (this.desiredTarget = "")) : Wt || (this.desiredTarget = t.tr)), t.hasOwnProperty("emo")) {
      this.emote;
      if (Qt(t, "emote", "emo", this), !Wt) {
        switch(this.emote) {
          case 0:
            this != Pi && this.clearEmote();
            break;
          case 1:
            this.animationQueue[0] = new X({id:"dance", type:"loop", duration:1.2});
        }
      }
    }
    if (t.hasOwnProperty("ab")) {
      for (s = 0; s < t.ab.length; ++s) {
        !Wt && this == Pi && this["class"].skills[t.ab[s]].simulate || this.useSkill(t.ab[s], !0);
      }
    }
    if (t.hasOwnProperty("abi")) {
      for (s = 0; s < t.abi.length; ++s) {
        this["class"].skills[t.abi[s]] && !this["class"].skills[t.abi[s]].ignoreEc && (this["class"].skills[t.abi[s]].interruptCast(), this["class"].skills[t.abi[s]].interruptChannel());
      }
    }
    if (!Wt) {
      if (Jt(t, "invincible", "ivc", this.stats), Jt(t, "incapacitated", "inc", this.stats), Jt(t, "stunned", "stn", this.stats), t.hasOwnProperty("ec")) {
        for (s = 0; s < t.ec.length; ++s) {
          this["class"].skills.hasOwnProperty(t.ec[s]) && this["class"].skills[t.ec[s]].endCast(!0);
        }
      }
      if (Jt(t, "isAi", "ai", this), Jt(t, "id", "id", this), t.hasOwnProperty("s") && t.s != this.state.id && (this.state = this.parseState(parseInt(t.s))), t.hasOwnProperty("f") && this.updateFaction(t.f), t.hasOwnProperty("c") && void 0 !== t.c && (this.clan = t.c, this.clansprite && this.clansprite._text != this.clan && (this.clansprite._fillStyle = 0 == this.faction ? "#8CD8FF" : "#FF8481", this.clansprite._text = this.clan.substring(0, 4), this.clansprite.updateText(), this == Pi && (this.namesprite.position.set(Math.round(.5 *
      this.clansprite.canvas.textWidth), 30, 0), this.clansprite.position.set(-Math.round(.5 * this.namesprite.canvas.textWidth + 5), 30, 0))), "GM" == this.clan && this.updateVisual("h")), t.hasOwnProperty("n") && (t.n && (this.name = t.n, this.namesprite && this.namesprite._text != this.name && (this.namesprite._text = this.name, this.namesprite.updateText())), this == Pi && (Ce.charName.text(this.name), $("#willBeAdded").text(this.name), this["class"].type && $("#systemCharSelCurrent").html("<img src='data/" +
      this["class"].type + ".png' class='classicon'> " + this.name + " <span class='caret'>"))), Qt(t, "clanrole", "clr", this), t.hasOwnProperty("d") && "true" == zt.get("dmgnumbers")) {
        for (s = 0; s < t.d.length; ++s) {
          this.createCombatText(t.d[s], s);
        }
      }
      if (Pi && this.faction == Pi.faction && "true" == zt.get("dmgnumbers") && t.hasOwnProperty("hl")) {
        for (var s = 0; s < t.hl.length; ++s) {
          this.createCombatText(t.hl[s], s, !0);
        }
      }
      Qt(t, "currentmp", "mp", this.stats), Qt(t, "maxmp", "mmp", this.stats) && this.isPlayer && Ce.mp.text(this.stats.maxmp), Qt(t, "currenthp", "h", this.stats), Qt(t, "maxhp", "mh", this.stats) && this.isPlayer && Ce.hp.text(this.stats.maxhp), Zt(t, "movespeed", "ms", this.stats) && this.isPlayer && Ce.ms.text(this.stats.movespeed);
      var o = this["class"].level;
      if (Qt(t, "level", "lvl", this["class"]) && (this == Pi && o < this["class"].level && (Q({msg:"You have reached level " + this["class"].level + "!", src:"system"}), Ce.lvl.text(this["class"].level), window.$("#xhordeslevel").length === 0 ? window.$("#modal-setnick").after('<div class="modal fade" id="xhordeslevel" tabindex="-1" role="dialog"><div class="modal-dialog modal-body-base modal-user" role="document"><div class="modal-content"><div class="modal-body"><button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4>Congratulations!</h4><h5 class="text-center detailText" id="leveluptextxhordes"> You have leveled up to level !</h5><h5 class="text-center detailText" id="itemdetailtextxhordes">You can now equip the following items:</h5><ul id="itemlistxhordes"></ul></div></div></div></div>') :
      null, window.xhordes.levelup(Pi)), this.levelsprite._text = this["class"].level, this.levelsprite.updateText(), Pi && (this != Pi ? this.canFightPlayer = re(this, Pi).canFight() : mn())), this.isPlayer) {
        Qt(t, "gold", "g", this), t.g && Ke.gold.text(t.g), t.gd && Q({msg:(t.gd > 0 ? "Gained " : "Lost ") + Math.abs(t.gd) + " $g", src:"loot"}), this["class"] && t.sl && this["class"].skills.hasOwnProperty(t.sl.i) && (this["class"].skills[t.sl.i].setLevel(t.sl.l), oi($("#skillLevelButton" + t.sl.i), t.sl.i), Q({msg:this["class"].skills[t.sl.i].name + " raised to ability level " + t.sl.l + "!", src:"system"})), t.dexp && Q({msg:(t.dexp > 0 ? "Gained " : "Lost ") + Math.abs(t.dexp) + " experience.",
        src:"exp"});
        var c = Qt(t, "exp", "exp", this["class"]), l = Qt(t, "nextLevelExp", "nxp", this["class"]);
        (c || l) && Y(), Qt(t, "fame", "fm", this) && Ce.fame.text(this.fame), t.dfm && Q({msg:(parseInt(t.dfm) > 0 ? "Earned " : "Lost ") + Math.abs(t.dfm) + " fame. ( You have " + this.fame + " fame)", src:"exp"}), Zt(t, "x", "x", this.serverpos), Zt(t, "z", "z", this.serverpos), this.stats.incapacitated && (this.position.copy(this.serverpos), this.visualPosition.copy(this.position), Qt(t, "walkForward", "wf", this), Qt(t, "walkSideward", "ws", this)), t.hasOwnProperty("r") && Math.abs(L(this.geometry.rotation.y,
        t.r)) > .9 * Math.PI && (this.rotation = t.r, this.geometry.rotation.y = this.rotation);
        var h = Zt(t, "x", "hrx", this.position), u = Zt(t, "z", "hrz", this.position);
        (h || u) && (this.serverpos.copy(this.position), this.visualPosition.copy(this.position)), void 0 !== t.hpr && Ce.hpr.text(t.hpr + "/s"), void 0 !== t.mpr && Ce.mpr.text(t.mpr + "/s"), void 0 === t.mid && void 0 === t.mad || (void 0 !== t.mid && (Ce.mid = t.mid), void 0 !== t.mad && (Ce.mad = t.mad), Ce.power.text(Ce.mid + " - " + Ce.mad)), void 0 !== t.cr && Ce.crit.text(t.cr + "%"), void 0 !== t.def && Ce.def.text(t.def);
      }
      if (t.hasOwnProperty("class") && t["class"] != this["class"].type) {
        var d = this["class"] ? this["class"].nextLevelExp : void 0;
        switch(t["class"]) {
          case "warrior":
            this["class"] = new G(this["class"].level);
            break;
          case "shaman":
            this["class"] = new W(this["class"].level);
            break;
          case "mage":
            this["class"] = new j(this["class"].level);
            break;
          case "archer":
            this["class"] = new q(this["class"].level);
            break;
          case "mob_sword":
            this["class"] = new z(this["class"].level), this.isAi = !0;
            break;
          case "mob_bow":
            this["class"] = new H(this["class"].level), this.isAi = !0;
            break;
          case "mob_slime":
            this["class"] = new V(this["class"].level), this.isAi = !0;
            break;
          case "king":
            this["class"] = F(), this.isAi = !0;
            break;
          case "warden":
            this["class"] = O(), this.isAi = !0;
            break;
          case "vendor":
            this["class"] = B();
            break;
          default:
            console.log("warning: unknown class: " + t["class"]);
        }
        this.isAi && (this["class"].ai["class"] = this["class"], this["class"].ai.parent = this), this["class"].stats = this.stats, this["class"].parent = this, this["class"].initBaseBody.call(this), this["class"].initBodyGeometry.call(this), this["class"].update(), this.stats.spawn(), this.hasParsedClass = !0, this.body.scale.set(this.stats.scale, this.stats.scale, this.stats.scale), d && (this["class"].nextLevelExp = d), Wt || this != Pi || (this["class"].skills[1].configureUiElements($("#skillIcon1"),
        $("#skillOverlay1"), $("#skillCooldown1")), this["class"].skills[2].configureUiElements($("#skillIcon2"), $("#skillOverlay2"), $("#skillCooldown2")), this["class"].skills[3].configureUiElements($("#skillIcon3"), $("#skillOverlay3"), $("#skillCooldown3")), this["class"].skills[4].configureUiElements($("#skillIcon4"), $("#skillOverlay4"), $("#skillCooldown4")), this["class"].skills[1].setInfoPanel("skill1"), this["class"].skills[2].setInfoPanel("skill2"), this["class"].skills[3].setInfoPanel("skill3"),
        this["class"].skills[4].setInfoPanel("skill4"), Ce.charImg.attr("src", "data/class/class_" + this["class"].type + ".png"));
      }
      Qt(t, "h", "vh", this.visuals) && this.updateVisual("h");
    }
  }, h.prototype.parseState = function(t) {
    switch(t) {
      case 0:
        return this.chest.material = this["class"].color, new T;
      case 2:
        return this.animationQueue[0] = new X({id:"dead", type:"static", duration:5}), Wt || this == Pi && (Q({msg:"You have died and lost exp.", src:"death"}), $("#deathScreen").fadeIn(400)), new A;
      default:
        return this.state;
    }
  }, h.prototype.canSellToTrader = function() {
    if (void 0 !== this.target && void 0 !== this.target["class"] && "vendor" == this.target["class"].type) {
      var t = re(this, this.target);
      if (void 0 !== t) {
        var e = t.distance();
        if (void 0 !== e && e < 3) {
          return !0;
        }
      }
    }
    return !1;
  }, h.prototype.clearEmote = function() {
    this.animationQueue.splice(0, 1), this.emote = 0;
  };
  var Xt = function(t, e, i, n, r, a, s) {
    return (Math.abs(t[i] - e[i]) > n || void 0 === e[i]) && (r[a] = parseFloat(t[i]).toFixed(s), e[i] = t[i], !0);
  }, $t = function(t, e, i, n, r) {
    return t[i] !== e[i] && (n[r] = parseInt(t[i]), e[i] = t[i], !0);
  }, Yt = function(t, e, i, n, r) {
    return t[i] !== e[i] && (n[r] = t[i], e[i] = t[i], !0);
  }, Zt = function(t, e, i, n) {
    return !!t.hasOwnProperty(i) && (n[e] = parseFloat(t[i]), !0);
  }, Qt = function(t, e, i, n) {
    return !!t.hasOwnProperty(i) && (n[e] = parseInt(t[i]), !0);
  }, Jt = function(t, e, i, n) {
    return !!t.hasOwnProperty(i) && (n[e] = t[i], !0);
  }, Kt = {linear:function(t) {
    return t;
  }, easeInQuad:function(t) {
    return t * t;
  }, easeOutQuad:function(t) {
    return t * (2 - t);
  }, easeInOutQuad:function(t) {
    return t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1;
  }, easeInCubic:function(t) {
    return t * t * t;
  }, easeOutCubic:function(t) {
    return --t * t * t + 1;
  }, easeInOutCubic:function(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }, easeInQuart:function(t) {
    return t * t * t * t;
  }, easeOutQuart:function(t) {
    return 1 - --t * t * t * t;
  }, easeInOutQuart:function(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  }, easeInQuint:function(t) {
    return t * t * t * t * t;
  }, easeOutQuint:function(t) {
    return 1 + --t * t * t * t * t;
  }, easeInOutQuint:function(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }}, te = function(t) {
    return t[Math.floor(Math.random() * t.length)];
  }, ee = new Object, ie = function() {
    for (var t in ee) {
      var e = ee[t];
      void 0 !== e && (!se(e.a) || !se(e.b) || Wt && !oe(e.a, e.b) ? delete ee[t] : e.clearIntervalData());
    }
  };
  p.prototype.distance = function() {
    return void 0 === this._distance ? (this._distance = Math.max(0, N(this.a, this.b) - (this.a.stats.scale + this.b.stats.scale)), this._distance) : this._distance;
  }, p.prototype.aggro = function(t) {
    return this.a == t ? this.aggroA : this.aggroB;
  }, p.prototype.modifyAggro = function(t, e) {
    t == this.a ? this.aggroA += e : this.aggroB += e;
  }, p.prototype.resetAggro = function(t) {
    t == this.a ? this.aggroA = 0 : this.aggroB = 0;
  }, p.prototype.resetOppositeAggro = function(t) {
    t == this.a ? this.aggroB = 0 : this.aggroA = 0;
  }, p.prototype.canFight = function() {
    if (void 0 !== this._canFight) {
      return this._canFight;
    }
    if (this._canFight = !0, Wt && (this.a.isAi && 1 == this.a["class"].ai.isresetting && (this._canFight = !1), this.b.isAi && 1 == this.b["class"].ai.isresetting && (this._canFight = !1)), !this.a.isAi && !this.b.isAi) {
      if (Pn) {
        var t = Math.min(this.a["class"].level, this.b["class"].level);
        Math.max(this.a["class"].level, this.b["class"].level) > 1.5 * Math.max(2, t) + 4 && (this._canFight = !1);
      } else {
        this._canFight = !1;
      }
    }
    return this._canFight;
  }, p.prototype.expShare = function(t) {
    return t == this.a ? this.expShareA : t == this.b ? this.expShareB : void 0;
  }, p.prototype.modifyExpShare = function(t, e) {
    t == this.a && (this.expShareA += e), t == this.b && (this.expShareB += e);
  }, p.prototype.clearIntervalData = function() {
    this._distance = void 0, this._canFight = void 0;
  };
  var ne = function(t, e) {
    return t.id < e.id ? t.id + "," + e.id : e.id + "," + t.id;
  }, re = function(t, e) {
    if (void 0 === t || void 0 === e || t == e) {
      return null;
    }
    var i = ne(t, e);
    return void 0 === ee[i] && (ee[i] = new p(t, e)), ee[i];
  }, ae = function(t) {
  }, se = function(t) {
    if (void 0 == t) {
      return !1;
    }
    if (Wt) {
      if (t.isAi || t["class"].idleAi ? void 0 == Tt.npcs[t.id] : void 0 == Tt.players[t.id]) {
        return !1;
      }
    } else {
      if (void 0 == Tt.entities[t.id]) {
        return !1;
      }
    }
    return !0;
  }, oe = function(t, e) {
    if (void 0 != t && void 0 != e) {
      var i = getChunkCoord(t.position), n = getChunkCoord(e.position);
      return Math.abs(i.x - n.x) < 2 && Math.abs(i.z - n.z) < 2;
    }
  }, ce = {};
  ce.damage = function(t) {
    var e = t.scaledmg || 1, i = t.spread || .1, n = t.basedmg || 1, r = t.attacker || void 0, a = t.target || void 0, s = t.mode || "single", o = t.aoeCenter || void 0, c = t.aoeRange || 1, l = t.aoeArc || void 0, h = t.heal || !1, u = t.buff || !1, d = t.debuff || !1, p = "aoe" == s ? Wt ? getChunk(r ? r.position : o).entities : Ri : void 0, f = t.mod || void 0, m = t.aggro || 1, g = t.targetFun || void 0, v = t.aoeFun || void 0;
    if (r || "aoe" != s || o) {
      var y = [];
      if (!a || r && a.faction != r.faction && !re(r, a).canFight() || y.push(a), "aoe" == s && p) {
        for (var x = 0; x < p.length; ++x) {
          var b = p[x];
          if (!(void 0 === b || b.stats.isDead() || r && (h || u ? b.faction != r.faction : b.faction == r.faction || !re(r, b).canFight()))) {
            if (l && r) {
              var _ = L(r.rotation, R(r.position, b.position));
              if (Math.abs(_) > l) {
                continue;
              }
            }
            var w = void 0;
            void 0 != (w = o ? I(b, o) : b == r ? 0 : re(b, r).distance()) && w < c && y.push(b);
          }
        }
      }
      for (var E = 0; E < y.length; ++E) {
        if (!u && !d) {
          var T = Math.max(0, (n + (r.stats.currentmindmg + (r.stats.currentmaxdmg - r.stats.currentmindmg) * Math.random()) * e) * (1 + (Math.random() - .5) * i));
          Math.random() < r.stats.crit / 100 && (T *= 2.5), h ? y[E].takeHealing(T, r) : y[E].takeDamage(T, r, m);
        }
        void 0 != f && y[E].stats.addMod(new M(y[E], r, f)), g && g(y[E], r);
      }
      v && v(y, r);
    }
  }, ce.interrupt = function(t, e) {
    if (re(e, t).canFight()) {
      for (skill in t["class"].skills) {
        t["class"].skills.hasOwnProperty(skill) && t["class"].skills[skill].interruptCast();
      }
    }
  };
  var le = {};
  f.prototype.clientInit = function(t) {
    void 0 !== t.x && void 0 !== t.z && void 0 !== t.t && void 0 !== t.i && (this.drop = !0, this.position = {x:parseFloat(t.x), z:parseFloat(t.z)}, this.id = t.i, this.type = t.t, this.identifier = Et[this.type].type, this.name = Et[this.type].name[t.o], this.spritename = this.identifier + ("g" == this.type ? "" : t.o), this.timeout = Date.now() + 1e3 * parseInt(t.m), this.ownerid = t.k);
  }, f.prototype.destroy = function() {
    this.quad && wi.remove(this.quad), this.shadow && wi.remove(this.shadow), void 0 !== le[this.id] && (le[this.id] = void 0, delete le[this.id]);
  }, f.prototype.tick = function(t, e) {
    this.createModel(e), void 0 !== this.quad && Xi.push(this.quad), this.timeout < e && this.destroy();
  }, f.prototype.getInfoPanelString = function() {
    return "<div class='targetinfo targettext ally'><span class='targetname'>" + this.name + "</span></div> Item";
  }, f.prototype.createModel = function(t) {
    if (void 0 === this.quad && !(void 0 === Pi || void 0 !== this.ownerid && "" != this.ownerid && this.ownerid != Pi.id && this.timeout - t > 105e3)) {
      this.quad = new THREE.Mesh(un.items[("g" == this.type ? "" : this.identifier + "/") + this.spritename], Wi.item), this.quad.position.set(this.position.x, Hi(this.position.x, this.position.z) + ("g" == this.type ? .15 : .2 + .1 * Math.random()), this.position.z);
      var e = Vi(this.position.x, this.position.z);
      e.y < 0 && (e.y *= -1, e.x *= -1, e.z *= -1), e.x += this.quad.position.x, e.y += this.quad.position.y, e.z += this.quad.position.z, this.quad.lookAt(e), this.quad.rotation.z = Math.random() * qt, wi.add(this.quad), this.quad.entity = this;
    }
  };
  var he = 0;
  f.prototype.requestPickUp = function() {
    var t = Date.now();
    !Pi || t - he < 500 || d(this.position, Pi.position) < 4 && (he = t, _n.emit("d", {i:this.id}));
  };
  var ue, de = function(t) {
    var e = Date.now(), i = 1.2 + .13 * Math.sin(e / 90);
    Wi.item.color.r = i, Wi.item.color.g = i, Wi.item.color.b = i;
    for (var n in le) {
      le.hasOwnProperty(n) && le[n].tick(t, e);
    }
  }, pe = void 0, fe = function(t) {
    if (pe = t, void 0 === t || t.none) {
      $("#claninfo").hide(), $("#clancreation").show();
    } else {
      if (void 0 !== Pi) {
        t.n && t.f && (t.fn = t.n + " <small> " + (0 == t.f ? "Vanguard Clan" : "Bloodlust Clan") + "</small>"), me(t, "fn", "c-name"), me(t, "m", "c-mcount"), me(t, "t", "c-tag");
        var e = $("#clanmembers");
        e.html(""), t.b.forEach(function(t) {
          $("<tr><td><img class='classicon' src='data/" + ve[t.c] + ".png'> " + t.n + " </td><td class='detailText'>" + ge[t.r] + (t.r < 2 && Pi.clanrole >= 2 ? " <input data-kick='" + t.n + "' class='clanchange' type='checkbox'" + (t.r > 0 ? "checked" : "") + ">" : "") + "</td><td class='detailText'>" + t.f + " fame</td><td class='detailText'>Lv. " + t.l + "</td><td class='detailText'>" + (1 == t.o ? "Online" : "Offline") + "</td> <td class='detailText'>" + (t.r < Pi.clanrole ? "<button type='button' data-kick='" +
          t.n + "' class='close clankick' style='font-size:1.0em'><span>&times;</span>" : "") + "</button></td></tr>").appendTo(e);
        }), $(".clankick").on("click", function() {
          _n.emit("ca", {a:"kick", m:this.dataset.kick});
        }), $(".clanchange").on("click", function() {
          return _n.emit("ca", {a:"change", m:this.dataset.kick}), !1;
        }), 3 == Pi.clanrole ? $("#disbandClanButton").show() : $("#disbandClanButton").hide(), $("#claninfo").show(), $("#clancreation").hide();
      }
    }
  }, me = function(t, e, i) {
    void 0 !== t[e] && (document.getElementById(i).innerHTML = t[e]);
  }, ge = ["Member", "Officer", "Leader", "Owner"], ve = ["warrior", "mage", "archer", "shaman"], ye = {}, xe = {}, be = function(t) {
    Ee = t, Le(), Re();
  }, _e = function(t) {
    for (i in t) {
      var e = t[i];
      if (e.del) {
        ye[i] && (void 0 !== e.g && (Qt(e, "gold", "g", Pi), void 0 !== e.g && Ke.gold.text(e.g), void 0 !== e.gd && Q({msg:"Sold " + ye[i].name + " for " + e.gd + " $g", src:"loot"})), delete xe[ye[i].l], delete ye[i]);
      } else {
        if (e.mod) {
          if (void 0 !== ye[i]) {
            var n = ye[i].l, r = e.l;
            void 0 !== e.l && (xe[n] === ye[i] && (xe[n] = void 0), ye[i].l = r, xe[r] = ye[i]);
          }
        } else {
          if (ye[i] = e, ye[i].worth = e.w, ye[i].name = Et[e.u].name[e.t], ye[i].img = Et[e.u].type + "" + e.t + ".png", ye[i].classReqString = "", Et[e.u]["class"]) {
            for (var a = 0; a < Et[e.u]["class"].length; ++a) {
              ye[i].classReqString += y(Et[e.u]["class"][a] + (a < Et[e.u]["class"].length - 1 ? ", " : ""));
            }
          }
          if (e.s) {
            var s = "";
            e.s.mindmg && e.s.maxdmg && (s += e.s.mindmg + " - " + e.s.maxdmg + " Damage<br>"), e.s.def && (s += e.s.def + " Defense<br>"), e.s.hp && (s += e.s.hp + " HP<br>"), e.s.hpreg && (s += e.s.hpreg + "/s HP Reg. <br>"), e.s.mp && (s += e.s.mp + " MP<br>"), e.s.mpreg && (s += e.s.mpreg + "/s MP Reg. <br>"), e.s.crit && (s += e.s.crit + "% Critical<br>"), e.s.move && (s += e.s.move + " Move speed<br>"), e.s.slots && (s += e.s.slots + " Extra Slots<br>"), ye[i].statText = s;
            var items = window.xhordes.Et;
            var sword = items.sw;
            var swordmindmg = [], swordmaxdmg = [], swordcrit = [];
            for (var j = 0; j < sword.lvl.length; j++) {
              swordmindmg.push(Math.round(sword.stats.mindmg.base + sword.lvl[j] * sword.stats.mindmg.multi * sword.stats.mindmg.high));
              swordmaxdmg.push(Math.round(sword.stats.maxdmg.base + sword.lvl[j] * sword.stats.maxdmg.multi * sword.stats.maxdmg.high));
              swordcrit.push(Math.round((sword.stats.crit.base + sword.lvl[j] * sword.stats.crit.multi * sword.stats.crit.high) * 10) / 10);
            }
            var staff = items.st;
            var staffmindmg = [], staffmaxdmg = [], staffcrit = [], staffmp = [], staffmpreg = [];
            for (var j = 0; j < staff.lvl.length; j++) {
              staffmindmg.push(Math.round(staff.stats.mindmg.base + staff.lvl[j] * staff.stats.mindmg.multi * staff.stats.mindmg.high));
              staffmaxdmg.push(Math.round(staff.stats.maxdmg.base + staff.lvl[j] * staff.stats.maxdmg.multi * staff.stats.maxdmg.high));
              staffcrit.push(Math.round((staff.stats.crit.base + staff.lvl[j] * staff.stats.crit.multi * staff.stats.crit.high) * 10) / 10);
              staffmp.push(Math.round(staff.stats.mp.base + staff.lvl[j] * staff.stats.mp.multi * staff.stats.mp.high));
              staffmpreg.push(Math.round((staff.stats.mpreg.base + staff.lvl[j] * staff.stats.mpreg.multi * staff.stats.mpreg.high) * 10) / 10);
            }
            var hammer = items.hm;
            var hammermindmg = [], hammermaxdmg = [], hammermpreg = [];
            for (var j = 0; j < hammer.lvl.length; j++) {
              hammermindmg.push(Math.round(hammer.stats.mindmg.base + hammer.lvl[j] * hammer.stats.mindmg.multi * hammer.stats.mindmg.high));
              hammermaxdmg.push(Math.round(hammer.stats.maxdmg.base + hammer.lvl[j] * hammer.stats.maxdmg.multi * hammer.stats.maxdmg.high));
              hammermpreg.push(Math.round((hammer.stats.mpreg.base + hammer.lvl[j] * hammer.stats.mpreg.multi * hammer.stats.mpreg.high) * 10) / 10);
            }
            var bow = items.bw;
            var bowmindmg = [], bowmaxdmg = [], bowcrit = [];
            for (var j = 0; j < bow.lvl.length; j++) {
              bowmindmg.push(Math.round(bow.stats.mindmg.base + bow.lvl[j] * bow.stats.mindmg.multi * bow.stats.mindmg.high));
              bowmaxdmg.push(Math.round(bow.stats.maxdmg.base + bow.lvl[j] * bow.stats.maxdmg.multi * bow.stats.maxdmg.high));
              bowcrit.push(Math.round((bow.stats.crit.base + bow.lvl[j] * bow.stats.crit.multi * bow.stats.crit.high) * 10) / 10);
            }
            var armor = items.ar;
            var armordef = [], armorhp = [], armorhpreg = [];
            for (var j = 0; j < armor.lvl.length; j++) {
              armordef.push(Math.round(armor.stats.def.base + armor.lvl[j] * armor.stats.def.multi * armor.stats.def.high));
              armorhp.push(Math.round(armor.stats.hp.base + armor.lvl[j] * armor.stats.hp.multi * armor.stats.hp.high));
              armorhpreg.push(Math.round((armor.stats.hpreg.base + armor.lvl[j] * armor.stats.hpreg.multi * armor.stats.hpreg.high) * 10) / 10);
            }
            var glove = items.gl;
            var glovecrit = [], glovedef = [], glovehp = [];
            for (var j = 0; j < glove.lvl.length; j++) {
              glovecrit.push(Math.round((glove.stats.crit.base + glove.lvl[j] * glove.stats.crit.multi * glove.stats.crit.high) * 10) / 10);
              glovedef.push(Math.round(glove.stats.def.base + glove.lvl[j] * glove.stats.def.multi * glove.stats.def.high));
              glovehp.push(Math.round(glove.stats.hp.base + glove.lvl[j] * glove.stats.hp.multi * glove.stats.hp.high));
            }
            var armlet = items.al;
            var armletdef = [], armlethp = [], armletmp = [], armletmpreg = [];
            for (var j = 0; j < armlet.lvl.length; j++) {
              armletdef.push(Math.round(armlet.stats.def.base + armlet.lvl[j] * armlet.stats.def.multi * armlet.stats.def.high));
              armlethp.push(Math.round(armlet.stats.hp.base + armlet.lvl[j] * armlet.stats.hp.multi * armlet.stats.hp.high));
              armletmp.push(Math.round(armlet.stats.mp.base + armlet.lvl[j] * armlet.stats.mp.multi * armlet.stats.mp.high));
              armletmpreg.push(Math.round((armlet.stats.mpreg.base + armlet.lvl[j] * armlet.stats.mpreg.multi * armlet.stats.mpreg.high) * 10) / 10);
            }
            var boot = items.bt;
            var bootdef = [], boothp = [], bootmove = [];
            for (var j = 0; j < boot.lvl.length; j++) {
              bootdef.push(Math.round(boot.stats.def.base + boot.lvl[j] * boot.stats.def.multi * boot.stats.def.high));
              boothp.push(Math.round(boot.stats.hp.base + boot.lvl[j] * boot.stats.hp.multi * boot.stats.hp.high));
              bootmove.push(Math.round((boot.stats.move.base + boot.lvl[j] * boot.stats.move.multi * boot.stats.move.high) * 10) / 10);
            }
            var ring = items.ri;
            var ringhpreg = [], ringmpreg = [];
            for (var j = 0; j < ring.lvl.length; j++) {
              ringmpreg.push(Math.round((ring.stats.mpreg.base + ring.lvl[j] * ring.stats.mpreg.multi * ring.stats.mpreg.high) * 10) / 10);
              ringhpreg.push(Math.round((ring.stats.hpreg.base + ring.lvl[j] * ring.stats.hpreg.multi * ring.stats.hpreg.high) * 10) / 10);
            }
            var bag = items.bg;
            var bagslots = [];
            for (var j = 0; j < bag.lvl.length; j++) {
              bagslots.push(Math.round(bag.lvl[j] * bag.stats.slots.multi * bag.stats.slots.high));
            }
            var quiver = items.qv;
            var quivercrit = [], quivermove = [];
            for (var j = 0; j < quiver.lvl.length; j++) {
              quivermove.push(Math.round((quiver.stats.move.base + quiver.lvl[j] * quiver.stats.move.multi * quiver.stats.move.high) * 10) / 10);
              quivercrit.push(Math.round((quiver.stats.crit.base + quiver.lvl[j] * quiver.stats.crit.multi * quiver.stats.crit.high) * 10) / 10);
            }
            var shield = items.sh;
            var shielddef = [], shieldhp = [], shieldhpreg = [];
            for (var j = 0; j < shield.lvl.length; j++) {
              shielddef.push(Math.round(shield.stats.def.base + shield.lvl[j] * shield.stats.def.multi * shield.stats.def.high));
              shieldhp.push(Math.round(shield.stats.hp.base + shield.lvl[j] * shield.stats.hp.multi * shield.stats.hp.high));
              shieldhpreg.push(Math.round((shield.stats.hpreg.base + shield.lvl[j] * shield.stats.hpreg.multi * shield.stats.hpreg.high) * 10) / 10);
            }
            var talisman = items.ta;
            var talismanmp = [], talismanmpreg = [];
            for (var j = 0; j < talisman.lvl.length; j++) {
              talismanmp.push(Math.round(talisman.stats.mp.base + talisman.lvl[j] * talisman.stats.mp.multi * talisman.stats.mp.high));
              talismanmpreg.push(Math.round((talisman.stats.mpreg.base + talisman.lvl[j] * talisman.stats.mpreg.multi * talisman.stats.mpreg.high) * 10) / 10);
            }
            var xItem = {};
            if (sword.name.includes(e.name)) {
              xItem.mindmg = swordmindmg[sword.name.indexOf(e.name)];
              xItem.maxdmg = swordmaxdmg[sword.name.indexOf(e.name)];
              xItem.crit = swordcrit[sword.name.indexOf(e.name)];
            } else {
              if (staff.name.includes(e.name)) {
                xItem.mindmg = staffmindmg[staff.name.indexOf(e.name)];
                xItem.maxdmg = staffmaxdmg[staff.name.indexOf(e.name)];
                xItem.crit = staffcrit[staff.name.indexOf(e.name)];
                xItem.mp = staffmp[staff.name.indexOf(e.name)];
                xItem.mpreg = staffmpreg[staff.name.indexOf(e.name)];
              } else {
                if (hammer.name.includes(e.name)) {
                  xItem.mindmg = hammermindmg[hammer.name.indexOf(e.name)];
                  xItem.maxdmg = hammermaxdmg[hammer.name.indexOf(e.name)];
                  xItem.mpreg = hammermpreg[hammer.name.indexOf(e.name)];
                } else {
                  if (bow.name.includes(e.name)) {
                    xItem.mindmg = bowmindmg[bow.name.indexOf(e.name)];
                    xItem.maxdmg = bowmaxdmg[bow.name.indexOf(e.name)];
                    xItem.crit = bowcrit[bow.name.indexOf(e.name)];
                  } else {
                    if (armor.name.includes(e.name)) {
                      xItem.hp = armorhp[armor.name.indexOf(e.name)];
                      xItem.def = armordef[armor.name.indexOf(e.name)];
                      xItem.hpreg = armorhpreg[armor.name.indexOf(e.name)];
                    } else {
                      if (glove.name.includes(e.name)) {
                        xItem.def = glovedef[glove.name.indexOf(e.name)];
                        xItem.crit = glovecrit[glove.name.indexOf(e.name)];
                        xItem.hp = glovehp[glove.name.indexOf(e.name)];
                      } else {
                        if (armlet.name.includes(e.name)) {
                          xItem.def = armletdef[armlet.name.indexOf(e.name)];
                          xItem.hp = armlethp[armlet.name.indexOf(e.name)];
                          xItem.mp = armletmp[armlet.name.indexOf(e.name)];
                          xItem.mpreg = armletmpreg[armlet.name.indexOf(e.name)];
                        } else {
                          if (boot.name.includes(e.name)) {
                            xItem.def = bootdef[boot.name.indexOf(e.name)];
                            xItem.hp = boothp[boot.name.indexOf(e.name)];
                            xItem.move = bootmove[boot.name.indexOf(e.name)];
                          } else {
                            if (ring.name.includes(e.name)) {
                              xItem.hpreg = ringhpreg[ring.name.indexOf(e.name)];
                              xItem.mpreg = ringmpreg[ring.name.indexOf(e.name)];
                            } else {
                              if (bag.name.includes(e.name)) {
                                xItem.slots = bagslots[bag.name.indexOf(e.name)];
                              } else {
                                if (quiver.name.includes(e.name)) {
                                  xItem.crit = quivercrit[quiver.name.indexOf(e.name)];
                                  xItem.move = quivermove[quiver.name.indexOf(e.name)];
                                } else {
                                  if (shield.name.includes(e.name)) {
                                    xItem.def = shielddef[shield.name.indexOf(e.name)];
                                    xItem.hp = shieldhp[shield.name.indexOf(e.name)];
                                    xItem.hpreg = shieldhpreg[shield.name.indexOf(e.name)];
                                  } else {
                                    if (talisman.name.includes(e.name)) {
                                      xItem.mp = talismanmp[talisman.name.indexOf(e.name)];
                                      xItem.mpreg = talismanmpreg[talisman.name.indexOf(e.name)];
                                    } else {
                                      xItem.mindmg = "???";
                                      xItem.maxdmg = "???";
                                      xItem.def = "???";
                                      xItem.hp = "???";
                                      xItem.hpreg = "???";
                                      xItem.mp = "???";
                                      xItem.mpreg = "???";
                                      xItem.crit = "???";
                                      xItem.move = "???";
                                      xItem.slots = "???";
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            e.s.dmgtext = e.s.mindmg + "-" + e.s.maxdmg;
            xItem.dmg = xItem.mindmg + "-" + xItem.maxdmg;
            var f = "";
            e.s.mindmg && e.s.maxdmg && (f += "<span " + (e.s.dmgtext == xItem.dmg ? 'style="color: #ffbd24;">' : ">") + e.s.mindmg + " - " + e.s.maxdmg + " Damage</span> <span><span style='color: #18A15F'><strong>(Max: " + xItem.dmg + ")</strong></span></span><br>"), e.s.def && (f += "<span " + (e.s.def == xItem.def ? 'style="color: #ffbd24;">' : ">") + e.s.def + " Defense</span> <span><span style='color: #18A15F'><strong>(Max: " + xItem.def + ")</strong></span></span><br>"), e.s.hp && (f += "<span " +
            (e.s.hp == xItem.hp ? "style='color: #ffbd24;'>" : ">") + e.s.hp + " HP</span> <span><span style='color: #18A15F'><strong>(Max: " + xItem.hp + ")</strong></span></span><br>"), e.s.hpreg && (f += "<span " + (e.s.hpreg == xItem.hpreg ? 'style="color: #ffbd24;">' : ">") + e.s.hpreg + "/s HP Reg.</span> <span><span style='color: #18A15F'><strong>(Max: " + xItem.hpreg + ")</strong></span></span><br>"), e.s.mp && (f += "<span " + (e.s.mp == xItem.mp ? 'style="color: #ffbd24;">' : ">") + e.s.mp +
            " MP</span> <span><span style='color: #18A15F'><strong>(Max: " + xItem.mp + ")</strong></span></span><br>"), e.s.mpreg && (f += "<span " + (e.s.mpreg == xItem.mpreg ? 'style="color: #ffbd24;">' : ">") + e.s.mpreg + "/s MP Reg.</span> <span><span style='color: #18A15F'><strong>(Max: " + xItem.mpreg + ")</strong></span></span><br>"), e.s.crit && (f += "<span " + (e.s.crit == xItem.crit ? 'style="color: #ffbd24;">' : ">") + e.s.crit + "% Critical</span> <span><span style='color: #18A15F'><strong>(Max: " +
            xItem.crit + "%)</strong></span></span><br>"), e.s.move && (f += "<span " + (e.s.move == xItem.move ? 'style="color: #ffbd24;">' : ">") + e.s.move + " Move speed</span> <span><span style='color: #18A15F'><strong>(Max: " + xItem.move + ")</strong></span></span>"), e.s.slots && (f += "<span " + (e.s.slots == xItem.slots ? 'style="color: #ffbd24;">' : ">") + e.s.slots + " Extra Slots</span> <span><span style='color: #18A15F'><strong>(Max: " + xItem.slots + ")</strong></span></span>");
            ye[i].statText = f;
          }
          ye[i].minlvl = Et[e.u].lvl[e.t], ye[i].l && (xe[ye[i].l] = ye[i]);
        }
      }
    }
    Re();
  }, we = function(t, e) {
    void 0 !== xe[t] && void 0 === Se && (Se = xe[t], Ae.css("display", "block"), Ae.html($(e.firstChild).clone()));
  }, Me = function() {
    Ae.css("display", "none"), Se = void 0;
  }, Ee = 21, Te = {}, Se = void 0, Ae = void 0, Ce = {}, Le = function() {
    var t = $("#inventory-items");
    t.html("");
    for (var e = 0; e < Ee; ++e) {
      var i = $("<div/>");
      Te[e] = i, i.appendTo(t);
    }
    for (e in Te) {
      Te[e].mouseover({slot:e}, function(t) {
        var e = xe[t.data.slot];
        if (e) {
          var i = this.getBoundingClientRect();
          i.left < 200 ? (ue.css("left", i.left - 2), ue.css("right", "")) : (ue.css("right", Tt.width - i.left - 2), ue.css("left", "")), ue.css("bottom", Tt.height - i.top - 2), De.itemname.text(e.name), De.description.text(Et[e.u].description), e.statText ? (De.stats.html(e.statText), De.stats.css("display", "block")) : De.stats.css("display", "none"), De.requirements.html(""), De.requirements.append("<span class='" + (Pi["class"].level >= e.minlvl ? "statReq" : "statReqMiss") + "'> Requires level " +
          e.minlvl + " </span>" + ("" != e.classReqString ? "<br><span class='" + (Et[e.u]["class"].indexOf(Pi["class"].type) > -1 ? "statReq" : "statReqMiss") + "'> Class: " + e.classReqString + " </span>" : "") + "<h5 class='detailText'> Sells for " + e.worth + " <img src='data/coin.png' class='goldCoin'></h5>"), ue.css("display", "block");
        } else {
          ue.css("display", "none");
        }
        return !1;
      }), Te[e].mouseout({slot:e}, function(t) {
        return ue.css("display", "none"), 1 == t.buttons && we(t.data.slot, this), !1;
      }), Te[e].mousedown({slot:e}, function(t) {
        return t.button, !1;
      }), Te[e].mouseup({slot:e}, function(t) {
        0 === t.which || 0 === t.button ? void 0 === Se ? we(t.data.slot, this) : (_n.emit("i", {i:Se.l, a:"m", t:t.data.slot}), Me()) : 3 !== t.which && 2 !== t.button || _n.emit("i", {i:t.data.slot, a:Ne ? "s" : "u"});
      });
    }
  }, Pe = function() {
    Ae = $("#mouseItemDiv"), $(".uiclosebutton").click(function(t) {
      $(this).parent().hide();
    }), Te = {}, window.addEventListener("mouseup", g, !1), Be(document.getElementById("characterpanel")), Be(document.getElementById("inventory"));
    var t = $("#character-items");
    t.html(""), Mt.forEach(function(e) {
      var i = $("<div/>");
      Te[e] = i, i.appendTo(t);
    }), Le();
    var e = $("<div/>", {id:"character-icon"});
    e.appendTo(t), Ce.charName = $("<h4/>"), Ce.charName.appendTo(e), Ce.charImg = $("<img/>", {"class":"charPanelIcon"}), Ce.charImg.appendTo(e), Ce.power = $("#stat_power"), Ce.crit = $("#stat_crit"), Ce.def = $("#stat_def"), Ce.hp = $("#stat_hp"), Ce.hpr = $("#stat_hpr"), Ce.mp = $("#stat_mp"), Ce.mpr = $("#stat_mpr"), Ce.ms = $("#stat_ms"), Ce.lvl = $("#stat_lvl"), Ce.fame = $("#stat_fame"), Ie(), Re(), $("#invtrashcan, #trader").mouseup({slot:s}, function(t) {
      void 0 !== Se && (_n.emit("i", {i:Se.l, a:Ne ? "s" : "t"}), Me());
    });
  }, ke = function() {
    for (i in ye) {
      delete xe[ye[i].l], delete ye[i];
    }
  }, Re = function() {
    for (s in Te) {
      if (void 0 !== xe[s]) {
        Te[s].get(0).className = "item" + (isNaN(s) ? " equipslot slot_" + s + " clearslot" : "");
        var t = $("<img/>", {"class":Et[xe[s].u].rotatedSprite ? "itemPic itemPicRotated" : "itemPic"});
        t.attr("src", "data/items/" + xe[s].img), Te[s].html(t), Te[s].item = xe[s];
      } else {
        Te[s].get(0).className = "itemEmpty" + (isNaN(s) ? " equipslot slot_" + s : ""), Te[s].html(""), Te[s].item = void 0;
      }
    }
  }, De = {}, Ie = function() {
    ue = $("#itemview"), De.itemname = $("<p/>", {"class":"itemName"}), ue.append(De.itemname), De.description = $("<p/>", {"class":"itemDescription"}), ue.append(De.description), De.stats = $("<p/>", {"class":"itemStat"}), ue.append(De.stats), De.requirements = $("<p/>", {"class":"itemRequirements"}), ue.append(De.requirements);
  }, Ne = !1, Ue = void 0, Fe = 0, Oe = 0, Be = function(t) {
    t.addEventListener("mousedown", function(e) {
      Ue = t, Fe = e.pageX - $(this).offset().left, Oe = e.pageY - $(this).offset().top, window.addEventListener("mousemove", v, !0);
    }, !1);
  }, ze = [], He = function(t) {
    for (var e = ze.length; e--;) {
      var i = ze[e];
      i.tick(t), i.deleteMe && (i.remove(), ze.splice(e, 1));
    }
  };
  Wt || (b.prototype.visualtick = function(t) {
    this.geometry.position.copy(this.position), this.target && this.target.geometry && this.geometry.lookAt(this.target.chest ? this.target.chest.getWorldPosition() : this.target.position);
  }), b.prototype.tick = function(t) {
    switch(this.mode) {
      case "attach":
        void 0 === this.target || this.target.stats.isDead() ? this.deleteMe = !0 : Wt || !this.target.chest ? this.position.copy(this.target.position) : this.position.copy(this.target.chest.getWorldPosition());
      case "static":
        this.effectCallback && this.effectInterval > 0 && (this.effectTimer -= t, this.effectTimer < 0 && (this.effectTimer = this.effectInterval, this.effectCallback({spell:this, target:this.target, source:this.source}))), "static" == this.mode && this.movedir && (this.position.x += this.movedir.x * this.movespeed * t, this.position.y += this.movedir.y * this.movespeed * t, this.position.z += this.movedir.z * this.movespeed * t);
        break;
      case "follow":
        if (void 0 != this.target) {
          var e = new THREE.Vector3;
          Wt || !this.target.chest ? e.subVectors(this.target.position, this.position) : e.subVectors(this.target.chest.getWorldPosition(), this.position), e.lengthSq() > Math.pow(this.movespeed * t, 2) ? (e.normalize(), e.multiplyScalar(this.movespeed * t), this.position.x += e.x, this.position.z += e.z, this.position.y += e.y) : (this.effectCallback && this.effectCallback({spell:this, target:this.target}), this.deleteMe = !0);
        } else {
          this.deleteMe = !0;
        }
    }
    !Wt && this.visualtick && this.visualtick(t), this.timeout > 0 && (this.timeout -= t, this.timeout <= 0 && (this.deleteMe = !0));
  }, b.prototype.remove = function() {
    Wt || (it(this.geometry), wi.remove(this.geometry), this.geometry = void 0, this.ribbonObject && this.ribbon.deleteWithSpell && (this.ribbonObject.deleteMe = !0, this.ribbonObject = void 0));
  }, h.prototype.useSkill = function(t, e) {
    var i = !1;
    if (0 == this.state.id || !Wt && e) {
      switch(t) {
        case "test":
        case "sit":
        case "logOut":
          break;
        default:
          if (this["class"] && this["class"].skills.hasOwnProperty(t)) {
            var n = !0;
            if (!Wt && e && 1 == this.state.id) {
              if (n = !1, this.state.skill.slot != t) {
                this["class"].skills[t].interruptCast(), this.state = new T, n = !0;
              } else {
                var r = this.state.duration / this.state.maxduration;
                this.state.maxduration += this.state.skill.casttime - this.state.duration, this.state.duration = this.state.maxduration * r;
              }
            }
            n && this["class"].skills[t].cast(Wt ? void 0 : e) && (i = !0);
          }
      }
    } else {
      1 == this.state.id && (Wt || (!e || this.state.duration < .5 * this.state.maxduration)) && (this.queuedSkill = t);
    }
    (i && Wt && (1 == e || this["class"].ai) || !Wt && this == Pi && !e) && (this.serverMsgQueue.ab || (this.serverMsgQueue.ab = []), this.serverMsgQueue.ab.push(t));
  }, _.prototype.tick = function(t) {
    this["class"].parent && (this.parent = this["class"].parent), this.isOnCooldown() && (this.cooldowntimer -= t), this.isCasting() ? (this.casttimer -= t, this.casttimer <= 0 ? Wt ? this.endCast(!1) : this.casttimer = .01 : Wt || this.addCastAnimation(), Wt && !this.targetIsValid() && this.interruptCast()) : Wt || this.removeCastAnimation(), this.isChanneling() && (this.channelTimer -= t, this.channelInterval > 0 && (this.channelIntervalTimer -= t, this.channelIntervalTimer <= 0 && (this.hasChanneledSpell &&
    this.channelspell ? this.channelspell.effectCallback({spell:this.channelspell, target:this.channelspell.target}) : this.confirmEffect(), this.channelIntervalTimer = this.channelInterval)), this.channelTimer <= 0 && (Wt || this.removeChannelAnimation()), this.targetIsValid() || (Wt || this.ignoreEc) && this.interruptChannel()), !Wt && this.uielement && this.updateUiElement();
  }, _.prototype.addCastAnimation = function() {
    this.castAnimationActive || (this.castAnimation.deleteMe = !1, this.castAnimation.timer = 0, this.parent.animationQueue.push(this.castAnimation), this.castAnimationActive = !0);
  }, _.prototype.removeCastAnimation = function() {
    if (this.castAnimationActive) {
      var t = this.parent.animationQueue.indexOf(this.castAnimation);
      t > -1 && this.parent.animationQueue.splice(t, 1), this.castAnimationActive = !1;
    }
  }, _.prototype.addChannelAnimation = function() {
    this.channelAnimationActive || (this.channelAnimation.deleteMe = !1, this.channelAnimation.timer = 0, this.parent.animationQueue.push(this.channelAnimation), this.channelAnimationActive = !0);
  }, _.prototype.removeChannelAnimation = function() {
    if (this.channelAnimationActive) {
      var t = this.parent.animationQueue.indexOf(this.channelAnimation);
      t > -1 && this.parent.animationQueue.splice(t, 1), this.channelAnimationActive = !1;
    }
  }, _.prototype.cast = function(t) {
    if (this.parent && (t || this.level > 0 && !this.isOnCooldown() && !this.isCasting() && !this.isChanneling())) {
      var e = !1;
      switch(this.targettype) {
        case "enemy":
          this.casttarget = this.parent.target, e = void 0 !== this.casttarget && this.casttarget.faction != this.parent.faction && !this.casttarget.stats.isDead(), Wt || e || this.parent != Pi || !xn || (Pi.target = xn);
          break;
        case "friendly":
          this.casttarget = this.parent.target, void 0 != this.casttarget && this.casttarget.faction == this.parent.faction || (this.casttarget = this.parent, this.parent.target = this.parent), e = this.casttarget.faction == this.parent.faction;
          break;
        case "none":
          this.casttarget = void 0, e = !0;
          break;
        default:
          console.log("error (" + this.name + "): unknwon target type:" + this.targettype);
      }
      if (e && (Wt || this.predict) || t) {
        switch(this.casttype) {
          case "timed":
            return !(!t && !this.targetIsValid()) && (this.startCast(), this.causeGlobalCooldown && this["class"].globalCooldown(), !0);
          case "instant":
            if ("channel" == this.effecttype) {
              var i = !this.spell || this.confirmEffect(!1);
              return this.startChannel(), i;
            }
            return this.confirmEffect(!1);
        }
      }
    }
    return !1;
  }, _.prototype.targetIsValid = function(t) {
    return void 0 === t && (t = this.casttarget), "none" == this.targettype || void 0 == t || !(!this.allowDeadTarget && t.stats.isDead()) && (!("enemy" == this.targettype && this.parent != t && !re(this.parent, t).canFight()) && (this.parent != t ? re(this.parent, t).distance() : 0) <= (this.isCasting() ? 1.1 * this.maxrange : this.maxrange) + 1.3);
  }, _.prototype.confirmEffect = function(t) {
    if (Wt || this.removeCastAnimation(), this.effect && this.targetIsValid()) {
      if (this.cooldowntimer <= 0 && !this.consumeMana()) {
        return !1;
      }
      if (this.cooldowntimer = Math.max(this.cooldown, this.cooldowntimer), this.causeGlobalCooldown && this["class"].globalCooldown(), this.spell) {
        var e = this.spell(this.casttarget, this.parent, this.effectWrapper);
        e && ze.push(e), this.hasChanneledSpell && (this.channelspell = e), this.unique && (void 0 != this.oldspell && (this.oldspell.deleteMe = !0), this.oldspell = e);
      } else {
        this.effectWrapper({isParse:t});
      }
      return this.simulate == !t && !Wt && "channel" != this.effecttype && this.parent && this.parent.animationQueue.push(this.getCharacterAnim()), !0;
    }
    return !1;
  }, _.prototype.consumeMana = function() {
    return this.parent && this.parent.stats && this.parent.stats.useMana(this.manacost * this.parent.stats.basemana);
  }, _.prototype.hasEnoughMana = function() {
    return this.parent && this.parent.stats && this.parent.stats.currentmp > this.manacost * this.parent.stats.basemana;
  }, _.prototype.endCast = function(t) {
    Wt ? (this.parent.serverMsgQueue.ec || (this.parent.serverMsgQueue.ec = []), this.parent.serverMsgQueue.ec.push(this.slot), this.parent.addPersonalMessage("ec", this.slot)) : this.casttimer <= .1 * this.casttime && (this.casttimer = -1);
    var e = !1;
    void 0 != this.casttarget && (this.parent.target != this.casttarget || Wt && !this.targetIsValid()) ? this.interruptCast() : (e = !0, this.confirmEffect(t)), "channel" == this.effecttype && e && this.startChannel();
  }, _.prototype.interruptCast = function() {
    Wt || this.removeCastAnimation(), Wt && this.parent && this.parent.addServerMessage("abi", this.slot), this.casttimer = -1;
  }, _.prototype.interruptChannel = function() {
    Wt || this.removeChannelAnimation(), Wt && this.parent && this.parent.addServerMessage("abi", this.slot), this.channelspell && (this.channelspell.deleteMe = !0, this.channelspell = void 0), this.channelTimer = -1;
  }, _.prototype.isCasting = function() {
    return this.casttimer > 0;
  }, _.prototype.isOnCooldown = function() {
    return this.cooldowntimer > 0;
  }, _.prototype.isChanneling = function() {
    return this.channelTimer > 0;
  }, _.prototype.configureUiElements = function(t, e, i) {
    this.uielement = t, this.uielement.attr("src", this.icon), this.uielementOverlay = e, this.uielementCooldown = i, this.uielementOverlay.addClass("skillOverlayDisable"), this.uielementCooldown.css("display", "none");
  }, _.prototype.updateUiElement = function() {
    if (this.uielement) {
      if (this.level > 0) {
        var t = !this.targetIsValid(Pi.target), e = !this.hasEnoughMana(), i = this.isOnCooldown();
        if (this.oldIsOnCooldown == i && this.oldIsOom == e && this.oldIsInvalid == t || (this.oldIsOnCooldown = i, this.oldIsOom = e, this.oldIsInvalid = t, this.uielementOverlay.css("display", t || i || e ? "block" : "none"), this.uielementCooldown.css("display", t || i || e ? "block" : "none")), i || e || t) {
          var n = "";
          e && (n = "MP"), i && (n = this.cooldowntimer < 10 ? ("" + this.cooldowntimer).substring(0, 3) : parseInt(this.cooldowntimer)), this.uielementCooldown.html(n);
        }
      }
      if (this.oldCanLevelUp != this.canLevelUp() && (this.oldCanLevelUp = this.canLevelUp(), 1 == this.oldCanLevelUp)) {
        var r = $("#skillLevelButton" + this.slot);
        oi(r, this.slot), r.fadeIn(1500), r.fadeOut(1500), r.fadeIn(1500), r.fadeOut(1500);
      }
    }
  }, _.prototype.globalCooldown = function(t) {
    this.cooldowntimer = Math.max(this.cooldowntimer, t);
  }, _.prototype.startCast = function() {
    this.casttimer = this.casttime, this.parent.state = new S({skill:this, casttime:this.casttime, activeCheck:this.isCasting, interrupt:this.interruptCast}), Wt || (this.removeCastAnimation(), this.addCastAnimation());
  }, _.prototype.startChannel = function() {
    this.parent && (this.channelTimer = this.channelDuration, this.channelIntervalTimer = this.channelInterval, this.parent.state = new S({skill:this, casttime:this.channelTimer, activeCheck:this.isChanneling, interrupt:this.interruptChannel}), this.channelInstantFirstTick && (this.hasChanneledSpell ? this.channelspell && this.channelspell.effectCallback({spell:this.channelspell, target:this.channelspell.target}) : this.confirmEffect()), Wt || (this.removeChannelAnimation(), this.addChannelAnimation(),
    this.onCastFun && this.onCastFun()));
  }, _.prototype.setInfoPanel = function(t) {
    var e = this;
    ei[t] = function() {
      return "<h5 class='skillName'>" + e.name + "<small> " + e.casttype + " cast </small></h5><p class='skillDescription'>" + e.description + "</p>" + (0 == e.level ? "Press the green button to level up this skill! <br>" : "<p class='skillLvlInfo'>" + parseInt(100 * e.abilitypower) + "% ability effect <br> Level: " + e.level + " <br>Mana cost: " + parseInt(e.manacost * e.parent.stats.basemana) + " <br>Cooldown: " + e.cooldown + " Seconds <br>") + "<span class=" + (e.parent.gold >= e.nextLevelCost ?
      "skillReq" : "skillReqMiss") + "> Upgrade cost: " + e.nextLevelCost + " " + ti.goldCoin + "</span><br><span class=" + (e.parent["class"].level >= e.levelUpMinLevel ? "skillReq" : "skillReqMiss") + "> Minimum character level: " + e.levelUpMinLevel + "</span></p>";
    };
  }, _.prototype.setLevel = function(t) {
    var e = this.level;
    this.level = t, this.nextLevelCost = parseInt(Math.pow((t + 1) * (t + 3), 1.9)), this.levelUpMinLevel = Math.max(0, Math.round(4 * (this.level - 4))), this.abilitypower = this.getAbilityPowerAtLevel(t), Wt && this.parent && this.parent.addPersonalMessage("sl", {i:this.slot, l:this.level}), !Wt && 0 == e && this.level > 0 && Pi && this.parent == Pi && this.uielementOverlay.removeClass("skillOverlayDisable");
  }, _.prototype.canLevelUp = function() {
    return this.parent.gold >= this.nextLevelCost && this.parent["class"].level >= this.levelUpMinLevel;
  }, _.prototype.tryLevelUp = function() {
    if (!this.parent) {
      return !1;
    }
    Wt ? this.canLevelUp() && this.parent.tryModifyGold(-this.nextLevelCost) && this.setLevel(this.level + 1) : this.parent.serverMsgQueue.lus = this.slot;
  }, _.prototype.getAbilityPowerAtLevel = function(t) {
    return .5 + .1 * t;
  }, w.prototype.tick = function(t) {
    Wt && (this._invincible = !1, this._incapacitated = !1, this._stunned = !1, this._healmod = 1, this.currenthp < this.maxhp && (this.periodicTickTimerHP -= t), this.periodicTickTimerHP <= 0 && (this.hpregen < 1 ? (this.periodicTickTimerHP = 1 / this.hpregen, this.parent.takeHealing(1)) : (this.periodicTickTimerHP = 1, this.parent.takeHealing(this.hpregen))), this.currentmp < this.maxmp && (this.periodicTickTimerMP -= t), this.periodicTickTimerMP <= 0 && (this.mpregen < 1 ? (this.periodicTickTimerMP =
    1 / this.mpregen, this.gainMana(1)) : (this.periodicTickTimerMP = 1, this.gainMana(this.mpregen))));
    for (var e = this.mods.length; e--;) {
      this.mods[e].tick(t, this), this.mods[e].deleteMe && this.mods.splice(e, 1);
    }
    Wt && (this.invincible = this._invincible, this.incapacitated = this._incapacitated, this.stunned = this._stunned, this.healmod = this._healmod);
  }, w.prototype.canBeAttacked = function(t) {
    return !(this.isDead() || t && t.faction == parent.faction);
  }, w.prototype.isDead = function() {
    return 2 == this.parent.state.id || this.currenthp <= 0;
  }, w.prototype.spawn = function() {
    this.currenthp = this.maxhp, this.currentmp = this.maxmp;
  }, w.prototype.clearBuffs = function() {
    for (var t = this.mods.length; t--;) {
      this.mods[t].deleteMe = !0;
    }
  }, w.prototype.reset = function() {
    this.currenthp = this.maxhp, this.currentmp = this.maxmp, this.clearBuffs();
  }, w.prototype.addMod = function(t) {
    if ((1 == t.overwrite || 1 == t.unique) && void 0 !== t.id) {
      for (m in this.mods) {
        this.mods.hasOwnProperty(m) && this.mods[m].id == t.id && (t.unique ? this.mods[m].deleteMe = !0 : t.overwrite && this.mods[m].source == t.source && (this.mods[m].deleteMe = !0));
      }
    }
    this.mods.push(t);
  }, w.prototype.queryMod = function(t) {
    for (var e = [], i = this.mods.length; i--;) {
      var n = this.mods[i];
      t.source && n.source != t.source || (t.id && n.id != t.id || e.push(n));
    }
    return e;
  }, M.prototype.tick = function(t, e) {
    this.timer -= t, this.timer <= 0 && (this.deleteMe = !0), this.effectinterval > 0 && void 0 != this.effectfunction && (this.effecttimer -= t, this.effecttimer <= 0 && (this.effectfunction(), this.effecttimer = this.effectinterval)), this.deleteMe || Wt && (this.invincible && (e._invincible = !0), this.incapacitate && (e._incapacitated = !0), this.stun && (e._stunned = !0), this.healmod && (e._healmod = this.healmod(e._healmod)), this.movespeed && (e.movespeed = this.movespeed(e.movespeed)));
  }, w.prototype.gainMana = function(t) {
    this.isDead() || (this.currentmp += parseInt(t), this.currentmp > this.maxmp && (this.currentmp = this.maxmp));
  }, w.prototype.useMana = function(t) {
    return !this.isDead() && (t = parseInt(t), !(this.currentmp < t) && (this.currentmp -= t, !0));
  }, T.prototype = new E, T.prototype.constructor = T, (S.prototype = new E).constructor = S, (A.prototype = new E).constructor = A, U.prototype.skills = {}, U.prototype.getMaxHp = function() {
    return parseInt(70 + 3 * this.level);
  }, U.prototype.getMaxMp = function() {
    return parseInt(30 + 2 * this.level);
  }, U.prototype.getMinDmg = function() {
    return parseInt(2 + .2 * this.level);
  }, U.prototype.getMaxDmg = function() {
    return parseInt(3 + .3 * this.level);
  }, U.prototype.getMovespeed = function() {
    return 8;
  }, U.prototype.getCrit = function() {
    return 2 + .005 * this.level;
  }, U.prototype.getHpRegen = function() {
    return .3 + .1 * this.level;
  }, U.prototype.getMpRegen = function() {
    return .5 + .2 * this.level;
  }, U.prototype.getDefense = function() {
    return parseInt(80 + 2 * this.level);
  }, U.prototype.getScale = function() {
    return 1 + .005 * this.level;
  }, U.prototype.globalCooldown = function() {
    for (skill in this.skills) {
      this.skills.hasOwnProperty(skill) && this.skills[skill].globalCooldown(1.2);
    }
  }, U.prototype.tick = function(t) {
    this.ai && this.ai.tick(t);
    for (skill in this.skills) {
      this.skills.hasOwnProperty(skill) && this.skills[skill].tick(t);
    }
    this.update();
  }, U.prototype.update = function() {
    Wt && this.checkLevelUp(), this.scale = this.getScale(), this.stats.basemana = this.getMaxMp(), Wt && (this.movespeed = this.getMovespeed(), this.ai && this.statCalcDone || (this.ai && (this.statCalcDone = !0), this.mindmg = this.getMinDmg(), this.maxdmg = this.getMaxDmg(), this.maxhp = this.getMaxHp(), this.maxmp = this.stats.basemana, this.hpregen = this.getHpRegen(), this.mpregen = this.getMpRegen(), this.defense = this.getDefense(), this.crit = this.getCrit(), this.parent.inventory && (void 0 !==
    this.parent.inventory.sum.hp && (this.maxhp += this.parent.inventory.sum.hp), void 0 !== this.parent.inventory.sum.mp && (this.maxmp += this.parent.inventory.sum.mp), void 0 !== this.parent.inventory.sum.mindmg && (this.mindmg += this.parent.inventory.sum.mindmg), void 0 !== this.parent.inventory.sum.maxdmg && (this.maxdmg += this.parent.inventory.sum.maxdmg), void 0 !== this.parent.inventory.sum.def && (this.defense += this.parent.inventory.sum.def), void 0 !== this.parent.inventory.sum.hpreg &&
    (this.hpregen += this.parent.inventory.sum.hpreg), void 0 !== this.parent.inventory.sum.mpreg && (this.mpregen += this.parent.inventory.sum.mpreg), void 0 !== this.parent.inventory.sum.crit && (this.crit += this.parent.inventory.sum.crit), void 0 !== this.parent.inventory.sum.move && (this.movespeed += this.parent.inventory.sum.move))), this.stats.movespeed = this.movespeed, this.stats.maxhp = this.maxhp, this.stats.maxmp = this.maxmp, this.stats.currentmindmg = this.mindmg, this.stats.currentmaxdmg =
    this.maxdmg, this.stats.hpregen = this.hpregen, this.stats.mpregen = this.mpregen, this.stats.defense = this.defense, this.stats.crit = this.crit), this.stats.scale = this.scale;
  }, U.prototype.isCasting = function() {
    for (skill in this.skills) {
      if (this.skills.hasOwnProperty(skill) && (this.skills[skill].isCasting() || this.skills[skill].isChanneling())) {
        return !0;
      }
    }
    return !1;
  }, Wt || (U.prototype.headGearOffset = new THREE.Vector3(0, .5, 0), U.prototype.headGearOffsetScale = new THREE.Vector3(.5, .5, .5), U.prototype.initBaseBody = function() {
    this.chest = new THREE.Mesh(un.chest.geo, this["class"].color), this.chest.scale.set(un.chest.scale[0], un.chest.scale[1], un.chest.scale[2]), this.chest.castShadow = !0, this.chest.rotation.order = "YXZ", this.chest.cycle = 0, this.chest.material = this["class"].color, this.body.add(this.chest);
    var t = new THREE.Mesh(un.leg.geo, Wi.leg);
    t.scale.set(un.leg.scale[0], un.leg.scale[1], un.leg.scale[2]), wi.add(t);
    var e = new THREE.Mesh(un.leg.geo, Wi.leg);
    e.scale.set(un.leg.scale[0], un.leg.scale[1], un.leg.scale[2]), wi.add(e), this.legs = new THREE.Group, wi.add(e), this.body.add(this.legs), this.legs.add(e), this.legs.add(t), this.legs.l = t, this.legs.r = e, this.legs.cycle = 0, this.legs.lastVisualPos = new THREE.Vector3;
    var i = new THREE.Mesh(un.hand.geo, Wi.leg);
    i.scale.set(un.hand.scale[0], un.hand.scale[1], un.hand.scale[2]), wi.add(i);
    var n = new THREE.Mesh(un.hand.geo, Wi.leg);
    n.scale.set(un.hand.scale[0], un.hand.scale[1], un.hand.scale[2]), wi.add(n), this.hands = new THREE.Group, this.hands.cycle = 0, wi.add(n), this.chest.add(this.hands), this.hands.add(n), this.hands.add(i), this.hands.l = i, this.hands.r = n;
  }, U.prototype.initBodyGeometry = function() {
    this.weapon = new THREE.Mesh(un.generic_sword.geo, Wi.generic_sword), this.weapon.scale.set(un.generic_sword.scale[0], un.generic_sword.scale[1], un.generic_sword.scale[2]), this.weapon.rotation.y = .5, wi.add(this.weapon), this.weapon.position.set(0, 0, .7), this.chest.add(this.weapon);
  }, U.prototype.tickBaseAnimation = function(t, e, i) {
    var n = new THREE.Vector3;
    n.subVectors(this.visualPosition, this.legs.lastVisualPos);
    var r = this.stats.movespeed * i;
    switch(-1 == this.walkForward && (r *= 1.3), t) {
      case "cast":
        this.hands.cycle = e.timer / e.duration * qt;
        var a = Math.sin(this.hands.cycle), s = Math.cos(this.hands.cycle);
        this.chest.rotation.y = .05 * a - 1, this.chest.rotation.x = .03 * a - .2, this.chest.rotation.z = .2 + .02 * s, this.chest.position.y = .2 * a + .3, this.chest.position.z = -.2, this.hands.r.rotation.set(.3 + .2 * a, .2 * a, 0), this.hands.l.rotation.set(.3 + .2 * s, .2 * -s, 0), this.hands.r.position.set(.3 + .1 * a, .1 * a - .3, -.75), this.hands.l.position.set(-.2 - .1 * a, .1 * s - .1, -.75);
        break;
      case "channel":
        this.hands.cycle = e.timer / e.duration * qt;
        var a = Math.sin(this.hands.cycle), s = Math.cos(this.hands.cycle);
        this.chest.rotation.y = .01 * a - .2, this.chest.rotation.x = .3 + .01 * a, this.chest.rotation.z = .01 * s - .5, this.chest.position.y = .1 * a + .3, this.chest.position.z = -.2, this.hands.r.rotation.set(.3 + .05 * a, .2 * a, 0), this.hands.l.rotation.set(.3 + .05 * s, .2 * -s, 0), this.hands.r.position.set(.5 + .05 * a, .3 + .1 * s, -.6), this.hands.l.position.set(.05 * a - .5, 1 + .05 * a, -.6);
        break;
      case "release_spell":
        u = Kt.easeOutQuint(1 - e.timer / e.duration);
        this.chest.rotation.y = -1 + u, this.chest.rotation.x = .2 * u - .2, this.chest.rotation.z = .2 - .2 * u, this.chest.position.y = .3 - .3 * u, this.chest.position.z = .2 * u - .2, this.hands.r.rotation.set(.3 - .3 * u, 0, 0), this.hands.l.rotation.set(.3 - .3 * u, 0, 0), this.hands.r.position.set(.35 + .2 * u, 0, -1), this.hands.l.position.set(-.35 - .2 * u, 0, -1);
        break;
      case "release_buff":
        u = Kt.easeOutQuint(1 - e.timer / e.duration);
        this.chest.rotation.y = 0, this.chest.rotation.x = 0, this.chest.rotation.z = 0, this.hands.r.rotation.set(1.5 * u, 0, 0), this.hands.l.rotation.set(1.5 * u, 0, 0);
        var o = Math.sin(3 * u);
        this.hands.r.position.set(-.12 - .35 * o, .8 * u - .1, -.3 - o), this.hands.l.position.set(.12 + .35 * o, 0 + .8 * u, -.3 - o);
        break;
      case "boost":
        u = Kt.easeInOutQuart(.5 + .5 * Math.sin(e.timer / e.duration * Math.PI * 2));
        this.chest.rotation.x = .4 * u, this.hands.r.rotation.set(0, 0, 0), this.hands.l.rotation.set(0, 0, 0), this.hands.r.position.set(.6 + .2 * u, .8 * u, -.3), this.hands.l.position.set(-.6 - .2 * u, .8 * u, -.3);
        break;
      case "swing_melee":
        this.hands.r.position.copy(this.weapon.position), this.hands.r.position.multiplyScalar(.5), this.chest.rotation.set(0, e.timer / e.duration * .5, 0);
        break;
      case "spin":
        this.body.rotation.y = e.timer / e.duration * Math.PI * 4, this.chest.position.z = .3, this.hands.l.position.set(-.2, 0, -1), this.hands.r.position.set(.2, 0, -1);
        break;
      case "dead":
        this.chest.material = Wi.dead, this.body.rotation.x = -Math.min(this.state.timer, .8) / .8 * Math.PI * .5, this.state.timer > 2 && this.state.timer < 5 && (this.body.position.y -= .2 * i);
        break;
      case "dance":
        this.hands.cycle = e.timer / e.duration * qt;
        var a = Math.sin(2 * this.hands.cycle), s = Math.sin(this.hands.cycle);
        this.chest.rotation.y = .5 * s, this.chest.rotation.x = .3 * s, this.hands.r.rotation.set(0, .3 * a, .5 * s), this.hands.l.rotation.set(0, .3 * a, .5 * s), this.hands.r.position.set(.9 + .4 * a, .6 + .3 * a, 0), this.hands.l.position.set(-.9 - .4 * a, .6 + .3 * a, 0);
        break;
      default:
      case "idle":
        if (this.body.position.set(0, 0, 0), this.body.rotation.set(0, 0, 0), this.chest.position.set(0, 0, 0), this.chest.rotation.set(0, 0, 0), this.walkForward || this.walkSideward) {
          var c = .6;
          -1 == this.walkForward && (c = .3);
          var l = Math.sin(this.legs.cycle);
          this.hands.l.position.set(.2 * Math.sin(2 * this.legs.cycle + 5) - .7, .3 * Math.sin(this.legs.cycle) - .2, l * c * 1.5 - .2), this.hands.r.position.set(.7 - .2 * Math.sin(2 * this.legs.cycle + 5), .3 * -Math.sin(this.legs.cycle) - .2, -.2 - l * c * 1.5), this.hands.r.rotation.set(0, .5 + .8 * this.hands.l.position.z, 0), this.hands.l.rotation.set(0, -(.5 + .8 * this.hands.r.position.z), 0);
        } else {
          this.hands.rotation.y = 0;
          a = Math.sin(this.chest.cycle + .5 * Math.PI);
          this.hands.r.rotation.set(0, .43 - .15 * a, -.3), this.hands.l.rotation.set(0, .15 * a - .43, .3), this.hands.l.position.set(-.7, .08 * a - .3, .1 * a - .15), this.hands.r.position.set(.7, .08 * a - .3, .1 * a - .15);
        }
    }
    switch(this.legs.cycle > qt ? this.legs.cycle -= qt : this.legs.cycle < 0 && (this.legs.cycle += qt), t) {
      case "dead":
        break;
      case "spin":
        this.legs.cycle += 10 * i;
      case "dance":
        a = Math.sin(2 * this.hands.cycle);
        this.chest.position.y = 1 + .5 * a, this.legs.l.position.set(.2 * a - .4, 0, 0), this.legs.r.position.set(.4 - .2 * a, 0, 0);
        break;
      default:
      case "idle":
        if (this.walkForward || this.walkSideward) {
          var h = .8;
          -1 == this.walkForward && (h = .3), this.legs.rotation.y = -this.rotation + C(new THREE.Vector2(n.x, n.z)), this.legs.cycle += 1.8 * r / this.stats.scale, this.legs.l.position.set(-.3, Math.max(0, .6 * Math.cos(this.legs.cycle)) + .1, Math.sin(-this.legs.cycle) * h), this.legs.r.position.set(.3, Math.max(0, .6 * Math.cos(this.legs.cycle + Math.PI)) + .1, Math.sin(-this.legs.cycle + Math.PI) * h), this.legs.r.rotation.x = .3 * this.legs.l.position.z, this.legs.l.rotation.x = .3 * this.legs.r.position.z,
          this.chest.position.y = .1 * Math.cos(2 * this.legs.cycle) + 1.1;
        } else {
          switch(this.legs.rotation.y = 0, this.legs.r.rotation.x = 0, this.legs.l.rotation.x = 0, this.chest.cycle += 3 * i, this.chest.cycle > qt && (this.chest.cycle -= qt), this.chest.position.y = .1 * Math.cos(this.chest.cycle) + 1.1, t) {
            case "cast":
              this.legs.l.position.set(-.4, .1, -.25), this.legs.r.position.set(.35, .1, .1), this.legs.l.rotation.y = 1, this.legs.r.rotation.y = .5;
            case "channel":
              this.legs.l.position.set(-.4, .1, -.6);
              break;
            case "release_buff":
              var u = Kt.easeOutQuint(1 - e.timer / e.duration);
              this.chest.position.y = 1.2 + .2 * Math.sin(3 + 5 * u);
              break;
            default:
              this.legs.l.position.set(-.45, .1, 0), this.legs.r.position.set(.45, .1, 0), this.legs.r.rotation.y = 0, this.legs.l.rotation.y = 0;
          }
        }
        this.legs.lastVisualPos.copy(this.visualPosition);
    }
  }, U.prototype.tickClassAnimation = function(t, e) {
    switch(t) {
      case "swing_melee":
        var i = Kt.easeInOutQuad(e.timer / e.duration), n = .5 * -Math.PI + Math.PI * i;
        this.weapon.rotation.set(.5 * Math.PI, 0, n), this.weapon.position.set(1.5 * Math.sin(n), 0, 1.5 * -Math.cos(n));
        break;
      case "spin":
        this.weapon.rotation.set(.5 * Math.PI, 0, 0), this.weapon.position.set(0, 0, -2);
        break;
      default:
      case "idle":
        this.weapon.rotation.set(0, 0, .5), this.weapon.position.set(0, 0, .7);
    }
  }), (z.prototype = new U).constructor = z, z.prototype.getMaxHp = function() {
    return parseInt(.8 * Math.pow(12 + 1.5 * this.level, 1.6));
  }, z.prototype.getMovespeed = function() {
    return 1 == this.ai.isresetting ? 12 : 7;
  }, z.prototype.getScale = function() {
    return .8 + .04 * this.level;
  }, z.prototype.getMinDmg = function() {
    return 1 + .6 * this.level;
  }, z.prototype.getMaxDmg = function() {
    return 2 + .9 * this.level;
  }, z.prototype.getDefense = function() {
    return 0;
  }, (H.prototype = new U).constructor = H, H.prototype.getMaxHp = function() {
    return parseInt(.6 * Math.pow(12 + 1.5 * this.level, 1.6));
  }, H.prototype.getMovespeed = function() {
    return 1 == this.ai.isresetting ? 12 : 9;
  }, H.prototype.getScale = function() {
    return .7 + .02 * this.level;
  }, H.prototype.getMinDmg = function() {
    return 1 + .6 * this.level;
  }, H.prototype.getMaxDmg = function() {
    return 2 + .9 * this.level;
  }, H.prototype.getDefense = function() {
    return 0;
  }, (V.prototype = new U).constructor = V, Wt || (V.prototype.headGearOffset = new THREE.Vector3(0, .6, 0), V.prototype.headGearOffsetScale = new THREE.Vector3(.6, .6, .6), V.prototype.initBaseBody = function() {
    this.chest = new THREE.Mesh(un.slime.geo, this["class"].color), this.chest.scale.set(un.slime.scale[0], un.slime.scale[1], un.slime.scale[2]), this.chest.rotation.order = "YXZ", this.chest.cycle = 0, this.chest.castShadow = !0, this.chest.position.y = .5, this.body.add(this.chest);
  }, V.prototype.tickBaseAnimation = function(t, e, i) {
    switch(this.chest.cycle += i * (0 != this.walkForward ? 6 : 2), this.chest.cycle > qt && (this.chest.cycle -= qt), this.chest.position.y = .3 - .1 * Math.cos(this.chest.cycle), this.chest.position.z = 0, this.chest.scale.set(.1 * Math.cos(this.chest.cycle) + 1, 1 - .1 * Math.cos(this.chest.cycle), .1 * Math.cos(this.chest.cycle) + 1), t) {
      case "swing_melee":
        var n = Math.sin(3.1 * Kt.easeInOutQuad(e.timer / e.duration)) / this.stats.scale;
        this.chest.position.z -= 2 * n;
        break;
      case "dead":
        this.chest.position.y = 0, this.state.timer > 1 && this.state.timer < 5 && (this.body.position.y -= .3 * i), this.chest.scale.set(1 + .2 * this.state.timer, 1 / (1 + this.state.timer), 1 + .2 * this.state.timer);
    }
  }, V.prototype.initBodyGeometry = function() {
  }, V.prototype.tickClassAnimation = function(t, e) {
  }), V.prototype.getMaxHp = function() {
    return parseInt(Math.pow(12 + 1.5 * this.level, 1.6));
  }, V.prototype.getMovespeed = function() {
    return 1 == this.ai.isresetting ? 10 : 5;
  }, V.prototype.getScale = function() {
    return .8 + .05 * this.level;
  }, V.prototype.getMinDmg = function() {
    return 1 + .6 * this.level;
  }, V.prototype.getMaxDmg = function() {
    return 2 + .9 * this.level;
  }, V.prototype.getDefense = function() {
    return 0;
  }, (G.prototype = new U).constructor = G, G.prototype.initBodyGeometry = function() {
    this.weapon = new THREE.Mesh(un.warrior_sword.geo, Wi.generic_metal), this.weapon.scale.set(un.warrior_sword.scale[0], un.warrior_sword.scale[1], un.warrior_sword.scale[2]), this.weapon.position.y = .5, this.hands.r.add(this.weapon), this.shield = new THREE.Mesh(un.warrior_shield.geo, Wi.generic_metal), this.shield.scale.set(un.warrior_shield.scale[0], un.warrior_shield.scale[1], un.warrior_shield.scale[2]), this.shield.position.x = -.5, this.hands.l.add(this.shield);
  }, G.prototype.tickClassAnimation = function(t, e) {
    if (e) {
      var i = Kt.easeInOutQuint(e.timer / e.duration);
    }
    switch(t) {
      case "swing_melee":
        this.hands.r.position.set(-.5 + i, 2 * i - 1, -1), this.hands.r.lookAt(new THREE.Vector3(0, 0, 0)), this.hands.r.rotation.x -= 1.5, this.hands.r.rotation.z -= 3 * i - 1, this.chest.rotation.set(0, 1 - 3 * i, 0);
        break;
      case "spin":
        this.hands.r.rotation.set(-1.5, 0, 0), this.hands.r.position.z -= .3, this.hands.l.position.z += .2;
        break;
      default:
      case "idle":
        this.hands.l.rotation.z -= .1, this.hands.l.position.y += .1, this.hands.r.rotation.x -= .5, this.hands.r.position.y -= .2, this.hands.r.position.x += .1, this.weapon && this.oldanimId != t && (this.weapon.rotation.set(0, 0, 0), this.weapon.position.set(0, 1, 0));
    }
    this.oldanimId = t;
  }, (j.prototype = new U).constructor = j, j.prototype.initBodyGeometry = function() {
    this.weapon = new THREE.Mesh(un.mage_staff.geo, Wi.generic_wood), this.weapon.scale.set(un.mage_staff.scale[0], un.mage_staff.scale[1], un.mage_staff.scale[2]), this.weapon.rotation.z = .5, this.weapon.position.set(0, 0, .7), this.chest.add(this.weapon), this.shield = new THREE.Mesh(un.mage_shield.geo, Wi.generic_white), this.shield.scale.set(un.mage_shield.scale[0], un.mage_shield.scale[1], un.mage_shield.scale[2]), this.shield.position.x = -.4, this.shield.rotation.x = .25 * Math.PI, this.hands.l.add(this.shield);
  }, j.prototype.tickClassAnimation = function(t, e) {
    switch(t) {
      default:
      case "idle":
    }
  }, (q.prototype = new U).constructor = q, q.prototype.initBodyGeometry = function() {
    this.bowcontainer = new THREE.Object3D, this.weapon = new THREE.Mesh(un.archer_bow.geo, Wi.generic_wood), this.weapon.scale.set(2.5, 2.5, 1.9), this.weapon.rotation.z = .32, this.weapon.position.y = -2, this.bowcontainer.add(this.weapon), this.bowendU = new THREE.Mesh(un.archer_bow_end.geo, Wi.generic_wood), this.bowendL = new THREE.Mesh(un.archer_bow_end.geo, Wi.generic_wood), this.bowendU.position.x = 3.2, this.bowendL.position.x = -3.2, this.bowendU.position.y = -.7, this.bowendL.position.y =
    -.7, this.bowendL.scale.set(un.archer_bow_end.scale[0], un.archer_bow_end.scale[1], un.archer_bow_end.scale[2]), this.bowendU.scale.set(un.archer_bow_end.scale[0], un.archer_bow_end.scale[1], un.archer_bow_end.scale[2]), this.bowendL.rotation.z = 2.4, this.bowendU.rotation.z = .7, this.bowcontainer.add(this.bowendU), this.bowcontainer.add(this.bowendL), this.bowcontainer.rotation.z = 1.5, this.bowcontainer.rotation.x = 1.6, this.bowcontainer.position.x = 1.1, this.bowcontainer.position.z = -.1,
    this.hands.l.add(this.bowcontainer), this.ammo = new THREE.Mesh(un.archer_ammo.geo, Wi.archer_ammo), this.ammo.position.z = .7, this.ammo.rotation.z = -.4, this.ammo.rotation.x = .16, this.ammo.position.y = -.15, this.ammo.scale.set(un.archer_ammo.scale[0], un.archer_ammo.scale[1], un.archer_ammo.scale[2]), this.chest.add(this.ammo), this.ammo2 = new THREE.Mesh(un.archer_ammo2.geo, Wi.archer_ammo2), this.ammo2.position.y = .8, this.ammo2.scale.set(un.archer_ammo2.scale[0], un.archer_ammo2.scale[1],
    un.archer_ammo2.scale[2]), this.ammo.add(this.ammo2);
  }, q.prototype.tickClassAnimation = function(t, e) {
    if (e) {
      var i = Kt.easeInOutQuint(e.timer / e.duration);
      Math.sin(3.14 * i);
    }
    switch(t) {
      case "release_spell":
        var n = 1 - Kt.easeInQuint(e.timer / e.duration);
        this.hands.l.rotation.set(1.5, 2 + .4 * n, 1.5), this.hands.l.position.set(-.2, .3 * n - .4, -.8 - .8 * n), this.chest.rotation.y = 0, this.chest.rotation.x = .2 * n - .2, this.chest.rotation.z = 0, this.chest.position.z = 0, this.hands.r.position.set(.5 + .2 * n, .4 * n - .2, 1 - e.timer / e.duration - .9);
        break;
      default:
      case "idle":
        var r = Math.sin(this.chest.cycle + .5 * Math.PI), a = Math.sin(this.legs.cycle);
        this.hands.l.rotation.set(.1 * r - .2 + .1 * a, .15 * r - 1.4 + .1 * a, .3), this.hands.l.position.set(-.15 - .2 * r - .2 * a, .1 * r - .3 + .1 * a, .1 * a - .9), this.chest.rotation.y = .1, this.chest.rotation.x = .1 * r - .1, this.chest.position.z = -.1, this.legs.l.position.z -= .3, this.legs.r.position.z += .1;
    }
  }, (W.prototype = new U).constructor = W, W.prototype.initBodyGeometry = function() {
    this.weapon = new THREE.Mesh(un.shaman_mace1.geo, Wi.generic_wood), this.weapontop = new THREE.Mesh(un.shaman_mace2.geo, Wi.shaman_macetop), this.weapon.scale.set(un.shaman_mace1.scale[0], un.shaman_mace1.scale[1], un.shaman_mace1.scale[2]), this.weapontop.scale.set(un.shaman_mace2.scale[0], un.shaman_mace2.scale[1], un.shaman_mace2.scale[2]), this.weapon.position.y = -.5, this.weapontop.position.y = .8, this.hands.r.add(this.weapon), this.weapon.add(this.weapontop), this.shield = new THREE.Mesh(un.shaman_shield.geo,
    Wi.generic_white), this.shield.scale.set(un.shaman_shield.scale[0], un.shaman_shield.scale[1], un.shaman_shield.scale[2]), this.shield.position.z = .6, this.shield.position.y = .1, this.shield.rotation.z = .25 * Math.PI, this.chest.add(this.shield), this.robe = new THREE.Mesh(un.shaman_robe.geo, Wi.generic_white), this.robe.scale.set(un.shaman_robe.scale[0], un.shaman_robe.scale[1], un.shaman_robe.scale[2]), this.robe.position.z = -.5, this.robe.position.y = -.5, this.chest.add(this.robe);
  }, W.prototype.tickClassAnimation = function(t, e) {
    if (e) {
      Kt.easeInOutQuint(e.timer / e.duration);
    }
    switch(t) {
      default:
      case "idle":
        this.hands.l.rotation.z -= .1, this.hands.l.position.y += .1, this.hands.r.rotation.x -= 1.3, this.hands.r.position.y -= .1, this.hands.r.position.x += .1, this.weapon.rotation.set(0, 0, 0), this.weapon.position.set(0, .2, 0);
    }
  }, h.prototype.updateVisual = function(t) {
    switch(t) {
      case "h":
        if (void 0 === this.chest) {
          return;
        }
        if (this.head && (it(this.head), this.chest.remove(this.head), this.head = void 0), "GM" != this.clan) {
          switch(this.visuals.h) {
            default:
            case 0:
              break;
            case 1:
              this.head = new THREE.Mesh(gt.helmet.children[0].geometry, Wi.metal);
              break;
            case 2:
              this.head = new THREE.Mesh(gt.helmet.children[0].geometry, Wi.silver);
              break;
            case 3:
              this.head = new THREE.Mesh(gt.helmet.children[0].geometry, Wi.gold);
              break;
            case 4:
              this.head = new THREE.Mesh(gt.crown.children[0].geometry, Wi.metal);
              break;
            case 5:
              this.head = new THREE.Mesh(gt.crown.children[0].geometry, Wi.silver);
              break;
            case 6:
              this.head = new THREE.Mesh(gt.crown.children[0].geometry, Wi.gold);
          }
        } else {
          this.head = new THREE.Mesh(gt.crown.children[0].geometry, Wi.obsidian);
        }
        this.head && (this.head.position.copy(this["class"].headGearOffset), this.head.scale.copy(this["class"].headGearOffsetScale), this.chest.add(this.head));
    }
  };
  var Ve = 0;
  h.prototype.tickDamageWobble = function(t) {
    if (this.dmgShake > 0 && this.chest) {
      if (this.dmgShake -= t, this.dmgShake > .4 && (this.dmgShake = .4), this.dmgShake > 0) {
        var e = this.stats.scale + this.dmgShake * Math.sin(50 * this.dmgShake) * .5;
        this.body.scale.set(e, e, e), this.chest.material = Wi.damage;
      } else {
        this.body.scale.set(this.stats.scale, this.stats.scale, this.stats.scale), this.chest.material = this["class"].color;
      }
    }
  }, h.prototype.tickAnimations = function(t) {
    if (this.animationQueue.length > 0) {
      var e = this.animationQueue[0];
      e.tick(t), (e.timer <= 0 || 1 == e.deleteMe) && this.animationQueue.shift();
    }
    this.worlddist < 60 ? (this.tickDamageWobble(t), this.tickBodyPartAnimations(t)) : this.isInHud && Ve % Math.round(.08 * (this.worlddist - 60) + 1 + this.globalAnimStepFuss) == 0 && (this.tickDamageWobble((Qi - (this.lastBodyAnimTick || 0)) / 1e3), this.tickBodyPartAnimations((Qi - (this.lastBodyAnimTick || 0)) / 1e3), this.lastBodyAnimTick = Qi);
  }, X.prototype.tick = function(t) {
    "timed" != this.type && "loop" != this.type || (this.timer -= t, this.timer <= 0 && "loop" == this.type && (this.timer = this.duration));
  }, h.prototype.tickBodyPartAnimations = function(t) {
    if (this.hasParsedClass) {
      var e, i = void 0;
      this.animationQueue.length > 0 ? (e = this.animationQueue[0].id, i = this.animationQueue[0]) : e = "idle", this["class"] && this["class"].type && (this["class"].tickBaseAnimation.call(this, e, i, t), this["class"].tickClassAnimation.call(this, e, i));
    }
  };
  var Ge, je = function() {
    var t = this, e = Math.PI / 2;
    this.locked = !1, this.lmb = !1, this.rmb = !1, this.cameraX = 0, this.cameraY = 0, this.cameraZoom = 8, this.mouse = new THREE.Vector2, this.mouseOld = new THREE.Vector2, this.mouseElement = void 0, this.lmbLastDownTime = 0, this.lastX = 0, this.lastY = 0, this.mouseMove_unlocked = function(e) {
      t.mouseElement = e.target.getAttribute ? e.target.getAttribute("data-infopanel") : null, t.mouse.x = e.clientX / window.innerWidth * 2 - 1, t.mouse.y = -e.clientY / window.innerHeight * 2 + 1, qe || (t.lastX = e.x, t.lastY = e.y), void 0 != Se && Ae.css({left:e.pageX, top:e.pageY});
    }, this.mouseMove_locked = function(i) {
      i.preventDefault();
      var n = i.movementX || i.mozMovementX || i.webkitMovementX || 0, r = i.movementY || i.mozMovementY || i.webkitMovementY || 0;
      qe ? (n = i.movementX || i.mozMovementX || i.webkitMovementX || 0, r = i.movementY || i.mozMovementY || i.webkitMovementY || 0) : (n = i.x - t.lastX, r = i.y - t.lastY, t.lastX = i.x, t.lastY = i.y), Math.abs(n) < 200 && Math.abs(r) < 200 && (t.cameraY -= .0035 * n, t.cameraX -= .0021 * r, t.cameraX = Math.max(-e, Math.min(e, t.cameraX)));
    }, this.onMouseDown = function(e) {
      if (e.target.dataset.mouselock || t.lmb || t.rmb) {
        switch(e.button) {
          case 0:
            t.lmb = !0, this.lmbLastDownTime = performance.now();
            break;
          case 3:
          case 2:
            t.rmb = !0;
        }
        return Pi && (t.lmb || t.rmb) && t.tryLock(), !1;
      }
    }, this.onMouseUp = function(e) {
      switch(e.button) {
        case 0:
          t.lmb = !1, performance.now() - this.lmbLastDownTime < 300 && void 0 != $i && void 0 != Pi && ($i.drop ? $i.requestPickUp() : (Pi.target = $i, "vendor" == Pi.target["class"].type && Pi && Pi.canSellToTrader() && !Ne && (console.log("vendor opened"), $("#trader").centerMe(-100, -100), $("#trader").show(), $("#traderAd").centerMe(400, -100), $("#traderAd").show(), $("#inventory").show(), Ne = !0, aiptag.cmd.display.push(function() {
            aipDisplayTag.refresh("hordes-io_300x250");
          }))));
          break;
        case 3:
        case 2:
          t.rmb = !1;
      }
      return t.lmb || t.rmb || t.unLock(), !1;
    }, this.mouseWheelEvent = function(e) {
      if (e.target == Ei.domElement || e.target == document.body) {
        e.preventDefault();
        var i = e.wheelDelta ? e.wheelDelta : -e.detail;
        t.cameraZoom -= i > 0 ? 1 : -1, t.cameraZoom = Math.min(30, Math.max(t.cameraZoom, 3));
      }
    }, document.addEventListener("mousemove", this.mouseMove_unlocked, !1), document.addEventListener("mousedown", this.onMouseDown), document.addEventListener("mouseup", this.onMouseUp), document.addEventListener("mousewheel", this.mouseWheelEvent), document.addEventListener("DOMMouseScroll", this.mouseWheelEvent), this.tryLock = function() {
      if (qe) {
        var t = document.body;
        t.requestPointerLock = t.requestPointerLock || t.mozRequestPointerLock || t.webkitRequestPointerLock, t.requestPointerLock();
      } else {
        this.locked = !0, document.addEventListener("mousemove", Ge.mouseMove_locked, !1), document.removeEventListener("mousemove", Ge.mouseMove_unlocked, !1);
      }
    }, this.unLock = function() {
      qe ? (document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock, document.exitPointerLock()) : (this.locked = !1, document.addEventListener("mousemove", Ge.mouseMove_unlocked, !1), document.removeEventListener("mousemove", Ge.mouseMove_locked, !1));
    };
  };
  window.oncontextmenu = function() {
    return !1;
  };
  var qe = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document;
  if (qe) {
    var We = document.body, Xe = function(t) {
      document.pointerLockElement === We || document.mozPointerLockElement === We || document.webkitPointerLockElement === We ? (Ge.locked = !0, document.addEventListener("mousemove", Ge.mouseMove_locked, !1), document.removeEventListener("mousemove", Ge.mouseMove_unlocked, !1)) : (Ge.locked = !1, document.addEventListener("mousemove", Ge.mouseMove_unlocked, !1), document.removeEventListener("mousemove", Ge.mouseMove_locked, !1));
    };
    document.addEventListener("pointerlockchange", Xe, !1), document.addEventListener("mozpointerlockchange", Xe, !1), document.addEventListener("webkitpointerlockchange", Xe, !1);
  }
  var $e = void 0, Ye = !0, Ze = void 0, Qe = function() {
    Ze = $("#fpsdisplay"), $e = setInterval(function() {
      Ye || Ze.text((1e3 / Zi).toFixed(1) + " fps, " + parseInt(Tn / 2) + "ms");
    }, 200), $("#modal-settings").on("hidden.bs.modal", function(t) {
      di("show"), Ye = !0;
    }), $("#modal-settings").on("show.bs.modal", function(t) {
      di("hide"), Ye = !1;
    }), $("#sys-settings").on("click", function() {
      $("#setting-camlock").prop("checked", "true" == zt.get("camlock")), $("#setting-resolution").val(parseInt(zt.get("resolution"))), $("#setting-skillefx").prop("checked", "true" == zt.get("skillefx")), $("#setting-shadows").val(parseInt(zt.get("shadows"))), $("#setting-grass").val(parseInt(zt.get("grass"))), $("#modal-settings").modal("show");
    }), $("#setting-camlock").on("change", function() {
      zt.set("camlock", this.checked + "");
    }), $("#setting-resolution").on("input change", function() {
      zt.set("resolution", this.value + ""), cn();
    }), $("#setting-skillefx").on("change", function() {
      zt.set("skillefx", this.checked + "");
    }), $("#setting-shadows").on("input change", function() {
      zt.set("shadows", this.value + ""), ln();
    }), $("#setting-grass").on("change", function() {
      zt.set("grass", this.value + ""), c(J(ft.grassmap.image), gi.geometry);
    }), $(".chatsettingbutton").each(function() {
      var t = $(this).data("chat");
      _t(zt.get(t)) || $(this).addClass("chatsettingdisable");
    });
  }, Je = {}, Ke = {}, ti = {goldCoin:"<img src='data/coin.png' class='goldCoin'></img>", faction1:"<img src='data/factionA.png' class='goldCoin'></img>", faction2:"<img src='data/factionB.png' class='goldCoin'></img>"}, ei = {}, ii = void 0, ni = void 0, ri = {}, ai = "g";
  createUi = function(t) {
    var e = document.body;
    Je.player = new TargetPanel($("#upperLeftContainer"), "You"), Je.target = new TargetPanel($("#upperLeftContainer"), "Target"), ri.claninvite = $("<button style='position:absolute; top: 0px; right: -32px;' class='btn btn-default btn-xs'><img style='width: 15px;margin: 3px;' src='data/icons/horde.png'></img></button>").appendTo(Je.target.panel), ri.claninvite.on("click", function(t) {
      Pi && void 0 !== Pi.target && Pi.target.faction == Pi.faction && _n.emit("ca", {a:"invite"});
    }), $("<p/>", {"class":"resourcesText", style:"float:left", id:"invtrashcan"}).appendTo($("#inventory")).html("<span style=' margin-right: 0' class='glyphicon glyphicon-trash'>");
    var i = $("<p/>", {"class":"resourcesText"}).appendTo($("#inventory"));
    i.html(ti.goldCoin + " <span>0</span>"), Ke.gold = $(i).find("span"), Pe();
    var n = document.createElement("div");
    n.id = "expBarContainer", n.innerHTML = "<div class='progress' id='expbarprogress'><div class=\"progress-bar\" id='expbar' role=\"progressbar\"></div></div>", e.appendChild(n), Ke.expbar = $("#expbar"), Ke.expbarcontainer = $(n), Ke.expbartext = $("<p/>", {"class":"progressbartext", id:"expbartext"}), Ke.expbartext.insertAfter(expbar);
    var r = document.createElement("div");
    r.innerHTML = "<div id='skillbar'></div>", e.appendChild(r), Ke.skillbar = $("#skillbar"), si(1, Ke.skillbar), si(2, Ke.skillbar), si(3, Ke.skillbar), si(4, Ke.skillbar), castbarcontainer = document.createElement("div"), castbarcontainer.innerHTML = '<div class=\'progress\'><div class="progress-bar" id=\'castbar\' role="progressbar" style="width:0% padding:0px"> </div> </div>', castbarcontainer.id = "castBarContainer", e.appendChild(castbarcontainer), Ke.castbar = $("#castbar"), Ke.castbarcontainer =
    $("#castBarContainer"), Ke.infoPanel = $("<div/>", {"class":"panel panel-default", id:"infoPanel"}).appendTo($("#infoPanelContainer")), Ke.infoPanel.hide(), Ke.statistics = $("#statistics"), Ke.chatboxBody = $("#chatboxBody"), Ke.chatboxWrapper = $("#chatboxWrapper"), Ke.chatInput = $("#chatInputForm"), Ke.chatbox = $("#chatbox"), Ke.ladder = $("#ladder"), Ke.ladderBody = $("#ladder-body"), $("#chatInputForm").submit(function(t) {
      t.preventDefault(), Ke.chatInput.hide();
      Ht($("#chatInput").val());
      $("#chatInput").val(""), $("#chatInput").blur();
    }), $("#cbt-g").on("click", function() {
      $("#chatChannelName").text("Global"), ai = "g";
    }), $("#cbt-c").on("click", function() {
      $("#chatChannelName").text("Clan"), ai = "c";
    }), $("#charCreateButton").on("click", function(t) {
      Ji && Ki && mi(Un), t.preventDefault();
    }), $("#charSelButton").on("click", function(t) {
      Ji && Ki && mi(Fn), t.preventDefault();
    }), $("#logintabs a").click(function(t) {
      t.preventDefault(), $(this).tab("show");
    });
    var a = $("#charselect li");
    a.on("click", function() {
      a.removeClass("active"), $(this).addClass("active"), zt.set("char", $(this).data("c"));
    }), Ke.charSelection = a;
    var s = $("#classSelection .classChoice");
    s.on("click", function() {
      s.removeClass("active"), $(this).addClass("active"), zt.set("class", $(this).data("class"));
    }), Ke.classSelection = s;
    var o = $("#factionSelectionPanel .factionSelect");
    o.on("click", function() {
      o.removeClass("active"), $(this).addClass("active"), zt.set("faction", $(this).data("faction"));
    }), Ke.factionSelection = o, Ke.sysbar = $("#systembar"), $("#setNickModalButton").on("click", function() {
      $("#modal-setnick").modal("show");
    }), $("#visitProfile").on("click", function() {
      Pi && window.open("https://hordes.io/player/" + Pi.name, "_blank");
    }), $("#setNickButton").on("click", function() {
      var t = $("#setNickField").val();
      "" != t && ($("#setNickMsg").hide(), _n.emit("cn", t));
    }), $("#systemCharSelList li.csel").on("click", function() {
      var t = $(this).data("c");
      t != zt.get("char") && (zt.set("char", t), Fn());
    }), $("#sys-help").on("click", function() {
      $("#modal-help").modal("show");
    }), $("#sys-discord").on("click", function() {
      if (!$("#modal-discord").length) {
        $("#modal-setnick").after('<div class="modal fade" id="modal-discord" tabindex="-1" role="dialog"> <div class="modal-dialog modal-body-base modal-user" role="document"> <div class="modal-content"> <div class="modal-body"><button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4> <img src = "https://discordapp.com/assets/94db9c3c1eba8a38a1fcf4f223294185.png" alt = "Discord" height = "75px" width = "250px"></img></h4> <h5 class="text-center detailText"> <a href="https://discord.gg/z78gnNe" line-height = "200px">Join the XHORDES Discord! <img src="https://i.imgur.com/Yn2YW2Q.png" alt="XHORDES" height="64px" width="64px"></img></a><br/> <br/><a href="https://discord.gg/bY2vFzg" line-height = "200px">Join the Hordes.io Discord! <img src="https://hordes.io/icon.png" alt="Hordes.io" height="48px" width="48px"></img></a></h5></div></div></div></div>');
      }
      $("#modal-discord").modal("show");
    }), $("#sys-inventory").on("click", function() {
      $("#inventory").toggle();
    }), $("#sys-charpanel").on("click", function() {
      $("#characterpanel").toggle();
    }), $("#sys-clan").on("click", function() {
      fe(pe), $("#modal-clan").modal("show");
    }), $("#respawnButton").on("click", function() {
      $("#deathScreen").hide(), _n && _n.emit("confrespawn");
    }), $("#sys-clan").on("click", function() {
      $("#modal-clan").modal("show");
    }), $("#createClanButton").on("click", function() {
      var t = $("#createClanName").val(), e = $("#createClanTag").val();
      "" != t && "" != e && ($("#createClanMsg").hide(), On({n:$("#createClanName").val(), t:$("#createClanTag").val()}));
    }), $("#leaveClanButton").on("click", function() {
      _n.emit("ca", {a:"leave"});
    }), $("#disbandClanButton").on("click", function() {
      _n.emit("ca", {a:"disband"});
    }), $("#interact-accept").on("click", function() {
      $("#userinteract").hide(), _n.emit("ca", {a:"accept"});
    }), $("#interact-decline").on("click", function() {
      $("#userinteract").hide();
    }), $(".chatsettingbutton").on("click", function() {
      var t = $(this).data("chat"), e = !_t(zt.get(t));
      zt.set(t, e), e ? $(this).removeClass("chatsettingdisable") : $(this).addClass("chatsettingdisable");
    }), Qe();
    var c = zt.get("faction");
    switch(parseInt(c)) {
      case 0:
      case 1:
        Ke.factionSelection.eq(c).click();
    }
    switch(zt.get("class")) {
      case "warrior":
        Ke.classSelection.eq(0).click();
        break;
      case "mage":
        Ke.classSelection.eq(1).click();
        break;
      case "shaman":
        Ke.classSelection.eq(2).click();
        break;
      case "archer":
        Ke.classSelection.eq(3).click();
    }
    Ke.charSelection.eq(zt.get("char")).click();
    var l = zt.get("name");
    $("#usernameInputField").val(l);
  };
  var si = function(t, e) {
    var i = "<div data-infopanel='skill" + t + "' class='skill' id='skillButton" + t + "'><img data-infopanel='skill" + t + "' id='skillIcon" + t + "' src='' class='skillIcon'></img><div data-infopanel='skill" + t + "' id='skillOverlay" + t + "' class='skillOverlay'></div><kbd id='skillButtonKbd" + t + "'data-infopanel='skill" + t + "' class='skillHotkey'>" + zt.get("skill" + t) + "</kbd><p data-infopanel='skill" + t + "' id='skillCooldown" + t + "' class='skillCooldown'></p></div>";
    e.append(i);
    var n = $("#skillButton" + t), r = $("<button id='skillLevelButton" + t + "' class='btn skillLvlUpButton'><span class='glyphicon glyphicon-plus'></button>");
    n.mouseover(function(e) {
      oi(r, t), r.stop(!0, !0), r.show();
    }), n.mouseout(function(t) {
      r.stop(!0, !0), r.fadeOut(400);
    }), r.hide(), r.click(function(e) {
      Pi && Pi["class"] && Pi["class"].skills[t].tryLevelUp();
    }).appendTo(n);
  }, oi = function(t, e) {
    Pi["class"].skills[e].canLevelUp() ? t.removeClass("skillButtonDisabled") : t.addClass("skillButtonDisabled");
  }, ci = void 0, li = void 0, hi = !0, ui = !0;
  updateUi = function(t) {
    ui || (Pi ? (Je.player.update({name:Pi.name, level:Pi["class"].level, relationship:"ally", hp:Pi.stats.currenthp, maxhp:Pi.stats.maxhp, mp:Pi.stats.currentmp, maxmp:Pi.stats.maxmp, icon:0 == Pi.faction ? "factionA" : "factionB", "class":Pi["class"].type}), Pi.target ? (Je.target.update({name:Pi.target.name, level:Pi.target["class"].level, relationship:Pi.target.faction == Pi.faction ? "ally" : "enemy", hp:Pi.target.stats.currenthp, maxhp:Pi.target.stats.maxhp, mp:Pi.target.stats.currentmp, maxmp:Pi.target.stats.maxmp,
    icon:0 == Pi.target.faction ? "factionA" : "factionB", "class":Pi.target.isAi ? "monster" : Pi.target["class"].type}), void 0 != Pi.target && (Pi.clanrole > 0 && Pi.target.faction == Pi.faction && void 0 == Pi.target["class"].ai ? ri.claninvite.show() : ri.claninvite.hide())) : Je.target.update({hide:!0})) : (Je.player.update({hide:!0}), Je.target.update({hide:!0})), Ge.mouseElement == ci && $i == li || (ci = Ge.mouseElement, li = $i, null == Ge.mouseElement ? void 0 != $i ? (Ke.infoPanel.html($i.getInfoPanelString()),
    hi && (Ke.infoPanel.stop(!0, !0), Ke.infoPanel.show(), hi = !1)) : hi || (Ke.infoPanel.stop(!0, !0), Ke.infoPanel.fadeOut(400), hi = !0) : ei.hasOwnProperty(Ge.mouseElement) ? (Ke.infoPanel.html(ei[Ge.mouseElement]), hi && (Ke.infoPanel.stop(!0, !0), Ke.infoPanel.show(), hi = !1)) : hi || (Ke.infoPanel.stop(!0, !0), Ke.infoPanel.fadeOut(400), hi = !0)), Ne && Pi && !Pi.canSellToTrader() && ($("#trader").hide(), $("#traderAd").hide(), Ne = !1));
  };
  var di = function(t, e) {
    Ke.ladder[t](e), Ke.chatbox[t](e), Ke.expbarcontainer[t](e), Ke.infoPanel[t](e), Ke.skillbar[t](e), Ke.statistics[t](e), Ke.castbarcontainer[t](e), Je.player.panel[t](e), Je.target.panel[t](e), Ke.sysbar[t](e);
  }, pi = [{}, {}, {}, {}, {}, {}, {}, {}], fi = function(t, e) {
    var i = $("#laddertable").find("tr").eq(t).find("td");
    void 0 !== e.name && (i[0].innerHTML = "<img class='classicon' src='data/" + e["class"] + ".png'> " + e.name), void 0 !== e.lvl && (i[1].innerHTML = parseInt(e.lvl)), void 0 !== e.fame && (i[2].innerHTML = "<b>" + parseInt(e.fame) + "</b>"), void 0 !== e.horde && i.attr("class", 1 == parseInt(e.horde) ? "factionB" : "factionA");
  }, mi = function(t) {
    ni = t, $("nav").fadeOut(300), $("#loginfade").fadeOut(300, function() {
      $("#renderer").fadeOut(300, function() {
        void 0 !== adplayer && "undefined" != typeof aipPlayer && Date.now() - parseInt(zt.get("lastAd")) > 3e5 ? aiptag.cmd.player.push(function() {
          adplayer.startPreRoll();
        }) : ni();
      });
    });
  };
  ii = function() {
    ni(), zt.set("lastAd", Date.now());
  }, $.fn.centerMe = function(t, e) {
    this.css("left", $(window).width() / 2 - $(this).width() / 2 + t), this.css("top", $(window).height() / 2 - $(this).height() / 2 + e);
  }, TargetPanel = function(t, e) {
    var i = $("<div/>", {"class":"panel panel-default targetPanel"});
    i.appendTo(t);
    var n = $("<div/>", {"class":"targetinfo"}).appendTo(i), r = $("<p/>", {"class":"targettext targetname", text:""}).appendTo(n), a = $("<img/>", {"class":"factionicon", src:"data/factionA.png"}).prependTo(r), s = $("<span/>").appendTo(r), o = $("<p/>", {"class":"targettext targetlevel", text:""}).appendTo(n), c = $("<span/>").appendTo(o), l = $("<img/>", {"class":"classicon", src:"data/warrior.png"}).prependTo(o), h = $("<div/>", {"class":"progress hpbarbg"}).appendTo(i), u = $("<div/>", {"class":"progress-bar hpbar",
    role:"progressbar"}).appendTo(h), d = $("<p/>", {"class":"targettext targethealthtext", text:"1 / 1"}).appendTo(h), p = $("<div/>", {"class":"progress mpbarbg"}).appendTo(i), f = $("<div/>", {"class":"progress-bar mpbar", role:"progressbar"}).appendTo(p), m = $("<p/>", {"class":"targettext targethealthtext manafont", text:"1321 / 2384"}).appendTo(p);
    this.panel = i, this.name = s, this.icon = a, this["class"] = l, this.level = c, this.hpbar = u, this.hpbarBg = h, this.mpbar = f, this.mpbarBg = p, this.hptext = d, this.mptext = m, this.targetmode = e, this.tlvl = o, this.hp = 0, this.maxhp = 1, this.mp = 0, this.maxmp = 1, this.relationship = "ally", this.lasticon = "", this.lastclass = "", this.hidden = !0, this.panel.hide();
  }, TargetPanel.prototype.update = function(t) {
    if (t.hide) {
      this.hidden || (this.panel.hide(), this.hidden = !0);
    } else {
      this.hidden && (this.panel.show(), this.hidden = !1);
      var e = !1, i = !1;
      for (param in t) {
        if (t.hasOwnProperty(param)) {
          var n = t[param];
          switch(param) {
            case "name":
              n != this.oldname && (this.oldname = n, this.name.text(n), this[param].append(" <span class='targetMode'>" + this.targetmode + "</span>"));
              break;
            case "level":
              this.level.text() != n && this.level.text(n);
              break;
            case "relationship":
              t[param] != this.relationship && (this.relationship = n, this.name.attr("class", "targettext targetname " + this.relationship));
              break;
            case "hp":
            case "maxhp":
              ("hp" == param && n != this.hp || "maxhp" == param && n != this.maxhp) && (e = !0, this[param] = n);
              break;
            case "mp":
            case "maxmp":
              ("mp" == param && n != this.mp || "maxmp" == param && n != this.maxmp) && (i = !0, this[param] = n);
              break;
            case "icon":
              n != this.lasticon && (this.icon.attr("src", "data/" + n + ".png"), this.lasticon = n);
              break;
            case "class":
              n != this.lastclass && (this["class"].attr("src", "data/" + n + ".png"), this.lastclass = n);
          }
        }
      }
      e && (this.hptext.text(this.hp + "/" + this.maxhp), this.hpbar.css("width", Math.round(this.hp / this.maxhp * 100) + "%")), i && (this.mptext.text(this.mp + "/" + this.maxmp), this.mpbar.css("width", Math.round(this.mp / this.maxmp * 100) + "%"));
    }
  };
  var gi, vi, yi, xi, bi, _i, wi, Mi, Ei, Ti, Si, Ai, Ci, Li, Pi, ki, Ri, Di = 4, Ii = function() {
    Wt || (_i = J(ft.heightmap.image));
    var t = Wt ? heightmap.shape[0] : ft.heightmap.image.width, e = Wt ? heightmap.shape[1] : ft.heightmap.image.height;
    yi = t * Di, xi = 3 * t, Wt || (ft.detail.wrapS = THREE.RepeatWrapping, ft.detail.wrapT = THREE.RepeatWrapping, ft.detail2.wrapS = THREE.RepeatWrapping, ft.detail2.wrapT = THREE.RepeatWrapping, ft.detail_h.wrapS = THREE.RepeatWrapping, ft.detail_h.wrapT = THREE.RepeatWrapping, Wi.terrain = new THREE.RawShaderMaterial({uniforms:{map:{value:ft.color}, detail:{value:ft.detail}, detailHeight:{value:ft.detail_h}, detail2:{value:ft.detail2}, shadow:{value:Si.shadow.map}, ambient:{value:Ti.color}, directional:{value:Si.color},
    directionalDir:{value:Si.position}, directionalMVP:{value:new THREE.Matrix4}, fogColor:{value:wi.fog.color}, fogDensity:{value:wi.fog.density}, targetCircle:{value:new THREE.Vector4(0, 0, 0, 2)}, targetCirclePos:{value:new THREE.Vector2(0, 0)}, shadowSize:{value:0}}, vertexShader:mt["terrain.vert"], fragmentShader:mt["terrain.frag"], depthTest:!0, depthWrite:!0})), vi = new THREE.PlaneBufferGeometry(yi, yi, t - 1, e - 1);
    for (var i = 0; i < t; ++i) {
      for (var n = 0; n < e; ++n) {
        var r = xi * n + 3 * i;
        vi.attributes.position.array[r + 0] = i * Di, vi.attributes.position.array[r + 2] = n * Di, vi.attributes.position.array[r + 1] = .6 * tt(i + 1, n + 1).r;
      }
    }
    vi.computeFaceNormals(), vi.computeVertexNormals(), vi.normalsNeedUpdate = !0, vi.verticesNeedUpdate = !0, bi = vi.attributes.position.array.length, gi = new THREE.Mesh(vi, Wt ? void 0 : Wi.terrain), Wt || (gi.receiveShadow = !0, gi.castShadow = !1, wi.add(gi), Fi());
  }, Ni = [{x:99, z:665, s:3}, {x:130, z:761, s:5}, {x:161, z:359, s:5}, {x:176, z:254, s:5}, {x:175, z:129, s:5}, {x:424, z:119, s:5}, {x:496, z:420, s:5}, {x:430, z:489, s:5}, {x:518, z:541, s:5}, {x:562, z:597, s:3}, {x:597, z:685, s:5}, {x:519, z:920, s:5}, {x:833, z:900, s:5}, {x:905, z:507, s:5}, {x:925, z:152, s:5}, {x:637, z:146, s:5}, {x:382, z:229, s:5}, {x:177, z:504, s:5}, {x:298, z:606, s:3}, {x:358, z:864, s:5}, {x:435, z:785, s:2}, {x:656, z:602, s:3}, {x:622, z:504, s:2}, {x:941,
  z:772, s:3}, {x:913, z:642, s:5}, {x:299, z:395, s:2}, {x:390, z:543, s:2}, {x:166, z:584, s:5}, {x:251, z:822, s:5}, {x:521, z:671, s:5}, {x:408, z:566, s:5}], Ui = function(t, e, i) {
    var n = new THREE.Mesh(gt.tree.children[0].geometry, Wi.tree);
    n.position.x = t, n.position.z = e, n.position.y = Hi(n.position.x, n.position.z) - 2;
    var r = .01 * Math.random() + .01 * i;
    n.scale.set(r, r, r), n.receiveShadow = !0, n.castShadow = !0, n.rotation.order = "XZY", n.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), Vi(n.position.x, n.position.z)), n.rotation.x = .07 * n.rotation.x - .05 + .025 * Math.random(), n.rotation.y = 3 * Math.random(), n.rotation.z = .07 * n.rotation.z - .05 + .025 * Math.random(), wi.add(n);
  }, Fi = function() {
    Wi.tree = new THREE.MeshLambertMaterial({map:ft.tree, transparent:!0, alphaTest:.5, side:THREE.DoubleSide});
    for (var t = 0; t < Ni.length; ++t) {
      Ui(Ni[t].x, Ni[t].z, Ni[t].s);
    }
  }, Oi = void 0, Bi = 0, zi = function(t) {
    performance.now();
    gi.material.uniforms.directionalMVP.value = Si.shadow.matrix, Si.shadow.map && (gi.material.uniforms.shadow.value = Si.shadow.map.texture), Bi > 0 && (Bi -= Bi * t * 15);
    var e = $i && $i.drop ? $i : Pi ? Pi.target : void 0;
    Pi && e ? (Oi != e && (Bi = 1), Oi = e, $i && $i.drop ? (gi.material.uniforms.targetCirclePos.value = new THREE.Vector2(e.position.x, e.position.z), gi.material.uniforms.targetCircle.value.w = .5 * Math.max($i.quad.geometry.sh_h, $i.quad.geometry.sh_w) + .1 + .5 * Bi, gi.material.uniforms.targetCircle.value.x = .7, gi.material.uniforms.targetCircle.value.y = .7, gi.material.uniforms.targetCircle.value.z = .7) : (gi.material.uniforms.targetCirclePos.value = new THREE.Vector2(e.visualPosition.x,
    e.visualPosition.z), gi.material.uniforms.targetCircle.value.w = e.stats.scale + .2 + Bi, gi.material.uniforms.targetCircle.value.x = e.faction == Pi.faction ? 0 : 1, gi.material.uniforms.targetCircle.value.y = e.faction == Pi.faction ? 1 : 0, gi.material.uniforms.targetCircle.value.z = 0)) : gi.material.uniforms.targetCirclePos.value = new THREE.Vector2(0, 0);
  }, Hi = function(t, e) {
    var i = t / Di, n = e / Di, r = i % 1, a = n % 1;
    0 == r && (i += 1e-10), 0 == a && (n += 1e-10);
    var s, o, c;
    return s = xi * Math.ceil(n) + 3 * Math.floor(i), o = xi * Math.floor(n) + 3 * Math.ceil(i), c = r + a > 1 ? xi * Math.ceil(n) + 3 * Math.ceil(i) : xi * Math.floor(n) + 3 * Math.floor(i), s < 0 || o < 0 || c < 0 || s >= bi || o >= bi || c >= bi ? 0 : qi(Gi(s), Gi(o), Gi(c), t, e) || 0;
  }, Vi = function(t, e) {
    var i = t / Di, n = e / Di, r = i % 1, a = n % 1;
    0 == r && (i += 1e-10), 0 == a && (n += 1e-10);
    var s, o, c;
    if (s = xi * Math.ceil(n) + 3 * Math.floor(i), o = xi * Math.floor(n) + 3 * Math.ceil(i), r + a > 1) {
      c = xi * Math.ceil(n) + 3 * Math.ceil(i);
    } else {
      var l = c = xi * Math.floor(n) + 3 * Math.floor(i);
      c = o, o = l;
    }
    return s < 0 || o < 0 || c < 0 || s >= bi || o >= bi || c >= bi ? 0 : (new THREE.Triangle(ji(s), ji(o), ji(c))).normal();
  }, Gi = function(t) {
    return {x:vi.attributes.position.array[t], y:vi.attributes.position.array[t + 1], z:vi.attributes.position.array[t + 2]};
  }, ji = function(t) {
    return new THREE.Vector3(vi.attributes.position.array[t], vi.attributes.position.array[t + 1], vi.attributes.position.array[t + 2]);
  }, qi = function(t, e, i, n, r) {
    var a = (e.z - i.z) * (t.x - i.x) + (i.x - e.x) * (t.z - i.z), s = ((e.z - i.z) * (n - i.x) + (i.x - e.x) * (r - i.z)) / a, o = ((i.z - t.z) * (n - i.x) + (t.x - i.x) * (r - i.z)) / a, c = 1 - s - o;
    return s * t.y + o * e.y + c * i.y;
  }, Wi = {}, Xi = [], $i = void 0, Yi = 0, Zi = 0, Qi = 0, Ji = !1, Ki = !1, tn = function() {
    Ut(Ei.domElement), Ge = new je, wi = new THREE.Scene, Mi = new THREE.Scene, Li = new THREE.Raycaster, wi.fog = new THREE.FogExp2(6664656, .0065), Ei.setClearColor(9561076), Ai = new THREE.PerspectiveCamera(75, 0, .1, 1e3), wi.add(Ai), (Ci = new THREE.OrthographicCamera(1, 1, 1, 1, 1, 10)).position.z = 10, Ti = new THREE.AmbientLight(6793417), wi.add(Ti), Si = new THREE.DirectionalLight(11711133, .65), wi.add(Si), wi.add(Si.target), Ii(), c(J(ft.grassmap.image), gi.geometry), ln(), ht(), $("#upperLeftContainer").fadeIn(),
    Yi = performance.now();
    var t = function() {
      requestAnimationFrame(t), Qi = performance.now(), Zi += (Qi - Yi - Zi) / 10;
      var e = Math.min((Qi - Yi) / 1e3, .1);
      Yi = Qi, Ve++, ie(), vn = [], yn = [], Ri = [];
      for (var i in ki) {
        Ri.push(ki[i]);
      }
      void 0 !== Pi && (Pi.playertick(e), Pi.clienttick(e));
      for (var i in ki) {
        ki.hasOwnProperty(i) && void 0 != ki[i] && ki[i] != Pi && ki[i].clienttick(e);
      }
      pn(e), updateUi(e), void 0 == Pi ? on(e) : (En(), an(), He(e), de(e)), l(), zi(e), Ei.clear(), Ei.render(wi, Ai), Ei.clearDepth(), Ei.render(Mi, Ci);
    };
    t();
  }, en = function() {
    var t = {w:ft.items.image.width, h:ft.items.image.height};
    un.items = {};
    for (var e in vt.items.frames) {
      var i = vt.items.frames[e].frame, n = vt.items.frames[e].rotated, r = (n ? i.h : i.w) / t.w, a = (n ? i.w : i.h) / t.h, s = r / 2, o = i.x / t.w, c = 1 - i.y / t.h - a;
      un.items[e] = new THREE.PlaneBufferGeometry(1, 1, 2, 1), un.items[e].attributes.uv.array[0] = o, un.items[e].attributes.uv.array[1] = c + a, un.items[e].attributes.uv.array[2] = o + s, un.items[e].attributes.uv.array[3] = c + a, un.items[e].attributes.uv.array[4] = o + r, un.items[e].attributes.uv.array[5] = c + a, un.items[e].attributes.uv.array[6] = o, un.items[e].attributes.uv.array[7] = c, un.items[e].attributes.uv.array[8] = o + s, un.items[e].attributes.uv.array[9] = c, un.items[e].attributes.uv.array[10] =
      o + r, un.items[e].attributes.uv.array[11] = c;
      var l = (n ? i.h : i.w) / 38, h = (n ? i.w : i.h) / 38, u = 0;
      switch(e.replace(/[0-9]/g, "")) {
        default:
        case "gold":
        case "bow":
          u = 0;
          break;
        case "sword":
        case "shield":
        case "totem":
        case "hammer":
        case "glove":
        case "boot":
        case "bag":
          u = .2;
          break;
        case "armor":
        case "staff":
        case "quiver":
          u = .3;
      }
      u *= l, un.items[e].sh_w = l + .5, un.items[e].sh_h = h + .5, un.items[e].attributes.position.array[0] = -l, un.items[e].attributes.position.array[1] = h, un.items[e].attributes.position.array[3] = 0, un.items[e].attributes.position.array[4] = h, un.items[e].attributes.position.array[5] = u, un.items[e].attributes.position.array[6] = l, un.items[e].attributes.position.array[7] = h, un.items[e].attributes.position.array[9] = -l, un.items[e].attributes.position.array[10] = -h, un.items[e].attributes.position.array[12] =
      0, un.items[e].attributes.position.array[13] = -h, un.items[e].attributes.position.array[14] = u, un.items[e].attributes.position.array[15] = l, un.items[e].attributes.position.array[16] = -h, un.items[e].computeFaceNormals(), un.items[e].computeVertexNormals(), un.items[e].normalsNeedUpdate = !0, un.items[e].verticesNeedUpdate = !0;
    }
  }, nn = function() {
    Wi.item = new THREE.MeshBasicMaterial({map:ft.items, transparent:!0, alphaTest:.5, color:6710886, side:THREE.DoubleSide}), Wi.hpbarbg = new THREE.SpriteMaterial({color:0}), Wi.hpbarclan = new THREE.SpriteMaterial({color:4486399}), Wi.hpbarfriendly = new THREE.SpriteMaterial({color:65280}), Wi.hpbarenemy = new THREE.SpriteMaterial({color:16711680}), Wi.hpbarmob = new THREE.SpriteMaterial({color:16147241}), Wi.factionA = new THREE.SpriteMaterial({map:ft.factionA, color:16777215}), Wi.factionB =
    new THREE.SpriteMaterial({map:ft.factionB, color:16777215}), Wi.hpbarcantfight = new THREE.SpriteMaterial({color:6710886}), Wi.hpbarbgTransparent = new THREE.SpriteMaterial({color:0}), Wi.hpbarfriendlyTransparent = new THREE.SpriteMaterial({color:65280}), Wi.hpbarenemyTransparent = new THREE.SpriteMaterial({color:16711680}), Wi.hpbarmobTransparent = new THREE.SpriteMaterial({color:16147241}), Wi.hpbarcantfightTransparent = new THREE.SpriteMaterial({color:6710886}), Wi.hpbarcantfightTransparent.transparent =
    !0, Wi.hpbarbgTransparent.transparent = !0, Wi.hpbarfriendlyTransparent.transparent = !0, Wi.hpbarenemyTransparent.transparent = !0, Wi.hpbarmobTransparent.transparent = !0, Wi.hpbarcantfightTransparent.opacity = .5, Wi.hpbarbgTransparent.opacity = .2, Wi.hpbarfriendlyTransparent.opacity = .5, Wi.hpbarenemyTransparent.opacity = .8, Wi.hpbarmobTransparent.opacity = .7, Wi.hitbox = new THREE.MeshBasicMaterial({visible:!1}), Wi.ribbon_arrow = new THREE.MeshBasicMaterial({side:THREE.DoubleSide, alphaMap:ft.gradient,
    transparent:!0, alphaTest:.15}), Wi.ribbon_heal = new THREE.MeshBasicMaterial({side:THREE.DoubleSide, map:ft.heal_color, alphaMap:ft.heal_alpha, transparent:!0, alphaTest:.05}), Wi.ribbon_ice = new THREE.MeshBasicMaterial({side:THREE.DoubleSide, map:ft.ice_color, alphaMap:ft.heal_alpha, transparent:!0, alphaTest:.05}), Wi.ribbon_decay = new THREE.MeshBasicMaterial({side:THREE.DoubleSide, map:ft.decay_color, alphaMap:ft.decay_alpha, transparent:!0, alphaTest:.05}), Wi.ribbon_leech = new THREE.MeshBasicMaterial({side:THREE.DoubleSide,
    map:ft.leech_color, alphaMap:ft.heal_alpha, transparent:!0, alphaTest:.2}), Wi.ribbon_whirlwind = new THREE.MeshBasicMaterial({side:THREE.DoubleSide, map:ft.swingtest, alphaMap:ft.alpha, transparent:!0, alphaTest:.2}), Wi.slime_green = new THREE.MeshPhongMaterial({color:11531468, transparent:!0, opacity:.7, shininess:50, specular:8684676, map:ft.heal_color}), Wi.slime_blue = new THREE.MeshPhongMaterial({color:687583, transparent:!0, opacity:.7, shininess:50, specular:8684676}), Wi.slime_red =
    new THREE.MeshPhongMaterial({color:16711680, transparent:!0, opacity:.7, shininess:50, specular:8684676});
  };
  $(document).ready(function() {
    var t = "", e = setInterval(function() {
      (t += ".").length > 3 && (t = ""), $(".loadbutton").html("Connecting to Server" + t), Ji && Ki && (window.clearInterval(e), $(".loadbutton").html("Play").prop("disabled", !1));
    }, 300);
    (Ei = new THREE.WebGLRenderer({antialias:!0})).autoClear = !1, Ei.domElement.dataset.mouselock = !0, Ei.domElement.id = "renderer", $(Ei.domElement).insertBefore("#loginfade"), aiptag.cmd.display.push(function() {
      aipDisplayTag.display("hordes-io_300x250");
    }), aiptag.cmd.player.push(function() {
      adplayer = new aipPlayer({AD_WIDTH:960, AD_HEIGHT:540, AD_FULLSCREEN:!0, AD_CENTERPLAYER:!1, LOADING_TEXT:"loading advertisement", PREROLL_ELEM:document.getElementById("preroll"), AIP_COMPLETE:function() {
        ii();
      }, AIP_REMOVE:function() {
      }});
    }), yt.onFinish(function() {
      tn(), Ki = !0, wt(), yt.onFinish(function() {
        createUi(Ei.domElement), di("hide"), nn(), en();
      });
    });
  });
  var rn = 0, an = function() {
    if (rn++, null == Ge.mouseElement && (rn > 20 || Ge.mouseOld.x != Ge.mouse.x || Ge.mouseOld.y != Ge.mouse.y)) {
      rn = 0, Ge.mouseOld.copy(Ge.mouse), Li.setFromCamera(Ge.mouse, Ai);
      var t = Li.intersectObjects(Xi);
      t.length > 0 ? ($i = t[0].object.entity, document.body.style.cursor = "pointer") : ($i = void 0, document.body.style.cursor = "default"), Xi = [];
    }
  }, sn = 0, on = function(t) {
    sn += t;
    var e = new THREE.Vector3(.5 * yi + Math.sin(.003 * sn) * yi * .25, 0, .5 * yi + Math.cos(.003 * sn) * yi * .25);
    e.y = Hi(e.x, e.z) + 2, Ai.position.copy(e), Si.position.copy(e);
  }, cn = function() {
    var t = parseInt(zt.get("resolution"));
    "number" == typeof t && (t = Math.max(.1, Math.min(1, .1 * t)), Ei.setPixelRatio(t));
  }, ln = function() {
    if ("0" != zt.get("shadows")) {
      Ei.shadowMap.enabled = !0, Ei.shadowMap.type = THREE.PCFSoftShadowMap, Si.castShadow = !0, Si.shadow && delete Si.shadow, Si.shadow = new THREE.DirectionalLightShadow, Si.shadow.camera.left = -100, Si.shadow.camera.right = 100, Si.shadow.camera.top = 100, Si.shadow.camera.bottom = -100, Si.shadow.camera.near = .5, Si.shadow.camera.far = 3e3, Si.shadow.bias = -.001, Ei.shadowMap.renderReverseSided = !1;
      var t = 64;
      switch(parseInt(zt.get("shadows"))) {
        default:
        case 1:
          t = 128;
          break;
        case 2:
          t = 256;
          break;
        case 3:
          t = 512;
          break;
        case 3:
          t = 1024;
          break;
        case 4:
          t = 2048;
      }
      Si.shadow.mapSize.width = t, Si.shadow.mapSize.height = t, gi && (gi.material.uniforms.shadowSize.value = t, gi.material.uniforms.shadow.value = Si.shadow.map), Wi.foliage && (Wi.foliage.uniforms.shadowSize.value = t, Wi.foliage.uniforms.shadow.value = Si.shadow.map);
    } else {
      Ei.shadowMap.enabled = !1, Si.castShadow = !1, gi && (gi.material.uniforms.shadowSize.value = 0, gi.material.uniforms.shadow.value = void 0), Wi.foliage && (Wi.foliage.uniforms.shadowSize.value = 0, Wi.foliage.uniforms.shadow.value = void 0);
    }
  }, hn = {box:new THREE.BoxBufferGeometry(1, 1, 1), icebolt:new THREE.SphereBufferGeometry(.3, 4, 3), frostcall:new THREE.CylinderBufferGeometry(12, 12, .15, 20, 1), frostblizz:new THREE.SphereBufferGeometry(.3, 3, 2), iceblock:new THREE.SphereBufferGeometry(3, 4, 5), bow:new THREE.TorusBufferGeometry(1.3, .15, 3, 4, 2.5), slime:new THREE.SphereBufferGeometry(.9, 6, 3, 0, 2 * Math.PI, 0, 1.9)}, un = {};
  un.chest = {geo:hn.box, scale:[1, 1, 1]}, un.leg = {geo:hn.box, scale:[.4, .4, .4]}, un.hand = {geo:hn.box, scale:[.45, .4, .4]}, un.hitbox = {geo:hn.box, scale:[1.4, 2.2, 1.4]}, un.mage_staff = {geo:hn.box, scale:[.2, 1.8, .2]}, un.mage_shield = {geo:hn.box, scale:[.4, 2.4, 2.4]}, un.icebolt = {geo:hn.icebolt}, un.frostcall = {geo:hn.frostcall}, un.frostcallblizz = {geo:hn.frostblizz}, un.iceblock = {geo:hn.iceblock}, un.shaman_mace1 = {geo:hn.box, scale:[.6, 2, .6]}, un.shaman_mace2 = {geo:hn.box,
  scale:[1.8, .8, 2.7]}, un.shaman_robe = {geo:hn.box, scale:[.5, .8, .1]}, un.shaman_shield = {geo:hn.box, scale:[1, 1, .2]}, un.equilibrate = {geo:hn.box, scale:[.5, .5, .5]}, un.warrior_sword = {geo:hn.box, scale:[.9, 4.2, .5]}, un.warrior_shield = {geo:hn.box, scale:[.5, 3.5, 3.5]}, un.archer_bow = {geo:hn.bow}, un.archer_bow_end = {geo:hn.box, scale:[1, .6, .5]}, un.archer_ammo = {geo:hn.box, scale:[.27, .5, .27]}, un.archer_ammo2 = {geo:hn.box, scale:[1.2, .8, 1.2]}, un.archer_arrow = {geo:hn.box,
  scale:[.1, .1, .8]}, un.generic_sword = {geo:hn.box, scale:[.3, 1.3, .15]}, un.generic_backpack = {geo:hn.box, scale:[1.1, .8, .6]}, un.generic_vendorlist = {geo:hn.box, scale:[.4, 2, 2]}, un.slime = {geo:hn.slime, scale:[1, 1, 1]}, Wi.monster = new THREE.MeshLambertMaterial({color:8286051, flatShading:!0}), Wi.bone = new THREE.MeshLambertMaterial({color:14800547, flatShading:!0}), Wi.shaman = new THREE.MeshLambertMaterial({color:3687924, flatShading:!0}), Wi.warrior = new THREE.MeshLambertMaterial({color:15172191,
  flatShading:!0}), Wi.archer = new THREE.MeshLambertMaterial({color:10471258, flatShading:!0}), Wi.mage = new THREE.MeshLambertMaterial({color:6607340, flatShading:!0}), Wi.warden = new THREE.MeshLambertMaterial({color:14755623, flatShading:!0}), Wi.damage = new THREE.MeshLambertMaterial({color:13382451, emissive:4393996}), Wi.dead = new THREE.MeshBasicMaterial({color:2236962, flatShading:!0}), Wi.vendor = new THREE.MeshLambertMaterial({color:12467195, flatShading:!0}), Wi.leg = new THREE.MeshLambertMaterial({color:3451301,
  flatShading:!0}), Wi.generic_sword = new THREE.MeshLambertMaterial({color:16711680, flatShading:!0}), Wi.generic_wood = new THREE.MeshLambertMaterial({color:8937028, flatShading:!0}), Wi.generic_metal = new THREE.MeshStandardMaterial({color:14736861, flatShading:!0}), Wi.generic_white = new THREE.MeshLambertMaterial({color:16777215, flatShading:!0}), Wi.generic_ice = new THREE.MeshBasicMaterial({color:16777215}), Wi.mage_frost = new THREE.MeshBasicMaterial({color:13434879, transparent:!0, opacity:.6}),
  Wi.shaman_macetop = new THREE.MeshLambertMaterial({color:11643819, flatShading:!0}), Wi.archer_ammo = new THREE.MeshLambertMaterial({color:14795173, flatShading:!0}), Wi.archer_ammo2 = new THREE.MeshLambertMaterial({color:16312288, flatShading:!0}), Wi.gold = new THREE.MeshStandardMaterial({color:16440582, emissive:16740864, metalness:.5, roughness:.4}), Wi.metal = new THREE.MeshStandardMaterial({color:11582396, emissive:3158071, metalness:.55, roughness:.4}), Wi.silver = new THREE.MeshStandardMaterial({color:13891577,
  emissive:5994641, metalness:.58, roughness:.4}), Wi.obsidian = new THREE.MeshStandardMaterial({color:1535675, emissive:1185300, metalness:.8, roughness:.4});
  var dn = [], pn = function(t) {
    for (var e = dn.length; e--;) {
      var i = dn[e];
      i.tick(t), i.deleteMe && (i.remove(), dn.splice(e, 1));
    }
  }, fn = function(t) {
    if (!Wt && "false" != zt.get("skillefx")) {
      var e = new et(t);
      return dn.push(e), e;
    }
  };
  et.prototype.tick = function(t) {
    this.stepIntervalTimer -= t, this.stepIntervalTimer <= 0 ? (this.stepIntervalTimer = this.stepInterval, this.step()) : "glue" == this.headType && (this.at[this.steps - 1].copy(this.a.getWorldPosition()), this.bt[this.steps - 1].copy(this.b.getWorldPosition()), this.updateVertice(this.steps - 1)), "compress" == this.tailType && (this.uvStepSize = 1 / Math.min(this.steps, this.stepsDone - this.stepIntervalTimer / this.stepInterval)), this.uvShift = this.uvStepSize * (this.stepIntervalTimer / this.stepInterval);
    for (var e = 0; e < this.steps; e++) {
      this.updateUV(e);
    }
    this.timeout && (this.timer -= t, this.timer < 0 && (this.deleteMe = !0));
  }, et.prototype.step = function(t, e) {
    ++this.stepsDone;
    var i = t || this.a.getWorldPosition(), n = e || this.b.getWorldPosition();
    this.at.shift(), this.bt.shift(), this.at.push(i), this.bt.push(n);
    for (var r = 0; r < this.steps; r++) {
      this.updateVertice(r);
    }
  }, et.prototype.updateVertice = function(t) {
    this.geom.vertices[2 * t].copy(this.at[t]), this.geom.vertices[2 * t + 1].copy(this.bt[t]), this.geom.verticesNeedUpdate = !0, this.geom.normalsNeedUpdate = !0;
  }, et.prototype.updateUV = function(t) {
    if (t < this.steps - 1) {
      var e = (this.steps - t - 1) * this.uvStepSize - this.uvShift, i = (this.steps - t - 2) * this.uvStepSize - this.uvShift;
      this.geom.faceVertexUvs[0][2 * t][0].y = e, this.geom.faceVertexUvs[0][2 * t][1].y = i, this.geom.faceVertexUvs[0][2 * t][2].y = e, this.geom.faceVertexUvs[0][2 * t + 1][0].y = i, this.geom.faceVertexUvs[0][2 * t + 1][1].y = i, this.geom.faceVertexUvs[0][2 * t + 1][2].y = e, this.geom.uvsNeedUpdate = !0;
    }
  }, et.prototype.remove = function() {
    wi.remove(this.mesh), wi.remove(this.a), wi.remove(this.b), this.geom.dispose();
  }, h.prototype.timeSinceLastUpdate = 0, h.prototype.initPlayer = function(t, e) {
    this.id = t, this.geometry = new THREE.Object3D, wi.add(this.geometry), this.body = new THREE.Group, wi.add(this.body), this.geometry.add(this.body), this.hitbox = new THREE.Mesh(un.hitbox.geo, Wi.hitbox), this.hitbox.scale.set(un.hitbox.scale[0], un.hitbox.scale[1], un.hitbox.scale[2]), this.body.add(this.hitbox), this.hitbox.position.y = 1, this.hitbox.entity = this, this.visualPosition = new THREE.Vector3, e && (this.isPlayer = !0, Pi = this, this.outofpositioncounter = 0, wi.remove(Ai), Ai.position.x =
    0, Ai.position.z = 8, Ai.position.y = 1.5, this.camPivot = new THREE.Object3D, this.camPivot.rotation.order = "YXZ", wi.add(this.camPivot), this.camPivot.add(Ai), this.serverpos = new THREE.Vector3, this.ignoreInput = 0), this.visualRotationSpeed = 0, this.visualRotationLast = 0, this.visualRotation = 0, this.dmgSprites = new Array, "true" == zt.get("nameplates") && (this.namesprite = new ot("", {align:Bn.center, font:"500 18px 'Roboto'", fillStyle:"#FFFFFF", outlineSize:4, outlineStyle:"black",
    antialias:!1}), Mi.add(this.namesprite), this.namesprite.position.set(0, 30, 0), this.namesprite.scale.set(1, 1, 1), this.clansprite = new ot("", {align:Bn.center, font:"800 18px 'Roboto'", fillStyle:"#FFFFFF", outlineSize:4, outlineStyle:"black", antialias:!1}), Mi.add(this.clansprite), this.clansprite.position.set(-50, 30, 0), this.clansprite.scale.set(1, 1, 1)), this.levelsprite = new ot("5", {align:Bn.center, font:"500 18px 'Roboto'", fillStyle:"#FFFFFF", outlineSize:4, outlineStyle:"black",
    antialias:!1}), Mi.add(this.levelsprite), this.levelsprite.position.set(0, 0, 0), this.levelsprite.scale.set(1, 1, 1), this.hpbar = new Object, this.hpbar.bg = new THREE.Sprite(Wi.hpbarbg), Mi.add(this.hpbar.bg), this.hpbar.fg = new THREE.Sprite(Wi.hpbarfriendly), Mi.add(this.hpbar.fg), this.factionIcon = new THREE.Sprite(Wi.factionA), this.factionIcon.position.set(0, 0, 0), this.factionIcon.scale.set(1, 1, 1), Mi.add(this.factionIcon);
  }, h.prototype.playertick = function(t) {
    if (this == Pi) {
      if (this.ignoreInput -= t, this.ignoreInput < 0 && (this.ignoreInput = 0), this.stats && !this.stats.isDead() && !this.stats.incapacitated && this.ignoreInput <= 0 && (this.walkForward = 0, this.walkSideward = 0, It && (Ge.cameraY -= 2.3 * t), Nt && (Ge.cameraY += 2.3 * t), this.camPivot.rotation.x = Ge.cameraX, this.camPivot.rotation.y = Ge.cameraY, (Ge.rmb || It || Nt || "true" == zt.get("camlock")) && (this.geometry.rotation.y = Ge.cameraY), (Rt || Ge.lmb && Ge.rmb) && (this.walkForward =
      1), Dt && (this.walkForward = -1), kt && (this.walkSideward = 1), Pt && (this.walkSideward = -1), this.rotation = this.geometry.rotation.y, 0 != Rt && !Ge.lmb && !Ge.rmb && "true" != zt.get("camlock"))) {
        var e = L(Ge.cameraY, this.geometry.rotation.y) * t * 2;
        Math.abs(e) > .03 * t ? (e = e > 0 ? Math.max(e, .6 * t) : Math.min(e, -.6 * t), Ge.cameraY += e) : Ge.cameraY = this.geometry.rotation.y;
      }
      this.camPivot.scale.set(this.stats.scale, this.stats.scale, this.stats.scale), Ai.position.z = Ge.cameraZoom;
    } else {
      this.isPlayer = !1;
    }
  }, h.prototype.clienttick = function(t) {
    if (this.tick(t), !this.stats.isDead()) {
      if (this.isPlayer) {
        if (!this.stats.incapacitated) {
          var e = Math.abs(this.serverpos.x - this.position.x), i = Math.abs(this.serverpos.z - this.position.z);
          e > 10 || i > 10 ? (this.outofpositioncounter += t, (this.outofpositioncounter > 3 || e > 50 || i > 50) && (this.position.x = this.serverpos.x, this.position.z = this.serverpos.z, this.outofpositioncounter = 0)) : this.outofpositioncounter = 0;
        }
        this.geometry.position.x = this.position.x, this.geometry.position.z = this.position.z, this.geometry.position.y = Hi(this.geometry.position.x, this.geometry.position.z), this.visualPosition.copy(this.position), this.geometry.rotation.y = this.rotation;
      } else {
        this.next.position.x += this.velocity.x * t * this.stats.movespeed, this.next.position.z += this.velocity.z * t * this.stats.movespeed;
        var n = new THREE.Vector3;
        n.subVectors(this.position, this.visualPosition);
        var r = 0 != n.x || 0 != n.z ? n.length() : 0;
        if (r > .8 * this.stats.movespeed ? (this.visualPosition.copy(this.position), n.x = 0, n.z = 0) : r > .1 * this.stats.movespeed ? n.setLength(t * this.stats.movespeed) : (this.position != this.next.position && (this.position.x = this.next.position.x, this.position.z = this.next.position.z), n.multiplyScalar(10 * t)), this.visualPosition.add(n), this.geometry.position.x = this.visualPosition.x, this.geometry.position.z = this.visualPosition.z, this.geometry.position.y = Hi(this.geometry.position.x,
        this.geometry.position.z), this.visualRotationLast != this.rotation && (this.visualRotationLast - this.rotation > Math.PI ? this.visualRotationSpeed = 10 * (this.rotation + qt - this.visualRotation) * t : this.visualRotationLast - this.rotation < -Math.PI ? this.visualRotationSpeed = 10 * (this.rotation - qt - this.visualRotation) * t : this.visualRotationSpeed = 10 * (this.rotation - this.visualRotation) * t, this.visualRotationLast = this.rotation), Math.abs(this.rotation - this.visualRotation) >
        Math.abs(this.visualRotationSpeed)) {
          for (this.visualRotation += this.visualRotationSpeed; this.visualRotation < 0;) {
            this.visualRotation += qt, this.visualRotationLast = this.visualRotation;
          }
          for (; this.visualRotation > qt;) {
            this.visualRotation -= qt, this.visualRotationLast = this.visualRotation;
          }
        }
        this.geometry.rotation.y = this.visualRotation, Xi.push(this.hitbox), void 0 !== this.desiredTarget && "" != this.desiredTarget && Tt.entities.hasOwnProperty(this.desiredTarget) && (this.target = Tt.entities[this.desiredTarget], this.desiredTarget = "");
      }
    }
    if (this.tickAnimations(t), this != Pi) {
      this.timeSinceLastUpdate += t, this.timeSinceLastUpdate > 3 && Ct(this.id);
    } else {
      this.camPivot.position.copy(this.geometry.position), this.camPivot.updateMatrixWorld(), Ai.updateMatrixWorld();
      var a = new THREE.Vector3(30 * Math.round(this.geometry.position.x / 30), 30 * Math.round(this.geometry.position.y / 30), 30 * Math.round(this.geometry.position.z / 30));
      a.x == Si.target.position.x && a.y == Si.target.position.y && a.z == Si.target.position.z || (Si.position.set(a.x + 1500, a.y + 2500, a.z), Si.target.position.copy(a));
    }
    if (this.stats.scale != this.last.stats.scale) {
      this.last.stats.scale = this.stats.scale;
      var s = Math.max(1, 2 / this.stats.scale);
      this.hitbox.scale.set(s, s, s);
    }
    this.hpbar && this.tickHud(t);
  }, h.prototype.destroyBody = function() {
    this.namesprite && this.namesprite.finalCleanUp(), this.clansprite && this.clansprite.finalCleanUp(), this.levelsprite && this.levelsprite.finalCleanUp(), Mi.remove(this.clansprite), Mi.remove(this.namesprite), Mi.remove(this.hpbar.fg), Mi.remove(this.hpbar.bg), Mi.remove(this.levelsprite), Mi.remove(this.factionIcon), delete this.namesprite, delete this.clansprite, delete this.levelsprite, delete this.hpbar.fg, delete this.hpbar.bg, delete this.factionIcon, this.isPlayer && wi.remove(this.camPivot);
    for (var t = this.dmgSprites.length; t--;) {
      Mi.remove(this.dmgSprites[t]), this.dmgSprites[t].finalCleanUp(), this.dmgSprites.splice(t, 1);
    }
    it(this.geometry), wi.remove(this.geometry), delete this.geometry;
  }, h.prototype.takeDamage = function(t) {
    this.stats.invincible || (this.dmgShake = .2);
  }, h.prototype.takeHealing = function(t) {
  }, h.prototype.updateFaction = function(t, e) {
    if (this.faction = t, !e) {
      var i;
      switch(t) {
        case 0:
          i = Wi.factionA;
          break;
        case 1:
          i = Wi.factionB;
          break;
        case 2:
          return;
      }
      this.factionIcon.material = i;
    }
    if (Pi && (2 == this.faction ? this.hpbar.fg.material = Wi.hpbarmob : this.hpbar.fg.material = this.faction == Pi.faction ? Wi.hpbarfriendly : Wi.hpbarenemy, this.hpbar.fg.materialNeedsUpdate = !0, this == Pi)) {
      for (var n in ki) {
        ki.hasOwnProperty(n) && void 0 !== ki[n] && ki[n] != this && ki[n].updateFaction(ki[n].faction, !0);
      }
    }
  }, h.prototype.getInfoPanelString = function() {
    if (!Pi) {
      return "";
    }
    var t = this.faction == Pi.faction ? "Friendly" : "Hostile", e = this.faction == Pi.faction ? "ally" : "enemy", i = this.isAi ? "monster" : "player";
    return "<div class='targetinfo targettext " + e + "'><span class='targetname'>" + this.name + "</span> <span class='targetlevel'>" + this["class"].level + "</span></div> " + t + " " + i;
  };
  var mn = function() {
    for (e in Tt.entities) {
      Tt.entities[e] && Tt.entities[e] != Pi && (Tt.entities[e].canFightPlayer = re(Tt.entities[e], Pi).canFight());
    }
  }, gn = new THREE.Vector2(100, 10), vn = [], yn = [], xn = void 0, bn = void 0;
  h.prototype.tickHud = function(t) {
    if (Pi && this.geometry) {
      (h = new THREE.Vector3).copy(this.geometry.position), h.y += Math.max(.5, this.stats.scale + 1);
      var e = (.996 - (h = nt(h, Ai)).z) * (1 / (.996 - .8));
      this.worlddist = Pi && this != Pi ? re(Pi, this).distance() : 1;
      var i = 1;
      if (this.isInHud = h.z < 1 && Math.abs(h.x) < .5 * Tt.width && Math.abs(h.y) < .5 * Tt.height, this != Pi && !this.stats.isDead() && this.worlddist < 50 && h.z > .8 && this.isInHud) {
        var n = Pi && this == Pi.target || this == Pi, r = n ? 1 : Math.min(1.5, .4 + 12 * e);
        (n || "" != this.clan && this.clan == Pi.clan) && (h.z = 4), h.y += 8;
        var a = Math.round(h.y + 15 * r);
        this.levelsprite.position.set(h.x + (.5 * gn.x + .5 * this.levelsprite.canvas.textWidth + 2) * r, h.y, h.z + 3e-5);
        var s = gn.x * Math.max(0, Math.min(1, this.stats.currenthp / this.stats.maxhp));
        this.hpbar.bg.position.set(h.x, h.y, h.z + 1e-5), this.hpbar.fg.position.set(h.x + (.5 * s - .5 * gn.x) * r, h.y, h.z + 2e-5), this.factionIcon.position.set(h.x - 55 * r, h.y, h.z + 3e-5), this.hpbar.bg.scale.set((gn.x + 4) * r, (gn.y + 4) * r, 1), this.hpbar.fg.scale.set(s * r, gn.y * r, 1), this.levelsprite.scale.set(r, r, 1), this.factionIcon.scale.set(20 * r, 20 * r, 1), this.hpbar.fg.material = Pi && "" != this.clan && this.clan == Pi.clan ? Wi.hpbarclan : void 0 === Pi || this.faction ==
        Pi.faction ? n ? Wi.hpbarfriendly : Wi.hpbarfriendlyTransparent : n ? 2 == this.faction ? Wi.hpbarmob : this.canFightPlayer ? Wi.hpbarenemy : Wi.hpbarcantfight : 2 == this.faction ? Wi.hpbarmobTransparent : this.canFightPlayer ? Wi.hpbarenemyTransparent : Wi.hpbarcantfightTransparent, this.hpbar.bg.material = n || "" != this.clan && this.clan == Pi.clan ? Wi.hpbarbg : Wi.hpbarbgTransparent, i = n ? 1 : "" != this.clan && this.clan == Pi.clan ? 1 : .4, this.levelsprite.material.opacity = i,
        this.stats.isDead() || (this.faction != Pi.faction ? vn.push({entity:this, z:this.worlddist}) : yn.push({entity:this, z:this.worlddist})), this.hpbar.fg.visible = !0, this.hpbar.bg.visible = !0, this.levelsprite.visible = !0, this.factionIcon.visible = 2 != this.faction, this.namesprite && (this.namesprite.visible = !0, this.namesprite.position.set(Math.round(h.x + (this.clan ? .5 * this.clansprite.canvas.textWidth * r : 0)), a, h.z + 3e-5), this.namesprite.material.opacity = i, this.namesprite.scale.set(r,
        r, 1)), this.clansprite && ("" != this.clan ? (this.clansprite.visible = !0, this.clansprite.position.set(Math.round(h.x - (.5 * this.namesprite.canvas.textWidth + 5) * r), a, h.z + 3e-5), this.clansprite.material.opacity = i, this.clansprite.scale.set(r, r, 1)) : this.clansprite.visible = !1), !0;
      } else {
        this.hpbar.fg.visible = !1, this.hpbar.bg.visible = !1, this != Pi && (this.namesprite && (this.namesprite.visible = !1), this.clansprite && (this.clansprite.visible = !1)), this.levelsprite.visible = !1, this.factionIcon.visible = !1;
      }
      this == Pi && Z();
      for (var o = this.dmgSprites.length; o--;) {
        var c = this.dmgSprites[o];
        if (c.timer += t, c.timer > 1.5) {
          Mi.remove(c), c.finalCleanUp(), this.dmgSprites.splice(o, 1);
        } else {
          if (this.isInHud) {
            var l = Math.max(1, 2 - 3 * c.timer);
            c.scale.set(l, l, 1), c.origin.y += c.yvel * t, c.timer > .8 && (c.material.opacity -= 2 * t);
            var h = nt(c.origin, Ai);
            c.position.set(h.x + c.xoffset, h.y + 30, 6), c.isVisible = !0;
          } else {
            c.isVisible = !1;
          }
        }
      }
    }
  }, h.prototype.createCombatText = function(t, e, i) {
    if (!Pi || this.faction == Pi.faction || !i) {
      var n = new THREE.Vector3(this.geometry.position.x, this.geometry.position.y + this.stats.scale + 1.2, this.geometry.position.z), r = nt(n, Ai);
      if (r.z > .8 && r.z < 1 && Math.abs(r.x) < .5 * Tt.width && Math.abs(r.y) < .5 * Tt.height) {
        var a = this.faction == (Pi ? Pi.faction : 0) ? i ? "#59DD36" : "#FF0000" : "#FFFF00", s = new ot(t, {align:Bn.center, font:"500 24px 'Roboto'", fillStyle:a});
        Mi.add(s), s.origin = n, s.xoffset = (10 * Math.random() - 5) * this.dmgSprites.length, s.yvel = 3 + 10 * Math.min(e / this.stats.maxhp, .3), s.timer = 0, this.dmgSprites.push(s);
      }
    }
  };
  var _n, wn, Mn, En = function() {
    if (xn = void 0, bn = void 0, vn.sort(function(t, e) {
      return t.z - e.z;
    }), yn.sort(function(t, e) {
      return t.z - e.z;
    }), Pi && Pi.target) {
      for (var t = 0, e = vn.length; t < e; ++t) {
        Pi.target == vn[t].entity && (xn = vn[t + 1] ? vn[t + 1].entity : vn[0].entity);
      }
      for (var t = 0, e = yn.length; t < e; ++t) {
        Pi.target == yn[t].entity && (bn = yn[t + 1] ? yn[t + 1].entity : yn[0].entity);
      }
    }
    void 0 == xn && vn.length > 0 && (xn = vn[0].entity), void 0 == bn && yn.length > 0 && (bn = yn[0].entity);
  }, Tn = 0, Sn = void 0, An = void 0, Cn = void 0, Ln = ["Alpheos", "Balius", "Charon", "Deimos", "Ether", "Fates", "Garrosh", "Helios", "Iris"], Pn = !1, kn = void 0, Rn = void 0;
  $(document).ready(function() {
    Dn();
  });
  var Dn = function() {
    (wn = "localhost" == document.location.hostname ? io("https://localhost:8123", {secure:!0}) : io("https://hordes.io", {secure:!0})).on("h", function() {
      Ji = !0, "select" === Cn && wn.emit("auth", {id:zt.get("char"), rc:!0});
    }), wn.on("d", function(t) {
      Sn = t.address, An = t.id, In(Sn);
    }), wn.on("lm", function(t) {
      $("#modal-servermessage").modal("show"), $("#serverMessage").text(t.m), $("#serverMessage").fadeIn();
    }), wn.on("m", function(t) {
      if (t) {
        if (t.m) {
          for (var e in t.m) {
            t.m.hasOwnProperty(e) && (t.m[e].hasOwnProperty("dps") && $("#" + e + "dps").html(r(parseInt(t.m[e].dps), 1) + " dps"), t.m[e].hasOwnProperty("pc") && $("#" + e + "players").html(parseInt(t.m[e].pc) + " players"), t.m[e].hasOwnProperty("kh") && $("#" + e + "king").html("King: " + parseInt(t.m[e].kh) + "%"), t.m[e].hasOwnProperty("g") && $("#" + e + "gold").html(r(parseInt(t.m[e].g), 1)));
          }
        }
        if (t.l) {
          for (m in t.l) {
            void 0 !== t.l[m].c && (pi[m]["class"] = t.l[m].c), void 0 !== t.l[m].n && (pi[m].name = t.l[m].n), void 0 !== t.l[m].l && (pi[m].level = t.l[m].l), void 0 !== t.l[m].f && (pi[m].fame = t.l[m].f), void 0 !== t.l[m].h && (pi[m].horde = t.l[m].h), fi(parseInt(m) + 1, {"class":pi[m]["class"], name:pi[m].name, fame:pi[m].fame, lvl:pi[m].level, horde:pi[m].horde});
          }
        }
        if (void 0 !== t.s && "object" == typeof t.s) {
          void 0 !== t.s[An] && $("#channelname").html((Ln.length - 1 > An ? Ln[An] + (t.s[An].p ? " ( PVP )" : " ( PVE )") : "Channel") + " <span class='caret'>");
          var i = $("#serverselectionlist");
          i.empty();
          for (var n = 0; n < parseInt(t.s.length); ++n) {
            var a = $("<li/>").appendTo(i), s = $("<a/>").text(Ln[n] + (t.s[n].p ? " ( PVP )" : " ( PVE )")).appendTo(a).data("sr", n);
            n == An && s.css("font-weight", 800), s.on("click", function(t) {
              wn.emit("sr", parseInt($(this).data("sr")));
            });
          }
        }
      }
    }), wn.on("c", function(t) {
      t.m && t.i && Q({msg:t.m, src:t.i, name:t.n, r:t.r, c:t.c, f:t.f});
    }), wn.on("gm", function(t) {
      switch(t.t) {
        case "pk":
          Q({msg:"$" + t.f + t.a + " killed $" + (0 == t.f ? 1 : 0) + t.b + " and stole " + t.fa + " fame.", src:"playerkill"});
      }
    });
  }, In = function(t) {
    if (void 0 !== t) {
      void 0 != _n && (_n.disconnect(), delete _n), void 0 !== Rn && (clearInterval(Rn), Rn = void 0), void 0 !== kn && (clearInterval(kn), kn = void 0), (_n = io("https://" + t, {secure:!0})).on("handshake", function(t) {
        Mn = t.playerid, Pn = t.pvp, "select" == Cn ? _n.emit("requestSpawn", zt.get("char")) : "create" == Cn && _n.emit("requestSpawn", -1), $("#hordes-io_300x250").appendTo("#traderAd"), $("#loginfade").remove();
      });
      var e = [], i = 5, n = function(t) {
        var n = t.e;
        for (var r in n) {
          if (n.hasOwnProperty(r) && (ki.hasOwnProperty(r) && void 0 != ki[r] || (ki[r] = new h(0), ki[r].initPlayer(r, r == Mn), r == Mn && n[r].r && (Ge.cameraY = parseFloat(n[r].r), Ge.cameraX = -.5))), At(r, n[r]), void 0 === ki[r]["class"].type) {
            e.indexOf(r) < 0 && e.push(r + "");
          } else {
            var a = e.indexOf(r);
            a > -1 && e.splice(a, 1);
          }
        }
        if (++i >= 10 && e.length > 0 && (i = 0, _n.emit("ref", e), e = []), t.pr) {
          for (var r in t.pr) {
            t.pr.hasOwnProperty(r) && ki.hasOwnProperty(r) && At(r, t.pr[r]);
          }
        }
        if (t.i) {
          for (var s in t.i) {
            t.i.hasOwnProperty(s) && (void 0 !== t.i[s].r ? void 0 !== le[s] && le[s].destroy() : void 0 === le[s] && (t.i[s].i = s, le[s] = new f(t.i[s])));
          }
        }
      };
      _n.on("e", n), _n.on("c", function(t) {
        t.m && t.i && Q({msg:t.m, src:t.i, name:t.n, r:t.r, c:t.c, f:t.f});
      }), _n.on("spawn", function(t) {
        if (n(t.m), Pi && t.abl) {
          for (a in t.abl) {
            Pi["class"].skills[parseInt(a)].setLevel(t.abl[a]);
          }
        }
        var e = zt.get("name");
        e && _n.emit("namechange", e), Je.player.panel.hide(), $("#renderer").fadeIn(300, function() {
          di("fadeIn", 300), Je.target.panel.hide(), ui = !1, $("#inventory").show(), $("#characterpanel").show();
        }), ke();
      }), _n.on("del", function(t) {
        Ct(t);
      }), _n.on("disconnect", function() {
        Lt(), di("fadeOut", 500), wi.add(Ai);
      }), _n.on("lm", function(t) {
        var e;
        switch(t.r) {
          case "l":
            $("#modal-servermessage").modal("show"), e = "#serverMessage";
            break;
          case "c":
            e = "#createClanMsg";
            break;
          case "n":
            e = "#setNickMsg";
            break;
          case "ca":
            e = "#clanActionMsg";
        }
        $(e).text(t.m), $(e).fadeIn();
      }), _n.on("inv", function(t) {
        _e(t);
      }), _n.on("slt", function(t) {
        be(t);
      }), _n.on("cl", function(t) {
        fe(t);
      }), _n.on("ci", function(t) {
        $("#userinteract").show().centerMe(0, -150), $("#userinteractmsg").html("<b>" + t.i + "</b> has invited you to join the clan <b>" + t.t + "</b>");
      }), kn = setInterval(function() {
        if (!document.hidden && performance.now() - Yi < 1e3 && Pi) {
          var t = Pi.getDeltaMsg();
          !1 !== t && _n.emit("u", t);
        }
      }, 150);
      var r;
      Rn = setInterval(function() {
        document.hidden || (r = performance.now(), _n.emit("pi"));
      }, 1e3), _n.on("po", function(t) {
        Tn = (Tn + (performance.now() - r)) / 2;
      });
    }
  }, Nn = function(t) {
    void 0 != t && "string" == typeof t || (t = ""), zt.set("name", t);
  }, Un = function() {
    Nn($("#usernameInputField").val()), Cn = "create", wn.emit("auth", {name:zt.get("name"), "class":zt.get("class"), faction:zt.get("faction")});
  }, Fn = function() {
    Cn = "select", wn.emit("auth", {id:zt.get("char")});
  }, On = function(t) {
    _n.emit("cc", t);
  }, Bn = {center:new THREE.Vector2(0, 0), left:new THREE.Vector2(1, 0), topLeft:new THREE.Vector2(1, -1), topRight:new THREE.Vector2(-1, -1), right:new THREE.Vector2(-1, 0), bottomLeft:new THREE.Vector2(1, 1), bottomRight:new THREE.Vector2(-1, 1)}, zn = {};
  st.prototype.width = function() {
    return this.canvas.width;
  }, st.prototype.height = function() {
    return this.canvas.height;
  }, st.prototype.drawText = function(t, e) {
    return this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.font = e.font, this.textWidth = Math.max(1, Math.ceil(this.ctx.measureText(t).width)), this.textHeight = at(this.ctx.font), this.canvas.width = THREE.Math.ceilPowerOfTwo(this.textWidth), this.canvas.height = THREE.Math.ceilPowerOfTwo(this.textHeight), this.ctx.font = e.font, this.ctx.fillStyle = e.fillStyle, this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", e.shadow > 0 ? (this.ctx.shadowBlur = 1,
    this.ctx.shadowColor = "black", this.ctx.shadowOffsetX = 1.5, this.ctx.shadowOffsetY = 1.5) : (this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0), this.ctx.fillText(t, .5 * this.canvas.width, .5 * this.canvas.height), this.canvas;
  }, (ot.prototype = new THREE.Object3D).constructor = ot, ot.prototype.width = function() {
    return this.canvas.textWidth;
  }, ot.prototype.height = function() {
    return this.canvas.textHeight;
  }, ot.prototype.getText = function() {
    return this._text;
  }, ot.prototype.setText = function(t) {
    this._text !== t && (this._text = t, this.updateText());
  }, ot.prototype.getFont = function() {
    return this._font;
  }, ot.prototype.setFont = function(t) {
    this._font !== t && (this._font = t, this.updateText());
  }, ot.prototype.getFillStyle = function() {
    return this._fillStyle;
  }, ot.prototype.setFillStyle = function(t) {
    this._fillStyle !== t && (this._fillStyle = t, this.updateText());
  }, ot.prototype.updateText = function() {
    this.canvas.drawText(this._text, {font:this._font, fillStyle:this._fillStyle, shadow:this._shadow}), this.cleanUp(), this.texture = new THREE.Texture(this.canvas.canvas), this.texture.needsUpdate = !0, this.applyAntiAlias(), this.material ? this.material.map = this.texture : this.material = new THREE.SpriteMaterial({map:this.texture}), this.sprite || (this.sprite = new THREE.Sprite(this.material), this.add(this.sprite)), this.sprite.scale.set(this.canvas.width(), this.canvas.height(), 1);
  }, ot.prototype.cleanUp = function() {
    this.texture && this.texture.dispose();
  }, ot.prototype.finalCleanUp = function() {
    this.cleanUp(), this.material && this.material.dispose(), this.sprite && (this.remove(this.sprite), this.sprite = void 0);
  }, ot.prototype.applyAntiAlias = function() {
    !1 === this.antialias && (this.texture.magFilter = THREE.NearestFilter, this.texture.minFilter = THREE.LinearMipMapLinearFilter);
  };
}(window, document);

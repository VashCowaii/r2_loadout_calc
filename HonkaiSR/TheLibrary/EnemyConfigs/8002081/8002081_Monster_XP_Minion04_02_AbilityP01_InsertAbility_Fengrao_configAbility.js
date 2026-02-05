const configAbility = {
  "fileName": "8002081_Monster_XP_Minion04_02_AbilityP01_InsertAbility_Fengrao",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_EffectTrigger"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_EffectRound"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_Fengrao_SelfDamage"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_Fengrao_Trigger1"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_Fengrao_Trigger"
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_EffectRound"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_Fengrao_Trigger"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_Fengrao_Trigger1"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_EffectTrigger"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_Fengrao_SelfDamage"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "Enemy_XP_Minion04_02_Fengrao_BeHit"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Enemy_XP_Minion04_02_Fengrao_SelfDamage",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_XP_Minion04_02_Fengrao_Trigger1",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_XP_Minion04_02_Fengrao_Trigger",
      "stackData": [],
      "latentQueue": []
    }
  ]
}
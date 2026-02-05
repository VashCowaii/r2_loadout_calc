const configAbility = {
  "fileName": "8002040_Monster_XP_Minion04_PassiveAbilityInitiate",
  "skillTrigger": "PassiveSkillInitiate",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_BeHitSoundController"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Enemy_XP_Minion04_BeHitSoundController",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Hit"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}
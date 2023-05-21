<script lang="ts">
    import DisplayAnswer from '../../../components/DisplayAnswer.svelte';
    import Address from '../../../components/Address.svelte';
  
    let address = {
      recipientName: 'PRAFULLA HUNDE',
      streetAddress: 'Dr. Babasaheb Ambedkar Road',
      city: 'Pune',
      state: 'Maharashtra',
      postalCode: '411028',
      country: 'India'
    };
  </script>
  
  <DisplayAnswer answer={43} />
  
  <DisplayAnswer messageFormat="Your answer is " answer={24} />
  
  <Address {...address} />
  
  <br> <!-- Add a line break here -->
  
  {#if true}
    <div class="left-aligned">
      <label for="milk">
        <span>Do you like milk?</span>
        <input type="checkbox" id="milk" name="milkCheckBox" aria-labelledby="milk-label" />
      </label>
    </div>
  {/if}
  
  <style>
    .left-aligned {
      display: flex;
      align-items: center;
    }
  
    .left-aligned label {
      margin-right: 10px;
    }
  </style>
  